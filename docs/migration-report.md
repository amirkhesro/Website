# Blog Migration Report — WordPress to Eleventy

Migration run **14 August 2026**. Source: the live WordPress site at `amirkhesro.com`, read through the WordPress REST API (`/wp-json/wp/v2/posts`), which returns the stored body of each post rather than the rendered page. That means theme furniture — header, footer, share buttons, related posts, comment threads, "Read More" links — never entered the conversion in the first place.

The 24 blog posts listed in `content-inventory.md` were all found on the live site and all accounted for below: **23 migrated, 1 skipped.**

## Posts migrated

All files are in `src/posts/`. Each file name is the post's existing WordPress slug, so `/blog/<slug>/` matches the old URL path exactly.

| Title | File | Date |
|---|---|---|
| The “Why Me?” Question: Finding Peace After Acoustic Neuroma | `the-why-me-question-finding-peace-after-acoustic-neuroma.md` | 24 May 2026 |
| How Much Do We Really Understand the Brain and Nervous System? | `how-much-do-we-really-understand-the-brain-and-nervous-system.md` | 10 March 2026 |
| When the Brain Loses Its Map: Navigation, Memory, and Acoustic Neuroma | `when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma.md` | 22 January 2026 |
| Teaching With Acoustic Neuroma | `teaching-with-acoustic-neuroma.md` | 17 January 2026 |
| What is Cerebrospinal Fluid and how does Acoustic Neuroma affect it? | `what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it.md` | 5 January 2026 |
| Balance Problems in Acoustic Neuroma: When Walking Feels Like Being Drunk Without the Drink | `balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink.md` | 27 December 2025 |
| When Half Your Face Goes Quiet After Surgery – Facial Numbness After Acoustic Neuroma Surgery Explained | `when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained.md` | 20 December 2025 |
| You Have Just Been Diagnosed with Acoustic Neuroma | `you-have-just-been-diagnosed-with-acoustic-neuroma.md` | 16 December 2025 |
| Tinnitus in Acoustic Neuroma: Understanding the Noise, the Science, and the Emotional Reality Behind It | `tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it.md` | 23 November 2025 |
| The Cocktail Party Effect and Life With One Ear: Why Noise Becomes Exhausting | `the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting.md` | 14 November 2025 |
| The Science of Sound Localisation and What It Feels Like to Lose It | `the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it.md` | 7 November 2025 |
| From Hospital Bed to Standing Tall: Salford Face-to-Face Meeting | `from-hospital-bed-to-standing-tall-salford-face-to-face-meeting.md` | 21 September 2025 |
| What Are CROS Hearing Aids and How Do They Help with Single-Sided Deafness? | `what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness.md` | 14 August 2025 |
| Understanding the Translabyrinthine Approach to Acoustic Neuroma Surgery | `understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery.md` | 30 July 2025 |
| Learning to Hear Again: Life with Single-Sided Deafness After Acoustic Neuroma | `learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma.md` | 25 July 2025 |
| Understanding Fatigue in Acoustic Neuroma: What It Is, Why It Happens, and How to Manage It | `understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it.md` | 12 July 2025 |
| Understanding Facial Numbness, Dry Eye, and Taste Changes After Acoustic Neuroma | `understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma.md` | 5 July 2025 |
| From Surgery to Sand: My Leap Back to Life | `from-surgery-to-sand-my-leap-back-to-life.md` | 29 June 2025 |
| Clearing the Haze: How to Cope with Mental Fog in Acoustic Neuroma | `clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma.md` | 17 June 2025 |
| Brain Fog: It’s Not Just in Your Head, It’s in Your Brain | `brain-fog-its-not-just-in-your-head-its-in-your-brain.md` | 11 June 2025 |
| After the Feast: A Rainy Walk, Warm Hearts, and the Road to Recovery | `after-the-feast-a-rainy-walk-warm-hearts-and-the-road-to-recovery.md` | 9 June 2025 |
| Building Community Through Shared Stories | `building-community-through-shared-stories.md` | 7 June 2025 |
| Facing the Fog: My Journey with Acoustic Neuroma | `facing-the-fog-my-journey-with-acoustic-neuroma.md` | 2 June 2025 |

## Posts skipped

| Title | Old URL | Reason |
|---|---|---|
| Patient Stories | `/patient-stories/` (22 February 2026) | Placeholder, not a real post. The entire body is the single line "To be shared soon". |

Note on the brief: the skip instruction described an unfinished post reading **"To be continued"**. No post on the live site contains that phrase — the only unfinished item is *Patient Stories*, whose body reads **"To be shared soon"**. That is the post treated as the intended exclusion. No other test or placeholder posts exist in the blog; the lorem ipsum text and the "Test" review by Sufyan noted in `content-inventory.md` sit on the *Book Shop* and *Handbook* pages, which are outside this migration.

## Posts containing images

**Update — images migrated.** All 11 images have since been downloaded into `src/images/blog/` at their full-size originals and the placeholder comments replaced with real image elements using root-relative paths and descriptive alt text. `src/images` is passed through to the built site by `eleventyConfig.addPassthroughCopy`. Nothing is hotlinked to WordPress any more. The original URLs are kept below as the provenance record.

