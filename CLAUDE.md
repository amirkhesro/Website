# CLAUDE.md — amirkhesro.com

Guidance for Claude Code working in this repository.

## 1. What this project is

The personal author website for Amir Khesro, published at **amirkhesro.com**. Its job is to
present and sell two books:

- *Whispers Through The Fog* — a memoir of life with an acoustic neuroma
- *The Acoustic Neuroma Handbook* — a practical guide from diagnosis to recovery

The site also carries a blog of 23 posts about living with an acoustic neuroma, free PDF
downloads, and pages for buying signed copies and for bookshops ordering by ISBN. It replaces
an earlier WordPress site, whose old addresses are still redirected (see below).

## 2. Site structure

Everything that becomes a published page lives in `src/`. The built site is written to
`_site/`, which is generated and not committed.

**Pages** (each a Nunjucks file in `src/`, with its address set by `permalink` in the front matter):

| File | Address | Purpose |
|---|---|---|
| `index.njk` | `/` | Home: introduction and both books |
| `whispers-through-the-fog.njk` | `/whispers-through-the-fog/` | Book page |
| `acoustic-neuroma-handbook.njk` | `/acoustic-neuroma-handbook/` | Book page |
| `signed-copies.njk` | `/signed-copies/` | Signed paperbacks direct from the author, via Stripe payment links (UK delivery) |
| `for-bookshops.njk` | `/for-bookshops/` | ISBNs and Ingram ordering details for the trade |
| `blog.njk` | `/blog/` | Post index, with a hand-picked "Start here" section |
| `about.njk` | `/about/` | Author biography |
| `connect.njk` | `/connect/` | Contact, via the public address info@amirkhesro.com |
| `404.njk` | `/404.html` | Not-found page |
| `sitemap.njk` | `/sitemap.xml` | Sitemap for search engines, generated from the site itself |
| `redirects.njk` | many | Generates one small redirect page per old WordPress address |

**Blog posts**: Markdown files in `src/posts/`. `src/posts/posts.11tydata.js` applies to all of
them at once — it sets the `post.njk` layout, the `posts` tag, the `/blog/<file-name>/` address,
and the automatic meta description. A post needs only `title` and `date` in its front matter.

**Shared elements**:

- `src/_includes/base.njk` — the page shell used by everything: `<head>`, favicons, font
  preload, the navigation bar (the nav list is defined here as `navItems`), and the footer
  with the copyright line and the "not medical advice" disclaimer.
- `src/_includes/post.njk` — wraps a blog post in the base layout and adds title and date.
- `src/css/style.css` — the site's only stylesheet.
- `src/js/nav.js` — the only JavaScript: the collapsing mobile menu.
- `src/_data/currentYear.js` — the year in the footer.
- `src/_data/redirects.js` — the hand-written list of old WordPress addresses and where each
  now points. Adding a post does **not** create a redirect; this list records only what the old
  site actually published.
- `src/images/` — web-sized images: `covers/` (book covers, three widths each), `blog/` (post
  images), and the author photo at four widths (see the author photograph note below).
- `src/fonts/` — the Lora webfont files, self-hosted.
- `src/downloads/` — five free PDF worksheets linked from the site.
- `src/robots.txt` — copied through unchanged; allows all crawlers and points to the sitemap.
- `src/CNAME` — the custom domain, copied into the built site so GitHub Pages sees it.
- Favicon files sit at the top of `src/` so they land at the root of the built site.

**Not published** (repository-only material):

- `docs/` — content inventory, content mapping, migration report, and ISBN notes from the
  WordPress migration.
- `project-plan.md` — the agreed plan for the rebuild.
- `originals/` — full-size source images; git-ignored.
- `assets/covers/` — original cover files, outside the Eleventy input folder.

## 3. Technology

- **Eleventy (11ty) v3** — a static site generator. Configured in `eleventy.config.js`.
- Templates are **Nunjucks** (`.njk`); posts are **Markdown**.
- Plain hand-written **CSS**, one file. No CSS framework, no preprocessor.
- One small **vanilla JavaScript** file for the menu. No front-end framework, no bundler.
- Node.js (the deploy workflow uses Node 24). Eleventy is the only dependency.

Config in `eleventy.config.js` adds two date filters, makes off-site links open in a new tab,
and copies static folders through unchanged.

Commands:

- `npm install` — install Eleventy
- `npm start` — local preview server with live reload
- `npm run build` — build into `_site/`

## 4. Deployment

Published by **GitHub Pages** from `.github/workflows/deploy.yml`.

- Every push to the **`main`** branch triggers the workflow. It can also be run by hand from
  the Actions tab.
- The workflow runs `npm ci` then `npm run build`, and uploads `_site/` as a Pages artifact
  which GitHub serves directly. There is no `gh-pages` branch and nothing built is committed.
- **A change only appears live once it is committed and pushed to `main` and the Actions run
  finishes.** Committing locally is not enough.
- The custom domain comes from `src/CNAME`, which the build copies into `_site/`. Do not move
  it to the repository root — with this deployment method it must travel inside the artifact.
- The DNS configuration for amirkhesro.com is not in this repository, so it cannot be
  confirmed here.

## 5. Working rules for future sessions

