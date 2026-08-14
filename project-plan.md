# Project Plan — amirkhesro.com static rebuild

Agreed plan of record for rebuilding the author website as a static site hosted on GitHub Pages.

**Date agreed:** 14 August 2026
**Status:** Planning complete for structure. Build not started.

Companion documents in this folder:

- [`content-inventory.md`](content-inventory.md) — full text capture of the existing WordPress site
  (41 URLs: 13 pages, 2 products, 2 category archives, 24 posts)
- [`content-mapping.md`](content-mapping.md) — page-by-page mapping of old content onto the new
  structure, plus the complete URL and redirect map

---

## Approach: build first, edit second

The project runs in **two distinct phases**, and keeping them separate is deliberate.

| Phase | What happens | Text treatment |
|---|---|---|
| **1. Build** | Construct the static site, migrate all content, go live | Existing text migrated **as it stands** |
| **2. Editing pass** | Separate job after launch | Every page and post rewritten for quality and consistency |

The build phase does **not** rewrite copy. Text moves across essentially as-is so the structure,
navigation, URLs and deployment can be settled and verified without also churning the writing. Once
the site is live and stable, the editing pass follows as its own piece of work. See
[Later Editing Pass](#later-editing-pass) below.

Typos and placeholder text noted in the outstanding items are the exception — those are corrected
during the build, because shipping them live is worse than leaving them for later.

---

## Site structure

**Seven pages**, plus a possible eighth.

| # | Page | Path | Content source |
|---|------|------|----------------|
| 1 | Home | `/` | Rework of existing home page |
| 2 | Whispers Through The Fog | `/whispers-through-the-fog/` | Existing page, migrated nearly whole |
| 3 | The Acoustic Neuroma Handbook | `/the-acoustic-neuroma-handbook/` | Existing page, migrated nearly whole |
| 4 | Signed Copies | `/signed-copies/` | Replaces the WooCommerce shop entirely |
| 5 | Blog index | `/blog/` | New index page over 24 migrated posts |
| 6 | About | `/about/` | Existing page, migrated nearly whole |
| 7 | Connect | `/connect/` | Existing page, minus the server-side form |
| 8 | For Bookshops *(possible)* | `/for-bookshops/` | Entirely new — trade ordering via Ingram by ISBN |

**For Bookshops** remains optional and is not yet committed. It cannot begin until the ISBNs and
trade terms are supplied — see outstanding items.

### Blog

All **24 posts** migrate with their full text and publication dates intact.

Posts keep their current **root-level URLs** (`/<post-slug>/`) rather than moving under `/blog/`.
These URLs have been shared in patient support groups and indexed for up to 14 months; preserving
them costs nothing and avoids breaking links that exist elsewhere on the web. `/blog/` serves as the
index only.

The two WordPress category archives (`Whispers`, 23 posts; `Lived Experiences`, 1 post) are retired
in favour of a single reverse-chronological index.

### What is being retired

Eleven URLs are retired and redirected: the WooCommerce shop pages (`/shop/`, `/cart/`, `/checkout/`,
`/my-account/`) and both product pages, the unfinished `/book-shop/` lorem-ipsum page, the old
`/blogs/` archive, the two category archives, and the `/acoustic-neuroma/` hub. Full detail and
destinations are in `content-mapping.md`.

Of the 41 existing URLs, **30 stay exactly as they are** and 11 need redirects.

### Hosting constraint

GitHub Pages cannot issue 301 redirects — there is no server configuration available. The domain is
already behind **Cloudflare**, so the 11 redirects will be configured as Cloudflare Redirect Rules,
giving genuine 301s at the edge at no cost. HTML meta-refresh stubs are the fallback if that route is
not used.

---

## Later Editing Pass

**After the site is built and live**, every page and every blog post goes through a separate editing
job to improve the text.

The purpose of that pass is to bring the **language and tone of the whole site into line with
_The Acoustic Neuroma Handbook_**. The Handbook establishes the voice: plain English, honest about
uncertainty, specific about practical questions, written for the patient in the room rather than the
clinician across the desk, and free of both clinical distance and false reassurance. The website
should read as though it came from the same hand as the books, because it did.

The intended outcome is a **rich and coherent experience across the site and the books** — a reader
who arrives at a blog post, moves to a book page, and then opens the book itself should feel a single
consistent voice throughout, not three different registers.

**Scope of the editing pass:**

- All 7 (or 8) pages
- All 24 blog posts
- Headings, introductions, calls to action and navigation labels
- Book descriptions across the site, checked against the books themselves

**Sequencing is important.** The build phase migrates existing text as it stands. The editing phase
follows afterwards, as its own separate job, once the site is live. The two are not interleaved:
structure and deployment are settled first, then the writing is improved against a stable site.

---

## Outstanding items

### Agreed items still to resolve

**1. Choose `www` or non-`www` as the official domain form**

The site currently 301-redirects `www.amirkhesro.com` to the bare `amirkhesro.com`. One form must be
chosen as canonical for the new site, with the other redirecting to it. This affects the GitHub Pages
custom domain setting, the DNS records, the canonical tags on every page, and the sitemap. Worth
settling before launch rather than after, since changing it later means re-issuing redirects.

**2. Write a proper description for the Whispers listing**

The *Whispers Through the Fog – Author Signed* product listing currently carries placeholder text on
the live site — literally "Short discription here" and "Description here". There is no real
description to migrate. New copy is needed for the Signed Copies page, and the existing
`/whispers-through-the-fog/` page is the best source to draft it from.

(The Handbook's signed-copy description is complete and substantial, and migrates as-is.)

**3. Set up Stripe or PayPal payment links for signed copies**

A static site cannot process payments, hold a cart, or run a checkout. Signed-copy sales need
external payment links — one per book — from Stripe or PayPal. Current prices are **£14.99** for
*Whispers Through the Fog* and **£19.99** for *The Acoustic Neuroma Handbook*.

Still to be decided alongside the provider:

- Postage costs, and whether UK and international are priced differently
- How the "optional personalised message" is captured at the point of order
- Whether the fulfilment promise stays as it reads today: hand-signed, secure packaging, optional
  personalised message

### Decisions still open from the content mapping

These were raised in `content-mapping.md` and have not yet been settled. None block the start of the
build, but each needs an answer before launch.

- **Disclaimer page.** Not part of the seven-page structure, but currently linked from the footer of
  every page on the live site, and it is the page stating that Amir is not a medical professional and
  that nothing on the site is medical advice. Needs a decision: keep as a standalone page, or fold
  into the footer. Either way its text needs finishing — **the live version stops mid-sentence** at
  "you must seek advice from your doctor,".
- **`/acoustic-neuroma/` redirect target.** The retired hub page currently maps to `/blog/`. Confirm,
  or redirect to the Handbook page instead.
- **For Bookshops go/no-go**, and the ISBNs and trade terms it depends on: ISBN-13 per edition per
  book, imprint name as it appears in the Ingram catalogue, trade discount, returns policy, Ingram
  distribution markets, and RRPs. No ISBN appears anywhere on the current site.
- **Contact form replacement** on `/connect/` — `mailto:` link or a third-party form service.
- **Phone number** — confirm whether the personal number stays published on a public page.
- **Goodreads reviews** on the Whispers page — keep the live third-party widget or hard-code selected
  quotes.

### Fixes to make during the build

Small corrections to live errors, made in passing rather than left for the editing pass:

- Remove the test review displayed publicly on the Handbook page ("Sufyan / Test / ste", showing
  "Average rating: 1 reviews") and the review submission form
- Fix "here is no shortage" → "There is no shortage" on the Handbook page
- Fix the "Order from Ingram" links on both book pages, which currently point to the Amazon universal
  link `mybook.to/acousticneuroma`
- Decide what to do with the `Patient Stories` post (22 Feb 2026), whose entire body reads "To be
  shared soon"
- Update "Author of Whispers Through the Fog" on the About page to reflect both books
- Verify or drop the Home page stat counters ("20+ Blogs" is now 24; "10+ Patient Resources" has no
  equivalent in the new structure)

---

## Next step

Build phase begins on approval. First task is the site scaffold and the two book pages, which have
the cleanest content and unchanged URLs.
