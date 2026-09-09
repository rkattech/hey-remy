# Positioning: the household operator (founder-ruled 2026-09-09)

Supersedes the "life, not work" framing as the LEAD. That sentence stays as rule D3 —
it is still how models and directories should hear us — but it no longer describes what
makes Remy different, because it no longer does.

## 1. Why the old answer died

Three products shipped between Aug and Sep 2026 with, from a user's seat, our value
proposition:

- **Meta Muse** (launched week of 2026-09-01). Connects Apple Calendar, Contacts,
  Reminders, Health, plus Gmail, OpenTable, Instagram, Peloton. Browser errands, goals,
  spend tracking. ~7-second replies. Free, and Meta's distribution.
- **Grok Bot** (xAI, Aug 2026). A team of named always-on agents that sign into your
  tools and come back finished. Work-shaped: Chief of Staff, Inbox Manager, Sales
  Outbound.
- **Instinct** (Cognition-backed, $350M raised). iMessage-native personal assistant.
  Credential vault, travel booking end to end, school-portal report cards, memory.

Mapped against the founder's five bullets, as of 2026-09-09:

| Old bullet | Status |
|---|---|
| Personal life, not work; remembers you | Claimed by Muse and Instinct |
| End-to-end tasks; saves the login; comes back done | Claimed by all three; Instinct demonstrably good at it |
| Connect email, calendar, reminders, contacts | Muse connects the Apple stack; that is what went viral |
| No training, no selling, real deletion | Meta says the words at Meta scale; the words are now cheap |
| **Calls businesses on the phone** | **Still uncontested** |

An honest read of our own Instinct parity audit (remy `docs/work/2026-09-01-instinct-parity-audit.md`,
report-only, master `7c90417f`): we have zero live browser completions in the founder's
hands and one dialed call row. We do not currently win the one-shot errand demo, and any
page implying we do will be tested and will fail in public.

## 2. The opening they all left

`assistantbenchmark.com` (v0.2, 15 tasks, 9 of 54 assistants tested, updated 2026-09-09)
is becoming the scoreboard this market gets judged on. Overall: Muse 9.1, Instinct 8.0,
Grok Bot 7.3. Where they score, they score high — online tasks, purchasing, email,
travel, third-party integrations.

The columns that are nearly all dashes across the three leaders:

**Proactive · Routines · Phone calls · Restraint · Multiplayer/groups · Memory**

Every one is time-shaped: value that only appears over weeks. All three are optimized for
the impressive single errand, because that is what spreads on X and what a one-sitting
benchmark can measure. Muse's 7-second reply time is a product decision that says exactly
what they are optimizing for.

Two scores worth keeping in front of us, both public:
- **Instinct: 3/10, Fail, permissions & privacy** — "setup offered Gmail, Calendar and
  Drive as full-…". Consistent with what we already recorded about its disconnect,
  deletion and export behavior.
- **Grok Bot: 3/10, Fail, third-party integrations.**

The asymmetry is not "we do it more privately." It is: **they run errands; nobody holds
anything.**

## 3. The wedge

**The household operator: a parent running a home with school-age kids, and often an
aging parent as well.** Not "life admin" generally.

Five reasons this segment and not another:

1. **The work recurs and is unglamorous.** School portals, forms, registration windows,
   refills, camps, renewals, a parent's appointments. Nobody demos it, because it is only
   impressive the fourth time. That is precisely why it is defensible against products
   built for the viral clip.
2. **A large share of it only happens by phone.** School office, pediatrician, insurer,
   contractor, DMV. Blank column for all three competitors; we have a call lane.
3. **It is multi-person by nature.** Spouse, two kids, a parent, each with providers and
   dates. All three competitors are single-user assistants with a single memory.
4. **It is the one segment where who holds the data decides the purchase.** A parent
   handing over a school-portal login and a child's report card is not handing it to Meta
   or to xAI. Privacy is not the lead pitch; it is the tiebreaker that closes this
   segment and no other.
5. **The math works at our target.** 20k-100k paying households at ~$25/mo is roughly
   $6M-30M ARR: about 0.1-0.3% of US households with school-age children. Winnable
   without beating Meta at anything.

## 4. What we claim, ranked, and what backs it

1. **Standing ownership: Remy holds the thing, not just does it.** The loops rebuild
   (`remy/docs/REMY_TARGET_ARCHITECTURE.md` §8) makes a loop the sovereign owner of a
   goal, with the user's ask kept verbatim, seven typed wait kinds, and closure only on
   recorded evidence. This is the differentiator and the reason a subscription survives
   month three. **Not shippable copy until the loop spine is live** — see §6.
2. **It calls people.** The route that finishes household work when the web cannot.
   Uncontested on the scoreboard.
3. **It knows the household.** People with roles, ages and providers, and a shared view
   with a spouse. Turns "my assistant" into "our house's assistant" — also the referral
   loop.
4. **Restraint, made visible.** The approval boundary we already have, presented as a
   scored capability rather than a policy page. Live comparative claim now that Instinct
   has a public 3.
5. **Proof of deletion and disconnect.** Fifth, not first, and gated on the deletion
   bundle (backups, Langfuse full-payload logging, vendor retention). Nothing detailed
   gets printed before it exists.

Deliberately **not** claimed: speed, travel booking, purchasing, one-shot online tasks.
We lose those today and should stop spending words there.

## 5. The sentences

The answer when someone asks what is different:

> Remy is the assistant for running a household, not for impressing you once. The others
> run an errand while you watch. Remy takes something off your plate and keeps it — the
> school forms, the registration windows, the refills, the calls you keep not making —
> and comes back when there is something to say. It knows your kids, your providers and
> your spouse's calendar, and it will call a human being when that is the only way to
> finish.

Short form: *"Everyone can book you a restaurant now. Remy is the one that remembers the
deposit is due Friday, calls the office when the portal is broken, and is still doing it
in March."*

D3 is unchanged as the first-mention rule.

## 6. Truth gates (this lane's spine, applied to the new story)

- Loops/standing ownership: describe as how Remy works only once the spine is live and
  the founder has seen it hold a real errand across a wait. Until then: no page says
  Remy holds work across days.
- Phone calls: we have the lane, not a volume record. Print what one real call did, not
  a capability claim.
- Household memory: PARTS, per the audit — no identity model today. Do not print "knows
  which Sam is your child" until it does.
- Competitor scores are quoted from a third-party benchmark with its date and version,
  never restated as our own finding. Never dunk on Instinct by name.

## 7. What changes on the site

- `/why`, `/what-is-remy`, homepage subhead: rewritten behind the household frame after
  the founder's read.
- Content queue re-ranked toward the segment: school/kids/providers/calls, away from
  general-assistant comparisons.
- New comparison pages needed: remy-vs-meta-muse, remy-vs-instinct, remy-vs-grok-bot.
  These are now the queries people type; ohai/maple/cozi are yesterday's.
- `assistantbenchmark.com` "Request a test" is a **launch gate, not a today action**. A
  test request before the capability is real buys a permanent 3.
