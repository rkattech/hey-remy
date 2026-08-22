# Remy go-to-market: plan of record (opened 2026-08-19)

Owner: Claude (GTM lane), founder rules. Founder decisions on 2026-08-19:
D1 allow all crawlers on hey-remy.com · D2 founder byline, founder reads every page
before publish · D3 first mention is always "Remy, the AI assistant for your life,
not your job" + domain written out · D4 social/Reddit accounts are the founder's,
Claude preps, founder posts · D5 no scraping; 10 warm parent groups instead ·
D6 no paid tools yet, own tracker · D7 publish now, swap CTA when App Store is live.

## The mechanism (why this plan is shaped this way)

AI answers = model memory (training: Reddit, Common Crawl, press, docs) + live
search (Bing/Google → own site, App Store, roundups, Reddit). Cal.com won by putting
the same one-sentence answer in every place models read from. So: one sentence,
answer-shaped, everywhere.

The sentence: "Remy is the AI assistant for your life, not your job: it reads your
Gmail and calendar, catches what you'd miss in school and life-admin emails, makes
phone calls, and does the admin with your press-and-hold approval. Not a work tool."

## Workstreams, in priority order

P0 Foundation LIVE 2026-08-19 (merged to main, IndexNow pinged): crawlers allowed (robots.txt;
   Cloudflare managed robots.txt switched off by founder 2026-08-19), sitemap, llms.txt, 404, JSON-LD
   (SoftwareApplication, Organization, FAQPage, Article), /what-is-remy, /faq,
   blog scaffold + RSS, visibility tracker (tools/visibility).
P1 The library: ~30 answer pages over ~10 weeks, 2-3/week. Queue in content-queue.md.
P2 Third-party surfaces: directories (directories.md), listicle insertion, Wikidata,
   press at App Store launch.
P3 Reddit: founder's account, 4-6 weeks of real answers first. reddit-protocol.md.
P4 Social: 20-second screen recordings of one real Remy moment; founder X/LinkedIn.
P5 Warm parent groups (10), not scraping.
P6 Bigger swings: 40-scenario benchmark post; school-newsletter free tool; YouTube
   week-long test; Show HN + Product Hunt on App Store day; podcast guesting.

## Definition of done (scoreboard = tools/visibility, weekly)

Week 1: crawlers open, sitemap + schema live, 8 pages indexed in Search Console,
        tracker run #1 = baseline.
Week 6: 25+ pages live; 10+ directory listings; Remy in ≥1 engine for ≥2/25 prompts.
Week 12 (assumes App Store live): ≥5 third-party mentions; Remy in ≥1 engine for
        ≥6/25 prompts; Search Console impressions rising week over week.

## Open facts

- "Remy" is a lost brand query (kitchen/chef/call apps). Every page carries D3.
- Handles: heyremy appears taken on GitHub/YouTube (200); TikTok/Instagram/Reddit
  inconclusive from a script. Founder picks the handle by hand.
- Homepage <title> stays "Remy" on purpose (Google brand verification, commit
  59dc891). Do not change for SEO.
- Tracker keys present: Gemini only. OpenAI / Perplexity / Anthropic keys would add
  the other three engines (~$5-10 per weekly run). Founder's call.

## Repositioning (opened 2026-08-22, after the stack change + Instinct)

Stack truth (verified from remy origin/master 2026-08-22): foreground DeepSeek
V4 Pro 0813 + GLM sibling; browser ruled to gemini-3.7-flash-med (enterprise,
human-review exception FILED Aug 2026, pending), wiring in flight; no direct
OpenAI runtime (Retell phone lane only + eval org); GPT-TERRA foreground debate open.

- DONE 2026-08-22: sitewide truth-patch (this commit) — canonical promise is now
  "no training at any provider (contractual); most lanes ZDR; per-lane
  arrangements published, pending requests included."
- HELD OPEN for founder: OpenAI ZDR / Modified Abuse Monitoring arrangement
  application. Do NOT print as done. When granted → update ai-model-providers.
- HELD OPEN: verify store:false on any future direct OpenAI call path (no such
  path exists on master today).
- Voice memo #1 topic (founder-picked): RESPONSIBLE vs INVASIVE data use —
  metadata+snippet indexing, no bodies/attachments by default, the
  assistant-who-gets-fired frame. Memo → article in 2-3 voices → dial ruling.
- Parked drafts (gtm/batch-3-privacy) carry the old "none are OpenAI/Google/
  Anthropic" claim — rebuild on the new story before any publish.
- Instinct moment: four tests (disconnect/deletion/export/straight-answer);
  Remy's answers need core-session verification before print (deletion bundle
  still owed).