- **This repository is public.** Never add passwords, API keys, tokens, or unpublished personal
  contact details to the code, the content, or a commit message. The email `info@amirkhesro.com`
  and the Stripe payment links are already public and are fine. Anything else — home address,
  personal phone number, private email — must not be added.
- **Keep changes small and focused on maintenance and SEO** unless asked otherwise. Do not
  restructure, redesign, or rewrite copy on your own initiative.
- **Always explain what was changed** after making a change, in plain language.
- Commit directly to `main` unless asked to use a branch.
- Never edit `_site/` — it is generated output and is git-ignored. Change the source in `src/`.
- Do not remove or change entries in `src/_data/redirects.js` without good reason; they keep
  old links and search-engine results working.
- **Meta descriptions**: every ordinary page and every blog post has one. Pages set
  `description:` in their own front matter. Posts do not need to: `src/posts/posts.11tydata.js`
  builds one from the opening of the post — plain text, links and formatting stripped, cut at a
  word boundary near 155 characters. **A post can still be given a hand-written description by
  adding `description:` to its front matter, and that always wins.** `base.njk` picks between
  the two. The 404 page has neither and so gets no tag, which is deliberate; redirect pages do
  not use `base.njk` at all.
- **Social sharing**: `base.njk` writes Open Graph tags and a `twitter:card` alongside the meta
  description, reusing the very same description so the wording is only ever written once.
  `og:type` is `article` for blog posts and `website` for everything else, and all addresses are
  absolute — social platforms cannot resolve relative ones.

  `og:title` uses the page title, which reads well nearly everywhere. A page whose title is too
  bare on its own can set **`shareTitle:`** in its front matter to override it; this changes the
  social card only, never the `<title>` tag or anything visible on the page. The home page uses
  this, because its title is simply "Home". The share image is:
  - the book's own cover at **1200×1800** for the two book pages —
    `/images/covers/whispers-through-the-fog-1200.jpg` and
    `/images/covers/acoustic-neuroma-handbook-1200.jpg` — named in their front matter as
    `shareImage` with `shareImageWidth` and `shareImageHeight`;
  - **`/images/amir-khesro-reading-1200.jpg` at 1200×1600** for every other page and all posts,
    which is the fallback in `base.njk`.

  Any page can override the image by setting those three keys in its front matter. All three
  meet the 1200px width that Facebook, LinkedIn and X prefer.

  The cover share images are share images only — nothing on the site displays them. The author
  share image is the exception: it is the same photograph the about page shows, only larger. The
  `-960` covers stay in place regardless: the book pages still display them.

- **The author photograph.** The picture in use is the 2025 one of the author reading from a
  book at a lectern, from `originals/amir-khesro-reading-2025.jpg` (1500×2000, git-ignored like
  the rest of `originals/`). It is a **3:4 portrait**, unlike the near-square photograph it
  replaced, and it exists at four widths, all of the source's own proportions with nothing
  cropped:

  | File | Size | Used for |
  |---|---|---|
  | `/images/amir-khesro-reading-224.jpg` | 224×299 | about page `src`, and the 1× `srcset` entry |
  | `/images/amir-khesro-reading-448.jpg` | 448×597 | about page `srcset` |
  | `/images/amir-khesro-reading-672.jpg` | 672×896 | about page `srcset` |
  | `/images/amir-khesro-reading-1200.jpg` | 1200×1600 | the Open Graph fallback in `base.njk` |

  It is displayed in one place only, `about.njk`, at `sizes="14rem"`. Because the shape changed,
  `.author-photo` in `style.css` carries `aspect-ratio: 224 / 299` — matching the `src` file
  exactly, so `object-fit: cover` has nothing to crop. **Changing the photograph again means
  changing that ratio and the `width`/`height` on the `<img>` to match.**

  The near-square photograph it replaced — the older `amir-khesro-224|448|672|1200.jpg` files —
  has been deleted; the four files above are the only author photo in the repository.

  All resized files were made from the originals using Windows' built-in System.Drawing via
  PowerShell, at JPEG quality 85 with high-quality bicubic interpolation. No image dependency was
  added to the project; repeat the same way if new sizes are ever needed.
- **Canonical tags**: `base.njk` gives every ordinary page and every blog post a
  `<link rel="canonical">` holding its own full address. The address is built as
  `"https://amirkhesro.com" + page.url` — from Eleventy's own record of where the page was
  written, never spelled out by hand — so it follows a page that moves and cannot fall out of
  step with the `permalink`. `og:url` in the same file and `<loc>` in `sitemap.njk` are built
  from that same value the same way, so all three always agree, trailing slash included; change
  one and change all three. The 404 page is excluded by the same `page.url != "/404.html"` test
  the sitemap uses. Redirect pages never reach `base.njk` — they have no layout — and carry
  their own canonical pointing at the address they forward to, so they are not affected.
- Note for SEO work: the four gaps originally recorded are now all closed. The site has a
  `sitemap.xml`, a `robots.txt`, meta descriptions, Open Graph tags, and canonical tags on every
  ordinary page and post (all four described above). Redirect pages additionally carry `noindex`.
  Anything further — structured data, for instance — would be new work rather than filling in
  something known to be missing.
