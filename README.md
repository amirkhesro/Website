amirkhesro.com

Source for amirkhesro.com, a static site built with Eleventy and published to GitHub Pages.

Site content lives in src/. The built output goes to _site/, which is not committed.

Running it locally

Requires Node 24 or later.

npm install
npm start

The site is then served at http://localhost:8080 and rebuilds as files change.

Deployment

Every push to main runs .github/workflows/deploy.yml, which builds the site and publishes it to GitHub Pages. A push to main is therefore a publication.

Licence

Copyright 2026 Amir Khesro. All rights reserved. No licence is granted for reuse of the code or the content in this repository.
