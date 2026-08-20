---
title: "Is anything you tell an AI private? The documented record, 2023-2026"
description: "Before you tell an AI assistant about your health, your kids, or your money, here is what has actually happened to people's AI conversations - training defaults, human review, court-ordered retention, chats indexed by Google, and logs cited in court. Every item dated and sourced, with the questions to ask any AI app."
heading: "Is anything you tell an AI private?"
lede: "Not a scare piece. A dated, sourced record of what has actually happened to people's AI conversations - and what it teaches about where to put your private life."
eyebrow: "Plain answer"
date: 2026-08-20
question: "Is it safe to tell ChatGPT or Gemini personal things?"
answer: "Treat consumer AI chats as less private than you'd assume. On personal plans, ChatGPT's help pages say conversations may be used to train models unless you opt out, and Google's Gemini privacy notice says a subset of chats are read by human reviewers and kept up to three years, adding 'please don't enter confidential information.' Stored chats have also left the building in documented ways: OpenAI was court-ordered in 2025 to preserve even deleted ChatGPT conversations and in 2026 to hand 20 million chat logs to litigation plaintiffs; shared ChatGPT and Grok chats were indexed by Google; Meta AI's feed surfaced private conversations publicly; and prosecutors have cited ChatGPT history in a criminal case. The pattern: whatever is stored can be trained on, reviewed, leaked, indexed, or subpoenaed. Apps built on zero-data-retention AI - where the model provider keeps nothing after answering - remove most of that surface. Remy, the AI assistant for your life, is built that way."
---

<div class="answer">
<p><b>Short answer:</b> a consumer AI chat is closer to email than to a diary. On default settings it may train models or be read by reviewers, it is stored, and stored things can be ordered kept, handed over, indexed, or breached - all of which has now actually happened.</p>
<p><b>The one-line lesson:</b> what is never stored can't leak, can't be reviewed, and can't be demanded. Ask any AI app what its model providers keep.</p>
</div>

I'm the founder of Remy, an AI assistant that runs on zero-data-retention providers, so I have a position here; that's exactly why every claim below carries a date and a source, most of them the companies' own pages. Nothing in this list is a rumor.

## 1. On default settings, your chats are working material

**ChatGPT (personal plans).** OpenAI's own help center: ChatGPT "improves by further training on the conversations people have with it, unless you opt out," and "when you use our services for individuals such as ChatGPT and Codex, we may use your content to train our models." Business and Enterprise plans are excluded by default; individuals have to find the "Improve the model for everyone" switch. The same logic extends to connected apps: for Free, Plus, Go, and Pro users, "OpenAI may use information accessed from apps to train our models" when that setting is on.

**Gemini (consumer).** Google's Gemini privacy notice, on its own support pages: "Human reviewers (including trained reviewers from our service providers) review some of the data we collect." Reviewed chats "are not deleted when you delete your activity. Instead, they are retained for up to three years." And, in Google's own words: "Please don't enter confidential information that you wouldn't want a reviewer to see or Google to use to improve our services, including machine-learning technologies."

That last sentence is the honest version of this whole section, written by the vendor itself.

## 2. Stored chats can be ordered kept - even the deleted ones

In the New York Times' copyright suit against OpenAI, a federal magistrate ordered on May 13, 2025: "OpenAI is NOW DIRECTED to preserve and segregate all output log data that would otherwise be deleted" - explicitly including data users had asked to delete. OpenAI itself called the demand a fundamental conflict with "the privacy commitments we have made to our users." That order was later narrowed and lifted (September-October 2025), but the follow-on went further: in November 2025, upheld by the district judge in January 2026, OpenAI was ordered to hand plaintiffs 20 million de-identified ChatGPT conversations. The magistrate noted those 20 million are "only a small fraction of the 'tens of billions' of consumer ChatGPT logs that OpenAI retains."

Read that last clause again: tens of billions of retained consumer conversations. Deletion buttons don't bind a court, and retention is what makes any of this possible.

## 3. Stored chats have simply leaked

