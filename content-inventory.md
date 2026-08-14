# Content Inventory — amirkhesro.com

Full capture of the existing WordPress site, taken **14 August 2026**, as the source of truth for the static rebuild. Every published page, blog post and shop product is listed below with its live URL and complete text content.

## How this was captured

- The live site is WordPress (Elementor page builder + WooCommerce shop), hosted on Hostinger behind Cloudflare.
- `www.amirkhesro.com` issues a 301 redirect to `amirkhesro.com` (no `www`). Canonical URLs below are the non-`www` form.
- Page and post bodies were taken from the WordPress REST API (`/wp-json/wp/v2/…`), which returns the exact rendered body of each page.
- Pages that render from a template rather than stored content (blog archive, shop, cart, account) were captured from the live HTML instead.
- Products were taken from the WooCommerce Store API (`/wp-json/wc/store/v1/products`).

## Site map at a glance

| # | Page | URL | Type |
|---|------|-----|------|
| 1 | Home | https://amirkhesro.com/ | Content |
| 2 | About Amir | https://amirkhesro.com/about/ | Content |
| 3 | Acoustic Neuroma | https://amirkhesro.com/acoustic-neuroma/ | Content |
| 4 | Whispers through the fog | https://amirkhesro.com/whispers-through-the-fog/ | Content |
| 5 | The Acoustic Neuroma Handbook | https://amirkhesro.com/the-acoustic-neuroma-handbook/ | Content |
| 6 | Book Shop | https://amirkhesro.com/book-shop/ | Content |
| 7 | Blogs | https://amirkhesro.com/blogs/ | Content |
| 8 | Connect | https://amirkhesro.com/connect/ | Content |
| 9 | Disclaimer | https://amirkhesro.com/disclaimer/ | Content |
| 10 | Shop | https://amirkhesro.com/shop/ | WooCommerce (system) |
| 11 | Cart | https://amirkhesro.com/cart/ | WooCommerce (system) |
| 12 | Checkout | https://amirkhesro.com/checkout/ | WooCommerce (system) |
| 13 | My account | https://amirkhesro.com/my-account/ | WooCommerce (system) |
| 14 | Whispers through the fog – Author Signed | https://amirkhesro.com/book/whispers-through-the-fog-author-signed/ | Product |
| 15 | The Acoustic Neuroma Handbook – Author Signed | https://amirkhesro.com/book/the-acoustic-neuroma-handbook-author-signed/ | Product |
| 16 | The “Why Me?” Question: Finding Peace After Acoustic Neuroma | https://amirkhesro.com/the-why-me-question-finding-peace-after-acoustic-neuroma/ | Blog post |
| 17 | How Much Do We Really Understand the Brain and Nervous System? | https://amirkhesro.com/how-much-do-we-really-understand-the-brain-and-nervous-system/ | Blog post |
| 18 | Patient Stories | https://amirkhesro.com/patient-stories/ | Blog post |
| 19 | When the Brain Loses Its Map: Navigation, Memory, and Acoustic Neuroma | https://amirkhesro.com/when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma/ | Blog post |
| 20 | Teaching With Acoustic Neuroma | https://amirkhesro.com/teaching-with-acoustic-neuroma/ | Blog post |
| 21 | What is Cerebrospinal Fluid and how does Acoustic Neuroma affect it? | https://amirkhesro.com/what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it/ | Blog post |
| 22 | Balance Problems in Acoustic Neuroma: When Walking Feels Like Being Drunk Without the Drink | https://amirkhesro.com/balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink/ | Blog post |
| 23 | When Half Your Face Goes Quiet After Surgery – Facial Numbness After Acoustic Neuroma Surgery Explained | https://amirkhesro.com/when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained/ | Blog post |
| 24 | You Have Just Been Diagnosed with Acoustic Neuroma | https://amirkhesro.com/you-have-just-been-diagnosed-with-acoustic-neuroma/ | Blog post |
| 25 | Tinnitus in Acoustic Neuroma: Understanding the Noise, the Science, and the Emotional Reality Behind It | https://amirkhesro.com/tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it/ | Blog post |
| 26 | The Cocktail Party Effect and Life With One Ear: Why Noise Becomes Exhausting | https://amirkhesro.com/the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting/ | Blog post |
| 27 | The Science of Sound Localisation and What It Feels Like to Lose It | https://amirkhesro.com/the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it/ | Blog post |
| 28 | From Hospital Bed to Standing Tall: Salford Face-to-Face Meeting | https://amirkhesro.com/from-hospital-bed-to-standing-tall-salford-face-to-face-meeting/ | Blog post |
| 29 | What Are CROS Hearing Aids and How Do They Help with Single-Sided Deafness? | https://amirkhesro.com/what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness/ | Blog post |
| 30 | Understanding the Translabyrinthine Approach to Acoustic Neuroma Surgery | https://amirkhesro.com/understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery/ | Blog post |
| 31 | Learning to Hear Again: Life with Single-Sided Deafness After Acoustic Neuroma | https://amirkhesro.com/learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma/ | Blog post |
| 32 | Understanding Fatigue in Acoustic Neuroma: What It Is, Why It Happens, and How to Manage It | https://amirkhesro.com/understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it/ | Blog post |
| 33 | Understanding Facial Numbness, Dry Eye, and Taste Changes After Acoustic Neuroma | https://amirkhesro.com/understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma/ | Blog post |
| 34 | From Surgery to Sand: My Leap Back to Life | https://amirkhesro.com/from-surgery-to-sand-my-leap-back-to-life/ | Blog post |
| 35 | Clearing the Haze: How to Cope with Mental Fog in Acoustic Neuroma | https://amirkhesro.com/clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma/ | Blog post |
| 36 | Brain Fog: It’s Not Just in Your Head, It’s in Your Brain | https://amirkhesro.com/brain-fog-its-not-just-in-your-head-its-in-your-brain/ | Blog post |
| 37 | After the Feast: A Rainy Walk, Warm Hearts, and the Road to Recovery | https://amirkhesro.com/after-the-feast-a-rainy-walk-warm-hearts-and-the-road-to-recovery/ | Blog post |
| 38 | Building Community Through Shared Stories | https://amirkhesro.com/building-community-through-shared-stories/ | Blog post |
| 39 | Facing the Fog: My Journey with Acoustic Neuroma | https://amirkhesro.com/facing-the-fog-my-journey-with-acoustic-neuroma/ | Blog post |

**Totals:** 13 pages · 2 shop products · 24 blog posts · 39 URLs in total.

Blog categories in use: **Whispers** (23 posts) and **Lived Experiences** (1 post).

---

## Global navigation

The header menu has one dropdown. **Book Shop** is not a link in the menu itself — it is a parent item (`href="#"`) that opens a submenu containing the two book pages. There is a separate `/book-shop/` page that the menu does not point at.

```
Home                          -> /
Acoustic Neuroma              -> /acoustic-neuroma/
Book Shop                     -> (dropdown, no link)
    Whispers through the fog      -> /whispers-through-the-fog/
    The Acoustic Neuroma Handbook -> /the-acoustic-neuroma-handbook/
Blogs                         -> /blogs/
Connect                       -> /connect/
About Amir                    -> /about/
```

All linked destinations found in the header:

