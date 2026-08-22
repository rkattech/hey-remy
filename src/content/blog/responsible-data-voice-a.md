---
title: "Responsible vs. invasive: how an AI assistant should treat your data (Voice A)"
description: "Twenty years in the data industry taught Remy's founder the difference between companies that treat personal data with respect and ones that extract from it. Here's where Remy draws the lines: what it reads, what it keeps, what it discards, and the restraint built into the architecture."
heading: "Responsible vs. invasive data use"
lede: "I spent twenty years in the data industry. This is what I learned about the two kinds of companies - and which kind Remy is built to be."
eyebrow: "From the founder"
date: 2026-08-22
draft: false
question: "How should an AI assistant handle my personal data responsibly?"
answer: "A responsible AI assistant reads the minimum it needs, keeps less than it reads, and can prove both. Remy indexes your mail as metadata plus a short encrypted excerpt - about two thousand characters, not your mailbox. When an email actually needs reading, it's fetched from the source, processed, and discarded, not copied into a second archive. Attachments stay in your inbox. Actions come back as deterministic receipts, not model prose. Deleting your account deletes everything, in the app. And the AI models are chosen by balancing capability against data terms - Remy's foreground chat runs on a zero-data-retention partner even though a marginally smarter frontier model exists, because the trade was worth it. Per-provider terms, including pending items, are published at hey-remy.com/ai-model-providers."
---

I worked in the data industry for almost twenty years. In that time I sat across from both kinds of executives: the ones who wanted to maximize what could be extracted from data, and the ones who were principled about how it got used. I could never relate to the extraction side. Data about a person's life deserves care and respect, and that belief is older than Remy - Remy is just what it turned into.

Here's the thing I came to understand while building an assistant: **transparent data practice is as much a part of the product as the user experience.** Not a compliance page. Part of the product. So this post is about the actual lines, in the actual system.

## What Remy reads, and what it keeps

When you sign in, Remy indexes your mail. Indexing means metadata - who, when, subject - plus a short excerpt of some messages, about two thousand characters, encrypted at rest with our own keys. That's what Remy "knows" about your inbox by default. It is not a copy of your mailbox.

When an email actually needs reading - the school newsletter with the buried deadline - Remy fetches it from the source, processes it, and discards the body. There's no second archive of your email accumulating on our servers. Attachments stay in your inbox; Remy doesn't copy them.

Why does this matter? Because an assistant app went viral this month, and one thing users discovered was that it kept plaintext copies of their emails even after they disconnected their account. That's the invasive default: take everything, keep everything, sort it out later. The responsible default is the opposite: the excerpt is enough to know which emails are worth reading. Read the rest when there's a reason.

## Actions come back as receipts

A model can say it did something. That's prose, and prose can be wrong. In Remy, actions come back as receipt cards - a deterministic check, separate from the model's words, that says this happened or this didn't. Every outward action was approved by you first, with a press-and-hold. This isn't decoration. It's how you audit your own assistant.

## Deleting means deleting

If you delete your account in the app, all of it goes - every table, every row, the account itself. I'll be honest about the awkward part: I don't know how to *prove* a deletion to you. The only demonstration I have is that if you sign up again, you go through onboarding from zero, and because these models are probabilistic, your second first-day won't even look quite like your first. If someone shows me a stronger way to prove deletion to a user, I want it.

## The models, and the trade-offs we actually make

Remy uses several AI providers, and we publish which ones, per lane, including the arrangements that are still pending - the current state is always at [/ai-model-providers](/ai-model-providers).

The way we choose them is a balance, and I'll give you a real example. For the foreground chat - the conversation where you give instructions - we evaluated the frontier models against the ones our zero-data-retention partner hosts. One frontier model was marginally smarter. We stayed with the zero-data-retention seat anyway, because it gets the job done every single time, and the trade - a teeny bit of speed for a lot of data protection - was obviously right for the thing that processes your instructions. Other lanes land differently: our browser lane runs on an enterprise arrangement with training off and an exception request still pending, and we print that too. The principle isn't "never use a big lab." It's: balance the capability a lane needs against the meaning that can be inferred from the data it touches, and show your work.

## Restraint is the feature

There are features we haven't built because the control should come first - a setting for whether Remy may read attachments is on the roadmap before attachment-reading is. The hard part of building in this space is the needs of the many versus the needs of the few, and the way through it, I think, is one test: a real assistant whose job depends on their boss's trust doesn't touch what they weren't handed. If they do, they get fired. That's the standard.

A lot of restraint went into Remy that you can't see from the surface. It's in the architecture - so that Remy is as much a safeguard of your data as you are yourself.