- **March 2023:** a caching bug let some ChatGPT users see other users' chat titles; OpenAI's postmortem says payment details of about 1.2% of Plus subscribers - name, email, billing address, card type, last four digits - may have been visible. OpenAI took the service offline and fixed it.
- **July-August 2025:** ChatGPT conversations users had marked shareable started appearing in Google search results, personal content included. OpenAI's security chief called it "a short-lived experiment" that "introduced too many opportunities for folks to accidentally share things they didn't intend to," and killed the feature.
- **August 2025:** Fortune reported "more than 370,000 Grok chats have been indexed by search engines," including medical and psychological questions and at least one password; the share links were public and crawlable without users realizing.
- **June 2025:** Meta AI's Discover feed surfaced users' conversations - medical, legal, deeply personal - publicly, with coverage concluding many users had no idea the share flow published to the world.

Different companies, same shape: content that existed on a server met a feature or a bug, and became public.

## 4. There is no privilege on an AI conversation

Sam Altman, July 2025, on why he finds ChatGPT-as-therapist worrying: "People talk about the most personal sh** in their lives to ChatGPT… if you talk to a therapist or a lawyer or a doctor about those problems, there's legal privilege… we haven't figured that out yet for when you talk to ChatGPT." In a lawsuit, he added, OpenAI could be legally required to produce those conversations.

It's no longer hypothetical: in October 2025, the federal arson complaint in the Palisades Fire case cited the suspect's ChatGPT history - images he'd generated and questions he'd asked - as evidence. Whatever that case's outcome, the mechanism is now on the record: AI chat logs are discoverable, and prosecutors use them.

## 5. Even your inbox summaries have an attack surface

Two 2025 security disclosures worth knowing if an AI reads your email: a zero-click flaw in Microsoft 365 Copilot (patched, no known exploitation) showed a crafted email could make an AI assistant exfiltrate data with no user action; and a researcher showed invisible text in an email could make Gemini's Gmail summary display a fake security alert with an attacker's phone number. Both were fixed; both are reminders that "the AI reads your email" is a security design problem, not just a feature. (It's why Remy treats everything arriving in email as untrusted input, structurally separate from your instructions.)

## What this record actually teaches

Not "these companies are evil." Every incident above was patched, disclosed, or fought in court by the company involved. The lesson is structural:

1. **Retention is the root.** Every path above - training, review, preservation orders, handovers, indexing, breaches - starts with a stored conversation. What's never stored can't take any of those paths.
2. **Defaults decide what happens to most people.** Almost nobody flips the setting.
3. **Business model is the tide.** A company that gets better by having more data will, over time, ask for more data. Policies move with incentives.

## The questions to ask any AI app (including mine)

1. Which AI model providers process my words, and do they retain anything?
2. Does anything train on my data, and what's the default?
3. Do humans review my conversations?
4. What does the app itself store, and is it encrypted?
5. Can I delete everything - and whom does that deletion actually bind?

The plain-English decoder for these terms is in [What "zero data retention" actually means](/blog/what-zero-data-retention-means/).

## Where Remy stands

Remy is the AI assistant for your life, not your job: it reads your Gmail and Google Calendar, catches what you'd miss, and does the admin with your press-and-hold approval. Because it handles exactly the kind of data this page is about, it's built against the record above: for the text processing that is nearly everything Remy does, it uses only AI providers under zero-data-retention terms - the request is processed and never kept - and none of them are OpenAI, Google, or Anthropic models. Nothing trains on your data. What Remy itself stores to be your assistant is encrypted at rest and deletable from inside the app. The provider list, including the two lanes still marked "verification in progress," is public at [/ai-model-providers](/ai-model-providers) - held to the same standard as this page: dated, and honest about what's not verified yet.

The full reasoning is in [Why I built Remy](/why). And if your conclusion from this page is "I don't want any AI near my personal life," that is a coherent position - this page is for deciding with the record in front of you.

---

*Sources, in order used: OpenAI Help Center ("How your data is used to improve model performance"; "Apps in ChatGPT"), Google Gemini Apps Privacy Hub, the May 13 2025 preservation order in NYT v. OpenAI and OpenAI's response page, Bloomberg Law on the 20-million-logs order, OpenAI's March 2023 postmortem, Fortune (Aug 2025, Grok and ChatGPT shared-chat indexing), Malwarebytes (Meta AI Discover feed, June 2025), TechCrunch (Altman podcast remarks, July 2025; Samsung ban, May 2023), Axios/CNN (Palisades Fire complaint, Oct 2025), Infosecurity Magazine (EchoLeak, June 2025), BleepingComputer (Gemini Gmail injection, July 2025). Checked August 2026; if a source moves or a fact changes, this page's date moves with the correction.*
