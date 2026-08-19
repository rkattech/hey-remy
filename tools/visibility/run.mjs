#!/usr/bin/env node
// AI-visibility panel: asks the same prompts to several answer engines (with web
// search on) and records who gets recommended. Our weekly scoreboard.
//
//   node tools/visibility/run.mjs            # run every engine that has a key
//   node tools/visibility/run.mjs --engines openai,gemini --only kids-schedules
//
// Keys (env): OPENAI_API_KEY, GEMINI_API_KEY, PERPLEXITY_API_KEY, ANTHROPIC_API_KEY.
// Engines without a key are skipped and listed as "no key" in the summary.
// Caveat stated in every summary: API answers with search are a proxy for the
// consumer apps, not identical to them.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v = 'true'] = a.replace(/^--/, '').split('=');
    return [k, v];
  }),
);

const prompts = JSON.parse(readFileSync(join(here, 'prompts.json'), 'utf8'));
const brands = JSON.parse(readFileSync(join(here, 'brands.json'), 'utf8'));
const date = args.date ?? new Date().toISOString().slice(0, 10);
const outDir = join(here, 'runs', date);
mkdirSync(outDir, { recursive: true });

const ENGINES = {
  openai: {
    key: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL ?? 'gpt-5',
    async ask(prompt) {
      const r = await post('https://api.openai.com/v1/responses', {
        headers: { Authorization: `Bearer ${this.key}` },
        body: { model: this.model, tools: [{ type: 'web_search' }], input: prompt },
      });
      const text = [];
      const sources = new Set();
      for (const item of r.output ?? []) {
        if (item.type !== 'message') continue;
        for (const c of item.content ?? []) {
          if (c.type === 'output_text') {
            text.push(c.text);
            for (const a of c.annotations ?? []) if (a.url) sources.add(a.url);
          }
        }
      }
      return { text: text.join('\n'), sources: [...sources] };
    },
  },
  gemini: {
    key: process.env.GEMINI_API_KEY,
    model: process.env.GEMINI_MODEL ?? 'gemini-2.5-flash',
    async ask(prompt) {
      const r = await post(
        `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.key}`,
        { body: { contents: [{ parts: [{ text: prompt }] }], tools: [{ google_search: {} }] } },
      );
      const cand = r.candidates?.[0];
      const text = (cand?.content?.parts ?? []).map((p) => p.text ?? '').join('');
      const sources = (cand?.groundingMetadata?.groundingChunks ?? [])
        .map((c) => c.web?.uri)
        .filter(Boolean);
      return { text, sources: [...new Set(sources)] };
    },
  },
  perplexity: {
    key: process.env.PERPLEXITY_API_KEY,
    model: process.env.PERPLEXITY_MODEL ?? 'sonar',
    async ask(prompt) {
      const r = await post('https://api.perplexity.ai/chat/completions', {
        headers: { Authorization: `Bearer ${this.key}` },
        body: { model: this.model, messages: [{ role: 'user', content: prompt }] },
      });
      return {
        text: r.choices?.[0]?.message?.content ?? '',
        sources: r.citations ?? r.search_results?.map((s) => s.url) ?? [],
      };
    },
  },
  anthropic: {
    key: process.env.ANTHROPIC_API_KEY,
    model: process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-5',
    async ask(prompt) {
      const r = await post('https://api.anthropic.com/v1/messages', {
        headers: { 'x-api-key': this.key, 'anthropic-version': '2023-06-01' },
        body: {
          model: this.model,
          max_tokens: 2000,
          tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: 5 }],
          messages: [{ role: 'user', content: prompt }],
        },
      });
      const text = [];
      const sources = new Set();
      for (const b of r.content ?? []) {
        if (b.type === 'text') {
          text.push(b.text);
          for (const c of b.citations ?? []) if (c.url) sources.add(c.url);
        }
        if (b.type === 'web_search_tool_result')
          for (const x of b.content ?? []) if (x.url) sources.add(x.url);
      }
      return { text: text.join(''), sources: [...sources] };
    },
  },
};

