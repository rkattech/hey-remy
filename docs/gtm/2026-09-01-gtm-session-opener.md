# GTM session opener — you are inheriting the go-to-market lane (2026-09-01)

You are the GTM/content session for Remy. The founder (Rohit, non-technical,
brutal-honesty standard, reads every page before publish) asked the previous
session to document everything so you can replace it. This file is that handoff.
Read it fully, then read docs/gtm/plan.md, voice.md, content-queue.md,
publishing-checklist.md, reddit-protocol.md — all in this folder. Those five are
the living state; this opener is the context that explains them.

## 1. The mission

Make Remy show up in AI answers (ChatGPT/Gemini/Perplexity/Claude) and organic
search. Mechanism (the Cal.com playbook, founder-chosen): put the same
one-sentence answer everywhere models read from — our site, the App Store (not
live yet), directories, Reddit, press. Blog posts are answer-shaped pages to the
exact questions people type into chatbots.

The sentence (always the first mention, founder rule D3): "Remy, the AI
assistant for your life, not your job" + domain written out (hey-remy.com).

## 2. Where things run

- Site repo: ~/Projects/hey-remy (Astro 6 + Tailwind, Cloudflare Pages,
  github rkattech/hey-remy, deploy = push to main, ~60-90s).
- Branch previews: push branch X → https://X.hey-remy.pages.dev (noindex).
  Used for every founder read before publish.
- After every publish to main: `node tools/indexnow.mjs` (pings Bing = ChatGPT
  search). Google reads the sitemap (Search Console + Bing Webmaster both set
  up by founder).
- Product repo: ~/Projects/remy. NEVER edit it from this lane. READ it
  (origin/master) to verify every product/provider claim before printing.
- Visibility tracker: tools/visibility/run.mjs — 25 prompts through model APIs
  with web search, weekly scoreboard. BROKEN AWAITING KEY: GEMINI_API_KEY in
  remy/.env is now empty (stack change). Needs any one working key
  (OPENAI_API_KEY / GEMINI_API_KEY / PERPLEXITY_API_KEY / ANTHROPIC_API_KEY).
  Baseline 2026-08-19: Remy 0/25. Incumbents per prompt in runs/2026-08-19/.

## 3. What is live (all founder-read and approved)

