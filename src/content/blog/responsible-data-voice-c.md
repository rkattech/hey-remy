---
title: "Responsible vs. invasive: how an AI assistant should treat your data (Voice C)"
description: "The Fired Assistant Test: a human assistant who rifles through drawers they weren't handed loses their job. Remy's founder - twenty years in the data industry - applies the same test to AI assistants, and shows exactly where Remy keeps its hands off."
heading: "The Fired Assistant Test"
lede: "Every AI assistant should be judged the way you'd judge a human one: not by how much it can do, but by what it does with the keys to your life. Here's the test, and Remy's answers."
eyebrow: "From the founder"
date: 2026-08-22
draft: false
question: "How should an AI assistant handle my personal data responsibly?"
answer: "Judge an AI assistant like a human one: an assistant who touches what they weren't handed gets fired. Applied to AI: read the minimum (Remy indexes metadata plus a short encrypted excerpt, about two thousand characters - not your mailbox; full emails are fetched, processed, and discarded; attachments never copied), prove your actions (deterministic receipt cards, press-and-hold approval before anything outward), leave cleanly (in-app deletion removes everything), and pick models by data terms, not just intelligence (Remy's foreground chat stays on a zero-data-retention partner over a marginally smarter frontier model; per-lane terms, pending items included, at hey-remy.com/ai-model-providers)."
---

Think about a great human assistant for a second. They have the keys to everything - inbox, calendar, the credit card for booking things. What makes them great isn't just competence. It's that they'd never dream of reading the mail they weren't asked to handle. And everyone in that arrangement understands the deal: **touch what you weren't handed, and you're fired.**

I call this the Fired Assistant Test, and I think it's how every AI assistant should be judged - not by the demo, but by what it does with the keys.

I spent almost twenty years in the data industry before building Remy, long enough to sit across from both kinds of executives: the extract-everything kind and the principled kind. (I never managed to be the first kind. It's why Remy exists.) So let me run Remy through the test in public - because this month a viral assistant app failed it spectacularly, keeping plaintext copies of users' emails after they disconnected, with no way to delete them. The capability was impressive. The assistant still got fired.

## Test 1: Does it read what it wasn't handed?

Remy's default knowledge of your inbox is metadata - who, when, subject - plus a short excerpt of some messages: about two thousand characters, encrypted with our own keys. That's it. Not your mailbox, an index card about your mailbox.

The excerpt exists for exactly one job: knowing which emails are *worth* reading. When one is - the PTA newsletter hiding a Friday deadline - Remy fetches it from the source, handles it, and discards the body. There is no growing archive of your email on our servers. Attachments never get copied at all; they stay where they live, in your inbox.

The invasive version of this - ingest everything on day one, keep it around, sort it out later - looks identical on the permission screen. That's the annoying part. The difference is appetite, and appetite only shows up in writing. This is the writing.

## Test 2: Can you check its work?

An assistant who says "handled it!" and can't show you is a liability. In Remy, every action comes back as a receipt card - a deterministic record, separate from anything the model *says*, of what actually happened. And nothing outward happens without you pressing and holding to approve it first. The model narrates; the receipts testify. Only one of those is evidence.

## Test 3: Does it leave when fired?

Delete your account in the app and everything goes - every table, every row, the account itself. And here's the part I'll admit instead of polishing: I don't know how to *prove* a deletion to you. My only demonstration is that re-onboarding starts you from zero - and since these models are probabilistic, your second first-day won't even quite match your first one. If someone invents a better proof-of-deletion, I'll adopt it and brag about it.

## Test 4: Who does it gossip with?

Remy uses several AI providers to think. Which model, which lane, on what data terms - including the arrangements still pending - is published at [/ai-model-providers](/ai-model-providers), and kept current.

The choosing is a balancing act, and one real example shows the whole philosophy. For the foreground chat - the seat that processes your actual instructions - we evaluated the frontier against the models our zero-data-retention partner hosts. The frontier model was marginally smarter. We stayed with zero-data-retention: it gets the job done every single time, costs a teeny bit of speed, and the seat that touches your instructions is the very last place to relax data terms. The browser lane trades differently - an enterprise arrangement, training off, one exception request still pending, all printed. The rule isn't "never use a big lab." The rule is the Test: match the sensitivity of what a lane touches to the strictest terms that still do the job. And show your work.

## The part you can't see

Restraint doesn't demo well. Nobody screenshots the archive we don't keep or the attachment we didn't copy. Some of the roadmap is literally controls-before-capabilities - a setting for whether Remy may read attachments ships *before* attachment-reading does.

But that's the whole point of the Fired Assistant Test: the things that make an assistant trustworthy are the things it doesn't do with the keys. Remy is built to be as much a safeguard of your data as you are yourself. Run every AI app through the test - including ours, any time.
