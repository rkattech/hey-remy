---
title: "The Fired Assistant Test: responsible vs. invasive data use in AI assistants"
description: "We trust human assistants with our email, calendar, and credit cards because breaking that trust gets them fired. Remy's founder applies the same standard to AI assistants: what Remy reads, what it keeps, what it discards, and the one thing he can't prove yet."
heading: "The Fired Assistant Test"
lede: "We trust human assistants with everything because breaking that trust has consequences. AI assistants should be judged the same way."
eyebrow: "From the founder"
date: 2026-08-22
draft: false
question: "How should an AI assistant handle my personal data responsibly?"
answer: "Judge an AI assistant the way you judge a human one: not just by its ability to wow you, but by whether the company behind it demonstrates verifiable transparency in its data practices. Remy's practices: it keeps metadata plus a short encrypted excerpt (about two thousand characters), not your mailbox; emails are read from the source, processed, and discarded; attachments are never copied; every action needs press-and-hold approval and comes back as a deterministic receipt; deleting your account deletes everything; and models are chosen by data terms, not just intelligence - the foreground chat runs on a zero-data-retention partner over a marginally smarter frontier model. Per-lane terms at hey-remy.com/ai-model-providers."
---

A human assistant has access to your email, your calendar, your credit card, your family's info and routines. Yet we trust them to use that information responsibly. How is that trust built? Sometimes it is from references you trusted when you hired them. Sometimes the person just seems honest. Sometimes it's a leap of faith. And the consequence of breaking that trust is that they get fired. Being fired means they no longer have access to your data and info. If you are really worried, you might even call the bank and change your credit card number.

Ultimately, the relationship works if you believe that your assistant has high moral and ethical standards in addition to being good at their job.

I think that's the right way to judge AI assistants too. Not just by their ability to wow us with their actions, but by their ability to demonstrate high moral and ethical standards in how they handle our data. It turns out that while the ability to wow has partly to do with the AI model capability and partly the orchestration around it, the moral and ethical standard has everything to do with the verifiable transparency of the company's data practices that built it.

So here are Remy's practices, made verifiable. I spent almost twenty years in the data industry before building Remy - long enough to know both kinds of companies, the ones that extract from personal data and the ones that treat it with care and respect. These are the lines that came out of that.

**We keep an excerpt, not your mailbox.** When you sign in, Remy indexes your mail: who wrote, when, the subject, plus a short excerpt of some messages - about two thousand characters, encrypted with our own keys. We think that is enough to do the job of an assistant, as opposed to invading your privacy. The excerpt tells Remy which emails are worth reading. The rest of your mailbox stays where it is.

**Emails are read from the source, then discarded.** When one actually needs reading, Remy fetches it, processes it, and the body is gone. There is no second archive of your email on our servers - so a breach, a subpoena, or a policy change can't touch what was never kept. One viral assistant app was just found keeping plaintext copies of users' emails after they disconnected. That is the choice we built against.

**Attachments are never copied.** They stay in your inbox.

**Nothing happens without your press-and-hold.** An email, a booking, a phone call - shown to you first, every time.

**When something happens, you get a receipt.** A model can say it sent an email; that is not evidence. Remy's receipt cards are a deterministic record from the system that did the thing, not the model's account of it. No receipt, it didn't happen.

**Delete means delete - and here is the part I can't prove.** Delete your account and all of it goes; we do not keep it. The only demonstration I have is that if you sign up again, you start from zero. I recognize that is a weak proof. If there is a better way to prove deletion to a user, I would love to adopt it.

**Models are chosen by data terms, not just intelligence.** We use several AI providers and publish which ones, per lane, including arrangements still pending, at [/ai-model-providers](/ai-model-providers). One real decision shows the balance: for the foreground chat, a frontier model tested marginally smarter - and we kept the seat on our zero-data-retention partner anyway. It gets the job done every single time, it is a teeny bit slower, and the lane that carries your instructions is the last place to relax data terms.

**The control ships before the capability.** A setting for whether Remy may read attachments is on the roadmap ahead of attachment-reading itself. There is a lot of this kind of restraint in Remy that you can't see from the surface.

And the consequence side works like it does with a person. If Remy ever failed this standard, you can revoke its Google access in one tap and delete everything it holds. The relationship continues only as long as the trust is earned. That is the test, and it applies to us.