- [Home](https://amirkhesro.com/)
- [Acoustic Neuroma](https://amirkhesro.com/acoustic-neuroma/)
- [Whispers through the fog](https://amirkhesro.com/whispers-through-the-fog/)
- [The Acoustic Neuroma Handbook](https://amirkhesro.com/the-acoustic-neuroma-handbook/)
- [Blogs](https://amirkhesro.com/blogs/)
- [Connect](https://amirkhesro.com/connect/)
- [About Amir](https://amirkhesro.com/about/)

Header text as rendered:

```
Skip to content

Home

Acoustic Neuroma

Book Shop

Whispers through the fog

The Acoustic Neuroma Handbook

Blogs

Connect

About Amir

Menu

Home

Acoustic Neuroma

Book Shop

Whispers through the fog

The Acoustic Neuroma Handbook

Blogs

Connect

About Amir
```

## Global footer

```
This website shares personal patient experiences and is not medical advice. Always consult your healthcare professional. Read Full Disclaimer

YouTubeSpotifyFacebookTikTokReddit

© 2026 All Rights Reserved.
```

Footer links:

- [Read Full Disclaimer](https://amirkhesro.com/disclaimer)

External / social links in the footer:

- [YouTube](https://www.youtube.com/@AcousticNeuromaSupport)
- [Spotify](https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0?si=5LN2acmWSeGoobhVT5Ewew)
- [Facebook](https://www.facebook.com/groups/1209862050611107)
- [TikTok](https://www.tiktok.com/@acousticneuroma?_t=ZN-8yKZbZhEAgY&_r=1)
- [Reddit](https://www.reddit.com/r/AcousticNeuromaHelp/)

---

# Part 1 — Pages

## Home

- **URL:** https://amirkhesro.com/
- **Slug:** `resources-hub`
- **WordPress page ID:** 2958

### Full text

```
Acoustic Neuroma Hub

An acoustic neuroma diagnosis raises more questions than most appointments have time for. This site brings together clear information on treatment and recovery, and the honest account of one patient who went through it, for those newly diagnosed and for the people around them

20+

Blogs

10+

Patient Resources

40+ 🎥

Videos & Podcast

🌍

Worldwide Community

Choose Your Journey

Whether you're newly diagnosed, exploring treatment options, recovering after surgery, or supporting a loved one, start with the information that matters most to you.

🩺

Newly Diagnosed

Understand what an Acoustic Neuroma is, common symptoms, MRI findings, and the questions to ask your healthcare team.

Start Here →

⚕️

Understanding Acoustic Neuroma

This guide runs from what the condition is, through treatment, to rebuilding an ordinary day.

Understand Acoustic-Neuroma →

💪

Recovery Hub

Practical advice for balance, hearing changes, facial nerve recovery, fatigue, cognitive fog, and returning to everyday life.

Recovery Resources →

📚

Patient Stories

Read real experiences from people and families navigating diagnosis, surgery, recovery, and long-term adjustment.

Read Stories →

🎥

Videos & Podcast

Prefer watching or listening? Access educational videos and podcast episodes wherever and whenever it suits you.

Watch & Listen →

🤝

Community Support

Connect with others who understand the journey. Share experiences, ask questions, and receive encouragement.

Join the Community →

Featured Books

One book to understand the diagnosis. One to understand what it feels like. Both written from the same experience.

Patient Memoir

Whispers Through the Fog

A personal memoir documenting diagnosis, brain surgery, recovery, hearing changes, balance challenges, and rebuilding life after Acoustic Neuroma.

📖 Paperback

📘 Hardcover

📱 eBook

✍️ Signed Copy

Learn More

Buy Now

Handbook

The Acoustic Neuroma Handbook

A practical guide explaining symptoms, diagnosis, MRI interpretation, treatment options, surgery, radiotherapy, recovery, and long-term living with Acoustic Neuroma.

📖 Paperback

📘 Hardcover

📱 eBook

✍️ Signed Copy

Learn More

Buy Now
```

### Links on this page

- [Start Here →](https://amirkhesro.com/you-have-just-been-diagnosed-with-acoustic-neuroma/)
- [Understand Acoustic-Neuroma →](https://amirkhesro.com/acoustic-neuroma/)
- [Recovery Resources →](https://amirkhesro.com/category/whispers/)
- [Read Stories →](https://amirkhesro.com/category/lived-experiences/)
- [Learn More](https://amirkhesro.com/whispers-through-the-fog/)
- [Buy Now](https://amirkhesro.com/book/whispers-through-the-fog-author-signed/)
- [Learn More](https://amirkhesro.com/the-acoustic-neuroma-handbook/)
- [Buy Now](https://amirkhesro.com/book/the-acoustic-neuroma-handbook-author-signed/)

### External links on this page

- [🌍 Worldwide Community](https://www.facebook.com/groups/1209862050611107/)
- [Watch & Listen →](https://youtube.com/@acousticneuromasupport)
- [Join the Community →](https://www.facebook.com/groups/1209862050611107/)

### Images used

- https://amirkhesro.com/wp-content/uploads/2026/02/3D-Mockup-768x708.webp
- https://amirkhesro.com/wp-content/uploads/2026/07/The-Acoustic-Neuroma-1-400x400.png

---

## About Amir

- **URL:** https://amirkhesro.com/about/
- **Slug:** `about`
- **WordPress page ID:** 2825

### Full text

```
Home
›
About Amir

Author • Researcher • Patient Advocate

Dr. Amir Khesro

Author of Whispers Through the Fog

From a farming village in Swat, Pakistan, to academic
life in England — and then through an unexpected
Acoustic Neuroma diagnosis — my journey has been shaped
by learning, reflection, recovery and the desire to help
others feel less alone.

My Story ↓

Acoustic Neuroma Hub

Dr. Amir Khesro

Author • Academic • Acoustic Neuroma Patient

🏔️

Swat, Pakistan

Where the journey began

🎓

PhD

Materials Science

📚

Author

Patient-focused books

🧠

AN Survivor

Lived experience

More than a biography

“

A Journey Between Logic and Introspection

I grew up in a farming village in Swat, Pakistan,
before my academic journey eventually took me to
England, where I earned a PhD in materials science.

For years, much of my life revolved around teaching,
research and the structured world of academic
thinking.

Then an Acoustic Neuroma diagnosis disrupted that
certainty and forced me to look at life through a
very different lens.

Recovery became not only a physical journey, but a
deeply personal one — involving uncertainty,
adaptation, patience and reflection.

That experience eventually became part of a
larger purpose:

to share what I learned, record what recovery really
felt like, and create resources for others walking
through the same unfamiliar territory.
```

### Links on this page

- [Home](https://amirkhesro.com/)
- [Acoustic Neuroma Hub](https://amirkhesro.com/acoustic-neuroma/)

### Images used

- https://amirkhesro.com/wp-content/uploads/elementor/thumbs/1-5-r6qi9czosgkvirx7kadzddqa8cz6v94l4vcjhbhdgw.png

---

## Acoustic Neuroma

- **URL:** https://amirkhesro.com/acoustic-neuroma/
- **Slug:** `acoustic-neuroma`
- **WordPress page ID:** 2956

### Full text

```
Home
›
Acoustic Neuroma

Understanding Acoustic Neuroma

Acoustic Neuroma

A clear starting point for understanding Acoustic Neuroma,
exploring treatment pathways, preparing for recovery,
and finding practical support from diagnosis onward.

Start Here ↓

Newly Diagnosed

🧠
Understanding AN

🩺
Symptoms

🔬
Diagnosis

⚕️
Treatment

💪
Recovery

Start with the basics

Understanding Acoustic Neuroma

An Acoustic Neuroma diagnosis can introduce a lot of
unfamiliar information at once. This hub is designed
to make that information easier to navigate.

Explore the condition step by step, from symptoms and
diagnosis to treatment decisions, recovery and
adapting to everyday life.

You do not have to absorb everything at once.
Start with the section that is most relevant to where
you are in your own journey.

Recently diagnosed?

Begin with the newly diagnosed guide for a simpler
introduction and useful questions to consider for
conversations with your healthcare team.

Information. Experience. Support.

Resources created to help make an unfamiliar
journey easier to understand.

Understanding the journey

What You May Want to Explore

Acoustic Neuroma can affect different parts of everyday
life. These guides help you explore the subjects that may
matter during diagnosis, treatment and recovery.

👂

Hearing Changes

Explore information relating to hearing changes,
communication and adjusting to a different hearing
experience.

⚖️

Balance

Find resources covering balance challenges,
rehabilitation and gradually rebuilding confidence
with movement.

🙂

Facial Nerve

Read practical information and patient experiences
relating to facial nerve changes and recovery.

🔋

Fatigue

Explore discussions around fatigue, energy management
and the process of returning to everyday routines.

🧩

Cognitive Changes

Learn from resources addressing concentration,
cognitive fog and adapting during the recovery period.

❤️

Emotional Wellbeing

Explore patient perspectives on the emotional side of
diagnosis, treatment, recovery and long-term adjustment.

Recognising changes

Symptoms & Experiences

Experiences can vary from person to person. Explore the
areas commonly discussed by Acoustic Neuroma patients and
learn what questions may be useful to raise with your
healthcare team.

👂

Hearing

Information and lived experiences relating to
changes in hearing.

🔔

Tinnitus

Resources exploring tinnitus and its impact on
everyday life.

⚖️

Balance

Patient information relating to balance,
dizziness and movement.

🙂

Facial Sensation

Explore resources concerning facial sensation
and facial nerve experiences.

🧠

Concentration

Experiences involving mental fatigue,
concentration and cognitive adjustment.

💬

Questions & Concerns

Prepare questions and topics to discuss during
appointments with your medical team.

Making sense of the process

From Symptoms to Diagnosis

Understanding the stages around diagnosis can make
appointments and medical information feel easier to
navigate.

1

Recognising a Change

The journey may begin when a hearing, balance or
another unexplained change leads to further
investigation.

2

Clinical Assessment

Your healthcare team may discuss your symptoms,
medical history and appropriate investigations.

3

Imaging & Results

Understanding medical terminology and imaging
reports can help you prepare better questions for
your specialist.

4

Discussing Your Options

Once the diagnosis is understood, the next stage
is discussing the available pathways with your
treating team.

Exploring your options

Treatment Pathways

Treatment decisions are individual. Use these resources
to understand the terminology and prepare for informed
conversations with your specialist team.

01

👁️

Monitoring

Explore information about observation and ongoing
monitoring, including useful questions for follow-up
appointments.

Learn About Monitoring →

02

🏥

Surgery

Understand the surgical journey, preparing for
treatment, hospital experiences and the recovery
period that follows.

Explore Surgery →

03

🎯

Radiotherapy

Explore resources explaining radiotherapy terminology,
the patient journey and questions to discuss with your
medical team.

Explore Radiotherapy →

Life after treatment

Recovery Is a Journey

Recovery can involve physical, practical and emotional
adjustments. Explore resources based around the issues
patients often want to understand after treatment.

⚖️

Balance Recovery

Resources for understanding balance rehabilitation
and adapting to movement again.

👂

Hearing Changes

Practical information about adapting to changes in
hearing and communication.

🙂

Facial Recovery

Information and lived experiences relating to facial
nerve recovery.

🔋

Managing Fatigue

Explore pacing, energy management and returning
gradually to everyday routines.

🧠

Cognitive Fog

Read about concentration, mental fatigue and adapting
during recovery.

🏡

Everyday Life

Explore returning to work, family responsibilities
and rebuilding confidence.

Find what you need

Continue Your Journey

Choose the resource that best matches where you are right
now.

🩺

Newly Diagnosed

Start here after receiving an Acoustic Neuroma
diagnosis.

→

💪

Recovery Hub

Practical resources for recovery and everyday life.

→

📖

Patient Stories

Read experiences from patients and their families.

→

🎥

Videos & Podcast

Watch and listen to Acoustic Neuroma discussions.

→

A practical patient guide

The Acoustic Neuroma Handbook

A dedicated guide bringing together information on
symptoms, diagnosis, treatment, recovery and living
with Acoustic Neuroma.

Learn More

Get a Signed Copy

You Don't Have to Navigate This Alone

Connect with people from around the world who understand the
Acoustic Neuroma journey, share experiences and support one
another.

🌍 Join the Worldwide Community
```

### Links on this page

- [Home](https://amirkhesro.com/)
- [Newly Diagnosed](https://amirkhesro.com/you-have-just-been-diagnosed-with-acoustic-neuroma/)
- [🩺 Newly Diagnosed Start here after receiving an Acoustic Neuroma diagnosis. →](https://amirkhesro.com/you-have-just-been-diagnosed-with-acoustic-neuroma/)
- [💪 Recovery Hub Practical resources for recovery and everyday life. →](https://amirkhesro.com/category/whispers/)
- [📖 Patient Stories Read experiences from patients and their families. →](https://amirkhesro.com/category/lived-experiences/)
- [Learn More](https://amirkhesro.com/the-acoustic-neuroma-handbook/)
- [Get a Signed Copy](https://amirkhesro.com/book/the-acoustic-neuroma-handbook-author-signed/)

### External links on this page

- [🎥 Videos & Podcast Watch and listen to Acoustic Neuroma discussions. →](https://youtube.com/@acousticneuromasupport)
- [🌍 Join the Worldwide Community](https://www.facebook.com/groups/1209862050611107/)

### Images used

- https://amirkhesro.com/wp-content/uploads/2026/07/The-Acoustic-Neuroma-1-400x400.png

---

## Whispers through the fog

- **URL:** https://amirkhesro.com/whispers-through-the-fog/
- **Slug:** `whispers-through-the-fog`
- **WordPress page ID:** 2954

### Full text

```
Whispers through the fog

A Journey through a Brain Tumour: Acoustic Neuroma

#1 Best Seller Memoir in Brain Diseases

A raw, unfiltered memoir that does not perform resilience but lives it, this book has resonated deeply with readers, earning more than 95 % five star ratings because it tells the truth without comfort, polish, or pretence.

Whispers Through The Fog

Available Now

Choose your preferred edition and order from your favorite store.

✍️ Author Signed Copy

Order from Author

📖 Paperback

Order from Amazon Order from Ingram

📘 Hardcover

Order from Amazon Order from Ingram

📱 eBook

Read on Any Device

“In the culture I come from, we do not name depression. We call it tiredness. Weakness. A lack of faith. We speak of being strong for our families, for our children, for God. But no one teaches you how to be strong when the enemy is inside your own skull”

— Whispers Through the Fog by Amir Khesro

“A brilliantly executed account — humbling, inspiring, and honest. I couldn’t put it down. The openness and humour made it deeply human, and the strength drawn from family and community shines through every page.”

— Andrea Wadeson, Acoustic Neuroma Specialist Nurse

If you have ever felt unseen in your illness — or feared you were no longer whole — this book will meet you gently and remind you:

You already are. Just differently.

Purpose

I wrote Whispers Through the Fog as a way to process my experience — to give shape to silence and find clarity through writing. It’s also a thank you to those who stood beside me with patience and love during my recovery. Above all, this book is a gesture of companionship — for anyone facing acoustic neuroma or any quiet struggle of life. You’re not alone in the fog.

Motivation

My motivation was simple and urgent: to turn something painful into something useful. To tell the truth, even when it trembled. And to offer that truth to anyone who might need it.

Inside the Pages

A journey through illness and identity

Moments of stillness, fear, and quiet strength

Reflections on recovery, grief, and unexpected grace

Who Should Read This Book?

Anyone diagnosed with an acoustic neuroma or other brain tumor

People navigating chronic illness, recovery, or invisible conditions

Caregivers, partners, and loved ones supporting someone through illness

Survivors of life-altering diagnoses who feel silenced or isolated

Readers drawn to memoirs of resilience, identity, and healing

Anyone feeling lost, paused, or redefined by a sudden change

Those who believe in the power of reflection, stillness, and story

Goodreads reviews for Whispers through the fog

Reviews from Goodreads.com
```

### Links on this page

- [Order from Author](https://amirkhesro.com/book/whispers-through-the-fog-author-signed/)

### External links on this page

- [https://mybook.to/acousticneuroma](https://mybook.to/acousticneuroma)
- [Order from Amazon](https://mybook.to/acousticneuroma)
- [Order from Ingram](https://mybook.to/acousticneuroma)
- [Read on Any Device](https://books2read.com/acoustic-neuroma)
- [Goodreads reviews for Whispers through the fog](https://www.goodreads.com/book/show/236557098-whispers-through-the-fog)
- [Reviews from Goodreads.com](https://www.goodreads.com/book/show/236557098-whispers-through-the-fog?utm_medium=api&utm_source=reviews_widget)

### Images used

- https://amirkhesro.com/wp-content/uploads/2026/02/3D-Mockup-1024x944.webp

---

## The Acoustic Neuroma Handbook

- **URL:** https://amirkhesro.com/the-acoustic-neuroma-handbook/
- **Slug:** `the-acoustic-neuroma-handbook`
- **WordPress page ID:** 4844

### Full text

```
The Acoustic Neuroma Handbook: From Diagnosis to Recovery and Beyond

A clear, plain English guide to acoustic neuroma, written by a patient who has been through it. It follows the whole path, from the scan that names the tumour, through monitoring, surgery and radiotherapy, to recovery and the years that follow. No clinical distance, no false reassurance, and nothing you need a medical degree to read. With a foreword by Andrea Wadeson, Skull Base Clinical Nurse Specialist.

The Acoustic Neuroma Handbook

Available Now

Choose your preferred edition and order from your favorite store.

✍️ Author Signed Copy

Order from Author

📖 Paperback

Order from Amazon Order from Ingram

📘 Hardcover

Order from Amazon Order from Ingram

📱 eBook

Read on Any Device

“This condition is serious. It is also manageable. Those two things are not contradictory.” The Acoustic Neuroma Hand Book

“This book will act as a source of information and reference for those newly diagnosed, awaiting treatment or just wanting to understand the potential path ahead. It is a comprehensive guide specific to this rare condition and I encourage all who have a direct connection with AN/VS, patients and clinicians alike, to read on.” Andrea Wadeson, Skull Base Clinical Nurse Specialist.

If you have just been told you have an acoustic neuroma, this book will sit with you through the parts no appointment has time for, and answer the questions that arrive at two in the morning.

Purpose

here is no shortage of clinical information about acoustic neuroma, and there is no shortage of personal stories. What has been missing is the ground between them. The clinical material is accurate but written for clinicians. The stories are honest and comforting, but one person’s experience is not a map. This handbook fills that gap. It puts the medical detail into plain language and sets it alongside lived experience, so that both are doing their proper job.

It is not only a story. It is a map. It follows the whole path in order, from the scan that names the tumour, through monitoring, surgery and radiotherapy, to recovery and the years that follow, and it gathers into one place the information that is otherwise scattered across leaflets, forum threads, appointments that end too soon and search results that frighten more than they help. This is the information every person diagnosed with an acoustic neuroma deserves to have, in one book, written for the patient in the room rather than the clinician across the desk.

Motivation

My motivation was to make something useful out of something difficult. After my own diagnosis I read medical articles, research papers, patient forums and personal accounts, trying to understand what was happening to me, and I wrote about it as I went. People kept asking the same question: could this be in print, something they could hold, or hand to a family member. This book is my answer. It is honest about uncertainty, specific about the practical questions, and willing to talk about hearing loss, balance, fatigue, brain fog, facial nerve function and fear without dressing any of it up.

Inside the Pages

What an acoustic neuroma is, how it is found, and what your scan and hearing tests are telling you

The one ear world, balance, fatigue, brain fog, and the emotional and psychological impact

Relationships, family and caring, navigating the NHS, and the reality of work and money

Making a decision under uncertainty, and what watch and wait actually involves

Surgery, preparation, and post surgical complications and recovery

Radiation explained side by side: Gamma Knife, CyberKnife, LINAC and fractionated radiotherapy

Long term living at one, five and ten years, and the question of why this happened to you

An In Brief summary at the end of every chapter, a treatment decision worksheet, a resources section and a full index

Who Should Read This Book?

This handbook follows the condition through every stage, so it is written to be useful wherever you are on the path. If you have just been diagnosed you will need it most, because everything is here in one place and you will not have to gather it yourself.

Newly diagnosed patients, who will find the whole picture in one book instead of scattered across leaflets, forums and search results

Patients on active surveillance who want to understand what is being watched, why, and what would change the plan

Anyone weighing a treatment decision, including surgery, Gamma Knife, CyberKnife, LINAC and fractionated radiotherapy

Patients preparing for surgery, and those working through recovery and complications afterwards

Anyone living with the long term effects: single sided hearing, balance, fatigue, brain fog and the emotional load

Patients at one, five and ten years out who want to know what long term living with this condition looks like

Partners, family members, carers and friends who want to understand the parts that are not visible from the outside

Clinicians, specialist nurses and support group volunteers looking for a patient facing reference to recommend

Wherever you are on this path, you should not have to assemble the information yourself. It is already here.

Sufyan

Jul 28, 2026

by Sufyan

Test

ste

Submit your review

Name:

Email:

Website:

Review Title:

Rating:

1

2

3

4

5

Review:

Check this box to confirm you are human.

Submit

Cancel

Create your own review

Dr Amir Khesro

Average rating:

1 reviews

Sufyan

Jul 28, 2026

by Sufyan

Test

ste
```

### Links on this page

- [Order from Author](https://amirkhesro.com/book/the-acoustic-neuroma-handbook-author-signed/)

### External links on this page

- [Order from Amazon](https://mybook.to/acousticneuroma)
- [Order from Ingram](https://mybook.to/acousticneuroma)
- [Read on Any Device](https://books2read.com/acoustic-neuroma)

### Images used

- https://amirkhesro.com/wp-content/uploads/2026/07/The-Acoustic-Neuroma-1.png

---

## Book Shop

- **URL:** https://amirkhesro.com/book-shop/
- **Slug:** `book-shop`
- **WordPress page ID:** 4803

### Full text

```
Book Shop

Dr. Amir Khesro

A material scientist by training, a teacher by heart and a story teller by necessity

About us

Legal services you can trust.

Sed risus ultricies tristique nulla aliquet enim tortor at. Dictum varius duis at consectetur. Faucibus in ornare quam viverra orci. Sapien pellentesque habitant morbi tristique senectus et netus. Nulla aliquet enim tortor at. Nunc consequat interdum varius sit.

Our Mission

Faucibus in ornare quam viverra orci. Sapien pellentesque habitant morbi tristique senectus et netus. Nulla aliquet enim tortor at.

Our Vision

Faucibus in ornare quam viverra orci. Sapien pellentesque habitant morbi tristique senectus et netus. Nulla aliquet enim tortor at.

our clients

Siverra lectus mauris ultrices eros in. Eget egestas purus viverra accumsan in nisl nulla nisi scelerisque euvestibulum sed risus ultricies.

Bakken Inc

Marketing

Welle LTD

AD Agency

Aasen Co.

Design Firm

Manage Lty

Managment
```

### Images used

- https://amirkhesro.com/wp-content/uploads/2025/06/client01.png
- https://amirkhesro.com/wp-content/uploads/2025/06/client3.png
- https://amirkhesro.com/wp-content/uploads/2025/06/client2.png
- https://amirkhesro.com/wp-content/uploads/2025/06/client4.png

---

## Blogs

- **URL:** https://amirkhesro.com/blogs/
- **Slug:** `blogs`
- **WordPress page ID:** 2952

_This page renders from a template rather than stored content. Captured from the live page._

### Full text

```
The “Why Me?” Question: Finding Peace After Acoustic Neuroma

Leave a Comment / Whispers /

Amir Khesro

/ May 24, 2026

One question returns again and again in the minds of many patients: Why me? If this condition is rare, why did it happen to me?Was it punishment?Was it fate?Was it bad luck?Was there some reason behind it at all? I asked myself these questions repeatedly after my diagnosis. Some nights I searched for religious answers. […]

The “Why Me?” Question: Finding Peace After Acoustic Neuroma Read More »

How Much Do We Really Understand the Brain and Nervous System?

2 Comments / Whispers /

Amir Khesro

/ March 10, 2026

A recent CT scan showed no new changes in my brain. Structurally, everything appears stable. In medical terms that should be reassuring. Yet my body seems to be telling a slightly different story. The facial numbness I have been experiencing continues to shift and in some areas it has become more noticeable. When tests suggest

How Much Do We Really Understand the Brain and Nervous System? Read More »

Patient Stories

Leave a Comment / Lived Experiences /

Amir Khesro

/ February 22, 2026

To be shared soon

Patient Stories Read More »

When the Brain Loses Its Map: Navigation, Memory, and Acoustic Neuroma

3 Comments / Whispers /

Amir Khesro

/ January 22, 2026

Some people can travel a route once and never forget it. They seem to carry an internal map that guides them effortlessly. Others manage reasonably well. They may miss a turn, but they reorient themselves and carry on. And then there are people who hesitate at junctions, second guess every decision, and feel unsure even in places they know well.

When the Brain Loses Its Map: Navigation, Memory, and Acoustic Neuroma Read More »

Teaching With Acoustic Neuroma

Leave a Comment / Whispers /

Amir Khesro

/ January 17, 2026

When you live with acoustic neuroma, teaching becomes more than a job. It becomes an ongoing negotiation between what your body can give and what the classroom continually demands. We have already talked about what acoustic neuroma can bring with it. Mental fog that slows thinking. Fatigue that is not relieved by sleep. Single sided

Teaching With Acoustic Neuroma Read More »

What is Cerebrospinal Fluid and how does Acoustic Neuroma affect it?

4 Comments / Whispers /

Amir Khesro

/ January 5, 2026

Cerebrospinal Fluid, or CSF, sounds like a complex medical term, but the idea behind it is simple. It is the system that allows a soft, delicate brain to live safely inside a hard, rigid skull. When an acoustic neuroma enters that closed space, this balance can be disturbed. You do not need medical training to

What is Cerebrospinal Fluid and how does Acoustic Neuroma affect it? Read More »

Balance Problems in Acoustic Neuroma: When Walking Feels Like Being Drunk Without the Drink

12 Comments / Whispers /

Amir Khesro

/ December 27, 2025

For many people living with acoustic neuroma, balance problems are harder to explain than hearing loss, but often far more disruptive. They rarely begin with dramatic spinning. Instead, they creep in quietly. You walk and feel as if the ground is slightly tilted. You drift to one side without meaning to. You hesitate before stepping

Balance Problems in Acoustic Neuroma: When Walking Feels Like Being Drunk Without the Drink Read More »

When Half Your Face Goes Quiet After Surgery – Facial Numbness After Acoustic Neuroma Surgery Explained

1 Comment / Whispers /

Amir Khesro

/ December 20, 2025

I have previously written about listening difficulties, fatigue, and brain fog after acoustic neuroma. But these are not the only challenges people face. The acoustic neuroma tumour sits in an area that is rich in nerves. As it grows, it does not only affect hearing and balance. It can begin pressing on nearby nerves, and

When Half Your Face Goes Quiet After Surgery – Facial Numbness After Acoustic Neuroma Surgery Explained Read More »

You Have Just Been Diagnosed with Acoustic Neuroma

7 Comments / Whispers /

Amir Khesro

/ December 16, 2025

First, pause. You are not in immediate danger.You do not need to decide anything today.Your life is not ending, but it has changed. What This Diagnosis Means and What It Does Not Acoustic neuroma is a benign tumour. That means it is not cancer and it does not spread to other parts of the body.

You Have Just Been Diagnosed with Acoustic Neuroma Read More »

Tinnitus in Acoustic Neuroma: Understanding the Noise, the Science, and the Emotional Reality Behind It

7 Comments / Whispers /

Amir Khesro

/ November 23, 2025

Tinnitus is one of those symptoms that slips into your life quietly, almost politely at first. A faint tone. A soft hum. A sound that does not belong to the world around you. And before you realise it, it becomes something that follows you from place to place. For many acoustic neuroma patients, tinnitus becomes

Tinnitus in Acoustic Neuroma: Understanding the Noise, the Science, and the Emotional Reality Behind It Read More »

The Cocktail Party Effect and Life With One Ear: Why Noise Becomes Exhausting

9 Comments / Whispers /

Amir Khesro

/ November 14, 2025

In my previous blog, The Science of Sound Localisation and What It Feels Like to Lose It, I explored how the brain identifies where sounds come from and how that sense of direction disappears when one ear stops working. If you missed it, you can read it here: The Science of Sound Localisation and What

The Cocktail Party Effect and Life With One Ear: Why Noise Becomes Exhausting Read More »

The Science of Sound Localisation and What It Feels Like to Lose It

17 Comments / Whispers /

Amir Khesro

/ November 7, 2025

Discover how the brain locates sound, what happens when one ear goes silent, and how to adapt after single sided deafness.

The Science of Sound Localisation and What It Feels Like to Lose It Read More »

From Hospital Bed to Standing Tall: Salford Face-to-Face Meeting

1 Comment / Whispers /

Amir Khesro

/ September 21, 2025

On 20 September 2025, I had the privilege of being part of the Salford Face-to-Face Meeting, hosted by the wonderful Andrea Wadeson and supported by the British Acoustic Neuroma Association (BANA). This gathering was more than just a meeting; it was a celebration of courage, resilience, and community. Walking into the lecture theatre at Salford

From Hospital Bed to Standing Tall: Salford Face-to-Face Meeting Read More »

What Are CROS Hearing Aids and How Do They Help with Single-Sided Deafness?

5 Comments / Whispers /

Amir Khesro

/ August 14, 2025

Living with single-sided deafness (SSD) can be frustrating. You may miss conversations on one side, have to constantly turn your head, and feel left out in group discussions. However, technology can help. In this post, I will share my experience with the Oticon CROS hearing aid that I received free through the NHS. I will

What Are CROS Hearing Aids and How Do They Help with Single-Sided Deafness? Read More »

Understanding the Translabyrinthine Approach to Acoustic Neuroma Surgery

3 Comments / Whispers /

Amir Khesro

/ July 30, 2025

This is a patient-to-patient account of the translabyrinthine approach. I am not a medical professional. I am sharing my experience and understanding in the hope that it helps others who are facing the same road. When I first saw the name, I could not even pronounce it — translabyrinthine. I still struggle to. It sounded

Understanding the Translabyrinthine Approach to Acoustic Neuroma Surgery Read More »

Learning to Hear Again: Life with Single-Sided Deafness After Acoustic Neuroma

5 Comments / Whispers /

Amir Khesro

/ July 25, 2025

As promised with a reader, today I am offering a blend of insight and personal reflection on single-sided deafness caused by acoustic neuroma. Remember, my blogs are an attempt to make sense of my diagnosis and should not be considered medical advice. For diagnosis, treatment, or any health decisions, always consult medical professionals. The tumour,

Learning to Hear Again: Life with Single-Sided Deafness After Acoustic Neuroma Read More »

Understanding Fatigue in Acoustic Neuroma: What It Is, Why It Happens, and How to Manage It

6 Comments / Whispers /

Amir Khesro

/ July 12, 2025

Living with an acoustic neuroma doesn’t just affect your hearing or balance—it can completely drain your energy. Fatigue is one of those life-altering symptoms of AN, which is often misunderstood and sometime confused with tiredness. This blog breaks it down into three key areas: 1. What Is Fatigue? Fatigue isn’t the same as being tired.

Understanding Fatigue in Acoustic Neuroma: What It Is, Why It Happens, and How to Manage It Read More »

Understanding Facial Numbness, Dry Eye, and Taste Changes After Acoustic Neuroma

8 Comments / Whispers /

Amir Khesro

/ July 5, 2025

Living with the aftermath of acoustic neuroma surgery can be confusing, frustrating, and at times, deeply isolating. Some common symptoms include facial numbness, weakness in jaw, constant dryness in the eye, and a strange, salty or metallic taste that comes and goes. In my case, I also notice small cuts on my tongue and an

Understanding Facial Numbness, Dry Eye, and Taste Changes After Acoustic Neuroma Read More »

From Surgery to Sand: My Leap Back to Life

9 Comments / Whispers /

Amir Khesro

/ June 29, 2025

The invitation came from Mushtaq, a dear friend from Swat now settled in the UK. He welcomed us to Liverpool for a much-needed break — a chance to get out, breathe, and spend a day by the sea. I was not expecting anything extraordinary. But what followed would become a memorable day in my recovery

From Surgery to Sand: My Leap Back to Life Read More »

Clearing the Haze: How to Cope with Mental Fog in Acoustic Neuroma

4 Comments / Whispers /

Amir Khesro

/ June 17, 2025

In my previous post, I explored how brain fog in acoustic neuroma (AN) is more than just a side effect of stress—it’s a genuine neurological phenomenon. Many of you shared your stories, and one theme stood out: “Now that I understand what’s happening, what can I do about it?” While you may be waiting for

Clearing the Haze: How to Cope with Mental Fog in Acoustic Neuroma Read More »
```

### Links on this page

- [The “Why Me?” Question: Finding Peace After Acoustic Neuroma](https://amirkhesro.com/the-why-me-question-finding-peace-after-acoustic-neuroma/)
- [Leave a Comment](https://amirkhesro.com/the-why-me-question-finding-peace-after-acoustic-neuroma/#respond)
- [Whispers](https://amirkhesro.com/category/whispers/)
- [Amir Khesro](https://amirkhesro.com/author/amir/)
- [The “Why Me?” Question: Finding Peace After Acoustic Neuroma Read More »](https://amirkhesro.com/the-why-me-question-finding-peace-after-acoustic-neuroma/)
- [How Much Do We Really Understand the Brain and Nervous System?](https://amirkhesro.com/how-much-do-we-really-understand-the-brain-and-nervous-system/)
- [2 Comments](https://amirkhesro.com/how-much-do-we-really-understand-the-brain-and-nervous-system/#comments)
- [How Much Do We Really Understand the Brain and Nervous System? Read More »](https://amirkhesro.com/how-much-do-we-really-understand-the-brain-and-nervous-system/)
- [Patient Stories](https://amirkhesro.com/patient-stories/)
- [Leave a Comment](https://amirkhesro.com/patient-stories/#respond)
- [Lived Experiences](https://amirkhesro.com/category/lived-experiences/)
- [Patient Stories Read More »](https://amirkhesro.com/patient-stories/)
- [When the Brain Loses Its Map: Navigation, Memory, and Acoustic Neuroma](https://amirkhesro.com/when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma/)
- [3 Comments](https://amirkhesro.com/when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma/#comments)
- [When the Brain Loses Its Map: Navigation, Memory, and Acoustic Neuroma Read More »](https://amirkhesro.com/when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma/)
- [Teaching With Acoustic Neuroma](https://amirkhesro.com/teaching-with-acoustic-neuroma/)
- [Leave a Comment](https://amirkhesro.com/teaching-with-acoustic-neuroma/#respond)
- [Teaching With Acoustic Neuroma Read More »](https://amirkhesro.com/teaching-with-acoustic-neuroma/)
- [What is Cerebrospinal Fluid and how does Acoustic Neuroma affect it?](https://amirkhesro.com/what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it/)
- [4 Comments](https://amirkhesro.com/what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it/#comments)
- [What is Cerebrospinal Fluid and how does Acoustic Neuroma affect it? Read More »](https://amirkhesro.com/what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it/)
- [Balance Problems in Acoustic Neuroma: When Walking Feels Like Being Drunk Without the Drink](https://amirkhesro.com/balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink/)
- [12 Comments](https://amirkhesro.com/balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink/#comments)
- [Balance Problems in Acoustic Neuroma: When Walking Feels Like Being Drunk Without the Drink Read More »](https://amirkhesro.com/balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink/)
- [When Half Your Face Goes Quiet After Surgery – Facial Numbness After Acoustic Neuroma Surgery Explained](https://amirkhesro.com/when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained/)
- [1 Comment](https://amirkhesro.com/when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained/#comments)
- [When Half Your Face Goes Quiet After Surgery – Facial Numbness After Acoustic Neuroma Surgery Explained Read More »](https://amirkhesro.com/when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained/)
- [You Have Just Been Diagnosed with Acoustic Neuroma](https://amirkhesro.com/you-have-just-been-diagnosed-with-acoustic-neuroma/)
- [7 Comments](https://amirkhesro.com/you-have-just-been-diagnosed-with-acoustic-neuroma/#comments)
- [You Have Just Been Diagnosed with Acoustic Neuroma Read More »](https://amirkhesro.com/you-have-just-been-diagnosed-with-acoustic-neuroma/)
- [Tinnitus in Acoustic Neuroma: Understanding the Noise, the Science, and the Emotional Reality Behind It](https://amirkhesro.com/tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it/)
- [7 Comments](https://amirkhesro.com/tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it/#comments)
- [Tinnitus in Acoustic Neuroma: Understanding the Noise, the Science, and the Emotional Reality Behind It Read More »](https://amirkhesro.com/tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it/)
- [The Cocktail Party Effect and Life With One Ear: Why Noise Becomes Exhausting](https://amirkhesro.com/the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting/)
- [9 Comments](https://amirkhesro.com/the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting/#comments)
- [The Cocktail Party Effect and Life With One Ear: Why Noise Becomes Exhausting Read More »](https://amirkhesro.com/the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting/)
- [The Science of Sound Localisation and What It Feels Like to Lose It](https://amirkhesro.com/the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it/)
- [17 Comments](https://amirkhesro.com/the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it/#comments)
- [The Science of Sound Localisation and What It Feels Like to Lose It Read More »](https://amirkhesro.com/the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it/)
- [From Hospital Bed to Standing Tall: Salford Face-to-Face Meeting](https://amirkhesro.com/from-hospital-bed-to-standing-tall-salford-face-to-face-meeting/)
- [1 Comment](https://amirkhesro.com/from-hospital-bed-to-standing-tall-salford-face-to-face-meeting/#comments)
- [From Hospital Bed to Standing Tall: Salford Face-to-Face Meeting Read More »](https://amirkhesro.com/from-hospital-bed-to-standing-tall-salford-face-to-face-meeting/)
- [What Are CROS Hearing Aids and How Do They Help with Single-Sided Deafness?](https://amirkhesro.com/what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness/)
- [5 Comments](https://amirkhesro.com/what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness/#comments)
- [What Are CROS Hearing Aids and How Do They Help with Single-Sided Deafness? Read More »](https://amirkhesro.com/what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness/)
- [Understanding the Translabyrinthine Approach to Acoustic Neuroma Surgery](https://amirkhesro.com/understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery/)
- [3 Comments](https://amirkhesro.com/understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery/#comments)
- [Understanding the Translabyrinthine Approach to Acoustic Neuroma Surgery Read More »](https://amirkhesro.com/understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery/)
- [Learning to Hear Again: Life with Single-Sided Deafness After Acoustic Neuroma](https://amirkhesro.com/learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma/)
- [5 Comments](https://amirkhesro.com/learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma/#comments)
- [Learning to Hear Again: Life with Single-Sided Deafness After Acoustic Neuroma Read More »](https://amirkhesro.com/learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma/)
- [Understanding Fatigue in Acoustic Neuroma: What It Is, Why It Happens, and How to Manage It](https://amirkhesro.com/understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it/)
- [6 Comments](https://amirkhesro.com/understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it/#comments)
- [Understanding Fatigue in Acoustic Neuroma: What It Is, Why It Happens, and How to Manage It Read More »](https://amirkhesro.com/understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it/)
- [Understanding Facial Numbness, Dry Eye, and Taste Changes After Acoustic Neuroma](https://amirkhesro.com/understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma/)
- [8 Comments](https://amirkhesro.com/understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma/#comments)
- [Understanding Facial Numbness, Dry Eye, and Taste Changes After Acoustic Neuroma Read More »](https://amirkhesro.com/understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma/)
- [From Surgery to Sand: My Leap Back to Life](https://amirkhesro.com/from-surgery-to-sand-my-leap-back-to-life/)
- [9 Comments](https://amirkhesro.com/from-surgery-to-sand-my-leap-back-to-life/#comments)
- [From Surgery to Sand: My Leap Back to Life Read More »](https://amirkhesro.com/from-surgery-to-sand-my-leap-back-to-life/)
- [Clearing the Haze: How to Cope with Mental Fog in Acoustic Neuroma](https://amirkhesro.com/clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma/)
- [4 Comments](https://amirkhesro.com/clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma/#comments)
- [Clearing the Haze: How to Cope with Mental Fog in Acoustic Neuroma Read More »](https://amirkhesro.com/clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma/)

---

## Connect

- **URL:** https://amirkhesro.com/connect/
- **Slug:** `connect`
- **WordPress page ID:** 2960

### Full text

```
Connect

Send Us a Message

Reach us through

📍

Sheffield, UK

☎

+44 777 40 89 442

✉

info@amirkhesro.com

Social Networks

f

Facebook (AN Support Group)

♪

TikTok (AN Shorts)

▶

You Tube (AN Channel)

♫

Spotify (AN Podcasts)

●

Reddit (AN Support Group)

Send Us a Message

First Name

Last Name

Email

Subject

Your Message

Submit Form
```

### Links on this page

- [info@amirkhesro.com](mailto:info@amirkhesro.com)

### External links on this page

- [f Facebook (AN Support Group)](https://www.facebook.com/groups/1209862050611107/)
- [♪ TikTok (AN Shorts)](https://www.tiktok.com/@acousticneuroma)
- [▶ You Tube (AN Channel)](https://www.youtube.com/@AcousticNeuromaSupport)
- [♫ Spotify (AN Podcasts)](https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0)
- [● Reddit (AN Support Group)](https://www.reddit.com/r/AcousticNeuromaHelp/)

---

## Disclaimer

- **URL:** https://amirkhesro.com/disclaimer/
- **Slug:** `disclaimer`
- **WordPress page ID:** 4398

### Full text

```
The content on this website is shared from personal experience as a patient living with acoustic neuroma. It is intended for patient to patient reassurance, shared understanding, and peer support only.

I am not a medical professional. Nothing on this website, including blog posts, videos, podcasts, comments, or downloadable material, constitutes medical advice, medical diagnosis, or treatment recommendations. The information provided should not be used as a substitute for professional medical care.

Every individual’s medical condition, symptoms, treatment plan, and recovery journey are different. What is described here reflects personal experience and interpretation and may not apply to others.

If you are experiencing new, worsening, or concerning symptoms, or if you have questions about
your diagnosis, treatment options, medications, or recovery, you must seek advice from your doctor,
```

---

## Shop

- **URL:** https://amirkhesro.com/shop/
- **Slug:** `shop`
- **WordPress page ID:** 4776

_This page renders from a template rather than stored content. Captured from the live page._

### Full text

```
Skip to content

Home

Acoustic Neuroma

Book Shop

Whispers through the fog

The Acoustic Neuroma Handbook

Blogs

Connect

About Amir

Menu

Home

Acoustic Neuroma

Book Shop

Whispers through the fog

The Acoustic Neuroma Handbook

Blogs

Connect

About Amir

Great things are on the horizon

Something big is brewing! Our store is in the works and will be launching soon!

This website shares personal patient experiences and is not medical advice. Always consult your healthcare professional. Read Full Disclaimer

YouTubeSpotifyFacebookTikTokReddit

© 2026 All Rights Reserved.
```

### Links on this page

- [Home](https://amirkhesro.com/)
- [Acoustic Neuroma](https://amirkhesro.com/acoustic-neuroma/)
- [Whispers through the fog](https://amirkhesro.com/whispers-through-the-fog/)
- [The Acoustic Neuroma Handbook](https://amirkhesro.com/the-acoustic-neuroma-handbook/)
- [Blogs](https://amirkhesro.com/blogs/)
- [Connect](https://amirkhesro.com/connect/)
- [About Amir](https://amirkhesro.com/about/)
- [Read Full Disclaimer](https://amirkhesro.com/disclaimer)

### External links on this page

- [https://www.youtube.com/@AcousticNeuromaSupport](https://www.youtube.com/@AcousticNeuromaSupport)
- [https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0?si=5LN2acmWSeGoobhVT5Ewew](https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0?si=5LN2acmWSeGoobhVT5Ewew)
- [https://www.facebook.com/groups/1209862050611107](https://www.facebook.com/groups/1209862050611107)
- [https://www.reddit.com/r/AcousticNeuromaHelp/](https://www.reddit.com/r/AcousticNeuromaHelp/)
- [https://www.goodreads.com/author/show/57235034.Amir_Khesro](https://www.goodreads.com/author/show/57235034.Amir_Khesro)
- [https://www.tiktok.com/@acousticneuroma?_t=ZN-8yKZbZhEAgY&_r=1](https://www.tiktok.com/@acousticneuroma?_t=ZN-8yKZbZhEAgY&_r=1)
- [YouTube](https://www.youtube.com/@AcousticNeuromaSupport)
- [Spotify](https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0?si=5LN2acmWSeGoobhVT5Ewew)
- [Facebook](https://www.facebook.com/groups/1209862050611107)
- [TikTok](https://www.tiktok.com/@acousticneuroma?_t=ZN-8yKZbZhEAgY&_r=1)
- [Reddit](https://www.reddit.com/r/AcousticNeuromaHelp/)

---

## Cart

- **URL:** https://amirkhesro.com/cart/
- **Slug:** `cart`
- **WordPress page ID:** 4777

_This page renders from a template rather than stored content. Captured from the live page._

### Full text

```
Skip to content

Home

Acoustic Neuroma

Book Shop

Whispers through the fog

The Acoustic Neuroma Handbook

Blogs

Connect

About Amir

Menu

Home

Acoustic Neuroma

Book Shop

Whispers through the fog

The Acoustic Neuroma Handbook

Blogs

Connect

About Amir

Great things are on the horizon

Something big is brewing! Our store is in the works and will be launching soon!

This website shares personal patient experiences and is not medical advice. Always consult your healthcare professional. Read Full Disclaimer

YouTubeSpotifyFacebookTikTokReddit

© 2026 All Rights Reserved.
```

### Links on this page

- [Home](https://amirkhesro.com/)
- [Acoustic Neuroma](https://amirkhesro.com/acoustic-neuroma/)
- [Whispers through the fog](https://amirkhesro.com/whispers-through-the-fog/)
- [The Acoustic Neuroma Handbook](https://amirkhesro.com/the-acoustic-neuroma-handbook/)
- [Blogs](https://amirkhesro.com/blogs/)
- [Connect](https://amirkhesro.com/connect/)
- [About Amir](https://amirkhesro.com/about/)
- [Read Full Disclaimer](https://amirkhesro.com/disclaimer)

### External links on this page

- [https://www.youtube.com/@AcousticNeuromaSupport](https://www.youtube.com/@AcousticNeuromaSupport)
- [https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0?si=5LN2acmWSeGoobhVT5Ewew](https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0?si=5LN2acmWSeGoobhVT5Ewew)
- [https://www.facebook.com/groups/1209862050611107](https://www.facebook.com/groups/1209862050611107)
- [https://www.reddit.com/r/AcousticNeuromaHelp/](https://www.reddit.com/r/AcousticNeuromaHelp/)
- [https://www.goodreads.com/author/show/57235034.Amir_Khesro](https://www.goodreads.com/author/show/57235034.Amir_Khesro)
- [https://www.tiktok.com/@acousticneuroma?_t=ZN-8yKZbZhEAgY&_r=1](https://www.tiktok.com/@acousticneuroma?_t=ZN-8yKZbZhEAgY&_r=1)
- [YouTube](https://www.youtube.com/@AcousticNeuromaSupport)
- [Spotify](https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0?si=5LN2acmWSeGoobhVT5Ewew)
- [Facebook](https://www.facebook.com/groups/1209862050611107)
- [TikTok](https://www.tiktok.com/@acousticneuroma?_t=ZN-8yKZbZhEAgY&_r=1)
- [Reddit](https://www.reddit.com/r/AcousticNeuromaHelp/)

### Images used

- https://amirkhesro.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gczlpmgczlpmgczl-92x92.png

---

## Checkout

- **URL:** https://amirkhesro.com/checkout/
- **Slug:** `checkout`
- **WordPress page ID:** 4778

_This page renders from a template rather than stored content. Captured from the live page._

_No text content — this page is generated entirely by WooCommerce at runtime (it renders empty when the cart/session is empty). Not needed for the static rebuild._

---

## My account

- **URL:** https://amirkhesro.com/my-account/
- **Slug:** `my-account`
- **WordPress page ID:** 4779

_This page renders from a template rather than stored content. Captured from the live page._

### Full text

```
Home

My account

My account

Login

Username or email address *Required

Password *Required

Remember me

Log in

Lost your password?
```

### Links on this page

- [Home](https://amirkhesro.com/)
- [Lost your password?](https://amirkhesro.com/my-account/lost-password/)

---

# Part 2 — Shop products

The current site sells author-signed copies through WooCommerce. A static GitHub Pages site cannot process payments, so these will need an external checkout (e.g. a payment link, Gumroad/Payhip, or retailer links) in the rebuild.

> **Gap to fill:** the *Whispers through the fog – Author Signed* listing is still carrying placeholder text on the live site ("Short discription here" / "Description here"). It is reproduced verbatim below so nothing is lost, but real copy will be needed for the rebuild. The description on the `/whispers-through-the-fog/` page (Part 1) is the best existing source for it.

## Whispers through the fog – Author Signed

- **URL:** https://amirkhesro.com/book/whispers-through-the-fog-author-signed/
- **Price:** £14.99

### Short description

```
Short discription here
```

### Full description

```
Description here
```

### Images

- https://amirkhesro.com/wp-content/uploads/2026/07/2nd-Edition-ebook-Cover.jpg-e1784889194229.jpeg

---

## The Acoustic Neuroma Handbook – Author Signed

- **URL:** https://amirkhesro.com/book/the-acoustic-neuroma-handbook-author-signed/
- **Price:** £19.99

### Short description

```
You have just been told you have an acoustic neuroma, also known as a vestibular schwannoma. The words alone rearrange everything. What follows is a strange period in which the medical system explains a great deal about the tumour and very little about what it is actually like to live with one. Even a little understanding of the condition helps you make sense of things, and this book was written to provide it.

Get an exclusive signed copy directly from the author.

Every book includes:

Hand-signed by the author

Secure packaging

Optional personalized message

Amir Khesro is the author of the memoir Whispers Through the Fog.
```

### Full description

```
You have just been told you have an acoustic neuroma, also known as a vestibular schwannoma. The words alone rearrange everything. What follows is a strange period in which the medical system explains a great deal about the tumour and very little about what it is actually like to live with one. Even a little understanding of the condition helps you make sense of things, and this book was written to provide it.

Acoustic neuroma is rare, frequently misdiagnosed, and poorly understood outside the specialist centres that treat it. Its symptoms are real and often disabling, yet most of them are invisible to other people. The fatigue does not show. The brain fog does not register in your speech. The fear you carry on ordinary days is not written on your face.

This is a patient-to-patient guide, written by someone who has been through it. It covers the full range of the condition, from a small tumour newly found on a scan to a complex surgical case, and it stays with you through diagnosis, decision, treatment, recovery, and the long years of adaptation that follow.

Across twenty-one chapters and a detailed appendix, it explains the anatomy and biology of the tumour, the road to diagnosis, and what your scans and reports actually mean. It addresses the daily reality of single-sided hearing loss, balance disruption, fatigue, brain fog, and the emotional and psychological weight of the condition. It sets out the three treatment paths of active surveillance, surgery, and radiation with honesty about what each one involves.

It covers relationships and caring, navigating the NHS, work and financial support, and the long view of living with acoustic neuroma at one, five, and ten years. A full resources section, a glossary of clinical terms, a treatment decision worksheet, and printable symptom and scan logs are included.

The personal account is honest about what was lost and what was not. This is not a textbook, and it is not a memoir. It is the book the author wished someone had handed him on the day he was diagnosed. It will not remove the uncertainty. It is written to help you carry it.

Get an exclusive signed copy directly from the author.

Every book includes:

Hand-signed by the author

Secure packaging

Optional personalized message

Amir Khesro is the author of the memoir Whispers Through the Fog.
```

### Images

- https://amirkhesro.com/wp-content/uploads/2026/07/ebook-Cover.jpg

---

# Part 3 — Blog posts

24 published posts, newest first.

## The “Why Me?” Question: Finding Peace After Acoustic Neuroma

- **URL:** https://amirkhesro.com/the-why-me-question-finding-peace-after-acoustic-neuroma/
- **Slug:** `the-why-me-question-finding-peace-after-acoustic-neuroma`
- **Published:** 2026-05-24
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2026/05/Designer-scaled.png

### Excerpt

```
One question returns again and again in the minds of many patients: Why me? If this condition is rare, why did it happen to me?Was it punishment?Was it fate?Was it bad luck?Was there some reason behind it at all? I asked myself these questions repeatedly after my diagnosis. Some nights I searched for religious answers. […]
```

### Full text

```
One question returns again and again in the minds of many patients:

Why me?

If this condition is rare, why did it happen to me?
Was it punishment?
Was it fate?
Was it bad luck?
Was there some reason behind it at all?

I asked myself these questions repeatedly after my diagnosis. Some nights I searched for religious answers. Other nights philosophical ones. I tried to force meaning onto something that had arrived without permission.

Eventually, I reached an answer that initially felt uncomfortable, but later brought me peace.

The truth is this:

Not everything happens for a reason.

Sometimes biology simply unfolds in ways we neither choose nor deserve.

Before my acoustic neuroma, I believed life could largely be managed. Not perfectly, of course. I knew suffering existed. I knew terrible things happened to people. But underneath my plans and routines was a quiet assumption that life was still negotiable. That if you worked hard enough, planned carefully enough, and made sensible choices, things would broadly move in the right direction.

Then a tumour grew silently inside my head while I was busy planning my future.

That is one of the strange things about illness. It exposes how little control we truly have. You wake up believing you are directing your life, only to discover your biology has been writing part of the script without your knowledge.

I did not choose the tumour.
I did not choose the hearing loss.
I did not choose the fatigue, imbalance, facial numbness, or brain fog.

And yet suddenly, they became part of me.

What disturbed me most was not only the illness itself, but the realisation that what I called “myself” could be physically altered. A tumour pressing on nerves changed my hearing, my balance, my energy, my emotions, even the texture of thought itself.

That realisation can push a person toward a very cold view of existence. You begin seeing how much of life is shaped by biology, chance, timing, and circumstances outside your control.

And honestly, there is some truth in that.

We do not control everything.
Perhaps we control far less than we like to believe.

But strangely, accepting that brought me peace rather than despair.

Because if I did not choose this illness, then I also did not need to carry unnecessary guilt for it.

The tumour was not punishment.
It was not a moral judgement.
It was not evidence that I had failed at life.

It was simply something that happened.

And once I stopped demanding cosmic explanations, I could focus on something more useful:
How do I live now?

I realised that meaning is probably not something we discover hidden inside the universe. Meaning is something we create through experience, relationships, kindness, responsibility, and endurance.

A conversation.
A child laughing.
A friend showing up.
Someone holding your hand in hospital.
A quiet moment of peace after months of fear.

These things matter, even in a universe that often feels random.

So if you are asking “Why me?”, I do not think there is always an answer that fully satisfies the mind.

But I do think there is a healthier question:

What now?

How do I move forward from here?
How do I build a meaningful life despite uncertainty?
How do I remain human through suffering instead of becoming consumed by it?

You do not need to control everything to live a meaningful life.

Sometimes peace begins when you stop trying to explain every tragedy and instead learn how to carry it.
```

---

## How Much Do We Really Understand the Brain and Nervous System?

- **URL:** https://amirkhesro.com/how-much-do-we-really-understand-the-brain-and-nervous-system/
- **Slug:** `how-much-do-we-really-understand-the-brain-and-nervous-system`
- **Published:** 2026-03-10
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2026/03/Designer-scaled.png

### Excerpt

```
A recent CT scan showed no new changes in my brain. Structurally, everything appears stable. In medical terms that should be reassuring. Yet my body seems to be telling a slightly different story. The facial numbness I have been experiencing continues to shift and in some areas it has become more noticeable. When tests suggest […]
```

### Full text

```
A recent CT scan showed no new changes in my brain. Structurally, everything appears stable. In medical terms that should be reassuring. Yet my body seems to be telling a slightly different story.

The facial numbness I have been experiencing continues to shift and in some areas it has become more noticeable. When tests suggest everything looks stable but your own experience suggests otherwise, it raises a difficult but honest question.

How much do we actually understand about the brain and the nervous system?

Out of curiosity, and perhaps a little frustration, I spent some time reading and reflecting on this question. The more I explored the subject, the clearer it became that the answer is both fascinating and humbling. What follows is a short attempt to summarise what we currently know, and perhaps more importantly, what we still do not understand.

The Most Complex System in the Body

The human brain is often described as the most complex structure known in the universe. It sits inside the skull, weighs roughly 1.3 kilograms, and yet it produces thought, memory, emotion, personality, and consciousness.

However, the brain does not function in isolation.

It operates as the central hub of the nervous system, a vast communication network that includes the brain, spinal cord, and an enormous number of nerves extending throughout the body. These nerves transmit signals that allow us to move, feel, see, hear, and interpret the world around us.

Despite centuries of research and decades of advanced technology, the uncomfortable truth is that our understanding of this system remains surprisingly limited.

The Numbers Behind the Complexity

To appreciate the scale of the challenge, it helps to look at the numbers.

The human brain contains roughly 86 billion neurons. Each neuron can form thousands of connections with other neurons. These connections are known as synapses and they are estimated to number around 100 trillion.

Signals travel across this network through electrical impulses and chemical messengers. Every thought, memory, movement, and sensation depends on this constant flow of information.

The number of possible signalling patterns within this system is astronomically large. It is far beyond what current scientific models can fully describe or simulate. Even the most advanced neuroscience captures only small fragments of this vast and constantly changing network.

Where Nerves Fit Into the Picture

Many symptoms people experience are not purely related to the brain itself but to the nerves that carry signals between the brain and the rest of the body.

Facial sensation, for example, is largely controlled by the Trigeminal nerve. This is one of the major cranial nerves that emerges from the brainstem and spreads across the face. It carries sensory information such as touch, temperature, and pain from the face back to the brain.

Although the trigeminal nerve is not part of the brain tissue itself, it plays a critical role in how the brain receives information from the face.

When this nerve is irritated, compressed, or affected by surgery or neurological conditions, people may experience symptoms such as numbness, tingling, altered sensation, or facial discomfort.

This highlights an important point. The nervous system is not simply the brain. It is a complex network where problems can occur at many points along the pathway.

What Scans Can and Cannot Show

Modern imaging tools such as CT scans and MRI scans are extremely useful. They can detect major structural problems such as tumours, bleeding, strokes, or large injuries.

However, these technologies mainly show structure rather than function.

Many neurological symptoms arise because of subtle changes in how signals travel through nerves or between different areas of the brain. These changes may involve tiny nerve fibres, microscopic signalling disturbances, or altered communication between brain regions.

Problems at this level are often too small or too complex for current imaging technology to detect clearly.

This is why people can experience symptoms such as numbness, fatigue, tinnitus, brain fog, or sensory changes even when scans appear normal.

The Mystery of Consciousness

Even when focusing only on the brain itself, there remain enormous gaps in our understanding.

Scientists can measure electrical activity in the brain and identify which areas become active during certain tasks. Yet they still cannot fully explain how these electrical and chemical signals produce thoughts, memories, emotions, or conscious awareness.

Consciousness remains one of the greatest unsolved problems in science.

In simple terms, we can often observe what the brain is doing, but we do not fully understand how it produces experience.

The Brain Studying Itself

There is also a deeper philosophical challenge involved in studying the brain.

The brain is not only the object being studied. It is also the tool doing the studying.

Every scientific theory, experiment, and model of the brain is created by the very organ we are trying to understand. In other words, the brain is attempting to understand itself.

This creates a kind of intellectual loop. Our ability to investigate the brain is limited by the brain’s own capacities. The instrument and the subject are the same.

It is somewhat similar to a telescope attempting to observe its own lenses while still being limited by the optics through which it sees.

Living With the Unknown

For people living with neurological conditions such as acoustic neuroma, these limits in knowledge are not just theoretical. They show up in everyday life.

Scans can appear stable while symptoms shift. Nerves can behave unpredictably. Sensations can change without an obvious explanation.

The facial numbness many people experience after surgery often involves the Trigeminal nerve, which carries sensory information from the face to the brain. Even when imaging shows no new structural changes, the way this nerve communicates with the brain can still influence how sensation is perceived.

None of this necessarily means something new or dangerous is happening. Often it simply reflects how intricate and sensitive the nervous system really is.

A Lesson in Humility

When viewed from a broader perspective, the difficulty of understanding the brain and nervous system becomes less surprising.

We are dealing with one of the most complex systems known in nature.

Neuroscience has already made remarkable progress and has transformed many areas of medicine. However, it is still a relatively young field compared with disciplines such as physics or chemistry. Much of what we know consists of partial theories and evolving models.

Perhaps the most honest conclusion is this.

The brain allows us to explore distant galaxies, decode DNA, and build complex societies. Yet when it turns inward to examine itself and the nervous system it controls, it encounters one of the deepest mysteries in science.

The very system that allows us to understand the universe is still trying to understand itself.
```

---

## Patient Stories

- **URL:** https://amirkhesro.com/patient-stories/
- **Slug:** `patient-stories`
- **Published:** 2026-02-22

### Excerpt

```
To be shared soon
```

_Captured from the live page (the stored body is a dynamic embed)._

### Full text

```
Home

Lived Experiences

Patient Stories

Patient Stories

Leave a Comment / Lived Experiences / By

Amir Khesro

To be shared soon

← Previous Post

Next Post →

Leave a Comment Cancel Reply

Your email address will not be published. Required fields are marked *

Type here..

Name*

Email*

Website

Save my name, email, and website in this browser for the next time I comment.
```

---

## When the Brain Loses Its Map: Navigation, Memory, and Acoustic Neuroma

- **URL:** https://amirkhesro.com/when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma/
- **Slug:** `when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma`
- **Published:** 2026-01-22
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-11.27.38.jpeg

### Excerpt

```
Some people can travel a route once and never forget it. They seem to carry an internal map that guides them effortlessly. Others manage reasonably well. They may miss a turn, but they reorient themselves and carry on. And then there are people who hesitate at junctions, second guess every decision, and feel unsure even in places they know well.
```

### Full text

```
Some people can travel a route once and never forget it. They seem to carry an internal map that guides them effortlessly. Others manage reasonably well. They may miss a turn, but they reorient themselves and carry on. Then there are people who hesitate at junctions, second-guess every decision, and feel unsure even in places they know well.

If you fall into this last group, it can quietly chip away at confidence. You may start to rely heavily on your phone. You may avoid unfamiliar places. You may even begin to question your own abilities.

This difference is not about intelligence, effort, or attention. It is neurological. The brain builds and maintains an internal map of the world. When that system is disrupted, navigation becomes harder and more tiring than it should be.

The Brain’s Internal Map

At the centre of navigation is a small structure deep in the brain called the hippocampus. Its job is to understand space. It does not simply memorise directions like “turn left” or “turn right.” Instead, it builds a flexible mental map that shows how places relate to one another.

This is why some people can take shortcuts or recover quickly after a wrong turn. Their brain understands where things are in relation to each other.

Supporting this system are specialised cells that track distance and direction as you move. Together, these systems constantly answer three questions, often without you realising it:

Where am I?

Where have I been?

Where am I going?

When this system works well, navigation feels automatic. When it does not, every journey requires conscious effort.

Different Ways of Navigating

People who are good with directions tend to build strong internal maps. Once the map is formed, they rely on it without thinking.

Others rely more on a route-based strategy. They remember journeys as a sequence of actions relative to themselves: turn left at the shop, turn right at the lights.

This works until something changes: a diversion, a missed turn, a road closure.

When that sequence breaks, there is no wider map to fall back on. Disorientation follows quickly. This is not a flaw. It is simply a different navigation style that becomes fragile under pressure.

My Own Experience Before Diagnosis

I struggled with directions long before my acoustic neuroma was diagnosed. At the time, I had no reason to connect that difficulty to anything medical. I assumed it was just how I was wired.

But acoustic neuromas do not appear overnight. They grow slowly, often over many years. Looking back, it is impossible to know when mine started growing or when it began affecting my vestibular system.

By the time it was finally diagnosed, the tumour was already lemon-sized.

That perspective matters. What felt like a lifelong weakness may have been a neurological change developing quietly in the background. There was no clear starting point, no moment when things suddenly shifted. Just a gradual erosion of spatial confidence that only made sense in hindsight.

Why Balance and Sensory Input Matter

Navigation is not just visual. The brain constantly combines information from multiple systems:

Your eyes provide landmarks.

Your muscles tell the brain where your body is.

Your balance system tells the brain how you are moving.

When these signals are clear and consistent, the brain builds a stable map. When they are noisy or distorted, that map becomes blurred. Decision-making slows. Confidence drops. Navigation becomes mentally exhausting.

This is where acoustic neuroma becomes relevant.

What Happens in Acoustic Neuroma

It is important to recognise that a poor sense of direction on its own does not automatically point to a medical condition. Many people struggle with navigation for perfectly ordinary reasons. However, in the case of an acoustic neuroma, difficulty with directions can be a consequence of what the tumour does to the brain.

The brain relies on a steady stream of accurate sensory information to know where the body is in space. An acoustic neuroma sits on the vestibulocochlear nerve, the pathway that carries balance and movement signals from the inner ear to the brain. When that pathway is disrupted, the information reaching the brain is incomplete or unreliable.

One of the main areas affected by this disruption is the hippocampus, the part of the brain responsible for building and maintaining our internal map of the world. Without clean vestibular input, the brain struggles to keep track of movement and position. This is not about forgetting directions through inattention or lack of practice. It is the navigation system itself working with faulty data.

On top of this, the brain is forced to work harder just to stay upright and stable. Maintaining balance becomes an active process rather than an automatic one. That extra effort comes at a cost. When more mental energy is spent on stability and sensory correction, less is available for navigation, memory, and decision-making. Any existing difficulty with directions is amplified by this constant need to compensate.

In simple terms, an acoustic neuroma forces the brain to navigate the world with unreliable signals. Disorientation may, therefore, be an outcome of a system under strain.

Why Memory Slips Happen

The hippocampus is also responsible for everyday memory.

When you put your keys down, the brain records the event by anchoring it to a location. If the internal map is unstable, that anchor is weak. You do not forget the object. You forget where it exists.

The same applies to names. Remembering a name requires linking a face to a place and a moment. When spatial context is unreliable, those links fail more easily.

On top of this, when navigation becomes difficult, the brain shifts the task to areas responsible for conscious decision-making. Every turn becomes a calculation rather than an instinct. This is tiring. Over time, it contributes to mental exhaustion and reduced confidence.

What Can Help

The brain remains adaptable. While not everything can be fixed, some strategies can reduce strain and improve stability:

Practising simple gaze stabilisation exercises helps the brain reconcile visual and balance information.

Walking short routes without navigation aids, occasionally pointing back to your starting position, helps retrain internal distance and direction tracking.

Looking at a simple map before leaving, rather than relying purely on turn-by-turn instructions, encourages the brain to build a wider spatial picture.

Regular aerobic exercise supports brain health and protects the hippocampus.

Pausing briefly when placing objects down and consciously noting the surroundings helps lock memories to a location.

These are not cures. They are tools. Small, consistent inputs that help the brain work more efficiently.

A Final Thought

Difficulty with navigation is not carelessness. It is not a lack of intelligence. It is not something you should be ashamed of.

Understanding this matters. It replaces self-blame with context. Navigation and memory are not talents you either have or lack. They are systems under strain. With patience, adaptation, and the right strategies, those systems can become more stable again.

Now, I would like to hear from you:

Do you struggle with directions, even in familiar places?

Do you notice memory slips that feel out of proportion to daily life?

If so, you are not alone. Please share your experience in the comments.

If you prefer audio, you can listen to the podcast version here.

Spotify Podcast

If you prefer visual content, you can watch the YouTube version of this topic here

Watch on YouTube
```

### External links / references

- [Spotify Podcast](https://open.spotify.com/episode/3z1AcuYuanbsUM5r1DekyP?si=AzZbsigQQf-CVOpMwdZW9Q)
- [Watch on YouTube](https://youtu.be/JX_hQ9LUzf8?si=3rmRjkcqIUATh9rQ)

---

## Teaching With Acoustic Neuroma

- **URL:** https://amirkhesro.com/teaching-with-acoustic-neuroma/
- **Slug:** `teaching-with-acoustic-neuroma`
- **Published:** 2026-01-17
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2026/01/ChatGPT-Image-Jan-8-2026-01_19_54-PM.png

### Excerpt

```
When you live with acoustic neuroma, teaching becomes more than a job. It becomes an ongoing negotiation between what your body can give and what the classroom continually demands. We have already talked about what acoustic neuroma can bring with it. Mental fog that slows thinking. Fatigue that is not relieved by sleep. Single sided […]
```

### Full text

```
When you live with acoustic neuroma, teaching becomes more than a job. It becomes an ongoing negotiation between what your body can give and what the classroom continually demands.

We have already talked about what acoustic neuroma can bring with it. Mental fog that slows thinking. Fatigue that is not relieved by sleep. Single sided deafness that breaks sound localisation and triggers the cocktail party effect. Balance problems that make standing all day exhausting. For some, facial palsy or numbness. For others, visual strain, tinnitus, or a constant sense of overload. None of these are visible. All of them matter.

Why Teaching Becomes Harder

If you are a teacher, these challenges hit at the core of your work. Teaching is built on communication. It relies on hearing questions clearly, responding in real time, managing noise, reading the room, and staying mentally sharp for hours at a stretch. A classroom is rarely quiet. It is full of overlapping voices, scraping chairs, movement, and unpredictability. For a brain already compensating for hearing loss and balance disruption, that environment can feel overwhelming.

Fatigue is not just about being tired. It is neurological depletion. By midday, your brain may already be running on reserve because it has been working harder than everyone else’s since the first bell. Balance issues mean you are constantly micro correcting your posture while standing, walking, or turning. That effort adds up. Visual strain creeps in as you rely more on facial cues, body language, and the board to compensate for what you cannot hear clearly. By the end of the day, exhaustion is not optional. It is inevitable.

The Truth That Needs Saying

To be blunt, teaching is not an ideal job with these symptoms. That needs saying clearly. The noise, the pace, the cognitive load, and the lack of quiet recovery time make it one of the more demanding professions for someone with acoustic neuroma.

And yet, many still do it.

Some have no real alternative. It may be too late in their career to retrain without financial risk. Others love teaching deeply and are not willing to let the condition take that away. Some have practical constraints, pensions, caring responsibilities, or limited local options. Whatever the reason, online platforms and support spaces show a clear pattern. There are many teachers living with acoustic neuroma who continue to work, quietly carrying the load.

Living and Teaching on Reduced Bandwidth

So the question is not whether teaching with this condition is hard. It is. The real question is how it feels, and how the strain can be reduced enough to make it sustainable.

Teaching with acoustic neuroma often feels like operating with a reduced bandwidth. You are still competent, still committed, but everything costs more. Noise drains you faster. Conversations require effort rather than flow. You may miss comments from the wrong side. You may need repetition but hesitate to ask for it. Group discussions can feel chaotic rather than energising. By the time students leave, there may be little left for anything else.

Mitigation does not mean fixing the condition. It means reducing unnecessary load.

Learning the Hard Way

What I did not realise early on is that adaptation does not happen automatically. I learned this the hard way. I spent an entire term trying to teach as if nothing had changed. I pushed through noise, accepted overlapping discussion, stayed in loud staff spaces longer than I should have, and assumed I would adjust. I did not.

By the end of that term, things were falling apart quietly. Christmas did not feel like rest. It felt like recovery from damage. Starting again after Christmas was not a fresh start. It was a correction.

Everything that follows came from that reset.

Reducing Load in the Classroom

Positioning matters. Stand where your hearing ear faces the class as much as possible. Avoid turning your back while students speak. These are small changes, but they reduce constant head turning and cognitive strain.

Noise management is critical. Use visual signals rather than shouting over chatter. Build quiet routines into transitions. Do not rely on hearing alone to manage behaviour. The less background noise you fight, the less energy you burn.

Pacing is not weakness. Plan lessons with natural pauses. Alternate high interaction activities with quieter tasks. Protect short moments of silence during the day. Fatigue ignored compounds. Fatigue managed stays contained.

The One Speaker Rule

For me, general principles were not enough. I needed firm systems.

The first was the One Speaker Rule.

This is not a behaviour management technique. It is a neurological necessity. In my classroom, only one person speaks at a time. No calling out. No overlapping comments. No side conversations during discussion. When multiple voices compete, the cocktail party effect is triggered and my brain cannot separate speech from noise. Comprehension collapses and fatigue spikes.

I explain this openly to students. I frame it around clarity and respect. Listening becomes as important as speaking. The classroom becomes calmer and more focused. What looks like strict structure is actually accessibility in practice.

Repeat and Reflect

The second tool is Repeat and Reflect.

Instead of guessing what I heard or pretending I caught every word, I ask another student to repeat or summarise what their peer has just said. This allows me to verify content without strain. It reinforces learning through repetition. And it normalises clarification as part of thinking rather than a failure of attention.

Guessing is exhausting. Verification is efficient. Over a full teaching day, that difference matters.

The Micro Break Protocol

The third strategy is the Micro Break protocol.

Occupational health literature supports short sensory breaks, even if school timetables rarely do. Between lessons, I aim for five minutes of genuine auditory silence. Not conversation. Not scrolling. Not background noise. Silence.

This is not rest in the casual sense. It is neurological decompression. The auditory cortex is overworked all day. Noise stacks. Without breaks, overload carries forward from lesson to lesson until something gives.

A micro break means stepping into an empty room, closing the door, and removing sound input entirely. If full silence is not possible, the lowest stimulus environment available will do. This reset allows the next lesson to start with a functioning system rather than a saturated one.

Being Selective With Extras

The final piece is being selective with extras.

Under the Equality Act in the UK, and the ADA in the US, you are entitled to reasonable adjustments. These are not favours. They are protections designed to prevent slow burnout caused by invisible neurological conditions.

This can include being excused from high noise duties such as lunch halls, assemblies, or corridor supervision. It can mean requesting that staff meetings are recorded or that written minutes are provided so you are not relying solely on degraded auditory input in crowded rooms. It may also mean choosing quieter meeting spaces or reducing unnecessary exposure to prolonged background noise.

This is not about doing less work. It is about removing the most damaging tasks so you can do your actual job properly.

Communication with colleagues matters, even if it feels uncomfortable. You do not need to explain everything, but clarity helps. Let people know which side you hear from. Ask for one speaker at a time in meetings. These are reasonable adjustments, not special treatment.

Acceptance Without Self Blame

Most importantly, accept the reality without self blame. If you feel slower, it is not because you are less capable. Your brain is doing more work behind the scenes. If you are exhausted, it is not because you lack resilience. You are compensating neurologically all day.

Teaching with acoustic neuroma is possible, but it is different. It requires boundaries, structure, and honesty with yourself. It may never feel easy. But for those who choose or need to stay, understanding what is happening and reducing avoidable strain can make the difference between burning out and carrying on with purpose.

This is not about pretending the job fits the condition. It often does not. It is about making the condition visible enough to yourself that you stop fighting it in silence.

Your Experience Matters

If you are a teacher living with acoustic neuroma, I would genuinely like to hear from you. How does the classroom feel for you? What drains you the most, and what has helped you stay afloat? Whether you are coping well, struggling quietly, or still trying to work things out, your experience matters. Sharing it may help someone else realise they are not failing, they are adapting. This is one space where the reality does not need to be hidden.

If you prefer audio, you can listen to the podcast version here.

Spotify Podcast

If you prefer visual content, you can watch the YouTube version of this topic

Watch on YouTube
```

### External links / references

- [Spotify Podcast](https://spotifycreators-web.app.link/e/YGzpqJXCZZb)
- [Watch on YouTube](https://youtu.be/-RYO_6B2GOg)

---

## What is Cerebrospinal Fluid and how does Acoustic Neuroma affect it?

- **URL:** https://amirkhesro.com/what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it/
- **Slug:** `what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it`
- **Published:** 2026-01-05
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2026/01/ChatGPT-Image-Jan-10-2026-07_04_49-AM.png

### Excerpt

```
Cerebrospinal Fluid, or CSF, sounds like a complex medical term, but the idea behind it is simple. It is the system that allows a soft, delicate brain to live safely inside a hard, rigid skull. When an acoustic neuroma enters that closed space, this balance can be disturbed. You do not need medical training to […]
```

### Full text

```
Cerebrospinal Fluid, or CSF, sounds like a complex medical term, but the idea behind it is simple. It is the system that allows a soft, delicate brain to live safely inside a hard, rigid skull. When an acoustic neuroma enters that closed space, this balance can be disturbed.

You do not need medical training to understand what is happening. You only need to think in terms of space, pressure, and movement.

Think of the Brain as Jelly in a Box

Your brain is not firm or solid. It is soft, fragile, almost jelly like. Your skull, on the other hand, is rigid. It does not stretch. It does not give.

If you placed jelly directly inside a sealed box and shook it, the jelly would smash into the sides. It would bruise and deform.

Now imagine filling that same box with water and letting the jelly float. Suddenly, the jelly is protected. It no longer crashes into the walls. It gently moves, supported on all sides.

That water is CSF.

It is not decoration. It is not optional. It is what keeps the brain safe.

What CSF Does in Everyday Terms

CSF has three simple jobs.

First, it cushions the brain.

It works like padding or shock absorbers. Every step you take, every time you turn your head, CSF softens the movement so your brain is not hitting bone.

Second, it feeds and cleans.

CSF acts like a delivery service and a waste collection system combined. It brings nutrients in and carries waste away, particularly while you sleep. This is one reason sleep matters so much after surgery.

Third, it manages pressure.

Your skull cannot expand. CSF constantly adjusts to keep pressure inside the head stable, even when blood flow or brain activity changes.

When this system works properly, you never notice it. That silence is a sign everything is working as it should.

Where Acoustic Neuroma Changes the Situation

An acoustic neuroma does not cause trouble because it spreads. It causes trouble because it takes up space in one of the most crowded areas near the brain.

There are two main ways it interferes with CSF.

Problem One: Blocking the Flow, Like a Clogged Drain

CSF flows through narrow pathways inside the brain, much like water through pipes. As the tumour grows near the back of the brain, it can press on one of the exits where CSF normally drains.

Think of leaving the tap running while the sink drain is blocked. Water keeps coming in, but it cannot get out. The level rises. Pressure builds.

In the brain, this pressure can cause headaches, nausea, blurred vision, confusion, and extreme fatigue. Doctors call this hydrocephalus. In plain language, it is fluid backing up where it should not.

Problem Two: Thickening the Fluid, Like Syrup Instead of Water

Sometimes the tumour does not physically block anything. Instead, it leaks protein into the CSF. This changes the fluid itself.

Imagine trying to pour syrup through a fine sieve. The holes are open, but the thick liquid struggles to pass through.

Your brain has tiny drainage points where CSF is absorbed back into the bloodstream. Thickened CSF clogs these drains. Fluid slowly builds up and pressure rises again, even though scans may not show an obvious blockage.

This is why symptoms and scan results do not always match.

Why CSF Leaks Can Happen After Surgery

To remove an acoustic neuroma, surgeons must open the skull and the protective lining around the brain. This is unavoidable.

Everything is carefully sealed afterwards, but CSF is always under pressure, like water pushing against a dam wall. If there is even a pin sized gap, the fluid will find it.

There is another factor. The bone behind the ear is not solid. It contains tiny air spaces, like a sponge. If these spaces connect to the surgical area, CSF can travel through them.

That is how fluid can leak into the ear, throat, or nose. Patients often notice this as a clear drip or a salty taste. It may seem minor, but it is taken seriously.

Why Doctors Take CSF Leaks Seriously

The main concern is not the loss of fluid.

The real danger is infection.

If fluid can leak out, bacteria can travel back in along the same path and reach the brain. This can lead to meningitis, which is serious and potentially life threatening. That is why doctors act quickly and cautiously if a leak is suspected.

Pseudo Meningitis: When It Looks Serious but Is Not an Infection

After surgery, some patients develop symptoms that look exactly like meningitis. Severe headaches, neck stiffness, fever, sensitivity to light, and feeling very unwell.

In some cases, there is no infection at all.

Think of it as the body overreacting. Surgery can irritate the CSF and the lining around the brain with blood products or tissue debris. The immune system reacts as if there is an infection, even though no bacteria are present.

This is called pseudo meningitis. Pseudo means false.

The symptoms are real and unpleasant, but antibiotics may not help because infection is not the cause. Treatment usually focuses on calming the inflammation with rest, fluids, and sometimes steroids. It feels frightening, but it is not the same as bacterial meningitis.

Managing CSF: what medication can and cannot do

Many patients wonder if there is a medicine that can thin CSF or help it flow better, especially after being told their fluid is thick or protein heavy. That question makes sense. We often hear about thinning blood, so it feels natural to expect CSF to work the same way.

It does not.

There is no medication that changes the thickness of CSF. Doctors do not treat the fluid itself. They manage pressure, inflammation, and the cause disrupting the system.

You may be given acetazolamide, often called Diamox. It does not thin CSF or unblock drains. It simply reduces how much CSF the brain produces. Think of it as turning down the tap. Less fluid means less pressure, and symptoms may ease.

This has limits. When CSF is protein heavy, as can happen with an acoustic neuroma, the tiny drainage points can become physically blocked. In that situation, reducing production may help for a while, but it cannot fix the blockage. That is why Diamox is often temporary.

Steroids are sometimes used, especially after surgery. They do not change CSF either. Their role is to calm inflammation, particularly in pseudo meningitis, where symptoms look like infection but are caused by irritation. When inflammation settles, CSF absorption can improve.

If medication is not enough, the problem is usually mechanical. A lumbar drain may be used temporarily to relieve pressure. If the issue continues, a shunt may be needed to permanently divert CSF.

What is Lumbar Drain and Shunt?

A lumbar drain is usually the first step. It is a thin tube placed in the lower back, well away from the brain, that allows CSF to drain slowly and in a controlled manner. The simplest way to understand it is pressure relief. By letting some fluid out, pressure across the whole system drops. This often eases symptoms like headache and nausea and gives healing areas time to seal and settle. It is temporary and closely monitored.

If the problem persists, a shunt may be considered. A shunt is a permanent internal diversion that creates an alternative pathway for CSF to drain, usually into the abdominal cavity where it can be absorbed safely. It bypasses the blocked absorption system altogether. Shunts are not used lightly, but when they are needed, they address a problem that medication alone cannot fix.

Both approaches are practical responses to a mechanical issue. They do not change the fluid itself. They simply restore balance by managing pressure and flow.

The Bigger Picture

CSF is not a background detail. It is the system that allows the brain to survive inside a rigid skull.

An acoustic neuroma disrupts this balance by taking up space or changing the fluid itself. Surgery challenges it further because doctors must enter a sealed, pressurised environment.

When you think in simple terms, most of it makes sense.

A blocked drain.

Thick syrup.

A leaking pipe.

A pressure release valve. Understanding this does not remove the difficulty of the condition, but it removes some of the fear. For many patients, that clarity alone makes the journey easier to live with.

If you prefer audio, you can listen to the podcast version here.

Spotify Podcast

If you prefer visual content, you can watch the YouTube version of this topic here

Watch on YouTube

If you have experienced CSF related issues such as pressure symptoms, leaks, pseudo meningitis, or the use of a lumbar drain, I invite you to share your experience. Your story may help someone else understand what they are going through and feel less alone.
```

### External links / references

- [Spotify Podcast](https://creators.spotify.com/pod/profile/amir-khesro/episodes/What-is-CSF-and-how-Acoustic-Neuroma-affects-it-e3d71re/a-acd76n7)
- [Watch on YouTube](https://youtu.be/hXgeixjprHA)

---

## Balance Problems in Acoustic Neuroma: When Walking Feels Like Being Drunk Without the Drink

- **URL:** https://amirkhesro.com/balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink/
- **Slug:** `balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink`
- **Published:** 2025-12-27
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/12/Designer.png

### Excerpt

```
For many people living with acoustic neuroma, balance problems are harder to explain than hearing loss, but often far more disruptive. They rarely begin with dramatic spinning. Instead, they creep in quietly. You walk and feel as if the ground is slightly tilted. You drift to one side without meaning to. You hesitate before stepping […]
```

### Full text

```
For many people living with acoustic neuroma, balance problems are harder to explain than hearing loss, but often far more disruptive. They rarely begin with dramatic spinning. Instead, they creep in quietly.

You walk and feel as if the ground is slightly tilted. You drift to one side without meaning to. You hesitate before stepping off a curb. You bump into door frames. Some days, it feels like you are walking like a drunk person, even though you are completely sober.

Others may not notice. You do. And that disconnect can be deeply isolating.

Because balance problems are invisible, they are often misunderstood. By family, by colleagues, and sometimes even by clinicians early on. Patients are told it is anxiety, lack of confidence, or simply getting older. In reality, balance problems in acoustic neuroma are neurological, mechanical, and exhausting. Understanding why they happen can reduce fear, self-blame, and unrealistic expectations during recovery.

Why Balance Is Affected

Acoustic neuromas arise from Schwann cells on the vestibular portion of the eighth cranial nerve. This nerve carries balance information from the inner ear to the brain.

In a healthy system, the brain receives equal and opposite balance signals from both ears. This symmetry allows you to stand still, walk straight, and turn your head without thinking about it. Balance feels automatic because the signals match.

A tumour breaks that symmetry. As it grows, it compresses the balance nerve on one side, weakening or distorting the signal. The other ear continues to send normal information. The brain is left trying to reconcile two conflicting messages.

It interprets this mismatch as movement.

That is why people feel unsteady even when standing still. Why walking in a straight line suddenly requires concentration. Why turning quickly feels disorienting. Why fatigue makes everything worse.

Balance problems usually show up in two overlapping ways.

Some are static. Standing still feels uncomfortable. You may sway, lean, or feel as if you are about to tip over, particularly when your eyes are closed or the lighting is poor.

Others are dynamic. When you move your head, your eyes are meant to stabilise your vision instantly. When this reflex fails, the world blurs during movement. Reading signs while walking becomes difficult. Supermarkets feel overwhelming. This is known as oscillopsia and is one of the main reasons patients struggle in busy environments.

In larger tumours, balance issues can become more severe. Pressure on the cerebellum or brainstem interferes with coordination itself. Walking may become wide-based and clumsy. People often describe it as feeling disconnected from their legs, or as if their body reacts half a second too late. The risk of falls increases significantly.

How the Brain Tries to Adapt: Central Compensation

The brain does not passively accept vestibular damage. It tries to adapt. This process is called central compensation.

When balance input changes suddenly, such as after surgical removal of the tumour and balance nerve, the brain initially suppresses signals from the healthy ear. This temporary shutdown helps stop violent spinning sensations. It also explains why the first few days after surgery are often the most debilitating.

As this suppression eases, the brain begins to rely more heavily on other systems. Vision takes on a bigger role. Proprioception, the sense of pressure and position from your feet and joints, becomes critical. Many patients notice they walk better when looking at the ground or when wearing firm shoes that give strong sensory feedback.

Over weeks and months, deeper changes take place. The brainstem recalibrates. New pathways strengthen. Gradually, walking becomes less effortful. Turning feels safer. Confidence begins to return.

This process depends on movement. The brain learns through error. Avoiding movement may feel protective, but it slows adaptation. Gentle, repeated exposure is what teaches the brain how to rebalance.

Gentamicin Injections: Preparing the Brain Before Surgery

In some cases, doctors may recommend gentamicin injections into the inner ear before surgery. Gentamicin is an antibiotic that is deliberately used here for its toxic effect on the balance organ.

The aim is to gradually destroy the remaining balance function on the affected side in a controlled way, rather than allowing it to be lost suddenly during surgery.

The logic is straightforward. Sudden loss of balance input can overwhelm the brain and lead to severe vertigo and prolonged recovery. Gentamicin injections allow the brain to begin central compensation before surgery takes place. In effect, the body is given time to adjust to a one-sided balance system in advance.

During treatment, patients may feel a temporary worsening of dizziness as the balance nerve is intentionally shut down. This period can be unpleasant, but it gives the brain a head start. The change after surgery is less abrupt and often easier to manage.

Gentamicin is not a cure, and it does not replace rehabilitation. What it offers is preparation. Time for the brain to start adapting before the surgical disruption occurs.

Why Balance Often Fluctuates Long Term

Even with good compensation, balance is rarely restored to what it was before.

Long-term studies show that a significant minority of patients continue to experience imbalance years after treatment. Many describe a persistent drunk-like walk, particularly when tired, stressed, or unwell. Others feel steady at home but struggle badly in supermarkets, airports, or crowded streets.

Some patients experience what is often called decompensation. Balance worsens months or years later, not because the tumour has returned, but because the brain’s compensatory strategies are fragile. Illness, fatigue, poor sleep, anxiety, or ageing can overwhelm them.

This is why balance can feel unpredictable. One week you walk confidently. The next, you are holding onto walls again. This does not mean you are going backwards. It usually means your system is overloaded.

Balance problems also have a disproportionate impact on quality of life. More than hearing loss, they affect confidence, independence, and social engagement. Constantly monitoring how you walk, where you step, and how fast you move is mentally exhausting. Many people withdraw socially, not because they cannot walk, but because they are tired of managing it.

This is not weakness. It is neurological workload.

Vestibular Rehabilitation Therapy: Training the Brain to Rebalance

Vestibular rehabilitation therapy is one of the most effective tools for managing balance problems in acoustic neuroma. It is not reassurance therapy. It is structured brain retraining.

Most programmes focus on three areas.

Gaze stabilisation exercises retrain the eyes to stay fixed on a target while the head moves.

Habituation exercises repeatedly expose the brain to movements that trigger dizziness, gradually reducing sensitivity.

Balance retraining deliberately challenges stability, often using uneven or unstable surfaces, forcing the brain to refine its use of sensory input from the body.

These exercises are uncomfortable by design. Progress does not come from pushing harder, but from showing up consistently. When done properly, they reduce long-term disability and improve confidence, even if balance is never perfect.

Living with an unsteady body

Balance recovery after acoustic neuroma is rarely neat or linear. Some days you walk normally. Other days you feel as if you have had one drink too many, even though you have not touched alcohol.

That does not mean you are failing.

What improves is function. Awareness. The ability to move through the world without constant fear.

Understanding what is happening matters. Struggle does not mean damage. Fluctuation does not mean decline. And effort, even when no one can see it, is doing real neurological work.

Balance does not return simply because time passes.

It returns because the brain is forced to adapt.

And in acoustic neuroma, adaptation is an ongoing, active process.

If you prefer audio, you can listen to the podcast version here.https://spotifycreators-web.app.link/e/SSgCRuvPiZb

Spotify Podcast

If you prefer visual content, you can watch the YouTube version of this topic here

Watch on Youtube

If you live with balance problems due to acoustic neuroma, you are not alone.
What situations make your balance worse? Fatigue, crowds, low light?
Share your experience in the comments. It helps others feel less isolated.
```

### External links / references

- [https://spotifycreators-web.app.link/e/SSgCRuvPiZb](https://spotifycreators-web.app.link/e/SSgCRuvPiZb)
- [Watch on Youtube](https://youtu.be/ht8letF5gzA)

---

## When Half Your Face Goes Quiet After Surgery – Facial Numbness After Acoustic Neuroma Surgery Explained

- **URL:** https://amirkhesro.com/when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained/
- **Slug:** `when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained`
- **Published:** 2025-12-20
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/12/faicial-numbness.png

### Excerpt

```
I have previously written about listening difficulties, fatigue, and brain fog after acoustic neuroma. But these are not the only challenges people face. The acoustic neuroma tumour sits in an area that is rich in nerves. As it grows, it does not only affect hearing and balance. It can begin pressing on nearby nerves, and […]
```

### Full text

```
I have previously written about listening difficulties, fatigue, and brain fog after acoustic neuroma. But these are not the only challenges people face.

The acoustic neuroma tumour sits in an area that is rich in nerves. As it grows, it does not only affect hearing and balance. It can begin pressing on nearby nerves, and suddenly the symptoms extend beyond the ear. Because these nerves sit so close together, acoustic neuroma surgery also carries a risk of stretching or bruising them.

One such outcome is facial numbness after translabyrinthine surgery.

There is a sensation many of us experience after translab surgery that is difficult to explain unless you have lived it.

You touch your face.
You know you are touching it.
But you cannot really feel it.

It is not pain.
It is not paralysis.
It is absence.

For me, it felt like the numbness after a dental injection. The heaviness. The dullness. The strange sense that my cheek and jaw were there, but not fully connected to me anymore. I kept touching my face, not because it hurt, but because my brain needed reassurance.

If you are experiencing facial numbness after acoustic neuroma surgery, I want to help explain why this happens. I believe a little understanding always helps. So let us start with the nerve responsible.

The Trigeminal Nerve and Facial Numbness

Most patients are warned about the facial nerve. Smiling. Blinking. Drooping. That nerve gets a lot of attention.

But facial numbness after translab surgery usually involves a different nerve: the trigeminal nerve.

The trigeminal nerve is responsible for sensation in the face and for chewing. It sits deeper and closer to where the acoustic neuroma grows. If your tumour was large, this nerve may have been pushed, stretched, or flattened for months or even years before surgery.

In many cases, surgery does not damage the trigeminal nerve itself. Instead, removing the tumour releases long standing pressure, and the nerve then has to relearn how to function.

Why Facial Numbness Feels So Disturbing

Facial numbness is not just loss of sensation. It is loss of feedback.

Normally, your brain constantly knows where your cheek is, where your tongue is, and how hard you are chewing. When the trigeminal nerve is not sending clear signals, that internal map becomes unreliable.

This explains common symptoms such as:

Food collecting in the cheek without you noticing
Biting your cheek or tongue
Chewing feeling awkward or unbalanced

It is not clumsiness. It is missing information.
And the brain does not cope well with missing information.

The hardest part of facial numbness is not the sensation itself.

It is the disconnect

Looking in the mirror and seeing your face move normally, but not feeling it the way you used to. Touching your cheek repeatedly, not for comfort, but for confirmation.

Trigeminal Nerve Damage Symptoms After Surgery

The effects of trigeminal nerve irritation or injury do not appear the same in everyone. Symptoms can change over time.

In the weeks and months after translabyrinthine surgery, facial numbness often evolves rather than staying the same.

You may experience:

Tingling sensations
Buzzing feelings in the face
Pins and needles
Sudden electric shock like zaps that come and go

These symptoms can appear without warning and disappear just as quickly. If nobody has explained this to you, it can be frightening.

In more severe cases, especially when facial numbness turns into ongoing pain, doctors may prescribe medications such as anticonvulsants to calm the nerve.

However, in most cases, these sensations are a sign that the trigeminal nerve is trying to reconnect and reorganise itself after long term compression.

It is not smooth.
It is not predictable.
And it takes time.

Facial Numbness Recovery Timeline

Nerves do not recover like muscles. Trigeminal nerve recovery is slow.

Not weeks.
Not a couple of months.
Often many months to a year, sometimes longer.

During the first few months after acoustic neuroma surgery, symptoms often fluctuate. Sensation can change from day to day.

Between six and twelve months is when most recovery tends to happen, if it is going to happen at all.

After around two years, any facial numbness that remains is more likely to be permanent. However;

Over time, something changes.

You stop checking.
You stop thinking about it constantly.
You realise hours have passed without noticing it.

That is not giving up.
That is neurological adaptation.

Jaw Weakness and Chewing Problems After Surgery

Because the trigeminal nerve also controls chewing muscles, facial numbness is often accompanied by jaw weakness.

Chewing may feel uncoordinated on one side. Many people unconsciously switch to chewing on the other side, which can later lead to jaw discomfort or strain.

I am more than one year post translab surgery, and I still chew using only one side. I cannot use both. This is my reality, and it is something I have learned to adapt to.

A Reassurance for Those Living With Facial Numbness

Facial numbness after acoustic neuroma surgery is a recognised outcome, especially with larger tumours. It does not mean surgery failed. It does not mean recovery has stopped.

It means the trigeminal nerve has been through a long journey and needs time.

Give it at least two years. Recovery is slow. And even when sensation does not fully return, the brain adapts. You learn to live around it.

If you are touching your face right now and wondering if this numbness is permanent, hear this clearly.

You are not alone.

If you prefer audio, you can listen to the podcast version here.

Spotify Podcast

If you prefer visual content, you can watch the YouTube version of this topic here

Watch On You Tube
```

### External links / references

- [Spotify Podcast](https://spotifycreators-web.app.link/e/ioqFAbQBfZb)
- [Watch On You Tube](https://youtu.be/oP46pQo-HmA)

---

## You Have Just Been Diagnosed with Acoustic Neuroma

- **URL:** https://amirkhesro.com/you-have-just-been-diagnosed-with-acoustic-neuroma/
- **Slug:** `you-have-just-been-diagnosed-with-acoustic-neuroma`
- **Published:** 2025-12-16
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/12/Designer-3.png

### Excerpt

```
First, pause. You are not in immediate danger.You do not need to decide anything today.Your life is not ending, but it has changed. What This Diagnosis Means and What It Does Not Acoustic neuroma is a benign tumour. That means it is not cancer and it does not spread to other parts of the body. […]
```

### Full text

```
First, pause.

You are not in immediate danger.
You do not need to decide anything today.
Your life is not ending, but it has changed.

What This Diagnosis Means and What It Does Not

Acoustic neuroma is a benign tumour. That means it is not cancer and it does not spread to other parts of the body. It does not mean it is trivial.

This tumour sits in a sensitive area near the nerves responsible for hearing and balance. That location explains why the diagnosis can feel frightening and why symptoms often seem out of proportion to what others expect.

You did not cause this.
There is usually no clear reason why it happens.

What Is Likely Happening in Your Body Right Now

Your hearing nerve and balance nerve are not working as they should. To compensate, your brain is working harder than normal just to keep you upright, oriented, and focused.

That constant effort explains many of the things you may already be experiencing:

• Hearing loss or ringing in one ear
• Dizziness or a sense of being off balance
• Fatigue that feels far heavier than normal tiredness
• Brain fog or difficulty concentrating
• Anxiety that feels physical, not just emotional

These symptoms are real. They are neurological. You are not imagining them.

What You Need to Know Today

Not Everything

You do not need to make treatment decisions right now.
Many people are safely monitored for months or even years before any intervention is needed.

Growth is usually slow. One MRI scan does not tell the full story. Clarity comes from time and repeat scans, not from urgency or panic.

Symptoms and tumour size do not always match. Feeling unwell does not automatically mean the tumour is growing quickly.

If treatment becomes necessary, recovery is often longer than doctors initially suggest. That is not because something has gone wrong. It is because the brain heals slowly.

About Hearing and Balance

Some hearing loss with acoustic neuroma is permanent. In some people it stabilises. In others it worsens. There is no reliable way to predict which path you will follow.

Balance issues and dizziness are common. Your brain can adapt, but this adaptation takes time and energy.

Fatigue and brain fog are part of this condition. They are not signs of weakness, laziness, or psychological failure.

About Fear, Shock, and Mental Overload

Feeling frightened does not mean you are coping badly. It means you understand that this diagnosis matters.

The word benign often confuses people around you. Some may minimise what you are going through because they hear “not cancer.” That can be deeply invalidating. It does not mean they are right.

You do not owe anyone a detailed explanation. Especially not right now.

What You Should Not Do in the Early Days

Do not rush into treatment decisions.
Do not compare yourself to other patients online.
Do not assume the worst case applies to you.
Do not expect yourself to function normally.

Your nervous system is under strain. Give it space.

What Helps in the First Few Days

Write your questions down. Memory and focus are often unreliable at this stage.
Bring someone you trust to medical appointments.
Limit how much information you consume in one sitting.
Rest more than you think you should.

If your body asks for rest, listen to it.

What This Diagnosis Does Not Take Away

Your intelligence.
Your value.
Your ability to live a meaningful life.

Many people with acoustic neuroma continue to work, love, travel, adapt, and rebuild full lives. Often differently. Often more slowly. Still fully.

One Last Thing to Hold On To

You are allowed to grieve the version of life you thought you had.
You are also allowed to take this one day at a time.

Today is about stabilising, not solving.

Tomorrow can wait.

If this post helped you feel less lost, share it with others who may be sitting in the same uncertainty.
Wishing you a peaceful Christmas from my family to yours.

Amir

PS: A few readers have shared that they were rushed to surgery because their tumour was already very large at diagnosis. That does happen, particularly when there is significant pressure on the brainstem, and those situations are serious and rightly treated as urgent. At the same time, they are not the typical experience for most newly diagnosed patients. Even in my own case, with a 4.7 cm tumour pressing on the brainstem, there was still a period of three months between diagnosis and surgery. This post is written to support those who are not in immediate danger, without diminishing the reality or importance of genuinely urgent cases.
```

---

## Tinnitus in Acoustic Neuroma: Understanding the Noise, the Science, and the Emotional Reality Behind It

- **URL:** https://amirkhesro.com/tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it/
- **Slug:** `tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it`
- **Published:** 2025-11-23
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/11/8dc3f09c-62c6-4eea-945d-a0805600c7cd.png

### Excerpt

```
Tinnitus is one of those symptoms that slips into your life quietly, almost politely at first. A faint tone. A soft hum. A sound that does not belong to the world around you. And before you realise it, it becomes something that follows you from place to place. For many acoustic neuroma patients, tinnitus becomes […]
```

### Full text

```
Tinnitus is one of those symptoms that slips into your life quietly, almost politely at first. A faint tone. A soft hum. A sound that does not belong to the world around you. And before you realise it, it becomes something that follows you from place to place.

For many acoustic neuroma patients, tinnitus becomes a companion they never asked for. Sometimes it appears long before diagnosis. Sometimes it settles in after treatment. Sometimes it changes shape as the weeks go by. Whatever form it takes, it can alter the way you experience silence, rest, concentration and comfort.

This blog explains what tinnitus is, why it happens, why it affects most acoustic neuroma patients, and why a significant number never develop it at all. It is grounded in science but written for those who live with the condition. You deserve clarity without fear and honesty without clinical coldness.

What tinnitus actually is?

Tinnitus is the perception of sound when no external sound is present. Patients describe it in many forms. A sharp ring. A high pitched whistle. A buzzing that rises at night. A humming that fills the space where silence used to sit. A pulsing sound that grows louder when the world around them becomes quiet.

The important truth is simple.
Tinnitus is not created by the ear.
It is created by the brain.

When the brain stops receiving clear, balanced input from the ear, it reacts by producing its own internal noise. This noise becomes the sound you hear.

How common is tinnitus in acoustic neuroma

Research shows that between sixty and seventy per cent of acoustic neuroma patients experience tinnitus. Some studies report it in more than seventy per cent of those with measurable hearing loss on the tumour side.

You are not alone.
You are not imagining it.
This is a recognised neurological effect of the tumour.

Why tinnitus happens: the science in simple language

Tinnitus appears when sound signals become weak, unstable or distorted. Here are the most common reasons.

Hearing loss

Most tinnitus cases involve some form of hearing loss. When hearing fades on one side, the brain senses the missing information and attempts to fill the silence. It fills it with internal noise.

Damage to inner ear hair cells

These delicate sensory cells convert sound into electrical signals. Once damaged, they cannot recover. When the signal becomes weaker, the brain increases its sensitivity and creates phantom sound.

Problems in the auditory nerve

The vestibulocochlear nerve carries sound to the brain. When a tumour presses on it, the signal becomes unclear. The brain interprets this confusion as tinnitus.

Hyperactivity in the auditory cortex

Reduced sound input causes the brain’s hearing centre to become overactive. Neurons fire spontaneously. Groups of neurons fire together and create a constant tone.

Emotional and chemical influences

Stress, anxiety and fatigue do not cause tinnitus, but they can intensify it. The brain’s emotional centre and hearing centre are closely linked. When emotions are heavy, the internal noise often feels louder.

Why tinnitus is so common in acoustic neuroma

Acoustic neuroma grows on the nerve that carries hearing and balance information. As it enlarges, it presses on the cochlear fibres and disrupts the sound signal long before hearing is completely lost.

Many patients describe the early stage as:

• voices sounding distant
• the good ear working harder
• difficulty following conversations
• a faint ringing that appears in silence
• noise that increases with tiredness

This is not imagination.
This is the nerve struggling.
This is the brain trying to make sense of a signal that no longer arrives cleanly.

Why some acoustic neuroma patients never develop tinnitus

It is important to remember that around thirty to forty per cent of acoustic neuroma patients never experience tinnitus. This does not mean their tumour is unusual or dangerous. It simply means their auditory system reacts differently.

Here are the reasons.

Their hearing loss is stable rather than chaotic

Tinnitus thrives on unstable input. If hearing declines slowly and evenly, the brain may not respond with phantom sound.

The tumour affects balance fibres more than hearing fibres

The vestibulocochlear nerve has two branches. In some patients, the tumour presses mainly on the balance branch, sparing the hearing fibres and preventing tinnitus.

Their brain filters internal noise more effectively

Some people naturally have stronger sensory filtering. Their brain does not create sound in response to reduced input.

Complete deafness can reduce tinnitus

When the nerve stops functioning completely, there are no chaotic signals to interpret. Silence is easier for the brain to understand than distortion.

Tinnitus needs a perfect combination of nerve irritation, unstable signals and a brain that reacts strongly. If any one of these elements is missing, tinnitus may never appear.

What happens after surgery when hearing is lost on one side

Many acoustic neuroma surgeries result in total hearing loss on the tumour side. This affects tinnitus in different ways.

It may rise at first

Sudden silence shocks the auditory system. The brain becomes alert and tinnitus may become louder in the first weeks.

It may remain the same

If the nerve was already failing before surgery, the brain may not respond strongly to the final loss.

It may soften or disappear

A damaged nerve sends chaotic signals. A silent nerve sends none. Once the chaos ends, the brain sometimes settles and the tinnitus becomes quieter or fades completely.

The remaining ear becomes the anchor

Your good ear becomes your world. When it becomes tired or overstimulated, the tinnitus may feel more noticeable. This is not failure. It is your brain learning a new way to hear.

The emotional truth behind tinnitus

This part is rarely spoken about in appointments, yet every patient recognises it.

Tinnitus does not simply affect hearing. It affects your relationship with quiet.
It makes bedtime harder.
It interrupts calm moments.
It tests your patience.
It drains your focus.
It makes you more protective of your remaining hearing.
It can make you feel vulnerable in ways you did not expect.

But here is something that matters just as much.

The brain adapts.
Slowly. Quietly. Steadily.

The noise does not always disappear, but its power over you does.
Your fear softens.
Your emotional response becomes calmer.
Your brain stops interpreting the sound as danger.
You begin to recognise it without reacting to it.

This is not denial.
This is healing.
This is neuroplasticity.
The brain learns to live with what it cannot change.

The tinnitus may stay.
But you stop feeling threatened by it.
And that is the point where life becomes lighter again.

Listen to the podcast version of this post
If you prefer audio, you can listen to the podcast version here.

Spotify Podcast

Watch the video version
If you prefer visual content, you can watch the YouTube version of this topic here.

watch on YouTube

Your Turn

Before you leave, I would love to hear from you.
What does tinnitus feel like for you
When is it at its worst
Has it changed over time

Share your experience in the comments.
Your words may help someone who is reading this in the middle of their own difficult night.
```

### External links / references

- [Spotify Podcast](https://creators.spotify.com/pod/profile/amir-khesro/episodes/Tinnitus-in-Acoustic-Neuroma-e3bbk6j)
- [watch on YouTube](https://youtu.be/xGbm-9k0aSE)

---

## The Cocktail Party Effect and Life With One Ear: Why Noise Becomes Exhausting

- **URL:** https://amirkhesro.com/the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting/
- **Slug:** `the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting`
- **Published:** 2025-11-14
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/11/ghj.png

### Excerpt

```
In my previous blog, The Science of Sound Localisation and What It Feels Like to Lose It, I explored how the brain identifies where sounds come from and how that sense of direction disappears when one ear stops working. If you missed it, you can read it here: The Science of Sound Localisation and What […]
```

### Full text

```
In my previous blog, The Science of Sound Localisation and What It Feels Like to Lose It, I explored how the brain identifies where sounds come from and how that sense of direction disappears when one ear stops working. If you missed it, you can read it here: The Science of Sound Localisation and What It Feels Like to Lose It

This time, I want to look at another equally challenging part of single-sided deafness: understanding sound in noisy environments.

Most people take for granted the brain’s remarkable ability to focus on one voice while ignoring dozens of others in a crowded room. Scientists call this the cocktail party effect, the brain’s way of filtering sound so we can concentrate on one voice while everything else fades into the background.

This ability depends on having two functioning ears (binaural hearing) that feed slightly different information to the brain. Each ear receives sound at a tiny difference in timing and loudness. The brain compares these differences to identify where each sound is coming from and which sound to prioritise. It also separates sound frequencies, grouping those with similar tones or rhythms, so that voices and background noise form distinct streams. Then, through selective attention, it focuses on one stream while suppressing the rest.

It all happens instantly and automatically. You do not think about it; your brain simply does it for you. That is why, in a busy café or crowded classroom, you can listen to one person and let other voices fade into the background.

Why the Cocktail Party Effect Fails with One Ear

When hearing is lost on one side, this sophisticated filtering system breaks down. The brain receives only one version of every sound, without the small timing and volume differences that normally help it separate them. All sound now enters from the same direction and intensity.

Without those two points of reference, the brain cannot perform its usual comparison process. It loses the ability to map sound in space, so it cannot tell which voice is in front, behind, or beside you. The result is that all sound sources blend together into a single, flat layer.

The brain also struggles to suppress irrelevant background noise because both attention and spatial processing depend on those missing cues. Even when the volume is manageable, the brain must work harder to decode speech, using visual clues, memory, and guesswork to fill in the blanks. This extra effort leads to rapid mental fatigue.

In summary, patients with Single-Sided Deafness are a prime example of individuals who struggle severely with the Cocktail Party Effect. Their difficulty stems from a physical inability to provide the brain with the binaural cues it needs to perform its natural auditory filtering magic.

Living the Challenge

Even now, one year after surgery, this remains one of the hardest parts of my daily life. As a teacher, I face it every day in the classroom. The noise of students chatting, chairs scraping, papers rustling, and someone calling my name from the wrong side all collide into one confusing stream of sound.

At times, I feel as though I am standing in a river of noise, trying to catch words as they rush past. My good ear works hard, but it cannot keep up with the flow. I often have to move closer to the speaker or rely on facial expressions to fill in the gaps. Some days, it feels like every sentence is a puzzle, and by the time I piece it together, the moment has already moved on.

The same happens in the staffroom. Several colleagues might speak at once, laughter echoing off the walls and kettles hissing in the background. Someone makes a comment, and I see them smiling, so I smile too, hoping it fits the moment. Other times, I ask them to repeat what they said, but it quickly feels awkward doing that again and again. Occasionally, I take a guess at what they might have said and reply, only to realise from their expression that my answer makes no sense. We all laugh it off politely, but inside it stings a little. It is a reminder that in busy soundscapes, my brain is running blind.

It is frustrating not because I cannot hear, but because I cannot separate. I hear everything and yet understand less. It is a strange, quiet kind of fatigue that few people notice but that shapes every interaction. Still, I remind myself that this effort, the constant decoding, adjusting, and observing, is itself a sign of resilience. My brain is doing what it can with what remains.

Why It Feels So Draining

When both ears are working, the brain filters and focuses automatically. With one ear, you must do that work consciously. You read lips, watch faces, use context, and fill in the blanks.

It feels like trying to watch a film where every sound effect and piece of dialogue play at the same volume. You can follow the plot, but only by concentrating intensely. By the end of the day, you are not just tired; you are depleted.

This is called listening fatigue, and research supports it. Studies show that people with single-sided deafness perform worse on speech-in-noise tests and use far more mental effort to follow conversation. Their brains burn more energy simply to make sense of sound.

Can the Brain Adapt?

The brain is remarkably adaptable, but its success in adjusting to one-sided hearing loss varies greatly between individuals. Over time, it can learn to rely more on visual, rhythmic, and tonal cues to fill in missing information. Familiar voices become easier to follow because your brain learns to recognise their pitch and rhythm, even when the words blur.

However, this adaptation has limits. Some people find that their listening ability in noise improves slightly over time, but others continue to struggle despite years of adjustment. Studies show that bone-anchored hearing aids (BAHA) has helped many SSD patients.

From what I have seen and experienced, normal clarity is rarely restored. The brain continues to work harder than before, and noise remains one of the greatest daily challenges.

Practical Strategies for Noisy Environments

• Sit with your hearing ear facing the speaker and away from sources of background noise such as doors, kitchens, or music systems.
• Choose quieter venues with carpets, curtains, or soft furnishings that absorb noise.
• Take short breaks when you feel your focus slipping. Step outside or move to a quieter area to reset your concentration.
• Let others know which side you hear from. Most people are happy to adjust once they understand.
• Technology such as CROS or BAHA hearing systems may ease communication but should be seen as support tools rather than complete solutions.

Living in a One-Eared World

At first, noise feels like chaos. Crowds, classrooms, even laughter can feel overwhelming. But with time and awareness, you begin to adapt. You learn which seats work best, when to rest, and how to use your eyes as much as your ears. You stop fighting every sound and start choosing which ones deserve your attention.

Remember, every conversation you manage, every moment you stay engaged, is an act of strength.

It is a small but meaningful victory to catch a student’s question clearly in a noisy classroom, to follow the flow of conversation in the staffroom, or to catch a joke the first time and share the laughter without asking for it again.

Listen to the podcast version of this post
If you prefer audio, you can listen to the podcast version here.

Spoitfy Podcast

Watch the video version
If you prefer visual content, you can watch the YouTube version of this topic here.

Watch on YouTube

Please share your experiences below. How do you manage in noisy places? What helps you stay connected and less fatigued?
```

### External links / references

- [Spoitfy Podcast](https://open.spotify.com/episode/3bvEQkT9LGMS621fblwLBv?si=35215a0c91c4423b)
- [Watch on YouTube](https://youtu.be/2W_o7H4qe9Y?si=pF5nGt-I0-q7xUTz)

### Internal links

- [The Science of Sound Localisation and What It Feels Like to Lose It](https://amirkhesro.com/the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it/)

---

## The Science of Sound Localisation and What It Feels Like to Lose It

- **URL:** https://amirkhesro.com/the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it/
- **Slug:** `the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it`
- **Published:** 2025-11-07
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/11/img_3423-1.jpg

### Excerpt

```
Discover how the brain locates sound, what happens when one ear goes silent, and how to adapt after single sided deafness.
```

### Full text

```
When you lose hearing on one side, whether suddenly or after acoustic neuroma surgery, the world does not simply become quieter. It loses direction.
Voices blur, traffic feels unpredictable, and familiar spaces take on a strange, one dimensional quality. This experience has a name: loss of sound localisation.

What Is Sound Localisation

Sound localisation is the brain’s ability to determine where a sound originates. It relies on input from both ears using two main cues.

Interaural Time Difference (ITD):
A sound reaches one ear microseconds before the other. That tiny delay helps the brain to identify direction.

Interaural Level Difference (ILD):
Sounds are slightly louder in the ear nearer the source. The brain compares loudness to map position.

The outer ears also shape sound, adding clues about height and distance. Together, these signals create a seamless three dimensional soundscape until one ear goes silent.

When One Ear Stops Contributing

With single sided deafness (SSD), the brain loses half of its input. Sound becomes flat and directionless, like hearing through a single loudspeaker.
You can still hear, but you cannot tell where.

Common experiences include:

Turning the wrong way when someone calls your name

Hearing a phone ring but not knowing which direction to move

Feeling unsafe crossing streets because traffic sounds blend together

It is not merely inconvenient; it is mentally tiring. The brain works constantly to interpret a soundscape that has lost its depth.

Can the Brain Adapt to sound localisation with one ear?

The short answer is both yes and no. The brain is remarkably adaptable, but the extent of that adaptation varies between individuals. When hearing is lost on one side, the brain gradually learns to compensate in several ways. Many people become more visually aware, watching for movements. Others rely on environmental cues such as echoes, reflections, or contextual sounds. Over time, the brain also builds a library of learned patterns, helping to recognise familiar sounds through memory rather than direction

Assistive devices such as CROS or BiCROS hearing aids can further support communication by transmitting sound from the deaf side to the hearing ear, reducing the head shadow effect. However, because the brain still interprets all sound as coming from one side, these devices do not restore the ability to locate where sound originates.

For some people, the sense of direction never fully returns. They may always find it difficult to pinpoint where a sound is coming from. Others find that with time, visual and environmental awareness compensates enough for daily communication to feel easier. The reality is that while the brain can adapt impressively, the outcome is highly individual. Some adjust naturally, some with technology, and others simply learn to live comfortably with the difference.

The Emotional Experience

Losing sound direction is not only a technical change; it is also an emotional one.
You grieve the effortless orientation you once had, the instinctive way you responded to voices, music, and movement. The world can feel disorientating and lonely.

However, gradually, confidence returns. You begin noticing the details you once overlooked: body language, rhythm, vibration. You start to see sound instead of simply hearing it.

Each moment of clarity, turning towards a voice correctly, locating a bird call, or navigating a busy street, feels like a small victory.

Living Well with Single Sided Deafness

If you are adjusting to SSD, remember:

Your frustration is valid. This change is neurological, not emotional weakness.

It may never improve and that’s ok. Speaking about it and acknowledging it makes others feel less alone.

Support groups and professionals who understand acoustic neuroma can provide guidance and comfort.

Losing one ear does not mean losing your connection to sound, only learning to interpret it differently.
Direction may feel uncertain at first, but in time, you rediscover balance, confidence, and a new way to listen to the world.

If you prefer audio, you can listen to the podcast version here.

Spotify Podcast

If you prefer visual content, you can watch the YouTube version of this topic here.

Watch on YouTube

Please share your experiences. Our story might help someone else feel a little less alone, and together, we can make sense of this one eared world.

Image credit: Bruce Burby.
```

### External links / references

- [Spotify Podcast](https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0?fbclid=IwY2xjawOddmZleHRuA2FlbQIxMABicmlkETBaY3dCQk1IT0VDMFBLMnNFc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHul6-NeE2cwVsqDMGxsJ6aTpLngcKTthxn-Vg9T-3X-xF74_YsbBGa2hGLwh_aem_w__EQwjOJKGXjRxtkvJTSw)
- [Watch on YouTube](https://youtu.be/bMn1EWc0vB8)

---

## From Hospital Bed to Standing Tall: Salford Face-to-Face Meeting

- **URL:** https://amirkhesro.com/from-hospital-bed-to-standing-tall-salford-face-to-face-meeting/
- **Slug:** `from-hospital-bed-to-standing-tall-salford-face-to-face-meeting`
- **Published:** 2025-09-21
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-20-at-14.17.42_e56367ac.jpg

### Excerpt

```
On 20 September 2025, I had the privilege of being part of the Salford Face-to-Face Meeting, hosted by the wonderful Andrea Wadeson and supported by the British Acoustic Neuroma Association (BANA). This gathering was more than just a meeting; it was a celebration of courage, resilience, and community. Walking into the lecture theatre at Salford […]
```

### Full text

```
On 20 September 2025, I had the privilege of being part of the Salford Face-to-Face Meeting, hosted by the wonderful Andrea Wadeson and supported by the British Acoustic Neuroma Association (BANA). This gathering was more than just a meeting; it was a celebration of courage, resilience, and community.

Walking into the lecture theatre at Salford Royal Hospital was surreal. Not long ago, I was lying in a hospital bed in this very place, uncertain of what the future held. And yet, here I was — standing tall, holding my book Whispers Through the Fog, and speaking to a room full of fellow warriors. Who could have thought?

Of course, none of my visits would be complete without laughter. I confessed to the group that I couldn’t find my way to the lecture theatre at first — my internal GPS is permanently broken. And before you ask, no, it has nothing to do with acoustic neuroma! Sometimes laughter is the best medicine, and that day we had plenty of it.

Reading from my book, Whispers Through the Fog, at the Salford Face-to-Face Meeting.

The Power of Storytelling

During the session, I had the honour of reading a passage from my book. As I looked around the room, I saw nods of recognition, smiles of encouragement, and eyes that carried stories of their own.

Storytelling, I have learned, is more than sharing words — it’s about building bridges between experiences. When one person speaks, others feel less alone. Successful stories light the way for others, offering hope and inspiration in times of doubt.

Last year I could barely stand. This year, I stood in front of an audience, sharing my journey — proof that healing is possible, growth is real, and no story ever ends where pain begins.

What made it even more special was the audience itself. To stand before people who truly understand — who live with the same hidden challenges, the same frustrations, the same small triumphs was profoundly moving. I didn’t need to explain every detail; they simply knew. That kind of understanding is rare, and it made the experience all the more powerful.

Fruitful Discussions and Shared Wisdom

After the reading, we had open and heartfelt discussions. Together, we explored the challenges of living with acoustic neuroma — single-sided deafness, fatigue, brain fog, and the daily adjustments we make. But what stood out most was not the hardship — it was the solutions, the resilience, and the hope.

We shared tips, strategies, and victories, no matter how small. We reminded each other that even on the hardest days, progress is possible. The energy in the room was uplifting, and the sense of community was unshakable.

Of course, our discussions also went deep into the technical side of things and this is where Andrea shone. With her expertise, she patiently answered all the medical and technical questions, giving the group clarity and reassurance that only a true specialist can provide

Whispers Through the Fog in so many hands. Thank you all for the support and inspiring conversations.

A Tribute to Andrea and BANA

This event would not have been possible without Andrea and BANA. Their commitment to connecting people, creating safe spaces, and fostering support is nothing short of inspiring. They are more than organisers — they are builders of community and champions of hope.

Walking Away Stronger

As I left the hospital that day, I carried with me not just memories of a wonderful meeting, but a renewed sense of strength. To stand tall in a place where I once lay in bed was a powerful reminder that resilience is real and community makes us stronger.

Together, we are not just patients.
We are storytellers.
We are advocates.
We are survivors.

And above all, we are never alone.

For those who couldn’t attend, my book Whispers Through the Fog offers a deeper look into my journey with acoustic neuroma — from diagnosis to adaptation and beyond. May it bring you the same comfort and hope that storytelling has brought me.
```

### Images used

- https://amirkhesro.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-20-at-16.04.47_99d4e3dd-1-1024x943.jpg
- https://amirkhesro.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-20-at-14.17.42_e56367ac-1024x768.jpg

---

## What Are CROS Hearing Aids and How Do They Help with Single-Sided Deafness?

- **URL:** https://amirkhesro.com/what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness/
- **Slug:** `what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness`
- **Published:** 2025-08-14
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/08/5d6970e1-bb43-4083-bcc4-6325ba96faa7.png

### Excerpt

```
Living with single-sided deafness (SSD) can be frustrating. You may miss conversations on one side, have to constantly turn your head, and feel left out in group discussions. However, technology can help. In this post, I will share my experience with the Oticon CROS hearing aid that I received free through the NHS. I will […]
```

### Full text

```
Living with single-sided deafness (SSD) can be frustrating. You may miss conversations on one side, have to constantly turn your head, and feel left out in group discussions. However, technology can help. In this post, I will share my experience with the Oticon CROS hearing aid that I received free through the NHS. I will explain how they work, the features I appreciate most, and practical tips for keeping them in top condition. Whether you are researching CROS versus BiCROS hearing aids or wondering if you can obtain them through the NHS, this guide will help you decide if they are suitable for you.

What Are CROS Hearing Aids?

CROS stands for Contralateral Routing of Signal. If one ear cannot hear at all, a CROS device picks up sound from that ear and wirelessly sends it to the ear that can hear. It is like giving your “bad ear” a voice again.

If you still have some hearing in your good ear but also need amplification, there is a variation called BiCROS. This both transmits sound from the deaf side and amplifies input on the hearing side.

How Do CROS Hearing Aids Work?

A CROS system has two main parts:

A transmitter microphone on the deaf side, which picks up sound.

A receiver on the hearing side, which plays that sound directly to your good ear.

The two parts communicate wirelessly, so you can hear from both sides in one ear. They do not restore true stereo hearing or the ability to detect the direction of sound, but they remove the “dead zone” where sound is completely missed.

Brands, Options and Costs

CROS hearing aids come in different brands, styles, and price ranges.

Private prices: Approximately £1,500 to £3,000 per pair, depending on features, style, and brand. Rechargeable models and those with advanced connectivity are generally more expensive.

NHS option: I use Oticon CROS hearing aids, provided free through the NHS. They are excellent, but other popular brands include Phonak, Widex, and Signia.

Power options:

Battery-powered (like mine) – simply replace the batteries when required.

Rechargeable – charge them overnight, with no need to handle batteries.

Modern Features I Appreciate

Bluetooth connectivity: Pairs with your phone, tablet, or computer, allowing your CROS device to act as a hands-free headset for calls, music, and podcasts.

App-based control: On iPhones, no extra application is needed. On Android, you will need to install the brand’s application. Physical buttons are often disabled by the audiologist to prevent accidental adjustments.

Broadcast and streaming feature: Listen directly from your phone, television, or other devices without background noise.

Comfortable fit: They are light, discreet, and after a few days you may forget you are wearing them.

Maintenance Tips for Clearer Sound and Longer Battery Life

Keep the tube clean: If the tiny tube in the receiver becomes blocked, voices may sound muffled or disappear entirely. Use the cleaning tool provided by your audiologist.

Open battery doors: When you are not wearing the hearing aids, open the battery doors to prevent unnecessary battery drain.

Daily routine: I wear mine all day and remove them at night. Sleeping on my good ear gives me complete quiet, which is a surprising benefit of SSD.

CROS Hearing Aids in Everyday Life

Recently, on a walk with Ian, I asked him to stay on my bad side – something I could never do before. We chatted comfortably without me twisting my neck or repeatedly asking him to speak up. For someone with SSD, moments like these are truly valuable.

What CROS Hearing Aids Cannot Do

CROS hearing aids will not restore your ability to locate where sounds are coming from. This remains a limitation with single-sided deafness. However, they will make conversations more natural, reduce the need to reposition yourself, and help to ease listening fatigue.

How to Get CROS Hearing Aids for Free on the NHS

If you believe you might benefit from a CROS hearing aid and live in the UK:

Book an appointment with your GP and explain your single-sided hearing loss.

Request a referral to your local NHS audiology department.

When you see the audiologist, specifically mention CROS aids, as not all clinics automatically offer them.

If you are eligible, you can have them fitted free of charge, along with ongoing provision of batteries and maintenance.

Considering that the private cost can be thousands of pounds, NHS provision is a life-changing option.

If you prefer audio, you can listen to the podcast version here.

Spotify Podcast

If you prefer visual content, you can watch the YouTube version of this topic here.

Watch on YouTube

Share Your Experience

If you use CROS hearing aids, or are considering them, share your experience. Have they made daily life easier for you? Which brand do you use? Please share your thoughts in the comments so that others can learn from your journey.
```

### External links / references

- [Watch on YouTube](https://youtu.be/H3vDIRc5aeo)

### Internal links

- [Spotify Podcast](http://If you live with single sided deafness after acoustic neuroma, you will know how challenging everyday communication can become. I have put together three resources that explain how CROS hearing aids work, what they genuinely improve, and where their limits remain. These are grounded in lived experience rather than theory. Read the full blog https://amirkhesro.com/what-are-cros-hearing-aids-and.../ Listen on Spotify https://open.spotify.com/episode/0wugXqRIclKN6ooOuolKLw... Watch on YouTube https://youtu.be/H3vDIRc5aeo If you know someone navigating single sided deafness, share this with them. Clear information makes the adjustment easier.)

---

## Understanding the Translabyrinthine Approach to Acoustic Neuroma Surgery

- **URL:** https://amirkhesro.com/understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery/
- **Slug:** `understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery`
- **Published:** 2025-07-30
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/07/what_is_translabyrinthine_surgery_wordpress.jpg

### Excerpt

```
This is a patient-to-patient account of the translabyrinthine approach. I am not a medical professional. I am sharing my experience and understanding in the hope that it helps others who are facing the same road. When I first saw the name, I could not even pronounce it — translabyrinthine. I still struggle to. It sounded […]
```

### Full text

```
This is a patient-to-patient account of the translabyrinthine approach. I am not a medical professional. I am sharing my experience and understanding in the hope that it helps others who are facing the same road.

When I first saw the name, I could not even pronounce it — translabyrinthine. I still struggle to. It sounded like something out of a medical textbook, not a word that would suddenly become a part of my life. But there it was, in the middle of a sentence spoken by my surgeon, calmly explaining how they planned to reach the tumour in my brain.

As with everything I write here, I share what I have been through and what I have learned because I believe a little understanding helps you make sense of things. Especially when those things are overwhelming, frightening, and life-changing.

When I was told I needed brain surgery to remove my acoustic neuroma, I was not given a menu of options. My doctors told me plainly: “This is the best possible approach for your case.” And I trusted them. My tumour was large — 4.7 cm — and the translabyrinthine approach was the only viable path forward. Fourteen hours later, I came out of surgery with a sliver of tumour left behind (just 16 mm) to preserve my facial nerve. Today I want to focus on something many newly diagnosed patients ask:

What exactly is the translabyrinthine approach?

Why do surgeons choose it?

And how does it work?

Let us break it down together.

What Is the Translabyrinthine Approach?

The word “translabyrinthine” might sound intimidating, but it simply means “going through the labyrinth,” which is the name for the complex inner ear system that handles both hearing and balance. In this approach, the surgeon accesses the acoustic neuroma by drilling through the inner ear structures behind the affected ear.

This route provides a direct path to the tumour without needing to manipulate the brain. But it comes with a trade-off: the hearing in that ear is completely sacrificed. For many of us with large tumours, that hearing is already gone or severely diminished, so this is not as devastating as it might sound. In my case, I had already come to terms with single-sided deafness before even entering the operating theatre.

This approach also removes part of the balance system on that side, but the brain often compensates with time. More importantly, this method offers the clearest and safest view of the tumour and surrounding nerves — especially the facial nerve, which is vital for expressions, blinking, and mouth movement.

Why Is It Preferred for Large Tumours?

If your tumour is large or growing close to the brainstem, the translabyrinthine approach is often the go-to surgical method. Here is why:

Early and clear identification of the facial nerve: This is one of the key benefits. Surgeons are able to see and protect the facial nerve from the very beginning of the procedure. In large tumours, preserving this nerve is often the top priority.

No brain retraction needed: Unlike some other surgical methods, the translabyrinthine approach does not require the surgeon to move or compress parts of the brain to access the tumour. This reduces the risk of damage to healthy brain tissue.

Better access for complete tumour removal: When the tumour fills the internal auditory canal and presses into the cerebellopontine angle (the area near the brainstem), this method gives surgeons the best chance of removing as much tumour as possible, while still being safe.

It is worth noting that the surgical mindset has evolved. In the past, the goal was often to remove the entire tumour at all costs. Today, the focus has shifted: preserving facial nerve function is just as important as removing the tumour. Surgeons now use advanced facial nerve monitoring throughout the procedure. Electrodes track the nerve in real time, so if the instruments come close or the nerve is under stress, the team is alerted immediately. The priority is clear — you do not want to wake up with a droopy face. Sometimes, as in my case, a small portion of the tumour is deliberately left behind to protect the nerve. It is a calculated and compassionate choice.

How Is It Done?

This is a high-precision surgery that typically involves two specialists: a neurotologist (ear and skull base surgeon) and a neurosurgeon. Here is a simplified overview of how it is done:

Incision and exposure: A curved incision is made behind the ear, and the skin and tissue are gently moved aside. The surgeon then removes part of the mastoid bone and drills through the inner ear (the labyrinth) to create a corridor toward the tumour.

Sacrificing the inner ear: The hearing and balance organs on the tumour side are removed. This gives direct access to the internal auditory canal and the space between the brainstem and cerebellum where the tumour often grows.

Tumour identification and removal: Using high-powered microscopes and monitoring systems, the surgeons locate the tumour and facial nerve. Removal is done slowly and carefully, sometimes millimetre by millimetre. Facial nerve monitoring is used throughout to avoid damage.

Closure: After the tumour is removed (or reduced as much as safely possible), the surgical space is filled with a small amount of fat (usually from the abdomen) to help prevent fluid leaks. The area is closed, and the patient is moved to recovery.

It sounds intense — and it is. But for large tumours where hearing is already compromised, this approach is a well-established, widely used, and often life-saving technique.

Final Thoughts

If you are newly diagnosed and your doctor mentions the translabyrinthine approach, I know how overwhelming it can be. Just hearing the word “tumour” is enough to send anyone into a spiral. But know this: the approach is chosen with safety, visibility, and facial nerve preservation in mind.

Yes, it means hearing loss on one side. But it also means a clearer path to the tumour, less risk to your brain, and a better chance of protecting your ability to smile, speak, and blink.

I did not get to choose my approach, and honestly, I am glad I did not have to. My medical team knew what they were doing, and their decision gave me the best possible outcome given the size and location of my tumour.

If you are facing this kind of surgery, take heart: you are not the first to walk this path, and there is a community here that understands. I will keep sharing more around acoustic neuroma. My whole website is dedicated to it, as I could not write everything in my memoir Whispers Through the Fog.

If you prefer audio, you can listen to the podcast version here.

Spoitfy Podcast

you prefer visual content, you can watch the YouTube version of this topic here.

Watch on You tube

Stay informed. Stay hopeful. You have got this.
```

### External links / references

- [Spoitfy Podcast](https://open.spotify.com/episode/1bGObWCMICVFfUvpnkpbt8?si=1c0u8W3WSkKLfEt-dTlSxw)
- [Watch on You tube](https://youtu.be/RTpJF5avnAU)

---

## Learning to Hear Again: Life with Single-Sided Deafness After Acoustic Neuroma

- **URL:** https://amirkhesro.com/learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma/
- **Slug:** `learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma`
- **Published:** 2025-07-25
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/07/optimised_for_wordpress-1.png

### Excerpt

```
As promised with a reader, today I am offering a blend of insight and personal reflection on single-sided deafness caused by acoustic neuroma. Remember, my blogs are an attempt to make sense of my diagnosis and should not be considered medical advice. For diagnosis, treatment, or any health decisions, always consult medical professionals. The tumour, […]
```

### Full text

```
As promised with a reader, today I am offering a blend of insight and personal reflection on single-sided deafness caused by acoustic neuroma. Remember, my blogs are an attempt to make sense of my diagnosis and should not be considered medical advice. For diagnosis, treatment, or any health decisions, always consult medical professionals.

The tumour, called acoustic neuroma or vestibular schwannoma, arises from Schwann cells on the vestibular portion of the nerve but, as it grows, it can compress the cochlear nerve, disrupting sound transmission from the ear to the brain. It can also reduce blood flow to the inner ear, further undermining hearing.

For me, that silence was not sudden. It crept in over months — muffled voices, missed high tones, a ring that never left. For a long time, I thought it was ageing or side effects of working in a noisy environment. Until an MRI told me otherwise. In rarer cases, hearing might suddenly disappear overnight, possibly due to disrupted blood flow to the cochlea. These sudden changes are sometimes reversible with prompt treatment, but not always.

The Invisible Challenges of SSD

Living with single-sided deafness (SSD) can be challenging in ways that are not immediately visible to others. It changes how you navigate social spaces, understand conversations, and feel connected to your surroundings. But with understanding, technology, and adaptation, many people go on to live full and connected lives.

Losing Direction: The Struggle with Sound Localisation

One of the earliest things you notice with SSD is losing the ability to tell where sounds are coming from. Your brain normally uses input from both ears to determine direction. Without that comparison, sound loses depth and you find yourself turning in circles trying to locate a voice or a noise. This can be disorienting, and in some cases, even dangerous. Imagine not realising a car is approaching from your deaf side because you can’t tell where the sound is coming from.

The Noise That Exhausts

Busy environments are especially difficult. In restaurants or at gatherings, your good ear receives all the sound — without help from the other side to filter it. Group conversations become tiring. If someone is speaking on your deaf side, you might miss everything. It becomes mentally exhausting just to keep up.

The Head Shadow Effect

Another overlooked challenge is the head shadow effect. Sounds from your deaf side get blocked by your own head before they reach the hearing ear. This makes voices on that side seem far away or unclear. It is not that people are mumbling — your hearing field is simply limited.

The Emotional Impact

SSD is an invisible condition. People forget or do not realise you cannot hear on one side. You find yourself constantly asking: Please speak on my right side or Face me when you talk. Hiding hearing loss can lead to awkward moments and misunderstandings. Being open about your needs often makes communication easier.

The Unexpected Benefit

Interestingly, SSD can sometimes bring unexpected benefits. One of them is better sleep. If you sleep on your hearing ear, the world becomes quiet. In noisy cities or shared rooms, this can be a hidden blessing. When I turn onto my good ear, it is like flipping off the noise of the world.

Assistive Technologies

Thankfully, there are many tools and strategies that help people with SSD adjust. One is the use of CROS (Contralateral Routing of Signal) or BiCROS hearing aids. These devices pick up sound from the deaf side and wirelessly transmit it to the good ear, allowing you to hear conversations and noises that would otherwise be missed. Though some users need time to adjust to hearing everything in one ear, many find these aids reduce the constant need to reposition themselves during conversations.

Another option is a bone-anchored hearing system (BAHS), which transmits sound through the bones of the skull to the good ear. Unlike CROS, BAHS works via bone conduction, bypassing the damaged ear entirely. It can offer a more seamless auditory experience for some users and does not require wearing a device on the good ear. While this approach involves minor surgery to implant the anchor, it often improves spatial awareness and speech comprehension significantly.

Beyond hearing aids, other assistive technologies can be helpful in specific situations. Remote microphones, personal amplifiers, or Bluetooth streaming devices can improve hearing in meetings, classrooms, or public events. Even using smartphone features like Live Listen or subtitles on media content can make daily life more manageable. These tools do not restore normal hearing, but they improve clarity and reduce strain in many listening environments.

Personal Strategies

Practical lifestyle strategies also play a major role in coping with SSD. Positioning is crucial: at dinner, in a car, or at a meeting, orient yourself so your good ear is toward the sound source. Do not hesitate to ask people to switch sides or speak up. Most are happy to accommodate once they understand the situation. Similarly, make sure you can see the speaker’s face — facial expressions and lip movement provide essential visual cues that support understanding. Good lighting and facing people directly can dramatically improve communication.

Being open with others is key. Let people know you only hear on one side and explain how they can help. Specific requests, like sit on my right side in the car or tap me before speaking if I am not facing you, can make conversations smoother. Educating close friends, family, or coworkers helps prevent frustration and ensures you are not mistakenly seen as aloof or inattentive.

Some people find that managing their sound environment improves quality of life. Choosing quieter restaurants, taking breaks during loud events, or using noise-cancelling headphones in overstimulating environments can reduce auditory fatigue. Others discover creative ways to reduce sensory overload, such as momentarily using an earplug in the good ear during chaotic moments to take a sound break. There is no one right way — the key is figuring out what works for you.

In addition, talking to others with SSD or acoustic neuroma experiences can provide emotional relief and practical tips. Mental health professionals can assist if you are dealing with anxiety, fatigue, or feelings of isolation. You are not alone, and connecting with others who understand can be empowering.

Maintain a sense of humor and perspective: It may sound trivial, but many people with hearing loss find that laughing at the small absurdities (like mis-hearing something in a ridiculous way) and educating others with a light touch (“Oops, I can’t hear on that side – I’m not ignoring you, I promise!”) helps ease social tension. Over time, your friends and colleagues will learn your preferences (for example, that you’ll always take the seat on the left side of the conference table so your right ear is toward everyone). It gets easier as you and your circle adjust together. Celebrate the victories – like attending a big family dinner and realizing you caught almost everything, thanks to smart positioning and maybe your new CROS device – and be gentle on yourself on the tougher days.

The Bigger Picture: Learning from Others

In learning more about this journey, I also came across Neurofibromatosis Type II (NF2) — a genetic condition where tumours grow on both auditory nerves, leading to hearing loss in both ears. People with NF2 often face profound or total deafness, and sometimes even cochlear implants are not an option. They rely on auditory brainstem implants, which bypass the cochlear nerve altogether. When I read about NF2 and the challenges of bilateral deafness, I could not help but feel a quiet gratitude for my one good ear. That perspective changed how I moved through the world — it made every sound from my hearing side feel like a gift.

Living Fully, Even with One Ear

With time, people with SSD find their rhythm. Yes, there are challenges — but there is also resilience, adaptation, and a new appreciation for sound. Your hearing may be one-sided, but your life does not have to be.

My Story, Your Story

If you are new to this journey, or have lived with SSD for years, know this: your experience is real. Your frustration is understood. Your silence is heard. And you are not alone.

For those interested in a more personal perspective, my book Whispers Through the Fog offers a deeper look at my journey with acoustic neuroma — from diagnosis to adaptation and everything in between. You may find comfort or reflection in its pages, just as I found healing in writing it.

Let Us Hear Each Other

The world may sound different now, but it has not gone away. It is waiting for you to hear it in your own way.

I would love to hear from you. What tools or habits have helped you? Please share in the comments or get in touch.

Your silence is heard. And you are not alone.
```

### External links / references

- [Whispers Through the Fog](https://mybook.to/acousticneuroma)

---

## Understanding Fatigue in Acoustic Neuroma: What It Is, Why It Happens, and How to Manage It

- **URL:** https://amirkhesro.com/understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it/
- **Slug:** `understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it`
- **Published:** 2025-07-12
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/07/ebf2c2d5-cfbc-49f1-a812-9c62b7f54a4e.png

### Excerpt

```
Living with an acoustic neuroma doesn’t just affect your hearing or balance—it can completely drain your energy. Fatigue is one of those life-altering symptoms of AN, which is often misunderstood and sometime confused with tiredness. This blog breaks it down into three key areas: 1. What Is Fatigue? Fatigue isn’t the same as being tired. […]
```

### Full text

```
Living with an acoustic neuroma doesn’t just affect your hearing or balance—it can completely drain your energy. Fatigue is one of those life-altering symptoms of AN, which is often misunderstood and sometime confused with tiredness. This blog breaks it down into three key areas:

What is fatigue?

Why does acoustic neuroma cause fatigue?

How can you manage fatigue effectively?

1. What Is Fatigue?

Fatigue isn’t the same as being tired. Tiredness comes after a long day or poor sleep and typically improves with rest. Fatigue is deeper, more complex, and persistent. It’s physical, mental, and emotional exhaustion that doesn’t go away easily even after sleep.

People with fatigue often describe:

Waking up unrefreshed

Feeling like their body is “heavy” or slowed down

Struggling to concentrate (also known as “brain fog” read more about brain fog here)

Needing significantly more rest than usual

Some days, even the smallest acts—like brushing your teeth or getting dressed—can feel like running a marathon. It’s not that you’re just sleepy; it feels like your body has no fuel left. You just want to lie down and do nothing. And that’s not laziness—that’s fatigue in its truest form.

Fatigue can last for weeks, months, or even years. And for people living with a tumour like Acoustic Neuroma, it often becomes a daily reality.

2. Why Does Acoustic Neuroma Cause Fatigue?

Fatigue in AN is a neurological, physical, and emotional response to the unique challenges this condition brings. Here’s why it happens:

Your brain is constantly compensating

Your vestibular system—responsible for balance—is impaired. That means your brain is in overdrive, trying to keep you upright and oriented. Even sitting in a brightly lit room can be exhausting.

This leads to:

Constant sensory overload

Vestibular brain fog

Mental and physical exhaustion

Hearing loss increases cognitive load

AN often damages the hearing nerve on one side. Your brain has to work much harder to process sound and understand speech, especially in noisy settings. This extra listening effort depletes your mental energy quickly.

Balance problems drain the body

Even standing or walking can feel like a workout. Your muscles and reflexes are constantly trying to stabilize your body. This physical strain can lead to whole-body fatigue, even from low-level activity.

Tumour pressure and brain changes

The acoustic neuroma can press against critical areas like the brainstem or cerebellum, which are involved in alertness, coordination, and energy regulation. It may also disrupt neurotransmitters like serotonin and dopamine, contributing to fatigue and emotional flatness.

Emotional and psychological stress

Being diagnosed with a brain tumour—even a benign one—brings fear, uncertainty, and long-term emotional strain. Constant anxiety and the effort to “hold it together” adds another invisible layer of fatigue.

Treatment effects

Whether you’ve had surgery or radiation, recovery takes time. Healing uses a lot of energy, and many patients report lingering fatigue for weeks or even months after treatment. This is normal and expected.

3. How to Manage Fatigue with Acoustic Neuroma

I am not a doctor or medical expert but I am a patient. And like many of you, I have lived through the confusing, exhausting, and often invisible symptoms that come with acoustic neuroma. Over time, I have learned to manage them not just through appointments and scans, but by reading, researching, and most importantly talking to others who truly understand. What I share here is a lived experience. And if any part of my journey can help make yours a little easier, then sharing it is more than worth it.

There’s no quick fix, but you can manage fatigue by building personal strategies that works with your body—not against it. Here are some strategies that might help:

Track your fatigue

Keep a diary. Note your sleep, daily activities, and energy patterns. Over time, you’ll spot triggers and trends—helping you anticipate crashes and plan better.

Apply the “marginal gains” principle

Improve one small thing at a time—better sleep, less screen time before bed, regular hydration. These small 1% improvements add up to a big impact.

Pace yourself

Plan your day in chunks. Alternate between active tasks and rest. Avoid waiting until you feel exhausted to stop—take breaks proactively.

Try the “3-activity rule”: one physical, one mental, and one restful task per day.

Move gently and regularly

Short walks, stretching, or simple vestibular exercises help build stamina without overwhelming your system. Movement also improves circulation, balance, and mood.

Eat and hydrate wisely

Choose energy-stable meals with protein, healthy fats, and complex carbs. Stay hydrated. Avoid sugar spikes and late caffeine, which can disrupt sleep and energy.

Create a low-stimulus environment

Bright lights, screens, and background noise increase fatigue. Use dim lighting, noise-canceling headphones, or take “quiet timeouts” throughout the day.

Ask for help

Make a list of tasks that drain you, then see which ones can be simplified, delegated, or skipped altogether. It’s okay to lean on loved ones. Fatigue isn’t laziness—it’s real, and help is part of healing.

Accept, don’t fight

You didn’t choose this fatigue, but you can choose how you respond. Acceptance means working with your limits, not resenting them. That shift in mindset often leads to more peace and less crash-and-burn.

Remember, you are not alone. Fatigue is one of the most misunderstood symptoms of acoustic neuroma, but it’s also one of the most common. Whether you are navigating daily life post-diagnosis or recovering from treatment, know this:

You are not weak. You are adapting to something incredibly complex and that takes strength.

Start small. Track your patterns. Rest without guilt. And celebrate each day you show up for yourself, and your healing.
```

### Internal links

- [here](https://amirkhesro.com/brain-fog-its-not-just-in-your-head-its-in-your-brain)

---

## Understanding Facial Numbness, Dry Eye, and Taste Changes After Acoustic Neuroma

- **URL:** https://amirkhesro.com/understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma/
- **Slug:** `understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma`
- **Published:** 2025-07-05
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/07/optimized_image_for_wordpress-1.jpg

### Excerpt

```
Living with the aftermath of acoustic neuroma surgery can be confusing, frustrating, and at times, deeply isolating. Some common symptoms include facial numbness, weakness in jaw, constant dryness in the eye, and a strange, salty or metallic taste that comes and goes. In my case, I also notice small cuts on my tongue and an […]
```

### Full text

```
Living with the aftermath of acoustic neuroma surgery can be confusing, frustrating, and at times, deeply isolating. Some common symptoms include facial numbness, weakness in jaw, constant dryness in the eye, and a strange, salty or metallic taste that comes and goes. In my case, I also notice small cuts on my tongue and an odd heaviness that makes it feel clumsy and unfamiliar. These symptoms are real, and they don’t just affect the body — they affect the spirit. But over time, I have come to understand that knowing why they happen can ease some of the fear. Today, I want to explain why they occur and remind you that you don’t need to become a neurologist to make sense of what’s happening to your body. A little knowledge can go a long way in helping you accept your situation, keep realistic expectations, and avoid unnecessary worry.

Understanding the Condition

Acoustic neuroma/ vestibular schwannoma forms on the vestibulocochlear nerve (cranial nerve VIII). This nerve controls hearing and balance and is located deep near the inner ear at the base of the brain.

Because of its location, the tumour can also affect nearby cranial nerves, including:

Cranial Nerve VII (Facial Nerve): Controls facial muscles, blinking, and tear production.

Cranial Nerve V (Trigeminal Nerve): Responsible for facial sensation and chewing.

Cranial Nerve XII (Hypoglossal Nerve): Controls tongue movement.

Cranial Nerve IX (Glossopharyngeal Nerve): Involved in taste from the back of the tongue and swallowing.

Whether from tumour pressure or surgery, these nerves may be stretched or irritated, causing long-term symptoms.

Unfortunately, nerves heal very slowly. Some symptoms may persist for months or even years and in some cases, they may never fully improve.

My Symptoms and How They Connect to Nerve Function

Facial Numbness

My left cheek feels disconnected — a bit like after a dental anaesthetic. This is due to the trigeminal nerve (CN V). I often touch or scratch the area not out of irritation, but to feel something again.

Jaw Weakness

Chewing on the left side has become difficult. That is because the mandibular branch of CN V controls the chewing muscles. I now rely more on the right side when eating.

Eye Dryness

My left eye is extremely dry with almost no tear production. This is regulated by the facial nerve (CN VII). I use preservative-free artificial tears multiple times a day to protect the eye and maintain comfort.

Tongue Changes

After surgery, I developed small cuts on the left side of my tongue. This could be due to issues with the hypoglossal nerve (CN XII) — which affects tongue movement — or the lingual branch of CN V, which affects sensation. My tongue sometimes feels clumsy or less coordinated.

A Salty Taste in One Tooth

One of my tooth tastes salty. This can be explained by injury to the chorda tympani, a branch of CN VII that handles taste from the front of the tongue. Nerve signal disruption can lead to phantom tastes like saltiness or metal.

What Helps Me Cope

Preservative-free artificial tears: Essential for preventing eye damage and maintaining comfort.

Facial massage: Light massage around the numb area helps improve circulation and awareness. Be cautious with heat or sharp objects near numb areas.

Mindful chewing: I chew slowly and deliberately to avoid tongue injury and make eating more manageable.

Hydration and sugar-free gum: Drinking water and chewing gum helps reduce odd taste sensations.

If anything worsens or you notice new changes, it’s wise to consult a neurologist, facial nerve specialist, or a speech and swallow therapist for more targeted care.

The Road Ahead

Healing from acoustic neuroma is unpredictable. Some functions return slowly — others may stay changed. And that is acceptable.

I used to look in the mirror and feel disconnected from my face. But the first time I saw a small twitch — a flicker of hope — I knew I was still healing. Not just physically, but emotionally.

The former version of myself might not return exactly. But this journey has taught me resilience, self-compassion, and strength.

Whether you are facing numbness, dry eyes, tongue injury, or emotional fatigue — you are not alone.

Let go of who you were supposed to be, and embrace the person you are becoming.

Take it one day at a time. Ask for help. And never stop showing up for yourself.
```

### Images used

- https://amirkhesro.com/wp-content/uploads/2025/07/optimized_image_for_wordpress-1-1024x683.jpg

---

## From Surgery to Sand: My Leap Back to Life

- **URL:** https://amirkhesro.com/from-surgery-to-sand-my-leap-back-to-life/
- **Slug:** `from-surgery-to-sand-my-leap-back-to-life`
- **Published:** 2025-06-29
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-29-at-19.01.19_a0fc40f1-1-scaled.jpg

### Excerpt

```
The invitation came from Mushtaq, a dear friend from Swat now settled in the UK. He welcomed us to Liverpool for a much-needed break — a chance to get out, breathe, and spend a day by the sea. I was not expecting anything extraordinary. But what followed would become a memorable day in my recovery […]
```

### Full text

```
The invitation came from Mushtaq, a dear friend from Swat now settled in the UK. He welcomed us to Liverpool for a much-needed break — a chance to get out, breathe, and spend a day by the sea.

I was not expecting anything extraordinary. But what followed would become a memorable day in my recovery journey.

The Meal That Grounded Us

Before heading to the coast, Mushtaq had something else waiting for us: a feast.

We sat down to a dastarkhwan, full of flavour and care:

Beef Pulao, warm and aromatic

Haleem, slow-cooked and spiced just right

Mutton Karahi, rich, tender, and full of flavour

Baingan ka Burta, soft, smoky and earthy

A bright, refreshing mint chutney

Mango Lassi and Lemonade

It wasn’t just food — it was home. It was community. It was laughter.

And then we made our way to New Brighton Beach.

Unprepared, But Ready

I was not dressed for what was about to happen.

I wore traditional clothes — shalwar kameez, waistcoat — the kind of outfit you wear to visit friends, not to sprint barefoot into cold waves.

But that is the magic of life, especially in recovery:

The best moments often arrive when you are not prepared for them — but your heart is.

The sky was soft and grey. The sea called out. My friends were already in — running, jumping, laughing like boys who had been waiting their whole lives for this moment.

I stood still for a second, unsure if I should join.

Just eight months ago, something like this felt impossible.

After my acoustic neuroma surgery, I lost the balance nerve on my left side. Then came a stroke, which weakened my entire left side. There were days I couldn’t walk unassisted. Days I couldn’t even trust my body to get me to the washroom. Days where I feared that this dizzy, dependent version of me might be permanent.

But there I was.

Shahid, my friend, smiled at me and said:
“Come on, you have got this.”

I didn’t overthink it.
I just moved.

The moment that said: I am back.

I ran.
I jumped.

The cold water bit at my feet. My body lifted — just for a second — but enough to feel weightless again.
Not just in my legs — in my soul.

It wasn’t graceful. It wasn’t as high as I would have wished. But it was mine.

And that was freedom.

A glimpse — just for a breath — of the person I used to be.
The one who chased mountains and seas.
The one who moved with purpose, not pain.
And for a moment — he was back.

The sand beneath my feet felt like a blessing.
It was a blessing.

Not long ago, I couldn’t even stand on my own.

Andrea’s Voice in the Wind

And then I thought of Andrea, my nurse.
Gentle. Kind. Steady.

She always said:
“You will be better.”

I clung to her words like rope during a storm.

And on that beach, in that wind, I felt her spirit say:
“See? I told you.”

That evening, I posted a photo on WhatsApp — just a mid-air jump, frozen in time.

Inam, my friend, replied:

“This… this is what an answered prayer looks like.”

And then:

“That photo could be the last page of your book – Whispers Through The Fog”

And he was right.

That photo didn’t just show movement — it captured a journey.
The pain.
The prayer.
The patience.
The quiet return of joy.

Chai and Cornmeal flatbread

When we returned, tired and glowing, Mushtaq served us again.

Cornmeal flatbread, warm from the tabakhay

Bitter/Sweet, strong chai

We sat in silence. The sea had said everything.

To the One Still Healing…

If you’re somewhere in the middle of your acoustic neuroma story — this is for you.

If you have just had surgery…
If your balance is gone…
If your hearing is altered…
If the world spins when you stand…
If you are tired of waiting for strength to return…

Let me say it clearly:

You are not alone.

I have been there.
I am still walking it. Still wobbling, still growing stronger. Still having moments of fear — but also of flight.

Healing doesn’t just happen in clinics.
It happens in:

Friendship

Bare feet on sand

Unplanned jumps in traditional clothes

Home cooked food shared with laughter

And words that stick: “You will be better.”

So when your moment comes — even if you didn’t dress for it.
Take it. Jump.

And maybe one day, someone will look at your photo and say:
“This is what an answered prayer looks like.”

Because healing isn’t just recovery.
It’s rediscovery.

And today, I can finally say it — not in totality, not with every piece restored — but with something just as powerful:

I am back.
Not completely.
But the glimpses are enough.
Enough to remind me that I still carry strength.
Enough strength to live a life full of pleasure, presence, and purpose.
```

### External links / references

- [Whispers Through The Fog”](https://mybook.to/acousticneuroma)

---

## Clearing the Haze: How to Cope with Mental Fog in Acoustic Neuroma

- **URL:** https://amirkhesro.com/clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma/
- **Slug:** `clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma`
- **Published:** 2025-06-17
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/06/84c40679-5001-467c-b233-f0bfaf644d5b.png

### Excerpt

```
In my previous post, I explored how brain fog in acoustic neuroma (AN) is more than just a side effect of stress—it’s a genuine neurological phenomenon. Many of you shared your stories, and one theme stood out: “Now that I understand what’s happening, what can I do about it?” While you may be waiting for […]
```

### Full text

```
In my previous post, I explored how brain fog in acoustic neuroma (AN) is more than just a side effect of stress—it’s a genuine neurological phenomenon. Many of you shared your stories, and one theme stood out: “Now that I understand what’s happening, what can I do about it?”

While you may be waiting for surgery—or finding that your symptoms linger or even worsen afterward—mental fog can feel like an unwelcome and persistent companion. It affects focus, memory, and emotional well-being, making everyday life more challenging.

This post is your next step.

Let’s explore practical strategies to cope with mental fog—so you can live more clearly, even while navigating the complexities of AN.

1. Rule Out Treatable Causes First

Before diving into cognitive strategies, start with the basics: ask your Doctor for a full blood test and a thorough medical review. Sometimes, what feels like mental fog from acoustic neuroma is being made worse by underlying, treatable conditions.

Ask your doctor to exclude other possible contributors, such as:

Vitamin D and B12 deficiencies

Thyroid dysfunction

Iron deficiency or anemia

Hormonal imbalances

“After months of fog, I found out I had a severe vitamin D deficiency. Once I started supplementing, my energy and clarity noticeably improved

Also don’t say absolute No to Antidepressants. While antidepressants can’t cure brain fog caused by the physical presence of an acoustic neuroma, they can still play a meaningful role in recovery—especially when the fog is made worse by emotional exhaustion.

Living with AN takes a psychological toll. There’s the shock of the diagnosis, the fear of treatment outcomes, the grief of losing “how you used to function,” and the strain of trying to explain invisible symptoms to others. All of this can lead to chronic stress, anxiety, or low mood—which in turn, can deepen the fog.

You might be sleeping poorly, feeling disconnected, or constantly “on edge”—even if your MRI looks stable. That’s the mind-body loop in action: emotional distress makes cognitive symptoms heavier, and the heavier they feel, the more emotionally drained you become.

So if your doctor suggests antidepressants as a supportive tool, it’s not because they’re dismissing the neurological reality of your condition. It’s because they understand that emotional suffering and cognitive fog often coexist, and treating one can ease the weight of the other.

In this context, antidepressants aren’t a cure—they’re a layer of support. They may help restore balance in your nervous system, reduce the background noise of anxiety or low mood, and give your brain more breathing room to adapt and recover.

Think of it not as a fix, but as a tool in a larger healing strategy—one that includes medical care, therapy, lifestyle adjustments, and a whole lot of self-compassion.

2. Conserve Your Mental Energy

Your brain is working hard to compensate for hearing loss, balance issues, and spatial confusion. Don’t overload it.

Try this:

One task at a time (no multitasking)

Use reminders, checklists, and memos

Break tasks into small, manageable steps

Schedule frequent breaks

Think of it as cognitive pacing—like physical therapy for your brain.

3. Move Gently, Breathe Deeply: Regulate Brain and Body

Movement and calmness might seem like opposites—but together, they are powerful tools to reduce brain fog. Movement boosts blood flow and supports neuroplasticity, while calming your nervous system reduces the anxiety that often makes brain fog worse.

Try this:

Vestibular rehabilitation therapy (ask your ENT or neurologist)

Gentle yoga

Daily walks, especially in nature

I used to walk with my daughters—and I still do. Those quiet, outdoor moments not only help my body but clear my mind. Even something as simple as playing outside with kids or pets can re-engage the senses and ground you in the present moment.

Combine movement with calming practices:

Guided meditation or breathwork (apps like Calm or Insight Timer)

Box breathing: Inhale 4 – Hold 4 – Exhale 4 – Hold 4

Grounding techniques: focus on textures, sounds, or colors around you

A calm, gently moving body helps create a clearer, more focused mind

4. Lean Into Support Systems

You don’t have to do this alone. Isolation worsens fog—connection lightens it.

Ways to find support:

Acoustic Neuroma Association (ANA) forums

Facebook or Reddit support groups

Let trusted friends or family read this blog for insight

Talking to everyone is not the same as talking to someone who truly understands your situation. Find your people—those who get it. It can be incredibly grounding to speak with others who have walked a similar path.

Sharing what you’re going through helps others understand—and gives you emotional space to heal.

5. Use Your “Clear” Windows Strategically

Brain fog can come and go. Use your good windows wisely.

Tips:

Do mentally demanding tasks during peak clarity (often mornings)

Use “foggy” periods for rest or low-stakes activities

Track your fog patterns in a journal or app

Understanding your rhythm allows you to work with your brain, not against it.

6. Practice Compassionate Self-Talk

Progress isn’t always linear. Some days, brain fog wins—and that’s okay.

Learning to speak to yourself with kindness can feel awkward at first. It’s easier said than done, especially when you’re used to pushing through or measuring your worth by how much you get done.

Many of us blame ourselves for not being as “productive” as we used to be—or for not performing certain tasks as easily as others seem to. That quiet self-criticism feeds both depression and mental fog, keeping us stuck in a loop of guilt and fatigue. Try replacing:

“Why can’t I think straight?”
With: “My brain is working hard right now—I’ll take it slow.”

And remember:
Resting is not doing nothing.
Healing is a task.
It takes energy, patience, and resilience. If all you did today was rest, you still did something meaningful—something necessary.

You wouldn’t criticize a friend for needing time to heal. Offer yourself the same grace.

Now it’s my turn to ask you.

Do you experience mental fog with AN? What’s helped you cope?
What was your strategy? What worked for you?
Share your story in the comments below, I would love to hear from you.
```

### Internal links

- [previous post](https://amirkhesro.com/brain-fog-its-not-just-in-your-head-its-in-your-brain)

---

## Brain Fog: It’s Not Just in Your Head, It’s in Your Brain

- **URL:** https://amirkhesro.com/brain-fog-its-not-just-in-your-head-its-in-your-brain/
- **Slug:** `brain-fog-its-not-just-in-your-head-its-in-your-brain`
- **Published:** 2025-06-11
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/06/Screenshot-2025-06-11-080106.png

### Excerpt

```
What Is Brain Fog—And How Do Anxiety and Depression Fit In? “Brain fog” is a term many people use to describe a frustrating mix of cognitive symptoms—sluggish thinking, memory lapses, difficulty concentrating, and mental fatigue. It’s not a formal medical diagnosis, but it’s a very real experience that can disrupt daily life. Many people with […]
```

### Full text

```
What Is Brain Fog—And How Do Anxiety and Depression Fit In?

“Brain fog” is a term many people use to describe a frustrating mix of cognitive symptoms—sluggish thinking, memory lapses, difficulty concentrating, and mental fatigue. It’s not a formal medical diagnosis, but it’s a very real experience that can disrupt daily life. Many people with acoustic neuroma (AN) report these symptoms, often long before or even after treatment.

Similarly, anxiety and depression are common and often co-exist with brain fog. Anxiety refers to persistent feelings of worry, nervousness, or fear that are difficult to control. It can also cause physical symptoms like rapid heartbeat, muscle tension, and dizziness. Depression, on the other hand, often involves persistent sadness, low motivation, feelings of worthlessness, and changes in sleep or appetite.

While these conditions can overlap in how they make us feel—foggy, tired, or mentally drained—it’s important to understand that brain fog is not simply a by-product of emotional stress. Especially in the context of acoustic neuroma, brain fog has clear physiological origins in the brain itself. Recent research—and the lived experience of many patients—has shown that cognitive symptoms are not just emotional responses, but neurological consequences of the tumour’s effects on the brain.

When the Fog Comes First

For many people, being told they have a brain tumour can understandably trigger anxiety, fear, and even depression. It’s true that being told you have a brain tumour along with the whirlwind of decisions about surgery, radiation, or just watching and waiting can lead to anxiety or depression. The fear of the unknown, concern about long-term outcomes, and the sheer weight of the word “tumour” can understandably take a toll on mental health. But in my case, something different happened.

The fog set in long before the diagnosis. Before I knew there was something physically wrong, my mind began to behave differently. My thoughts slowed. My ability to focus scattered. And most unsettling of all, I began to avoid things I used to do confidently, like driving.

That avoidance wasn’t rooted in fear of an accident, it was something much deeper. I felt disconnected from space, like I couldn’t process where I was in relation to other objects. I couldn’t “read the road” the same way. My vision became narrowed, my attention overly fixed on small visual details, while I lost grasp of the wider spatial context around me. This strange phenomenon, I now know, has a fancy name: visuospatial dysfunction.

Yes, like anyone, I have had emotional ups and downs in life, times where stress or sadness clouded my thinking. But this fog felt different. Heavier. More mechanical. It wasn’t just mood-related—it felt like something in my brain’s wiring had changed. That experience is what led me to explore the physiological causes of brain fog in acoustic neuroma because for many of us, this is not just emotional; it’s neurological.

What the Research Shows

Research strongly supports that brain fog can be a direct result of the tumour itself, not just the emotional stress that comes after diagnosis. Several clinical studies have confirmed that people with untreated acoustic neuroma show real, measurable impairments in cognitive function.

A 2023 study of 75 untreated acoustic neuroma patients compared to healthy controls found that patients performed significantly worse in areas like memory, attention, processing speed, executive function, and visuospatial ability—all classic signs of brain fog. Importantly, these deficits appeared before any medical intervention, meaning they weren’t caused by surgery, radiation, or even the emotional weight of having a diagnosis.

Another earlier study found that 69% of patients with untreated tumours had clear signs of cognitive dysfunction, especially in alertness and visual-motor processing speed. Even advanced brain imaging like functional MRI shows changes in how the brain works in AN patients—reinforcing the idea that these symptoms stem from actual structural and functional brain changes, not just mood or mindset.

How Acoustic Neuroma Physically Disrupts the Brain

I am not a neurosurgeon or a brain scientist—but like many patients, I needed to understand what was happening to me. So I started digging, reading studies, watching expert webinars, and piecing things together. What I found helped me make sense of my experience—and I hope it does the same for you. While the science is still evolving, there are some explanations for why brain fog happens in acoustic neuroma.

So how exactly does a benign tumour like acoustic neuroma cause such profound cognitive changes—even before treatment begins? The answer lies in the physical and neurological effects the tumour has on the brain.

1. Hearing Loss Creates Cognitive Strain

Most acoustic neuromas affect one side of the auditory nerve, leading to unilateral sensorineural hearing loss. While that might sound like a simple ear problem, it forces the brain to work extra hard to decode speech and localize sound. This reallocates cognitive resources—especially from areas responsible for memory and focus. Studies show that even one-sided hearing loss can cause grey matter reduction in the frontal and auditory cortices, leading directly to cognitive fatigue and slower thinking.

2. Vestibular Dysfunction and Spatial Disorientation

Dr. Megan Sherrod explains in her ANA webinar, disruption of the vestibular system in AN patients affects brain regions like the hippocampus and parietal cortex—areas essential for navigation and spatial awareness. This sensory conflict can lead to what she describes as a cycle of dizziness, imbalance, and anxiety, making the brain work harder to maintain equilibrium and focus.

3. Frontal Lobe and Cerebellar Involvement

Though acoustic neuromas are slow-growing, they can press against the cerebellum and brainstem, structures now known to play a role in executive function, attention, and emotional regulation. Even smaller tumours—without obvious mass effect—can disrupt these circuits through network-level changes seen on functional MRI. Although some patients may appear outwardly “normal” or even perform adequately on standard cognitive tests, they can still experience real disruptions in attention, processing speed, and spatial awareness due to the tumour’s effects on key brain systems.

4. Neurochemical Disruption

The tumour’s impact on brain circuits also influences levels of neurotransmitters like dopamine, serotonin, and norepinephrine. These are the same chemicals involved in mood and cognition—and their disruption may contribute to a blend of brain fog, emotional flattening, and executive dysfunction. This might explain why brain fog in AN doesn’t respond to typical anxiety or depression treatments—it has a mechanical origin, not just a psychological one.

When a Name Brings Clarity

For many people, receiving a diagnosis like acoustic neuroma is understandably overwhelming. But for me, the experience was surprisingly different.

Rather than spiralling deeper into worry, I actually felt relieved. For months—maybe even years—I had been struggling with a kind of cognitive cloud I couldn’t explain. My thoughts felt slow. Conversations were draining. I knew something was wrong, but I didn’t have the language or validation to describe it.

So when I finally heard the diagnosis, it was like turning on a light in a dark room. I wasn’t just “tired,” “burnt out,” or “too sensitive.” There was a real, physiological reason my brain wasn’t functioning the way it used to.

In contrast to patients who feel worse after getting their diagnosis, I began to feel mentally lighter. My condition had a name—and with that came understanding, support, and, most importantly, a path forward. That shift in perspective didn’t make the symptoms go away, but it gave them context, and that in itself was incredibly empowering.

All I wanted to say today is that Brain fog in acoustic neuroma is not just “in your mind.” It’s a product of direct neurological interference, altered brain chemistry, and the body’s efforts to adapt.

And by acknowledging the biological roots, we can reduce the stigma and better support those living with AN—not by dismissing their symptoms, but by equipping them with tools to recover, adapt, and thrive.
```

### Images used

- https://amirkhesro.com/wp-content/uploads/2025/06/d9491fa5-9876-459d-943d-13f1c83c4f26-300x200.png
- https://amirkhesro.com/wp-content/uploads/2025/06/4b7909ba-0d91-47dc-ac44-500bcfbfce78-300x300.png
- https://amirkhesro.com/wp-content/uploads/2025/06/00945d0b-3de4-4b2f-9179-03696a6fd37f-2-300x300.png

---

## After the Feast: A Rainy Walk, Warm Hearts, and the Road to Recovery

- **URL:** https://amirkhesro.com/after-the-feast-a-rainy-walk-warm-hearts-and-the-road-to-recovery/
- **Slug:** `after-the-feast-a-rainy-walk-warm-hearts-and-the-road-to-recovery`
- **Published:** 2025-06-09
- **Featured image:** https://amirkhesro.com/wp-content/uploads/2025/06/image-1.jpg

### Excerpt

```
Yesterday, on 8th June 2025, something beautiful unfolded at Tittesworth Reservoir. Families arrived from across the country—Birmingham, Liverpool, Stoke-on-Trent—cars packed with people, food, laughter, and the promise of togetherness. We came with kids in the back seat, containers of biryani in the boot, and flasks of chai tucked between bags. Some of us hadn’t seen […]
```

### Full text

```
Yesterday, on 8th June 2025, something beautiful unfolded at Tittesworth Reservoir.

Families arrived from across the country—Birmingham, Liverpool, Stoke-on-Trent—cars packed with people, food, laughter, and the promise of togetherness. We came with kids in the back seat, containers of biryani in the boot, and flasks of chai tucked between bags. Some of us hadn’t seen each other in a while. Others were meeting for the first time.

Early afternoon, we were all there. And the grey skies didn’t stand a chance.

The Eid Feast Before the Footsteps

We gathered before the walk to share an Eid al-Adha (Loi Akhtar) feast.

Spread across tables and picnic benches were dishes that told stories:

– Biryani, layered and aromatic

– Lamb curry, rich and slow-cooked

– Haleem, thick and hearty

– Pulao, light and fragrant

– Spiced vegetables, full of colour

– And the sweet finishing touches: milk cake, classic kheer, and a second, thicker kheer.

I do regret not taking photos of the food—we were probably too hungry to think about it at the time! But I did manage to find this one of the beryani, which brings back the flavour of the moment.

There was a quiet rhythm to how the feast began—a reminder of traditions many of us had grown up with back home, where food is served in turns, not in haste. The men started first, dividing the dishes carefully: half for us, and half respectfully set aside for the women and children, who would eat next. It wasn’t formal or announced, just instinctive—a shared understanding rooted in custom and care. Plates were filled with biryani, lamb curry, haleem, pulao, spiced vegetables, and milk cake. Conversations flowed as food was passed from hand to hand. Nearby, the children laughed and tumbled through the reservoir’s play area, while the women gathered in their own corner—shawls drawn, tea in hand—waiting with familiar patience and good-humoured chatter for their turn at the spread.

An 8km Walk Through Rain, Trees, and Meadows

Once the food had settled—barely—we zipped up our jackets, tied our boots, and began the walk.

We took on an 8-kilometre route around the reservoir, a trail that winds through gentle meadows and quiet patches of woodland. The rain came and went, soft and unbothered. The earth was springy underfoot, and the scent of wet grass and leaves reminded us just how alive the countryside is—even in June drizzle.

Roughly twenty of us walked—not just to move, but to connect. To breathe. To remind ourselves that healing—whether physical, emotional, or spiritual—isn’t always found in silence, but in the sound of footsteps side by side.

Halfway through, we paused. Farman poured out hot tea from his flask like a ritual, while Dr. Saib passed around home baked cookies (kajuray). We perched wherever we could—and let the conversation flow.

And of course, the teasing began.

Haircuts were up for critique, as were cricket team allegiances and political loyalties. Some offered sharp one-liners that left everyone speechless before bursting into laughter. It was the kind of banter that only works in a group where there’s deep affection beneath every

The Quiet Work of Healing

For me, this wasn’t just a walk. It was a marker—a small but meaningful milestone in my recovery from an acoustic neuroma.

I have written before about how healing isn’t just about treatment or rest. It’s also about reconnection. With people. With nature. With joy. This walk reminded me again: you don’t always need a deep conversation about illness to feel seen. Sometimes, someone handing you tea without asking is enough. Sometimes, being included in the teasing means you’re still you—whole, welcome, and alive in the eyes of your community.

Why These Days Matter

A feast. An 8km walk through trees and meadows. A bit of rain. A lot of laughter. It might sound simple, but it wasn’t. It was powerful.

It reminded us that healing is not always a solitary act. Sometimes, it’s being part of something—even just a muddy trail and a post-biryani stroll. Sometimes, it’s in the teasing. The cricket debates. The shared cookies. The way no one walks too fast.

To everyone who came: thank you. For the food, the fun, the memories, and the love disguised as banter. And to anyone out there walking their own path of recovery—may you find your feast, your people, and your moment where laughter and healing meet.

You’re not alone on the trail.
```

### Images used

- https://amirkhesro.com/wp-content/uploads/2025/06/image-1-577x1024.jpg
- https://amirkhesro.com/wp-content/uploads/2025/06/image-2b-1024x768.jpg
- https://amirkhesro.com/wp-content/uploads/2025/06/image-3-1024x768.jpg
- https://amirkhesro.com/wp-content/uploads/2025/06/imagw-final-1024x768.jpg

---

## Building Community Through Shared Stories

- **URL:** https://amirkhesro.com/building-community-through-shared-stories/
- **Slug:** `building-community-through-shared-stories`
- **Published:** 2025-06-07

### Excerpt

```
In a fast paced world that often pushes people towards isolation, few things are more powerful than the act of storytelling. Stories connect us. They help us understand ourselves and each other. Whether spoken quietly through difficult moments or written in reflection, every story carries the potential to make someone feel seen, heard, and less […]
```

### Full text

```
In a fast paced world that often pushes people towards isolation, few things are more powerful than the act of storytelling. Stories connect us. They help us understand ourselves and each other. Whether spoken quietly through difficult moments or written in reflection, every story carries the potential to make someone feel seen, heard, and less alone.

Why Stories Matter

Whispers Through the Fog was written with that very intention. It was not only to share a personal journey but also to create space for others to reflect on their own. The book is not just a narrative. It is an invitation. An invitation to pause, to think, and to recognise that many of the struggles we face are shared by others in ways we often do not realise.

Because healing rarely happens in isolation. It often begins when stories are shared.

How to Share Your Story

If you would like your story to be shared, you are welcome to send it by email.

Email: info@amirkhesro.com

You do not need to be a writer. You only need to be honest. Your story may be long or short. It may describe a moment, a struggle, a recovery, or a lesson learned along the way.

Selected stories will be published on the website as part of this growing collection of shared human experiences.

Let Us Build This Together

Communities are not built through platforms alone. They are built through voices, memories, and the courage to share what life has taught us.

If a story helped you feel less alone, imagine what your story might do for someone else.
```

### Internal links

- [info@amirkhesro.com](mailto:info@amirkhesro.com)

---

## Facing the Fog: My Journey with Acoustic Neuroma

- **URL:** https://amirkhesro.com/facing-the-fog-my-journey-with-acoustic-neuroma/
- **Slug:** `facing-the-fog-my-journey-with-acoustic-neuroma`
- **Published:** 2025-06-02

### Excerpt

```
By Amir Khesro When I first heard the words “acoustic neuroma”, I didn’t know what they meant. All I knew was that something inside me had shifted — physically, emotionally, and permanently. Acoustic neuroma is a rare, benign brain tumor that grows on the nerve connecting the ear to the brain. It may be noncancerous, […]
```

### Full text

```
By Amir Khesro

When I first heard the words “acoustic neuroma”, I didn’t know what they meant. All I knew was that something inside me had shifted — physically, emotionally, and permanently.

Acoustic neuroma is a rare, benign brain tumor that grows on the nerve connecting the ear to the brain. It may be noncancerous, but its impact is anything but gentle. For me, it brought unexpected challenges: imbalance, hearing loss, dizziness, and a level of fatigue I couldn’t explain.

As a scientist by profession, I tried to rationalize it — to understand it clinically. But healing doesn’t always come from understanding; sometimes, it comes from surrendering. I had to surrender to the slowness of recovery, to the silence in my ear, and to the uncertainty that followed me for months.

That surrender gave birth to something I never expected: my first book. Whispers Through the Fog was written during the quietest and most uncertain phase of my life. It is part memoir, part reflection, and entirely a search for meaning through illness.

This blog will be my space to share the things that didn’t make it into the book — the moments between the scans, the emotions behind the words, and the hope I’ve found in connection.

If you’ve faced a life-changing diagnosis or are navigating recovery of any kind, I hope my words make you feel a little less alone.

Thank you for being here.

— Amir
```

---
