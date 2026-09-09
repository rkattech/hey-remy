# Handoff: the trust question (2026-09-09)

This is an ARGUMENT, not a rulebook. Read it, then think. The GTM process rules
(voice, checklist, D3, verification discipline) live in docs/gtm/ and matter when
something is about to be PUBLISHED — not while you are still thinking. Do not open
them yet. The founder's complaint about the last handoff was that it front-loaded
rules and produced a session that knew the constitution and missed the market.

## The question on the table

The founder asked: what trust posture makes Remy stand out MATERIALLY against Meta
Muse, Instinct, Grok Bot, ChatGPT and Gemini? Explicitly NOT limited to Remy's
current features — he is asking what the posture SHOULD be. Nothing is ruled yet.

## What happened before it (needed to make sense of the above)

Three products reached parity with Remy's old pitch in Aug-Sep 2026: Meta Muse
(Apple stack connectors, ~7s replies, free, Meta distribution), Grok Bot (work-shaped
agent team), Instinct (Cognition-backed, $350M, iMessage-native, credential vault,
does real end-to-end bookings well). assistantbenchmark.com is becoming the
scoreboard: Muse 9.1, Instinct 8.0, Grok 7.3, v0.2, 9 of 54 tested, updated 09-09.
Instinct scored a public 3/10 FAIL on permissions & privacy (full Gmail+Calendar+Drive
at setup); Grok 3/10 FAIL on third-party integrations; Muse 9/10 on privacy — which is
why policy language does not differentiate anyone.

Founder ruled the wedge on 2026-09-09: **the household operator** — a parent running a
home with school-age kids. Reasoning, claims, sentences and truth gates are written
down in docs/gtm/positioning.md. Read that; do not re-derive it.

The one uncontested column on the benchmark is PHONE CALLS. The columns that are
nearly all blank across the leaders are Proactive, Routines, Phone calls, Restraint,
Multiplayer, Memory — all time-shaped value the one-sitting benchmark cannot see.

## THE PRIMARY RESEARCH (the most valuable thing here — the founder's own field notes)

What parents he hands Remy to actually ask. Verbatim from him, 2026-09-09:

At sign-in, they all ask "is Remy going to have access to my emails?" Underneath it:
- "I get a lot of sensitive stuff (pay stubs, etc) and I don't want AI to have that"
- "I don't feel comfortable giving a new company access to my emails"
- "Can't I use Remy without connecting my emails"
- "Can I just check calendar and not check email"
- "Is there a way for it to only read some emails and not all"

While using it:
- "Which AI is this?"
- "Are you reading my emails behind my back?"
- "How do I know what you are reading and can I limit it?"
- "How do I know what you did?"
- "How do I know what you said you did, you actually did?"
- "Will I know when Remy does something, like after the fact, or will it ask me?"
- "Does it know my login info? Can I delete it if I don't want Remy to have it? Is that on the cloud?"
- "How secure is Remy?"

## Where the thinking got to (conclusions, not rulings)

1. The fear is not training or data-selling. It is ACCESS at the door and
   VERIFICATION during use. Every door question is a request for LESS — that is a
   product spec being handed over, not funnel friction to smooth past.
2. "How do I know what you said you did, you actually did?" is the sharpest and most
   uncontested question in the list. Every competitor ships an agent that
   self-reports. Remy's rebuild closes a loop on typed `outcome_evidence` and never on
   the word "done" (remy/docs/REMY_TARGET_ARCHITECTURE.md §8; the world statement's
   "the returned state is the only truth").
3. Organizing principle proposed: **every trust claim should be checkable with
   something the user already trusts** — Google's own consent screen, a filter in
   their own Gmail, the merchant's confirmation in their own inbox — not a dashboard
   we render. Uncopyable in spirit by assistants whose posture is "trust me".
4. The access ladder proposed, weakest first, each rung useful and reversible in one
   tap, with Remy asking to climb per task with a stated reason: (a) calendar +
   errands, no email at all; (b) HEADERS ONLY — Google's real `gmail.metadata` scope,
   no bodies ever, and Google's consent screen says so in Google's words; (c) pointed
   at, via a forward rule the user makes and controls in their own Gmail; (d) full
   access as a graduation. Feasibility of (b) and (c) is unverified — core session's
   call.
5. Three receipts during use: a reading record (what it opened and WHY), an action
   record (every outward act, undo where undo exists — the server records these, the
   app never calls /activity), and completions that carry the evidence itself.
6. Security answer for a small company is minimization: how little we hold.
7. Proposed posture order: LEAD "shows its work" (least access, tells you what it
   read, proves what it did) · SECOND you set the line and can take it back · THIRD
   incentives (subscription only, no ads, no affiliate — as WHY the first two are
   believable, not as the opener) · FOURTH no training/selling/real deletion, demoted.
8. An earlier proposal — leading on aligned incentives — was demoted once the field
   notes landed: it answers a question the parents were not asking. A wind-down
   covenant (on acquisition or shutdown, user data is deleted, not transferred as an
   asset) is still live and unruled; it costs real acquisition value, which is exactly
   why it would be credible.

## Open rulings the founder owes

- Is the access ladder a product commitment (rungs 1 and 2 especially)?
- Are the reading record and action record on the roadmap?
- Should the trust page use the parents' eight questions verbatim as its headings?
- Subscription-only / no-affiliate, bound in the terms? The wind-down covenant?

## Where to read deeper, in this order

1. docs/gtm/positioning.md (this repo) — the wedge, the claims, the truth gates.
2. remy/docs/work/2026-09-01-instinct-parity-audit.md — the honest capability
   frontier. Section 0 is one page and is the most useful thing in either repo.
3. remy/docs/REMY_TARGET_ARCHITECTURE.md §0 and §8 — loops, evidence-only closure,
   and the product metric: user-visible bubbles per completed errand (fewer is the
   pass — the one metric an attention business cannot write down).
4. remy/docs/work/2026-09-02-world-statement.md — how Remy actually behaves.

Only when a page is about to be written or published: docs/gtm/voice.md,
publishing-checklist.md, and the 2026-09-01 session opener for the standing rules.
Product and provider claims get verified against remy origin/master before printing —
that rule binds at print time, and a founder memo has been wrong twice.
