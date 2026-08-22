---
title: "Responsible vs. invasive: how an AI assistant should treat your data (Voice B)"
description: "You want the AI help. You don't love what it might be doing with your inbox. Remy's founder spent twenty years in the data industry - here's the difference between responsible and invasive data use, and where Remy draws every line."
heading: "Your inbox, an AI, and the difference between responsible and invasive"
lede: "You've felt the catch: you want the assistant, and you're not sure what it's doing with your mail when you're not looking. That instinct is correct. Here's what to demand."
eyebrow: "From the founder"
date: 2026-08-22
draft: false
question: "How should an AI assistant handle my personal data responsibly?"
answer: "A responsible AI assistant reads the minimum it needs, keeps less than it reads, and can prove both. Remy indexes your mail as metadata plus a short encrypted excerpt - about two thousand characters, not your mailbox. When an email actually needs reading, it's fetched from the source, processed, and discarded, not copied into a second archive. Attachments stay in your inbox. Actions come back as deterministic receipts, not model prose. Deleting your account deletes everything, in the app. And the AI models are chosen by balancing capability against data terms - Remy's foreground chat runs on a zero-data-retention partner even though a marginally smarter frontier model exists. Per-provider terms, including pending items, are published at hey-remy.com/ai-model-providers."
---

You've probably done the mental math already. An assistant that reads your email would genuinely help - the school newsletter, the renewal you'll forget, the appointment you keep not booking. And then the second thought arrives: *so this thing is going to have... all my email?*

Hold onto that second thought. It's the right one. This month a viral assistant app got caught keeping plaintext copies of users' emails after they'd disconnected their accounts - no deletion button, and it would cheerfully export the whole stash to any address you typed. The users who found this weren't paranoid. They just asked.

I'm Rohit, the founder of Remy. I spent almost twenty years in the data industry before this, sitting across from both kinds of executives: the ones who maximize what can be extracted from data, and the ones who are principled about it. I know exactly how the sausage gets made, and I never could stomach the extraction side. So let me show you where Remy draws the lines - not as promises, as mechanics.

## The line on reading: an excerpt, not your mailbox

When you sign in, Remy indexes your mail: who, when, subject, plus a short excerpt of some messages - about two thousand characters, encrypted with our own keys. That's the whole default. Your mailbox does not get copied into our system.

That excerpt is enough for Remy to know *which* emails are worth reading. When one is - the newsletter with the deadline in paragraph four - Remy fetches it from the source, processes it, discards the body. No second archive. Attachments? They stay in your inbox. Remy doesn't copy them.

Compare that to "connect your account" apps that ingest everything on day one. Same permission screen, wildly different appetite. You can't see the difference from the outside - which is exactly why we're writing it down where you can hold us to it.

## The line on acting: receipts, not vibes

When Remy does something - sends the reply you approved, books the slot - the confirmation isn't the model *saying* it did it. It's a receipt card: a deterministic check, separate from the model's prose, that this happened or didn't. And nothing outward happens at all until you press and hold to approve it. You'd demand this from a human assistant. Demand it from a digital one.

## The line on leaving: delete means delete

Delete your account in the app and everything goes - every table, every row, the account itself. Here's my honest limit: I can't fully *prove* a deletion to you. My best demonstration is that if you re-onboard, you start from zero - and because these models are probabilistic, your second day-one won't even quite match your first. If you know a stronger proof a company could offer, I genuinely want to hear it.

## The line on models: chosen by terms, not just brains

Remy uses several AI providers. Which ones, per lane, including arrangements still pending - it's all published at [/ai-model-providers](/ai-model-providers), and it stays current.

One real decision so you can see the reasoning. For the foreground chat - where you type your instructions - we tested frontier models against the models our zero-data-retention partner hosts. A frontier model was marginally smarter. We kept the seat on zero-data-retention anyway: it gets the job done every time, it costs a hair of speed, and the thing processing your instructions is the last place to loosen data terms. Other lanes trade differently - the browser lane runs on an enterprise arrangement, training off, one exception request still pending, printed on the page. The rule isn't "never touch a big lab." It's: match the lane's data sensitivity to the strictest terms that still do the job, and show your work.

## The test to hold any assistant to

A real assistant's job depends on their boss's trust. They don't open drawers they weren't handed. If they do, they're fired. That's the standard Remy is built to - there's a setting on our roadmap for whether Remy may read attachments *before* attachment-reading itself ships, because the control comes first.

A lot of what makes Remy trustworthy is restraint you can't see from the surface. It's in the architecture. Remy should be as much a safeguard of your data as you are yourself - that's the bar, and you should hold every AI app to it, including ours.
