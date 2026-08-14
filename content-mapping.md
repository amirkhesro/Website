# Content Mapping — amirkhesro.com static rebuild

Maps every page, product and post in [`content-inventory.md`](content-inventory.md) onto the new
static site structure. Covers what gets reused, what gets retired, what has to be written from
scratch, and how every existing URL should be handled so nothing already linked from elsewhere on
the web breaks.

Nothing has been built. This is the plan.

---

## The new structure

| # | New page | Path | Status |
|---|----------|------|--------|
| 1 | Home | `/` | Rework from existing |
| 2 | Whispers Through The Fog | `/whispers-through-the-fog/` | Mostly reuse |
| 3 | The Acoustic Neuroma Handbook | `/the-acoustic-neuroma-handbook/` | Mostly reuse |
| 4 | Signed Copies | `/signed-copies/` | Part reuse, part new |
| 5 | Blog index | `/blog/` | New index, 24 posts reused as-is |
| 6 | About | `/about/` | Mostly reuse |
| 7 | Connect | `/connect/` | Reuse, minus the form |
| 8 | For Bookshops *(optional)* | `/for-bookshops/` | **Entirely new — blocked, see below** |
| 9 | Disclaimer | `/disclaimer/` | **Recommended addition — see below** |
| — | 24 blog posts | `/<post-slug>/` | Reuse verbatim |

**33 pages in total** (9 top-level + 24 posts), down from 41 existing URLs.

---

## Four decisions to make before building

These change the shape of the build, so they are worth settling now.

### 1. The Disclaimer page is not in your list, but it is linked from every page

`/disclaimer/` is reached from the footer of the entire current site ("Read Full Disclaimer"). It is
also the page that states plainly that you are not a medical professional and that nothing on the
site is medical advice. On a patient-facing site about a brain tumour, dropping it would remove the
one page doing that job, and would break a link that appears on all 39 existing pages.

**Recommendation: keep it as a ninth page.** I have included it in the structure above and in the URL
map below. Say the word if you would rather fold the text into the footer instead.

> **Separately — the live Disclaimer is broken.** Its final sentence is cut off mid-clause: *"…you
> must seek advice from your doctor,"* and then it stops. This is not a capture error; the live page
> genuinely ends there. The text needs finishing before it goes onto the new site.

### 2. `/acoustic-neuroma/` is the biggest page on the site and has no home in the new structure

The Acoustic Neuroma hub is ~5,800 characters, sits in the main navigation, and is the page most
likely to be attracting search traffic for the condition itself. The new structure has no equivalent.

Its content is almost entirely **navigational** — section headings, short descriptions, and cards
pointing at blog posts and category archives. There is very little prose that exists only there. So
retiring it loses less than its size suggests, but it is still the single largest content decision
in this migration.

Three options:

| Option | What happens | Trade-off |
|---|---|---|
| **A. Retire, redirect to `/blog/`** *(recommended)* | The hub was mostly a launcher into blog content; the blog index inherits that job | Simplest. Loses the topic-grouped framing |
| **B. Retire, redirect to `/the-acoustic-neuroma-handbook/`** | Closest topical match; the handbook covers the same ground properly | Sends an information-seeking visitor to a sales page |
| **C. Keep it as a tenth page** | Preserves the SEO landing page and the grouped entry points | One more page to build and maintain, outside your stated structure |

I have assumed **Option A** in the URL map below. It is a one-line change if you prefer another.

### 3. Blog post URLs — keep them where they are

Your 24 posts currently live at the **root**, e.g. `amirkhesro.com/teaching-with-acoustic-neuroma/`,
not under `/blog/`. These are the URLs that have been shared in support groups, on Reddit and
Facebook, and indexed by Google over the past 14 months.

**Recommendation: keep every post at `/<slug>/` and use `/blog/` for the index only.** This preserves
all 24 URLs exactly, requires zero redirects for your most-linked content, and costs nothing.

The alternative — moving posts to `/blog/<slug>/` — is tidier but breaks all 24 URLs and needs 24
redirect stubs to repair. Tidiness is not worth that. The URL map below assumes posts stay put.

### 4. The For Bookshops page is blocked on information the current site does not contain