hey-remy.com: homepage (do NOT change its <title> — Google brand verification),
/why (founder's letter), /what-is-remy, /faq, /privacy, /tos, /security,
/subprocessors, /ai-model-providers, /blog with 11 posts:
remy-vs-ohai, remy-vs-motion (covers Reclaim), remy-vs-gemini, remy-vs-chatgpt,
best-ai-for-school-emails, ai-assistant-that-makes-phone-calls,
overwhelmed-life-admin-ai, maple-alternatives,
ai-that-reads-my-email-and-tells-me-what-matters, the-fired-assistant-test.
Foundation: permissive robots.txt (Cloudflare managed block switched OFF by
founder 2026-08-19), sitemap, llms.txt, 404, JSON-LD everywhere, RSS, IndexNow.

## 4. The decisions ledger (chronological, all founder-ruled)

- 2026-08-19 D1-D7: allow all crawlers; founder byline + he reads every page;
  D3 first-mention rule; social/Reddit accounts are HIS (Claude preps, he
  posts); NO scraping PTA emails → 10 warm parent groups instead; no paid
  tools; publish now, swap CTA when App Store lands.
- Brand collision is real: "Remy" on the App Store = kitchen/chef/chat apps,
  AND a "Remy" memory app (Hockey Labs) wins our own brand query in AI answers.
  Hence D3 always.
- 2026-08-20 Pangram verdict: my writing flagged AI. Word-lint is the shallow
  half; STRUCTURE is the tell. Research (in plan.md context): detectors are
  trained classifiers; only real distribution changes work — founder's tokens
  in the draft, stance not hedging, uneven rhythm. Humanizer tools = never.
- 2026-08-22 THE PIVOT: ZDR-provider ban is dead (evals showed old models too
  weak). Gemini 3.7 Flash ruled onto the browser lane (enterprise, no
  training); OpenAI org exists (sharing/logging disabled); GPT-TERRA foreground
  debate open. New positioning: trust = BEHAVIOR + VERIFIABLE TRANSPARENCY,
  not vendor abstinence. Same day: sitewide truth-patch replacing "only ZDR
  providers" with: "no training at any provider (contractual); most lanes ZDR;
  per-lane arrangements published, pending requests included."
- Instinct (viral competitor, Aug 2026, Claire Vo thread): capability parity
  with Remy, privacy collapse — kept plaintext emails after disconnect, no
  deletion, one-shot export exfiltration. It is the market's proof that
  privacy BEHAVIOR decides survival. Reference the pattern; never dunk by name.
- 2026-08-28: Google GRANTED the abuse-monitoring prompt-logging exception
  (GCP 1086395996858) — providers page updated same day, deliberately noting
  it had printed "pending" until then. That is the receipts posture working.
- Voice, settled over three failed rounds (see §5).

## 5. THE VOICE (the hardest-won thing in this lane — do not relearn it)

The founder rejected three drafts as "AI slop" before writing three paragraphs
himself. Those paragraphs open /blog/the-fired-assistant-test/ — the
founder-approved exemplar. The binding rules are in docs/gtm/voice.md. Core:
sequential reasoning; questions answered by honest enumeration; implications
played forward to concrete detail; payoffs are DISTINCTIONS never punchlines
(my slop signature was ~5 crafted one-liners per 800 words — allowed: ~1);
plain connectives (Yet/Ultimately/It turns out/So); bold-lead skeleton (the
/why letter device: bolded topic sentences, 2-4 plain sentences under each,
skimmer gets the whole argument from the bolds); ~900-word ceiling.
Process: founder voice-memo or written paragraphs FIRST (his tokens are the
tissue; NEVER invent anecdotes under his byline) → claims verified against
remy origin/master → structural de-AI lint (publishing-checklist.md v2) →
branch preview → he reads → publish. He spot-checks in Pangram (few credits).

## 6. Truth discipline (this lane's spine)

Every claim on the site is the company's public word. Rules:
- Verify product/provider claims against remy origin/master BEFORE printing
  (grep the code; the previous session caught the founder's own memo being
  wrong twice — "we don't keep email bodies" [a 2,048-char encrypted excerpt
  IS kept: source-index/body-excerpt-cache.ts] and "GLM foreground" [DeepSeek
  V4 Pro 0813 primary since 08-21]).
- Print pending things as pending. Never round up.
- HELD OPEN (do not print as done): OpenAI ZDR/Modified-Abuse-Monitoring
  application (founder's to file; his org retention shows "None" = standard
  abuse retention, NOT ZDR); store:false verification if/when a direct OpenAI
  runtime path lands; the deletion-verification bundle (backups, Langfuse
  full-payload pre-launch logging, vendor retention) — required before any
  detailed "here's proof of deletion" claim; "all indexed data is encrypted"
  (only excerpt+tokens are app-layer encrypted; rest is DB-level + RLS).
- Em dashes are never flagged or "fixed" (founder-ruled, twice).
- No keywords/regex over user text in any product suggestion (hard rule).

## 7. What is left (priority order as of 2026-09-01)

1. /why rewrite — remove the premise implying "we won't use model companies";
   keep the conflict-of-interest observation, conclusion becomes structure +
   receipts. Draft in the exemplar voice from his 08-22 narration (in chat
   history; the substance survives in the-fired-assistant-test post). He reads.
2. Rebuild 3 parked privacy drafts (branch gtm/batch-3-privacy: ZDR explainer,
   incidents record 2023-2026 [all quotes verified, sources listed in-post],
   no-training map) — they carry the DEAD "none are OpenAI/Google/Anthropic"
   claim; rebuild on responsible-vs-invasive + exemplar voice, then founder read.
3. Content queue (content-queue.md): next best = remy-vs-skylight, remy-vs-cozi,
   ai-assistant-for-adhd-life-admin, questions-to-ask-any-ai-app, plus the
   incumbent-holes the tracker found (Genspark owns phone-call prompts;
   RenewalKit renewals; FillApp school forms).
4. Instinct-tests post (disconnect/deletion/export/straight-answer) — GATED on
   core session verifying Remy's actual behavior. Time-decaying but still warm.
5. Directory submissions copy pack (directories.md has the list); big push +
   press the day the App Store page is live. Product Hunt page early.
6. Founder still owes: social accounts (X @heyremy or @heyremyapp — heyremy
   taken on YouTube/GitHub; ~45-min checklist in chat history), OpenAI ZDR
   form, a tracker model key, weekly-ish 2-min voice memos.
7. Reddit: founder's 5-year account active in the 12 subs, no Remy mentions
   yet (protocol: reddit-protocol.md). Weekly digest of threads + drafted
   comments was promised but never started — start it.
8. Tracker weekly once a key exists; add new prompts when a post targets a
   question not yet in prompts.json.

## 8. Traps the previous session hit (so you don't)

- Cloudflare's managed robots.txt was silently blocking AI crawlers; founder
  switched it off in the dashboard — the file public/robots.txt only wins
  while that stays off.
- Every unknown URL used to return the homepage (no 404) — fixed; keep it.
- The tracker's brand detection must exclude prompt-echo (a prompt containing
  "hey-remy" made Gemini's answer count as a win; scorer now requires
  independent signals) and must catch the OTHER Remy (Hockey Labs).
- Pangram: quote-dense sections score human; your connective tissue is the tell.
- The founder gives approvals like "approved" with no referent — anchor it
  ("publishing X, yes?") when ambiguous; his screenshots often carry the real
  news (the Gemini exception arrived as a screenshot).
- Memory store: anti-bloat contract; GTM keeps ONE pointer memory
  (project_gtm_pointer.md). State lives in these repo docs, never in memory.
- CASA/TAC, app builds, deploys of the product: NOT this lane. Redirect.

## 9. Definition of done (so progress is measurable)

Week-6 target (from ~08-19): 25+ pages, 10+ directories, Remy in ≥1 engine for
≥2/25 prompts. Week-12 (assumes App Store live): ≥5 third-party mentions, ≥6/25
prompts, GSC impressions rising. The founder judges by the tracker summary and
Search Console/Bing "AI Performance" screenshots he pulls himself.