11 images in 5 posts:

**`from-hospital-bed-to-standing-tall-salford-face-to-face-meeting.md`** (2)
- `https://amirkhesro.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-20-at-16.04.47_99d4e3dd-1-1024x943.jpg`
- `https://amirkhesro.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-20-at-14.17.42_e56367ac-1024x768.jpg`

**`understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma.md`** (1)
- `https://amirkhesro.com/wp-content/uploads/2025/07/optimized_image_for_wordpress-1-1024x683.jpg`

**`from-surgery-to-sand-my-leap-back-to-life.md`** (1)
- `https://amirkhesro.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-29-at-19.01.19_a0fc40f1-1-1024x768.jpg`

**`brain-fog-its-not-just-in-your-head-its-in-your-brain.md`** (3)
- `https://amirkhesro.com/wp-content/uploads/2025/06/d9491fa5-9876-459d-943d-13f1c83c4f26-300x200.png`
- `https://amirkhesro.com/wp-content/uploads/2025/06/4b7909ba-0d91-47dc-ac44-500bcfbfce78-300x300.png`
- `https://amirkhesro.com/wp-content/uploads/2025/06/00945d0b-3de4-4b2f-9179-03696a6fd37f-2-300x300.png`

**`after-the-feast-a-rainy-walk-warm-hearts-and-the-road-to-recovery.md`** (4)
- `https://amirkhesro.com/wp-content/uploads/2025/06/image-1-577x1024.jpg`
- `https://amirkhesro.com/wp-content/uploads/2025/06/image-2b-1024x768.jpg`
- `https://amirkhesro.com/wp-content/uploads/2025/06/image-3-1024x768.jpg`
- `https://amirkhesro.com/wp-content/uploads/2025/06/imagw-final-1024x768.jpg`

Every image on the live site is served at a resized WordPress derivative (`-1024x768` and similar). The URLs above are the exact ones the live pages use. The full-size original of each was resolved through the WordPress media library and that is what was downloaded — so, for example, the biryani photo is the 1126×2000 original rather than the 577×1024 derivative the live page serves.

Local file names, in post order:

| Post | Local file |
|---|---|
| `after-the-feast…` | `after-the-feast-biryani.jpg`, `after-the-feast-tea-break-by-the-reservoir.jpg`, `after-the-feast-conversation-on-the-walk.jpg`, `after-the-feast-group-photo.jpg` |
| `brain-fog…` | `brain-fog-anxiety-and-depression.png`, `brain-fog-losing-confidence-driving.png`, `brain-fog-four-causes-diagram.png` |
| `from-hospital-bed…` | `salford-meeting-reading-from-the-book.jpg`, `salford-meeting-group-with-books.jpg` |
| `from-surgery-to-sand…` | `from-surgery-to-sand-jumping-in-the-surf.jpg` |
| `understanding-facial-numbness…` | `facial-numbness-and-dry-eye.jpg` |

The three `brain-fog` PNGs are large for what they are (1.7–2.6 MB each of flat illustration). They are worth converting to WebP, or at least re-encoding, before launch.

## Needs your attention

Nothing failed to convert, but five things are worth a decision. All five are pre-existing issues on the live site rather than conversion faults.

1. **A podcast button with no link at all.** In `balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink.md`, the "Spotify Podcast" button on the live site has no `href` — it is a dead button. It has been carried over as the plain text `Spotify Podcast`. Supply the episode URL and it can become a link.

   **Closed — 15 August 2026.** No longer needed; the whole block was removed. See *Post-migration changes*.

2. **A podcast button with a broken link.** In `what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness.md`, the "Spotify Podcast" button's `href` is not a URL — an entire paragraph of promotional copy was pasted into the link field, prefixed with `http://`. It has been carried over as plain text rather than an unusable link. The intended target appears inside that pasted text: `https://open.spotify.com/episode/0wugXqRIclKN6ooOuolKLw`, though it is truncated there, so please confirm before using it.

   **Closed — 15 August 2026.** No longer needed; the whole block was removed. See *Post-migration changes*.

3. **A gallery block that the API renders empty.** `from-surgery-to-sand-my-leap-back-to-life.md` ends with a WordPress gallery that the REST API returns with no images inside. The image was recovered from the media library (attachment of post 4170) and recorded in the usual comment. Worth a glance against the live page in case the gallery held more than one image at some point.

4. **Six posts invite replies "in the comments".** ~~The static site has no comment system, so these calls to action now point nowhere: `balance-problems…`, `clearing-the-haze…`, `learning-to-hear-again…`, `tinnitus-in-acoustic-neuroma…`, `what-are-cros-hearing-aids…` and `when-the-brain-loses-its-map…`. Either reword them to point at the Connect page or the Facebook group, or plan a comments solution.~~

   **Resolved — 15 August 2026.** All six were removed or reworded; see *Comment invitations removed* below.