I searched the entire inventory: **there is no ISBN anywhere on the current site**, for either book,
in any edition. A trade-ordering page is built around ISBNs, so this page cannot be written until you
supply them. See the checklist at the end for exactly what is needed.

> **Related — the Ingram links on both book pages are currently wrong.** "Order from Ingram" and
> "Order from Amazon" both point to the same URL, `https://mybook.to/acousticneuroma`, which is an
> Amazon-targeting universal link. Whatever happens with the For Bookshops page, these need fixing.

---

# Part 1 — New page mapping

## 1. Home → `/`

**Reuse from `https://amirkhesro.com/` (page ID 2958):**

- The "Acoustic Neuroma Hub" heading and the intro paragraph ("An acoustic neuroma diagnosis raises
  more questions than most appointments have time for…") — reusable verbatim.
- The entire **Featured Books** section: the framing line "One book to understand the diagnosis. One
  to understand what it feels like. Both written from the same experience." plus both book blurbs and
  the format lists (Paperback / Hardcover / eBook / Signed Copy). This is the strongest copy on the
  page and maps directly onto the new structure.
- Both cover images.

**Needs rework:**

The "Choose Your Journey" block of six cards is the problem. Four of its six destinations do not
exist in the new structure:

| Card | Currently points to | In the new structure |
|---|---|---|
| Newly Diagnosed | `/you-have-just-been-diagnosed-with-acoustic-neuroma/` | ✅ Still exists (blog post) |
| Understanding Acoustic Neuroma | `/acoustic-neuroma/` | ❌ Retired (see Decision 2) |
| Recovery Hub | `/category/whispers/` | ❌ Category archive retired → `/blog/` |
| Patient Stories | `/category/lived-experiences/` | ❌ Category archive retired → `/blog/` |
| Videos & Podcast | YouTube (external) | ✅ Keep as external link |
| Community Support | Facebook group (external) | ✅ Keep as external link |

**Recommendation:** collapse six cards into four — *Newly Diagnosed* (blog post), *Read the Blog*
(`/blog/`), *Videos & Podcast* (YouTube), *Community* (Facebook). Fewer, working destinations.

**Write from scratch:** new link targets for the reworked cards; a short signed-copies call to action
pointing at `/signed-copies/`.

**Check before reuse:** the stat counters read "20+ Blogs", "10+ Patient Resources", "40+ Videos &
Podcast", "Worldwide Community". "20+ Blogs" is now 24 and will keep growing; "10+ Patient Resources"
does not correspond to anything countable in the new structure. Verify or drop these.

---

## 2. Whispers Through The Fog → `/whispers-through-the-fog/`

**URL is unchanged.** This is the cleanest migration on the site.

**Reuse from `https://amirkhesro.com/whispers-through-the-fog/` (page ID 2954) — essentially all of it:**

- Title, subtitle "A Journey through a Brain Tumour: Acoustic Neuroma", and the "#1 Best Seller
  Memoir in Brain Diseases" banner.
- The positioning paragraph ("A raw, unfiltered memoir that does not perform resilience but lives
  it…").
- The buy-options block: Author Signed Copy / Paperback / Hardcover / eBook.
- The pull-quote from the book ("In the culture I come from, we do not name depression…").
- The Andrea Wadeson endorsement.
- "Purpose", "Motivation", "Inside the Pages", "Who Should Read This Book?" — all four sections
  verbatim.
- Cover image.

**Changes needed:**

- "Order from Author" currently points to the WooCommerce product page. Repoint to `/signed-copies/`.
- Fix the Ingram link (currently duplicates the Amazon link — see Decision 4).
- The **Goodreads reviews widget** is a third-party embed. It will still work on a static site, but
  decide whether to keep the live widget or hard-code a few pulled quotes. A static excerpt is faster
  and cannot break; the widget stays current on its own.

**Write from scratch:** nothing.

---

## 3. The Acoustic Neuroma Handbook → `/the-acoustic-neuroma-handbook/`

**URL is unchanged.**

**Reuse from `https://amirkhesro.com/the-acoustic-neuroma-handbook/` (page ID 4844):**

- Full title "The Acoustic Neuroma Handbook: From Diagnosis to Recovery and Beyond" and the long
  description paragraph.
- The buy-options block (same four formats).
- Both pull-quotes, including the full Andrea Wadeson foreword endorsement.
- "Purpose", "Motivation", "Inside the Pages" (the 8-point contents list), "Who Should Read This
  Book?" (the 8-audience list plus its closing line) — all verbatim.
- Cover image.

**Must be dropped:**

- The **review submission form** (Name / Email / Website / Rating / Submit) — a static site cannot
  process form submissions.
- The **test review**: "Sufyan / Jul 28, 2026 / Test / ste", currently displayed publicly along with
  "Average rating: 1 reviews". This is placeholder junk sitting live on your best sales page. Do not
  carry it over.

**Fix on the way across:** the Purpose section opens with a typo — *"here is no shortage of clinical
information"* should read *"There is no shortage…"*.

**Write from scratch:** if you want reviews on the page, real quotes to replace the removed widget.

---

## 4. Signed Copies → `/signed-copies/`

Replaces the entire WooCommerce shop: 2 product pages plus `/shop/`, `/cart/`, `/checkout/` and
`/my-account/`.

**Reuse — The Acoustic Neuroma Handbook:** the WooCommerce product description is excellent and
substantial (~2,900 characters). Reuse the full description verbatim, plus the fulfilment list:
"Hand-signed by the author / Secure packaging / Optional personalized message". Price £19.99.

**Write from scratch — Whispers Through The Fog:** the product listing is **placeholder text on the
live site right now** — literally "Short discription here" and "Description here". There is no
description to migrate. Draft it from the `/whispers-through-the-fog/` page copy, which is strong and
already written. Price £14.99.

**Write from scratch — the whole ordering mechanism.** This is the substantive new work on the site.
GitHub Pages is static and cannot take payments, hold a cart, or run a checkout. You need an external
route:

| Approach | How it works | Notes |
|---|---|---|
| **Payment links** (Stripe / PayPal / SumUp) | One link per book, hosted by the provider | Simplest. Handles the personalisation note as a custom field |
| **Payhip / Gumroad / Ko-fi Shop** | Full hosted product page, you link to it | Handles VAT and postage rules for you |
| **Order by email** | `mailto:` with a subject line, you invoice manually | Zero fees, but manual and does not scale |

Also needed regardless of route: postage costs, UK vs international shipping, and how the "optional
personalised message" is captured. None of this exists on the current site.

---

## 5. Blog index → `/blog/`

**Reuse:** all **24 posts** migrate with their full text, publication dates and existing URLs
unchanged. Post excerpts already exist in the inventory and can be reused for the index listing.

**Retire:** the two WordPress category archives. `Whispers` (23 posts) and `Lived Experiences`
(1 post) are too lopsided to be useful navigation. Recommend a single reverse-chronological index. If
you want the distinction later, keep it as a tag on the post rather than a separate archive page.

**Write from scratch:**

- A short introduction to the blog index — one or two sentences on what the writing is and who it is
  for. The current `/blogs/` page has no intro; it is a bare WordPress archive.
- Decide on pagination. 24 posts is comfortable on one page; no pagination needed yet.

**Drop:** comment counts ("2 Comments", "3 Comments") appear in the current listing. A static site has
no comments unless you add a third-party service. The counts should go.

> **One post needs attention:** `Patient Stories` (22 Feb 2026) has a body consisting of the words
> *"To be shared soon"*. It is a live placeholder. Either write it before launch or leave it out of
> the migration — it is the only one of the 24 with no real content.

---

## 6. About → `/about/`

**URL is unchanged.**

**Reuse from `https://amirkhesro.com/about/` (page ID 2825) — nearly all of it:**

- "Dr. Amir Khesro", the "Author • Researcher • Patient Advocate" strapline, and the opening summary
  ("From a farming village in Swat, Pakistan, to academic life in England…").
- The four credential tiles: Swat Pakistan / PhD Materials Science / Author / AN Survivor.
- The full "A Journey Between Logic and Introspection" narrative — every paragraph, verbatim. This is
  the heart of the page and needs no changes.
- Portrait image.

**Changes needed:**

- The "Acoustic Neuroma Hub" button points to `/acoustic-neuroma/`, which is retired. Repoint to
  `/blog/`.
- "Author of Whispers Through the Fog" appears under the name. Now that there are two books, consider
  updating to mention both.

**Write from scratch:** nothing required.

---

## 7. Connect → `/connect/`

**URL is unchanged.**

**Reuse from `https://amirkhesro.com/connect/` (page ID 2960):**

- Contact details: Sheffield, UK · +44 777 40 89 442 · info@amirkhesro.com
- All five social links, which are confirmed working:
  - Facebook (AN Support Group) — `https://www.facebook.com/groups/1209862050611107/`
  - TikTok (AN Shorts) — `https://www.tiktok.com/@acousticneuroma`
  - YouTube (AN Channel) — `https://www.youtube.com/@AcousticNeuromaSupport`
  - Spotify (AN Podcasts) — `https://open.spotify.com/show/1wXPLlc4LROQ5mBfGuzzU0`
  - Reddit (AN Support Group) — `https://www.reddit.com/r/AcousticNeuromaHelp/`

**Must change:** the **contact form** (First Name / Last Name / Email / Subject / Message / Submit)
cannot work on GitHub Pages — there is no server to receive it. Options:

| Approach | Notes |
|---|---|
| **`mailto:` link** | Zero dependencies, works everywhere. Opens the visitor's mail client |
| **Formspree / Netlify Forms / Getform** | Keeps a real form; free tiers are adequate at this volume |

**Decide before building:** the phone number is currently published in plain text. Confirm you want a
personal number on a public page that attracts a lot of traffic.

---

## 8. For Bookshops → `/for-bookshops/` *(optional)*

**Reuse: nothing. This page is 100% new content.**

**Blocked.** Trade ordering pages are built around ISBNs, and there is no ISBN anywhere on the
current site. Before this page can be written, I need from you:

- **ISBN-13 for each edition of each book** — paperback and hardcover, both titles (4 ISBNs, likely
  more if the eBook has its own)
- **Imprint / publisher name** as it appears in the Ingram catalogue
- **Trade discount offered** (commonly 40–55%)
- **Returns policy** — returnable or non-returnable. Booksellers check this first
- **Confirmation of Ingram distribution** — IngramSpark or Lightning Source, and which markets (UK,
  US, AU)
- **RRP for each edition**
- Whether you want a **direct trade contact** email separate from `info@amirkhesro.com`

Once those exist, the page itself is short — one paragraph of positioning, a clean ISBN table, the
discount and returns terms, and a contact line. It is the smallest page on the site but the one that
cannot start yet.

---

## 9. Disclaimer → `/disclaimer/` *(recommended, see Decision 1)*

**Reuse from `https://amirkhesro.com/disclaimer/` (page ID 4398):** the four existing paragraphs.

**Write from scratch:** the ending. The live text stops mid-sentence at *"you must seek advice from
your doctor,"*. The closing clause needs writing, and it is worth reviewing the whole disclaimer at
the same time given the site's subject matter.

---

# Part 2 — Retired with no replacement

| Existing page | URL | Why it is going |
|---|---|---|
| Book Shop | `/book-shop/` | **Unfinished template page.** Live content is lorem ipsum from a legal-firm demo theme: "Legal services you can trust", "Sed risus ultricies tristique…", and four fake client logos (Bakken Inc, Welle LTD, Aasen Co., Manage Lty). Nothing here is salvageable. Note it is *not* linked from the nav — the "Book Shop" menu item is a dropdown, not a link to this page |
| Acoustic Neuroma | `/acoustic-neuroma/` | Superseded by `/blog/` + the Handbook page — see Decision 2 |
| Blogs | `/blogs/` | Replaced by `/blog/` |
| Shop | `/shop/` | WooCommerce. Replaced by `/signed-copies/` |
| Cart | `/cart/` | WooCommerce. No equivalent on a static site |
| Checkout | `/checkout/` | WooCommerce. Replaced by external payment provider |
| My account | `/my-account/` | WooCommerce. No equivalent, and no reason to have one |
| Whispers – Author Signed | `/book/whispers-through-the-fog-author-signed/` | Product page → `/signed-copies/` |
| Handbook – Author Signed | `/book/the-acoustic-neuroma-handbook-author-signed/` | Product page → `/signed-copies/` |
| Whispers category | `/category/whispers/` | Category archives retired → `/blog/` |
| Lived Experiences category | `/category/lived-experiences/` | Category archives retired → `/blog/` |

**11 URLs retired.** Of these, only `/acoustic-neuroma/` involves losing real content.

---

# Part 3 — Complete URL map

Every existing URL and where it should point. Domain omitted for readability; all existing URLs are
on `https://amirkhesro.com`.

### Pages

| # | Existing URL | New path | Action |
|---|---|---|---|
| 1 | `/` | `/` | Unchanged |
| 2 | `/about/` | `/about/` | Unchanged |
| 3 | `/whispers-through-the-fog/` | `/whispers-through-the-fog/` | Unchanged |
| 4 | `/the-acoustic-neuroma-handbook/` | `/the-acoustic-neuroma-handbook/` | Unchanged |
| 5 | `/connect/` | `/connect/` | Unchanged |
| 6 | `/disclaimer/` | `/disclaimer/` | Unchanged |
| 7 | `/blogs/` | `/blog/` | **301 redirect** |
| 8 | `/acoustic-neuroma/` | `/blog/` | **301 redirect** (see Decision 2) |
| 9 | `/book-shop/` | `/signed-copies/` | **301 redirect** |
| 10 | `/shop/` | `/signed-copies/` | **301 redirect** |
| 11 | `/cart/` | `/signed-copies/` | **301 redirect** |
| 12 | `/checkout/` | `/signed-copies/` | **301 redirect** |
| 13 | `/my-account/` | `/` | **301 redirect** |

### Products

| # | Existing URL | New path | Action |
|---|---|---|---|
| 14 | `/book/whispers-through-the-fog-author-signed/` | `/signed-copies/` | **301 redirect** |
| 15 | `/book/the-acoustic-neuroma-handbook-author-signed/` | `/signed-copies/` | **301 redirect** |

### Category archives

| # | Existing URL | New path | Action |
|---|---|---|---|
| 16 | `/category/whispers/` | `/blog/` | **301 redirect** |
| 17 | `/category/lived-experiences/` | `/blog/` | **301 redirect** |

### Blog posts — all 24 unchanged

Newest first. Every one of these URLs stays exactly as it is, so **no redirects are needed for any
post**.

| # | Existing URL | New path | Date | Action |
|---|---|---|---|---|
| 18 | `/the-why-me-question-finding-peace-after-acoustic-neuroma/` | same | 2026-05-24 | Unchanged |
| 19 | `/how-much-do-we-really-understand-the-brain-and-nervous-system/` | same | 2026-03-10 | Unchanged |
| 20 | `/patient-stories/` | same | 2026-02-22 | Unchanged — **placeholder content** |
| 21 | `/when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma/` | same | 2026-01-22 | Unchanged |
| 22 | `/teaching-with-acoustic-neuroma/` | same | 2026-01-17 | Unchanged |
| 23 | `/what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it/` | same | 2026-01-05 | Unchanged |
| 24 | `/balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink/` | same | 2025-12-27 | Unchanged |
| 25 | `/when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained/` | same | 2025-12-20 | Unchanged — **see slug note** |
| 26 | `/you-have-just-been-diagnosed-with-acoustic-neuroma/` | same | 2025-12-16 | Unchanged |
| 27 | `/tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it/` | same | 2025-11-23 | Unchanged |
| 28 | `/the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting/` | same | 2025-11-14 | Unchanged |
| 29 | `/the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it/` | same | 2025-11-07 | Unchanged |
| 30 | `/from-hospital-bed-to-standing-tall-salford-face-to-face-meeting/` | same | 2025-09-21 | Unchanged |
| 31 | `/what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness/` | same | 2025-08-14 | Unchanged |
| 32 | `/understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery/` | same | 2025-07-30 | Unchanged |
| 33 | `/learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma/` | same | 2025-07-25 | Unchanged |
| 34 | `/understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it/` | same | 2025-07-12 | Unchanged |
| 35 | `/understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma/` | same | 2025-07-05 | Unchanged |
| 36 | `/from-surgery-to-sand-my-leap-back-to-life/` | same | 2025-06-29 | Unchanged |
| 37 | `/clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma/` | same | 2025-06-17 | Unchanged |
| 38 | `/brain-fog-its-not-just-in-your-head-its-in-your-brain/` | same | 2025-06-11 | Unchanged |
| 39 | `/after-the-feast-a-rainy-walk-warm-hearts-and-the-road-to-recovery/` | same | 2025-06-09 | Unchanged |
| 40 | `/building-community-through-shared-stories/` | same | 2025-06-07 | Unchanged |
| 41 | `/facing-the-fog-my-journey-with-acoustic-neuroma/` | same | 2025-06-02 | Unchanged |

> **Slug note on #25:** the URL reads `…surgeryfacial-numbness…` — the words "surgery" and "facial"
> are run together because the title's en-dash was dropped when WordPress generated the slug. It is
> ugly, but **do not fix it**. The URL is 8 months old and may be linked externally. Changing it
> gains nothing and risks breaking a live link.

### New URLs with no predecessor

| New path | Note |
|---|---|
| `/signed-copies/` | New page, inherits traffic from 6 retired shop URLs |
| `/for-bookshops/` | New page, no existing equivalent |

### Totals

- **41 existing URLs** accounted for: 13 pages + 2 products + 2 category archives + 24 posts
- **30 unchanged** — 6 pages + 24 posts
- **11 need redirects**
- **2 new pages** with no predecessor

---

# Part 4 — How to actually do the redirects

This needs flagging early, because it constrains the build.

**GitHub Pages cannot issue 301 redirects.** There is no `.htaccess`, no server config, no redirect
rules. This is a hard platform limitation. Two ways around it:

### Option A — Cloudflare Redirect Rules *(recommended)*

Your domain is **already behind Cloudflare** today (confirmed from the response headers on the live
site). That means you can configure genuine 301 redirects at the edge, before requests ever reach
GitHub Pages. All 11 redirects fit comfortably in the free tier's Bulk Redirects.

This is the correct solution: real 301s, no extra files in the repo, full SEO value passed on. Since
the DNS is already there, it costs you nothing but the configuration.

### Option B — HTML redirect stubs

Commit a small HTML file at each old path containing a `<meta http-equiv="refresh">` and a
`<link rel="canonical">` pointing at the new URL. If the site is built with Jekyll, the
`jekyll-redirect-from` plugin generates these automatically from front matter.

Works without Cloudflare, but these return HTTP 200, not 301. Search engines handle them reasonably
well, but not as cleanly as a real redirect.

**Also worth setting up:** `www.amirkhesro.com` currently 301s to the bare `amirkhesro.com`. Preserve
that behaviour so both forms keep working after the move.

---

# Part 5 — What needs writing, in priority order

**Blocking — the build cannot finish without these:**

1. **ISBNs and trade terms** for `/for-bookshops/` — see the list in section 8. Nothing about that
   page can start until these arrive.
2. **Signed-copies ordering route** — which payment provider, plus postage costs and how the
   personalised message is captured.
3. **Whispers signed-copy description** — currently placeholder text on the live site.

**Should be fixed before launch:**

4. **Disclaimer ending** — the live text stops mid-sentence.
5. **`Patient Stories` post** — currently reads "To be shared soon". Write it or leave it out.
6. **Ingram links on both book pages** — currently point at the Amazon universal link.

**Content decisions:**

7. Home page "Choose Your Journey" cards — confirm the reduction from six to four.
8. Home page stat counters — verify or drop.
9. Goodreads reviews — live widget or hard-coded quotes.
10. Contact form — `mailto:` or a third-party form service.
11. Whether to publish the phone number.

**Small fixes to make in passing:**

12. Handbook page — remove the "Sufyan / Test / ste" placeholder review and the review form.
13. Handbook page — fix *"here is no shortage"* → *"There is no shortage"*.
14. About page — "Author of Whispers Through the Fog" now understates it; there are two books.
