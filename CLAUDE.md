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
them at once — it sets the `post.njk` layout, the `posts` tag, and the `/blog/<file-name>/`
address. A post needs only `title` and `date` in its front matter.

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
  images), and the author photo at three widths.
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
- Note for SEO work: the site has a `sitemap.xml` and a `robots.txt` (see above), but still has
  **no meta descriptions, no Open Graph tags, and no canonical tags on ordinary pages**.
  Redirect pages are the only places carrying canonical and robots tags. These are gaps, not
  deliberate removals.
