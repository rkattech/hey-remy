---
title: "The Fired Assistant Test: responsible vs. invasive data use in AI assistants"
description: "We trust human assistants with our email, calendar, and credit cards because trust has consequences: break it and you're fired. Remy's founder, twenty years in the data industry, applies the same standard to AI assistants - what Remy reads, what it keeps, what it discards, and the one thing he can't prove yet."
heading: "The Fired Assistant Test"
lede: "We trust human assistants with everything because breaking that trust has consequences. AI assistants should be judged the same way. Here is how that works, and where Remy stands - including the part I don't know how to prove."
eyebrow: "From the founder"
date: 2026-08-22
draft: false
question: "How should an AI assistant handle my personal data responsibly?"
answer: "Judge an AI assistant the way you judge a human one: not just by its ability to wow you, but by whether it demonstrates high moral and ethical standards with your data - and that comes down to verifiable transparency of the company's data practices. Remy's practices: it indexes metadata plus a short encrypted excerpt (about two thousand characters), not your mailbox; when an email needs reading it is read from the source, processed, and discarded; attachments are never copied; actions come back as deterministic receipt cards after press-and-hold approval; deleting your account deletes everything; and models are chosen by balancing capability against each provider's data terms - the foreground chat stays on a zero-data-retention partner over a marginally smarter frontier model. Per-lane terms, pending items included, at hey-remy.com/ai-model-providers."
---

A human assistant has access to your email, your calendar, your credit card, your family's info and routines. Yet we trust them to use that information responsibly. How is that trust built? Sometimes it is from references you trusted when you hired them. Sometimes the person just seems honest. Sometimes it's a leap of faith. And the consequence of breaking that trust is that they get fired. Being fired means they no longer have access to your data and info. If you are really worried, you might even call the bank and change your credit card number.

Ultimately, the relationship works if you believe that your assistant has high moral and ethical standards in addition to being good at their job.

I think that's the right way to judge AI assistants too. Not just by their ability to wow us with their actions, but by their ability to demonstrate high moral and ethical standards in how they handle our data. It turns out that while the ability to wow has partly to do with the AI model capability and partly the orchestration around it, the moral and ethical standard has everything to do with the verifiable transparency of the company's data practices that built it.

So this post is my attempt to make Remy's data practices verifiable. Not a summary of our values - the actual practices, including the ones still in progress and the one I don't know how to prove yet. I worked in the data industry for almost twenty years before building Remy, and I sat in rooms with both kinds of executives: the ones who wanted to maximize what could be extracted from data, and the ones who were principled about how it got used. I could never relate to the first kind. Especially when it comes to a person's personal information, I believe we have to treat it with care and respect. That belief shaped every practice below.

## What Remy reads, and what it keeps

When you sign in, Remy indexes your mail. Indexing here means the metadata - who wrote, when, the subject - plus a short excerpt of some messages, about two thousand characters, encrypted with our own keys. We think that is enough for Remy to do its job as an assistant, as opposed to invading your privacy. The excerpt is what lets Remy learn which emails are worth reading and which are not.

If and when an email actually needs to be read, it is read from the source, processed, and the body is discarded. We do not keep email bodies or attachments in our system. Attachments stay in your inbox; Remy does not copy them.

The other way to build this is to ingest everything on day one. It is easier to build, and the demo is flashier, because the assistant seems to know everything immediately. But it also means the company now holds a copy of your mailbox, and everything that can go wrong with a stored copy - a breach, a subpoena, a policy change, a bad employee - now applies to your email. One assistant app went viral this month, and users discovered it had kept plaintext copies of their emails even after they disconnected their accounts, with no way to delete them. That is what the ingest-everything choice looks like when someone finally checks. We chose the excerpt instead. The cost of our choice is that Remy sometimes has to go back to the source to read something, which is a little slower. We think that is the right trade.

## How you know what it actually did

A model can say it sent an email. Whether the email was actually sent is a separate fact, and a model's account of its own actions is not evidence. So in Remy, actions come back as receipt cards - a deterministic record produced by the system that performed the action, not by the model describing it. When something happened, there is a receipt. When there is no receipt, it did not happen.

And nothing outward happens without your approval in the first place. An email, a booking, a phone call - each one is shown to you, and you press and hold to approve it, or it does not happen.

## What happens when you leave

If you delete your account, all the data is deleted. We do not keep it.

The honest difficulty is proving that to you. The only demonstration I have today is that if you sign up again, you will go through onboarding from zero - and because these models are probabilistic, your second onboarding may even feel slightly different from your first. I recognize that is a weak proof. If there is a better way to prove to a user that their deleted data is gone, I would genuinely love to find it and adopt it.

## Which AI models it talks to, and on what terms

Remy uses AI models from a number of different providers, and we are transparent about which ones - and about the level of data each provider might keep. That includes the arrangements we have requested and not yet been granted. All of it is published at [/ai-model-providers](/ai-model-providers), and keeping that page current is part of the practice.

How we choose is a balance between three things: the level of capability the use case actually needs, the data rights and retention terms of the provider, and cost. We run a significant number of evaluations to find that balance, and one real decision shows how it works. For the foreground chat - the conversation where you give Remy instructions - we evaluated frontier models against the models our zero-data-retention partner hosts. A frontier model came out marginally better on intelligence. We chose the zero-data-retention seat anyway, because it still gets the job done every single time, it is only a teeny bit slower, and the lane that processes your instructions is the one where the most meaning about your life can be inferred from the data. Other lanes balance out differently - our web-browsing lane is moving to an enterprise arrangement with training switched off and one exception request still pending, and that state is printed on the page like everything else. We are not optimizing for the cheapest model or the fastest response. We are balancing cost, speed, and how much meaning can be inferred from the type of data each lane processes.

## The restraint you can't see

There is a lot of restraint in how Remy is built, and most of it is not visible from the surface. Some of it shows up as roadmap order: we plan to ship a setting that controls whether Remy may read attachments before we ship attachment-reading itself, because the control should exist before the capability. Some of it shows up as the question every builder in this space faces - the needs of the many versus the needs of the few - where the answer has to keep the user's trust front and center, not the flashier demo.

The consequence side matters too. A human assistant who breaks trust gets fired and loses access. An AI assistant should face the same deal: if Remy ever failed this standard, you can revoke its access to Google in one tap and delete everything it holds in the app. The relationship works the same way it does with a person - it continues only as long as the trust is earned. Remy is built to be as much a safeguard of your data as you are yourself.