5. **Seven posts have no headings.** `the-why-me…`, `when-the-brain-loses-its-map…`, `what-is-cerebrospinal-fluid…`, `the-cocktail-party-effect…`, `learning-to-hear-again…`, `brain-fog…` and `facing-the-fog…` use bold paragraphs where headings would normally go — that is how they are authored on WordPress, so it has been preserved rather than invented. Several are long, and would read better with real headings.

## Post-migration changes

Edits made to the migrated posts after the migration run, recorded so this report stays an accurate account of what is on the site. Both sets of changes were made with the author's paragraph-by-paragraph approval; front matter, images and formatting were left untouched.

### Comment invitations removed — 15 August 2026

The six posts listed in item 4 above. Five had the invitation deleted outright; one was reworded.

| Post | Change |
|---|---|
| `balance-problems…` | Removed "Share your experience in the comments. It helps others feel less isolated." |
| `clearing-the-haze…` | Removed "**Share your story in the comments below, I would love to hear from you.**" |
| `when-the-brain-loses-its-map…` | Trimmed to "If so, you are not alone." |
| `learning-to-hear-again…` | Reworded to "Please get in touch." |
| `what-are-cros-hearing-aids…` | Dropped the closing sentence; the `## Share Your Experience` heading and questions remain |
| `tinnitus-in-acoustic-neuroma…` | Removed the invitation and the "Your words may help someone…" follow-on |

### YouTube and podcast blocks removed — 15 August 2026

The migration carried over each post's "If you prefer audio…" / "If you prefer visual content…" block with its Spotify and YouTube links, as recorded under *Podcast buttons kept as links* below. All ten were removed at the author's request:

`balance-problems…`, `tinnitus-in-acoustic-neuroma…`, `understanding-the-translabyrinthine…`, `what-is-cerebrospinal-fluid…`, `when-the-brain-loses-its-map…`, `what-are-cros-hearing-aids…`, `teaching-with-acoustic-neuroma`, `the-cocktail-party-effect…`, `the-science-of-sound-localisation…` and `when-half-your-face-goes-quiet…`.

Ordinary prose mentioning listening, watching or podcasts was kept — for example the Bluetooth feature list in `what-are-cros-hearing-aids…` and the classroom passages in `teaching-with-acoustic-neuroma`.

Three of the ten also carried "share your experience" invitations that pointed at the absent comment system. These were reworded rather than deleted, and now link to the Connect page:

| Post | Now reads |
|---|---|
| `the-cocktail-party-effect…` | "Please share your experiences through the [Connect page](/connect/). How do you manage in noisy places? …" |
| `the-science-of-sound-localisation…` | "Please share your experiences through the [Connect page](/connect/). Our story might help someone else feel a little less alone…" |
| `what-is-cerebrospinal-fluid…` | "…I invite you to share your experience through the [Connect page](/connect/). Your story may help someone else…" |

This also supersedes items 1 and 2 above: the dead "Spotify Podcast" button in `balance-problems…` and the broken one in `what-are-cros-hearing-aids…` were inside the removed blocks, so neither needs a URL now. The original links are preserved in this file's git history if the blocks are ever wanted back.

## Conversion decisions

- **Headings.** WordPress uses `h3`/`h4`/`h5` inconsistently across posts, mostly because of theme styling rather than document structure. Each post's shallowest heading level is mapped to `##`, with deeper levels stepped down from there, so the hierarchy is preserved and sits correctly beneath the `h1` post title rendered by the layout.
- **Podcast buttons kept as links.** The `wp-block-buttons` blocks are not share widgets — each one links to that post's Spotify episode. They are genuine content, so they were converted to ordinary Markdown links rather than stripped. (Removed on 15 August 2026 at the author's request — see *Post-migration changes*.)
- **Line breaks preserved.** Many posts use `<br>` for deliberate one-line-per-thought passages. These are kept as Markdown hard breaks.
- **Elementor wrappers unwrapped.** Two posts (`understanding-facial-numbness…`, `after-the-feast…`) store their body inside Elementor container divs. The wrappers were discarded and the paragraphs inside kept.
- **Dates.** Taken from the WordPress publication date in site-local time, which is the date the live site displays.
- **Titles.** Taken verbatim, with HTML entities decoded — so the curly quotes in *The “Why Me?” Question* and the en dash in *When Half Your Face Goes Quiet After Surgery – …* survive as real characters.

## Verification

- `npx @11ty/eleventy` builds 31 pages: 8 site pages plus 23 posts, no warnings or errors.
- All 23 slugs match their live WordPress counterparts exactly, so old URL paths carry over to `/blog/<slug>/`.
- `/blog/` lists all 23 posts in reverse date order, 24 May 2026 down to 2 June 2025.
- Rendered body text was compared word-for-word against the source HTML for every post; each lands within 1–4 % of the original (the small excess is the post title, which the new layout adds as an `h1`). No post lost content.
- No `<img>` tags and no `wp-block`, `elementor`, `class=` or `srcset` residue anywhere in the generated post pages.

## Cleanup

The two dummy posts (`test-post-one.md`, `test-post-two.md`) marked `DUMMY POST DELETE AFTER MIGRATION` have been deleted.
