---
title: "Is anything you tell an AI private? The documented record, 2023-2026"
description: "Training defaults, human review, court-ordered retention, chats indexed by Google, logs cited in court. What has actually happened to people's AI conversations, with dates and sources, from the founder of Remy."
heading: "Is anything you tell an AI private?"
lede: "I kept a folder of these stories while I was building Remy. This is that folder, cleaned up, dated, and sourced."
eyebrow: "From the founder"
date: 2026-08-20
question: "Is it safe to tell ChatGPT or Gemini personal things?"
answer: "Treat consumer AI chats as less private than you'd assume. On personal plans, ChatGPT's help pages say conversations may be used to train models unless you opt out, and Google's Gemini privacy notice says a subset of chats are read by human reviewers and kept up to three years, adding 'please don't enter confidential information.' Stored chats have also left the building in documented ways: OpenAI was court-ordered in 2025 to preserve even deleted ChatGPT conversations and in 2026 to hand 20 million chat logs to litigation plaintiffs; shared ChatGPT and Grok chats were indexed by Google; Meta AI's feed surfaced private conversations publicly; and prosecutors have cited ChatGPT history in a criminal case. Whatever is stored can be trained on, reviewed, leaked, indexed, or subpoenaed. Apps built on zero-data-retention AI, where the model provider keeps nothing after answering, remove most of that surface. Remy, the AI assistant for your life, is built that way."
---

I loved ChatGPT from the first week. I say that up front because this is not a hit piece, and because it's the reason this page exists: I kept typing personal things into it, and something in me kept hesitating. My kid's school. A health question. Plans with my wife. Eventually I started saving the news stories that explained the hesitation, and that folder became Remy, and now it's become this page.

Everything below actually happened. Each item has a date, and most of the quotes come from the companies' own pages. I run an AI assistant that competes with some of these products, so don't take my word for anything - the sources are at the bottom, check them.

## Start with the fine print, because it's the part that covers everyone

OpenAI's help center, today: ChatGPT "improves by further training on the conversations people have with it, unless you opt out." Another line on the same page: "When you use our services for individuals such as ChatGPT and Codex, we may use your content to train our models." Business customers are excluded by default. Individuals get a switch called "Improve the model for everyone," and it starts in the on position. If you've connected apps - Gmail, say - the connectors page says the same thing about data accessed from them.

Google's version is blunter, which I almost respect. The Gemini privacy notice: "Human reviewers (including trained reviewers from our service providers) review some of the data we collect." Reviewed chats "are not deleted when you delete your activity. Instead, they are retained for up to three years." And then this sentence, verbatim: "Please don't enter confidential information that you wouldn't want a reviewer to see or Google to use to improve our services, including machine-learning technologies."

Google wrote that. About its own product. It's good advice.

## Then the court orders

This is the part most people haven't heard, and it's the part that changed how I think about all of it.

In the New York Times' copyright suit against OpenAI, a federal magistrate issued an order on May 13, 2025: "OpenAI is NOW DIRECTED to preserve and segregate all output log data that would otherwise be deleted." Including chats users had deleted. Including users who'd opted out. OpenAI fought it - their COO called the demand a fundamental conflict with "the privacy commitments we have made to our users" - and by October the order was narrowed and lifted.

The follow-on was bigger. In November 2025, upheld by the district judge in January 2026, OpenAI was ordered to hand the plaintiffs 20 million ChatGPT conversations. De-identified, but whole conversations. And buried in the ruling is the number that stopped me: the magistrate noted those 20 million were "only a small fraction of the 'tens of billions' of consumer ChatGPT logs that OpenAI retains."

Tens of billions. Retained. The delete button in the app doesn't bind a courtroom, and none of this would have been possible if the conversations hadn't been sitting there in the first place.

## The leaks were more ordinary than you'd think

No hacking-movie stuff. Just stored data meeting a bug, or a feature that worked as designed.

March 2023: a caching bug let some ChatGPT users see the titles of other people's chats. OpenAI's own postmortem says payment details of about 1.2% of Plus subscribers - name, email, billing address, card type, last four digits - may have been visible too. They took the whole service offline to fix it.