async function post(url, { headers = {}, body }) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(Number(process.env.VISIBILITY_TIMEOUT_MS ?? 90_000)),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${res.status} ${JSON.stringify(json).slice(0, 300)}`);
  return json;
}

const wordHit = (text, needle) =>
  new RegExp(`(^|[^A-Za-z])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^A-Za-z]|$)`, 'i').test(
    text,
  );

function score(text, sources, prompt = '') {
  const hay = `${text}\n${sources.join('\n')}`.toLowerCase();
  const asked = prompt.toLowerCase();
  const remyNamed = wordHit(text, 'Remy');
  // A signal only counts if the prompt itself didn't hand it to the model.
  const signals = brands.remy.filter((n) => !asked.includes(n.toLowerCase()));
  const remyOurs = remyNamed && signals.some((n) => hay.includes(n.toLowerCase()));
  const remyOther =
    remyNamed && !remyOurs && /kitchen|chef|recipe|cook|martin|ratatouille|hockey labs|memory partner/i.test(text);
  const mentioned = Object.entries(brands.competitors)
    .filter(([, needles]) => needles.some((n) => wordHit(text, n)))
    .map(([name]) => name);
  const cites = sources.some((u) => /hey-remy\.com/i.test(u));
  return { remyOurs, remyOther, remyAmbiguous: remyNamed && !remyOurs && !remyOther, cites, mentioned };
}

const wanted = (args.engines ? args.engines.split(',') : Object.keys(ENGINES)).filter(
  (e) => ENGINES[e],
);
const only = args.only ? new Set(args.only.split(',')) : null;
const active = args.rescore ? [] : wanted.filter((e) => ENGINES[e].key);
const skipped = args.rescore ? [] : wanted.filter((e) => !ENGINES[e].key);

const results = [];
const jobs = [];
for (const p of prompts) {
  if (only && !only.has(p.id)) continue;
  for (const engine of active) jobs.push({ p, engine });
}
const CONCURRENCY = Number(process.env.VISIBILITY_CONCURRENCY ?? 4);
let next = 0;
async function worker() {
  while (next < jobs.length) {
    const { p, engine } = jobs[next++];
    const row = { date, engine, model: ENGINES[engine].model, id: p.id, door: p.door, prompt: p.prompt };
    try {
      const { text, sources } = await ENGINES[engine].ask(p.prompt);
      Object.assign(row, { text, sources, ...score(text, sources, p.prompt), error: null });
    } catch (err) {
      Object.assign(row, { text: '', sources: [], error: String(err.message ?? err) });
    }
    results.push(row);
    process.stderr.write(
      `${engine.padEnd(10)} ${p.id.padEnd(28)} ${row.error ? 'ERROR ' + row.error.slice(0, 80) : row.remyOurs ? 'REMY ✓' : '-'}\n`,
    );
  }
}
if (args.rescore) {
  for (const r of JSON.parse(readFileSync(join(outDir, 'results.json'), 'utf8'))) {
    results.push({ ...r, ...(r.error ? {} : score(r.text, r.sources, r.prompt)) });
  }
} else {
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
}
results.sort((a, b) => prompts.findIndex((p) => p.id === a.id) - prompts.findIndex((p) => p.id === b.id));

writeFileSync(join(outDir, 'results.json'), JSON.stringify(results, null, 2));

const csv = [
  'date,engine,model,id,door,remy_ours,remy_other,remy_ambiguous,cites_site,competitors,error',
  ...results.map((r) =>
    [
      r.date, r.engine, r.model, r.id, r.door,
      r.remyOurs ? 1 : 0, r.remyOther ? 1 : 0, r.remyAmbiguous ? 1 : 0, r.cites ? 1 : 0,
      `"${(r.mentioned ?? []).join('|')}"`, `"${(r.error ?? '').replace(/"/g, "'")}"`,
    ].join(','),
  ),
].join('\n');
writeFileSync(join(outDir, 'results.csv'), csv);

const ok = results.filter((r) => !r.error);
const byEngine = {};
for (const r of ok) {
  const e = (byEngine[r.engine] ??= { n: 0, remy: 0, cites: 0 });
  e.n++; if (r.remyOurs) e.remy++; if (r.cites) e.cites++;
}
const sov = {};
for (const r of ok) for (const m of r.mentioned) sov[m] = (sov[m] ?? 0) + 1;
if (ok.some((r) => r.remyOurs)) sov['Remy (ours)'] = ok.filter((r) => r.remyOurs).length;
const sovRows = Object.entries(sov).sort((a, b) => b[1] - a[1]);

const lines = [
  `# AI visibility panel - ${date}`,
  '',
  `Prompts: ${only ? only.size : prompts.length}. Engines run: ${(args.rescore ? [...new Set(results.map((r) => r.engine))] : active).join(', ') || 'none'}.` +
    (skipped.length ? ` Skipped (no key): ${skipped.join(', ')}.` : ''),
  '',
  'Caveat: these are API answers with web search switched on. They are a repeatable proxy for',
  'the consumer ChatGPT / Gemini / Perplexity / Claude apps, not identical to them.',
  '',
  '## Remy appearances',
  '',
  ...Object.entries(byEngine).map(
    ([e, v]) => `- ${e}: Remy recommended in ${v.remy}/${v.n} answers; hey-remy.com cited in ${v.cites}/${v.n}`,
  ),
  '',
  '## Share of voice (answers mentioning each product, all engines)',
  '',
  ...sovRows.map(([k, v]) => `- ${k}: ${v}`),
  '',
  '## Per prompt',
  '',
  ...prompts
    .filter((p) => !only || only.has(p.id))
    .map((p) => {
      const rows = results.filter((r) => r.id === p.id);
      const cells = rows.map((r) =>
        r.error ? `${r.engine}: error` : `${r.engine}: ${r.remyOurs ? 'REMY' : '-'} [${r.mentioned.slice(0, 4).join(', ')}]`,
      );
      return `- **${p.id}** (${p.door}) - ${cells.join(' · ')}`;
    }),
  '',
  ...(results.some((r) => r.error)
    ? ['## Errors', '', ...results.filter((r) => r.error).map((r) => `- ${r.engine} ${r.id}: ${r.error}`)]
    : []),
];
writeFileSync(join(outDir, 'summary.md'), lines.join('\n') + '\n');
console.log(lines.slice(0, 18).join('\n'));
console.log(`\nWrote ${outDir}/{results.json,results.csv,summary.md}`);
