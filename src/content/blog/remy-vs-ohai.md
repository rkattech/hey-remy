---
title: "Remy vs Ohai: two different answers to the family-inbox problem"
description: "Ohai is a household manager you forward emails to. Remy is a personal assistant that already reads your Gmail, makes the calls, and acts with your approval. Which one fits depends on one question - answered plainly, with Ohai's own words."
heading: "Remy vs Ohai"
lede: "Both get recommended to parents drowning in school emails. They work in opposite ways. Here's the difference, with both companies' own words, and who should pick which."
eyebrow: "Comparison"
date: 2026-08-19
question: "What is the difference between Remy and Ohai?"
answer: "Ohai is a shared household manager: you forward emails, photos, and texts to it and it turns them into calendar events, lists, and reminders for your family Circle. Remy is a personal assistant that reads your Gmail and Google Calendar directly, catches what you'd miss, makes phone calls, fills forms, and drafts emails, each one held until you press and hold to approve. Ohai's privacy policy says it trains its algorithms on your interactions and that human assistants may review a subset of emails; Remy does not train on your data and uses zero-data-retention AI providers. Pick Ohai for a shared family hub with Android and SMS; pick Remy if you want one assistant that does the admin for you."
---

<div class="answer">
<p><b>The one-sentence version.</b> Ohai is a shared household manager you forward things to. Remy is a personal assistant that's already reading your inbox and does the thing, with your OK.</p>
<p><b>The one question that decides it.</b> Do you want a place where the family's schedule lives, or a person who handles your admin? Ohai is the first. Remy is the second.</p>
</div>

I'm the founder of Remy, so read this knowing that. I've tried to quote Ohai's own pages for every claim about Ohai, and to say plainly where Ohai is the better pick.

## What each one is, in its own words

**Ohai** calls itself "Your Household Manager for Calendars, To-Dos, Emails & Family Life." You text it, forward it emails, or upload screenshots and PDFs, and its assistant "O" pulls out the dates and adds them to a shared family calendar ("Circle"). It's on iPhone and Android and works over SMS. There's a free version; premium starts at $9.99 a month on their site (the App Store shows $14.99).

**Remy** is "the AI assistant for your life, not your job." You sign in with Google, and Remy reads your Gmail and Google Calendar on your behalf. It catches the line that matters in the long email, gives you a heads-up before things slip, makes phone calls for you, fills in forms, and drafts the reply - every action shown first and approved with a press-and-hold. iPhone only, free during the beta.

## The real difference: forwarding vs reading

Ohai's own help article says it directly: *"No, I am unable to view your inbox. I only have visibility on the emails that are sent directly to me."* You forward the school newsletter to o@ohai.ai, and Ohai extracts the dates.

That's a reasonable design. It also means the newsletter you didn't forward - because you didn't open it, because it came while you were driving - is the one you miss. Remy reads the inbox itself. The PTA newsletter arrives Tuesday at 6:12 AM; at 7:00 Remy says "Nathan's soccer registration closes Friday. I pulled the form for you." You didn't forward anything. You didn't open it.

```
Ohai:  email arrives
       → you notice it → you forward it
       → Ohai extracts the dates → shared calendar

Remy:  email arrives
       → Remy reads it → tells you the one line
       → pulls the form → you press and hold → done
```

## What happens after the date is found

Ohai's job mostly ends at the calendar: events, reminders, to-dos, lists, shared with your Circle. That's what a household hub is for.

Remy keeps going. It calls the pediatrician and comes back with "Thursday at 3:40" and the transcript. It fills in the county's registration-renewal form with your plate number and waits for your OK. It drafts the reply to the coach. It asks three contractors for gutter quotes with your photos and tracks the answers over a week. None of it happens without you pressing and holding.

If you don't want an assistant taking actions - you just want the schedule in one place where your partner and kids can see it - Ohai is the better tool for that, and so is a wall calendar like Skylight.

## Privacy: the part that decided it for me

Ohai's privacy policy (effective December 1, 2025) says it collects and records your interactions *"including training our algorithms to allow us to execute on your requests more efficiently,"* that *"Human Assistants may review a subset of emails to ensure correctness and improve model performance,"* and that calendar and contact data is shared with OpenAI.

I built Remy because I didn't want my family's life to be training material. Remy doesn't train models on your data, and no provider it uses may either - contractually, all of them. Most processing runs on zero-data-retention terms, and every lane's exact arrangement is public at [/ai-model-providers](/ai-model-providers). You can read the longer version in [Why I built Remy](/why).

## Pick Ohai if

- You want a **shared family hub** your partner and kids also use, with chores, lists, and a Circle.
- You're on **Android**, or you want to talk to it over **SMS**.
- You're fine forwarding things, and you'd rather the AI never acted in the world on your behalf.

## Pick Remy if

- You want the assistant to **read the inbox itself** and catch what you'd miss.
- You want it to **do the thing** - call, book, fill in, draft - after you approve it.
- You care that **your data trains nothing** and no human reviews your email.
- You're on **iPhone** and use **Gmail**.

## Remy is not for you if

- You need Android or a non-Google mailbox today.
- You want a shared calendar the whole household looks at. Remy is one person's assistant.
- You want to manage work tasks. Remy is for your life, not your job.

## What's true as of August 2026

Ohai: iOS + Android + SMS, free tier, premium from $9.99/mo (site) or $14.99 (App Store), forward-to-process, Google/Apple/Outlook calendar sync, Circles for sharing, trains on interactions per its policy. Remy: iPhone, beta, free, reads Gmail + Google Calendar directly, phone calls, forms, drafts, press-and-hold approvals, no training on your data. If any of this changes, this page gets updated and the date at the top moves.