July 2025: ChatGPT conversations that users had marked shareable started showing up in Google search results. Some were deeply personal. OpenAI's security chief called it "a short-lived experiment" that "introduced too many opportunities for folks to accidentally share things they didn't intend to," and killed the feature within days.

August 2025, same shape, worse numbers: Fortune reported "more than 370,000 Grok chats have been indexed by search engines," including medical and psychological questions and at least one password. The share links were public and crawlable. Users had no warning.

And in June 2025, Meta AI's app had a Discover feed where people's conversations - medical, legal, personal - were being published to the world, with coverage concluding many users simply didn't understand the share flow was public.

Four companies, one pattern. The conversation existed on a server, and then one day it existed somewhere else.

## "We haven't figured that out yet"

Sam Altman said the quiet part on a podcast in July 2025: "People talk about the most personal sh** in their lives to ChatGPT," but "if you talk to a therapist or a lawyer or a doctor about those problems, there's legal privilege... we haven't figured that out yet for when you talk to ChatGPT." In a lawsuit, he added, OpenAI could be required to produce those conversations.

Three months later it wasn't hypothetical. The federal arson complaint in the Palisades Fire case cited the suspect's ChatGPT history - images he'd generated, questions he'd asked - as evidence. I make no claim about that case's outcome. The mechanism is the point: AI chat logs are discoverable, and prosecutors now use them.

## What I take from all of it

Not that these companies are villains. Every incident above got patched, disclosed, or fought in court by the company involved. What I take from it is structural, and it's three sentences.

Everything on this list - the training, the reviewers, the preservation order, the 20 million logs, the indexing, the breach - required a stored conversation. Storage is the root; everything else is a branch. And a company whose models get better with more data will always, eventually, want more data - not because anyone there is evil, but because that's which way their incentives point.

That's the whole reason Remy exists, and I wrote the longer version in [Why I built Remy](/why).

## What I'd ask any AI app before telling it my life

The same five questions I'd want you to ask Remy:

1. Which AI providers process my words, and what do they keep?
2. Does anything train on my data - and what's the default setting?
3. Do humans review my conversations?
4. What does the app itself store, and is it encrypted?
5. Can I actually delete everything - and who does that deletion bind?

If the answers aren't on a public page, you have your answer. (The jargon these answers come wrapped in - "zero data retention," "de-identified," "opt out" - is decoded in [plain English here](/blog/what-zero-data-retention-means/).)

## Remy's answers

Remy is an AI assistant for your life - it reads your Gmail and calendar, catches what you'd miss, and does the admin with your press-and-hold approval - which means it handles exactly the kind of data this page is about. So: for the text processing that is nearly everything Remy does, it uses only AI providers under zero-data-retention terms. The request is processed, answered, and gone. Nothing to train on, review, index, or produce. None of those models come from OpenAI, Google, or Anthropic. What Remy itself stores to be your assistant is encrypted, and you can delete all of it from inside the app.

Two lanes - live voice and the phone-call stack - are still marked "verification in progress" and "under review" on our provider page, because I'd rather print that than round up. The full list, with each provider's policy linked: [/ai-model-providers](/ai-model-providers).

If your reaction to this page is "then I don't want any AI near my personal life" - fair. That's a coherent answer. I just wanted you deciding with the record in front of you instead of the marketing.

---

*Sources: OpenAI Help Center ("How your data is used to improve model performance"; "Apps in ChatGPT"), Google's Gemini Apps Privacy Hub, the May 13, 2025 preservation order in NYT v. OpenAI and OpenAI's response page, Bloomberg Law on the 20-million-logs ruling, OpenAI's March 2023 postmortem, Fortune (August 2025, Grok and ChatGPT shared-chat indexing), Malwarebytes (Meta AI Discover feed, June 2025), TechCrunch (Altman podcast remarks, July 2025), Axios and CNN (Palisades Fire complaint, October 2025). Checked August 2026. If a fact changes or a source moves, this page's date moves with the correction.*
