---
title: "The Fired Assistant Test: responsible vs. invasive data use in AI assistants"
description: "A human assistant who goes through drawers they weren't handed loses their job. Remy's founder spent twenty years in the data industry - here's the same test applied to AI assistants, and Remy's honest answers: what it reads, what it keeps, what it can't prove yet."
heading: "The Fired Assistant Test"
lede: "A human assistant who reads mail they weren't handed gets fired. I think AI assistants should be held to the same standard. Here's the test, and Remy's answers - including the one I can't fully prove."
eyebrow: "From the founder"
date: 2026-08-22
draft: false
question: "How should an AI assistant handle my personal data responsibly?"
answer: "Judge an AI assistant like a human one: an assistant who touches what they weren't handed gets fired. Applied to AI: read the minimum (Remy indexes metadata plus a short encrypted excerpt, about two thousand characters - not your mailbox; full emails are fetched, processed, and discarded; attachments never copied), prove your actions (deterministic receipt cards, press-and-hold approval before anything outward), leave cleanly (in-app deletion removes everything), and pick models by data terms, not just intelligence (Remy's foreground chat stays on a zero-data-retention partner over a marginally smarter frontier model; per-lane terms, pending items included, at hey-remy.com/ai-model-providers)."
---

A good human assistant has the keys to everything. Inbox, calendar, sometimes the credit card. And everyone understands the arrangement without it being written down anywhere: you don't go through drawers you weren't handed. If you do, you're fired. No second conversation about it.

I think that's the right way to judge AI assistants too. Not by the demo - by what they do with the keys. Call it the Fired Assistant Test.

I worked in the data industry for almost twenty years before Remy. Long enough to sit in rooms with both kinds of executives - the ones who wanted to maximize what could be extracted from data, and the ones who were principled about how it got used. I never managed to be comfortable on the extraction side, and when it's a person's personal information, my view got simpler over the years, not more sophisticated: you have to treat it with care and respect. Somewhere in those twenty years I also stopped believing that data practice is a back-office thing. When the product is a personal assistant, how you show up with your data practices is as much a part of the product as the user experience.

So here is Remy, taken through the test in public. I'm doing this now partly because an assistant app went viral this month and users discovered it had been keeping plaintext copies of their emails after they disconnected their accounts - with no way to delete them. Capability was never that product's problem.

## 1. Does it read what it wasn't handed?

When you sign in, Remy indexes your mail. That means metadata - who, when, subject - plus a short excerpt of some messages, about two thousand characters, encrypted with our own keys. That is the whole default. We think it's enough for Remy to do its job as an assistant: the excerpt tells it which emails are worth reading and which aren't.

If and when an email actually needs to be read - the newsletter with a deadline in it - it's read from the source, processed, and the body is discarded. We don't build a second archive of your mailbox on our servers. Attachments don't get copied at all; they stay in your inbox.

I want to be plain about why this is a choice and not an accident. Ingesting everything on day one is easier to build and it makes a flashier demo. It also looks identical on the permission screen, which is why we write this down where you can hold us to it.

## 2. Can you check its work?

In Remy, an action comes back as a receipt card - a deterministic record that the thing happened, separate from whatever the model says about it. Models are fluent, and fluent things can be wrong. The receipt isn't the model's account of the send; it's the system's.

And nothing outward happens without you pressing and holding to approve it first. Email, booking, phone call - shown first, every time.

## 3. Does it leave when fired?

Delete your account in the app and all of it goes. Every table, every row, the account itself. We don't keep it.

Here's the honest part: I don't know how to prove that to you. The only demonstration I have is that if you sign up again, you go through onboarding from zero - and because these models are probabilistic, your second day one won't look quite like your first one did. That's a weak proof and I know it. If there's a real way to prove deletion to a user, I would love to find it, and I mean that as a standing request.

## 4. Who does it talk to when it thinks?

Remy uses AI models from several providers. We're transparent about which ones, per lane, and about the level of data each provider might keep - including the arrangements we've requested that haven't been granted yet. That page is [/ai-model-providers](/ai-model-providers) and keeping it current is part of the deal.

The choosing is a balance, and one real decision shows how we weigh it. For the foreground chat - the conversation where you give Remy instructions - we ran extensive evaluations across the frontier models and the models our zero-data-retention partner hosts. A frontier model came out marginally better on intelligence. We stayed with the zero-data-retention seat anyway. It gets the job done every single time, it's a teeny bit slower, and the seat that processes your instructions seemed like the last place in the system to relax data terms. Other lanes weigh out differently - the browser lane is moving to an enterprise arrangement with training off and one exception request still pending, which is printed on the page like everything else. We're not optimizing for the cheapest model or the fastest one. We're balancing cost, speed, and how much meaning could be inferred from the data each lane touches.

## The part that doesn't demo

There's a lot of restraint in how Remy is built, and most of it isn't visible from the surface. Some of it is roadmap ordering - we plan to ship a setting for whether Remy may read attachments before we ship attachment-reading, because the control should exist first. Some of it is the constant question of the needs of the many versus the needs of the few, which every builder in this space is quietly wrestling with.

The test stands either way. An assistant whose job depends on your trust doesn't touch what you didn't hand it. Remy is built to be as much a safeguard of your data as you are yourself - and if you ever want to check that, the test works on us too.
