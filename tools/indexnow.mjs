#!/usr/bin/env node
// Ping IndexNow (Bing, and therefore ChatGPT search; also Yandex/Naver/Seznam)
// with every URL in the live sitemap. Run after each publish:
//   node tools/indexnow.mjs            # all sitemap URLs
//   node tools/indexnow.mjs /blog/x/   # just these paths
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const host = 'www.hey-remy.com';
const key = readdirSync(join(here, '..', 'public'))
  .find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
  ?.replace(/\.txt$/, '');
if (!key) throw new Error('no IndexNow key file in public/');

let urls = process.argv.slice(2).map((p) => `https://${host}${p}`);
if (!urls.length) {
  const xml = await (await fetch(`https://${host}/sitemap-0.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls }),
});
console.log(`IndexNow ${res.status} for ${urls.length} urls`);
if (!res.ok) console.log(await res.text());
