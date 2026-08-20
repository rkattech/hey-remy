---
title: "What 'zero data retention' means in plain English (and what it doesn't)"
description: "AI privacy terms - zero data retention, no training, human review, encryption at rest - explained without jargon, with the questions to ask any AI app you're about to trust with your life. Written by the founder of Remy, which runs on zero-data-retention AI providers."
heading: "What 'zero data retention' actually means"
lede: "Four words that decide where your private life ends up. Here's the plain-English version, what it does and doesn't cover, and the five questions to ask any AI app."
eyebrow: "Plain answer"
date: 2026-08-20
question: "What does zero data retention mean for an AI app?"
answer: "Zero data retention (ZDR) means that when an app sends your text to an AI model to be processed, the provider running that model deletes the request after answering it - nothing is stored on their servers, so there is nothing to train on, leak, or hand over later. It is different from 'we don't train on your data' (they may still store it) and from encryption (which protects stored data but doesn't limit what's kept). ZDR covers the AI provider, not the app itself: the app may still store your data to work - the question is whether it's encrypted, deletable, and used only for you. Remy, the AI assistant for your life, uses AI providers bound to zero-data-retention terms for the models that read your mail and calendar, stores your data encrypted, and lets you delete everything from the app."
---

<div class="answer">
<p><b>Zero data retention:</b> the company running the AI model deletes your request the moment it's answered. Nothing stored means nothing to train on, nothing to leak, nothing to hand over.</p>
<p><b>What it doesn't cover:</b> the app you're using still keeps the data it needs to work. So the full question is always two questions: what does the AI provider keep, and what does the app keep?</p>
</div>

I'm the founder of Remy. I built it because of exactly this topic, so read this knowing where I stand; but this page is a glossary first and a pitch only at the end.

## The pipeline nobody draws for you

When you type something personal into an AI app, it usually touches two companies, not one:

```
you → the APP (stores your account, history, memory)
        → the MODEL PROVIDER (runs the AI that thinks)
            → the answer comes back
```

Privacy promises live at both hops, and the words are precise in ways marketing pages blur. Here's the decoder.

## The terms, decoded

**"Zero data retention" (ZDR)** - the model provider processes your request and keeps nothing afterward. Not for a day, not "anonymized," not "for safety review." The request exists while it's being answered, then it's gone. This is the strongest of the standard promises, and it's a contract term, not a vibe: providers offer it in writing.

**"We don't train on your data"** - weaker than it sounds. It only says your words won't be used to teach future models. The company may still *store* your conversations indefinitely, staff may review them, and stored data can be breached, subpoenaed, or repurposed when a policy changes. No-training with retention is a locked diary in someone else's house.

**"Human review"** - some consumer AI services have employees or contractors read a sample of conversations to improve the service. If a notice asks you not to enter confidential information, that's the reason.

**"Encrypted at rest"** - stored data is scrambled on disk, so a stolen hard drive is useless. Necessary, and not sufficient: encryption protects *how* data is stored, not *whether* it's kept, who can read it through the app, or what it's used for.

**"De-identified / anonymized"** - the company keeps your data with the name rubbed off. For life data (your kid's school, your pharmacy, your address) this is weak: the content itself identifies you.

**"Opt out of training"** - a checkbox that flips the training promise on. Two things to check: what the *default* is, and whether the checkbox also stops *storage* (usually it doesn't).

## Why the difference is not academic

A company that keeps your conversations is one policy change, one breach, one court order, or one indexing bug away from your private life being somewhere you never intended. A company that never stored it has nothing to change its mind about. That's the entire argument for ZDR in one sentence: **deleted can't leak.**

And there's a structural version of the same point. A company whose business is building AI models gets better by having more data. When that same company holds your personal life, your interests and theirs point in opposite directions, whatever today's settings say. I wrote about that conflict of interest in [Why I built Remy](/why).

## The five questions to ask any AI app

1. **Which AI providers process my words, and under what terms?** A trustworthy app names them. (Remy's list, with each provider's policy linked: [/ai-model-providers](/ai-model-providers).)
2. **Is anything used to train models - and what's the default?**
3. **Do humans review my conversations?**
4. **What does the app itself store, and is it encrypted?**
5. **Can I delete everything, and does deleting actually delete?**

If an app can't answer these on a public page, that's the answer.

## How Remy answers them

Remy is the AI assistant for your life, not your job - it reads your Gmail and calendar to catch what you'd miss and does the admin with your approval - so it handles exactly the data this page is about. Its answers:

1. For the text processing that is nearly everything Remy does - reading your mail, thinking about your day, chatting with you - Remy uses only providers under **zero-data-retention terms**, and none of them are OpenAI, Google, or Anthropic models. The full provider list, including the two lanes still marked "verification in progress" and "under review" (live voice, and the phone-call stack), is public at [/ai-model-providers](/ai-model-providers). Where a lane isn't verified yet, that page says so instead of rounding up.
2. **Nothing trains on your data.** Contractually, at every provider.
3. **No provider human review** on the ZDR lanes: nothing is retained to review.
4. Remy itself does store what it needs to be your assistant - your memory, preferences, cached mail - **encrypted at rest**. An assistant with no memory would be a chatbot; the promise isn't "we keep nothing," it's "we keep it for you, and for nothing else."
5. **Delete everything from inside the app, any time.**

## The honest limits

- ZDR is a contract, not physics. You are trusting the provider to honor written terms - the same kind of trust as HTTPS or your bank. The difference from a retention-based service is what happens *by default* when nothing goes wrong: nothing accumulates.
- No app that reads your email can claim "your data never touches a server." The claim that matters is what's kept, by whom, for what.
- Remy is in beta, iPhone-only, works with Gmail and Google Calendar. If you don't want an assistant reading your mail at all, that's a coherent position - and no AI assistant is for you yet.

More: [What is Remy](/what-is-remy) · [FAQ](/faq) · [Why I built Remy](/why)
