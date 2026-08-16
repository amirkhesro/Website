# GEMINI.md — amirkhesro.com

Guidance and architectural documentation for Gemini working in this repository.

---

## 1. Project Overview

The personal author website for **Amir Khesro**, published at [amirkhesro.com](https://amirkhesro.com). The site serves as the official platform to present and sell two published works:

- ***Whispers Through The Fog*** — a memoir of life with an acoustic neuroma
- ***The Acoustic Neuroma Handbook*** — a practical guide from diagnosis to recovery

The website also hosts a collection of 23 blog articles on living with an acoustic neuroma, single-sided deafness, and recovery, alongside free downloadable PDF worksheets, a direct ordering page for author-signed copies, and trade ordering information for bookshops. It replaces an earlier WordPress website, preserving search equity and inbound links through static redirect pages.

---

## 2. Technology Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/) v3 (`@11ty/eleventy` ^3.1.6).
- **Template Engine**: [Nunjucks](https://mozilla.github.io/nunjucks/) (`.njk`) for site templates, layouts, and page generation.
- **Content Format**: [Markdown](https://www.markdownguide.org/) (`.md`) with YAML front matter for blog posts.
- **Styling**: Plain, bespoke **Vanilla CSS** (`src/css/style.css`). No CSS frameworks, utility libraries (like Tailwind), or preprocessors.
- **Client-side Scripting**: Minimal **Vanilla JavaScript** (`src/js/nav.js`) for the accessible mobile navigation toggle. No frontend frameworks or bundlers.
- **Runtime & Environment**: Node.js (version 24 pinned in CI) and npm.
- **Eleventy Configuration (`eleventy.config.js`)**:
  - Custom date filters: `readableDate` (e.g., "14 August 2026") and `htmlDate` (ISO format `YYYY-MM-DD` for `<time>` elements).
  - Markdown-it extension: automatically adds `target="_blank"` and `rel="noopener"` to external links while leaving internal site links untouched.
  - Passthrough copy rules for assets, stylesheets, scripts, fonts, downloads, favicons, robots.txt, and the CNAME file.

### Common Commands

```bash
# Install dependencies
npm install

# Start local development server with live reload (default: http://localhost:8080)
npm start

# Build static output to _site/
npm run build
```

---

## 3. Directory & Site Structure

The repository is structured around Eleventy's input directory `src/` and output directory `_site/`:

```
amirkhesro-website/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions CI/CD deployment workflow
├── src/                          # Site source directory
│   ├── _data/                    # Global data files
│   │   ├── currentYear.js        # Dynamic current year for footer copyright
│   │   └── redirects.js          # Route mappings for legacy WordPress URLs
│   ├── _includes/                # Reusable layouts and partials
│   │   ├── base.njk              # Core HTML shell (head, metadata, nav, footer)
│   │   └── post.njk              # Blog post layout wrapper
│   ├── css/
│   │   └── style.css             # Main stylesheet
│   ├── downloads/                # Printable PDF resources and worksheets
│   ├── fonts/                    # Self-hosted Lora web fonts
│   ├── images/                   # Optimized web images (covers, blog, author portrait)
│   │   ├── blog/                 # Article illustrations
│   │   └── covers/               # Book cover artwork in various widths
│   ├── js/
│   │   └── nav.js                # Accessible navigation toggle script
│   ├── posts/                    # Blog post Markdown files (23 posts)
│   │   └── posts.11tydata.js     # Directory data: tags, permalinks, auto-descriptions
│   ├── 404.njk                   # Custom 404 Not Found error page
│   ├── about.njk                 # Author biography page
│   ├── acoustic-neuroma-handbook.njk # Book landing page
│   ├── blog.njk                  # Blog index with curated "Start here" section
│   ├── CNAME                     # Custom domain definition (amirkhesro.com)
│   ├── connect.njk               # Contact page (public info@amirkhesro.com)
│   ├── favicon* / apple-touch-icon.png # Favicon assets
│   ├── for-bookshops.njk         # ISBNs and Ingram trade distribution info
│   ├── index.njk                 # Homepage
│   ├── redirects.njk             # Generator for 301-equivalent redirect stubs
│   ├── robots.txt                # Search engine crawler directives
│   ├── signed-copies.njk         # Direct purchase page with Stripe payment links
│   ├── sitemap.njk               # Dynamic sitemap.xml generator
│   └── whispers-through-the-fog.njk # Book landing page
├── docs/                         # Repository documentation (migration notes, ISBN records)
├── assets/                       # Raw / uncompiled assets (e.g., cover artwork)
├── originals/                    # High-resolution original source images (git-ignored)
├── _site/                        # Generated static site output (git-ignored)
├── eleventy.config.js            # Eleventy build configuration
├── package.json                  # Project manifest and scripts
├── package-lock.json             # Pinned dependency tree
├── CLAUDE.md                     # Claude Code working guide
└── GEMINI.md                     # Gemini / Antigravity architectural reference
```

### Key Pages and Routes

| Source File | URL Route | Purpose |
|---|---|---|
| `src/index.njk` | `/` | Home page presenting the author and both books |
| `src/whispers-through-the-fog.njk` | `/whispers-through-the-fog/` | Book detail & purchase links |
| `src/acoustic-neuroma-handbook.njk` | `/acoustic-neuroma-handbook/` | Book detail & purchase links |
| `src/signed-copies.njk` | `/signed-copies/` | Direct purchase of signed paperbacks via Stripe |
| `src/for-bookshops.njk` | `/for-bookshops/` | ISBNs and wholesale trade ordering via Ingram |
| `src/blog.njk` | `/blog/` | Blog post index and curated reading guides |
| `src/posts/*.md` | `/blog/<slug>/` | 23 individual blog posts on acoustic neuroma |
| `src/about.njk` | `/about/` | Author biography and high-resolution portrait |
| `src/connect.njk` | `/connect/` | Contact details and communication form/links |
| `src/404.njk` | `/404.html` | Custom 404 page |
| `src/sitemap.njk` | `/sitemap.xml` | Generated XML sitemap for search indexing |
| `src/redirects.njk` | *various* | Legacy WordPress URL redirection pages |

---

## 4. Public GitHub Deployment Method

The website is hosted on **GitHub Pages** using GitHub Actions artifact deployments:

- **Workflow Configuration**: Located in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
- **Trigger**:
  - Automatic deployment on every `git push` to the `main` branch.
  - Manual deployment via `workflow_dispatch` from the GitHub Actions dashboard.
- **Deployment Mechanics**:
  1. Checks out the repository using `actions/checkout@v4`.
  2. Sets up Node.js 24 with npm caching using `actions/setup-node@v4`.
  3. Runs `npm ci` to install pinned dependencies deterministically.
  4. Runs `npm run build` to compile the static site into `_site/`.
  5. Configures Pages using `actions/configure-pages@v5`.
  6. Packages and uploads `_site/` as a Pages artifact using `actions/upload-pages-artifact@v3`.
  7. Deploys the artifact to the GitHub Pages environment using `actions/deploy-pages@v5`.
- **Custom Domain (`CNAME`)**:
  - `src/CNAME` contains `amirkhesro.com`.
  - Passthrough copying ensures `_site/CNAME` exists in the uploaded artifact, allowing GitHub Pages to route the custom apex domain correctly.
- **Clean Repository**:
  - There is no separate `gh-pages` branch.
  - The compiled `_site/` directory is never committed and remains in `.gitignore`.

---

## 5. Architectural & Development Guidelines

- **Public Repository Notice**: This repository is public. Never commit secrets, API keys, tokens, or private personal information (phone numbers, residential addresses, private emails). Only public contact channels (`info@amirkhesro.com`, public social links, Stripe checkout URLs) are permitted.
- **SEO & Social Sharing**:
  - **Canonical URLs**: `base.njk` constructs canonical tags dynamically (`https://amirkhesro.com` + `page.url`).
  - **Meta Descriptions**: Blog posts derive automatic excerpt descriptions via `src/posts/posts.11tydata.js` (cutting at ~155 characters on word boundaries); front matter `description:` overrides are supported.
  - **Open Graph / Twitter Cards**: Open Graph and Twitter Card tags are emitted in `base.njk`, supporting custom `shareTitle`, `shareImage`, and default author portrait fallbacks.
  - **Legacy Redirects**: Maintained via `src/_data/redirects.js` and `src/redirects.njk` to prevent broken links from the old WordPress platform.
- **Editing Rules**:
  - Always edit template and content files inside `src/`. Never manually edit `_site/`.
  - Maintain clean, semantic HTML and vanilla CSS without unnecessary dependencies.
