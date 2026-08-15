// The addresses the old WordPress site served, and where each one now lives.
//
// GitHub Pages cannot redirect on the server, so every entry here becomes a
// small HTML page that sends the reader on (see src/redirects.njk). The list
// is deliberately written out by hand rather than derived from the posts
// folder: it records what the old site actually published, so a post added
// in future does not silently acquire a root level address it never had.

// Posts. The old site served these at the root; the new site serves them
// under /blog/ with the same slug.
const postSlugs = [
  "facing-the-fog-my-journey-with-acoustic-neuroma",
  "learning-to-hear-again-life-with-single-sided-deafness-after-acoustic-neuroma",
  "understanding-fatigue-in-acoustic-neuroma-what-it-is-why-it-happens-and-how-to-manage-it",
  "understanding-facial-numbness-dry-eye-and-taste-changes-after-acoustic-neuroma",
  "from-surgery-to-sand-my-leap-back-to-life",
  "clearing-the-haze-how-to-cope-with-mental-fog-in-acoustic-neuroma",
  "after-the-feast-a-rainy-walk-warm-hearts-and-the-road-to-recovery",
  "from-hospital-bed-to-standing-tall-salford-face-to-face-meeting",
  "brain-fog-its-not-just-in-your-head-its-in-your-brain",
  "tinnitus-in-acoustic-neuroma-understanding-the-noise-the-science-and-the-emotional-reality-behind-it",
  "the-cocktail-party-effect-and-life-with-one-ear-why-noise-becomes-exhausting",
  "the-science-of-sound-localisation-and-what-it-feels-like-to-lose-it",
  "understanding-the-translabyrinthine-approach-to-acoustic-neuroma-surgery",
  "what-are-cros-hearing-aids-and-how-do-they-help-with-single-sided-deafness",
  "when-half-your-face-goes-quiet-after-surgeryfacial-numbness-after-acoustic-neuroma-surgery-explained",
  "balance-problems-in-acoustic-neuroma-when-walking-feels-like-being-drunk-without-the-drink",
  "what-is-cerebrospinal-fluid-and-how-acoustic-neuroma-affects-it",
  "you-have-just-been-diagnosed-with-acoustic-neuroma",
  "teaching-with-acoustic-neuroma",
  "when-the-brain-loses-its-map-navigation-memory-and-acoustic-neuroma",
  "how-much-do-we-really-understand-the-brain-and-nervous-system",
  "building-community-through-shared-stories",
  "the-why-me-question-finding-peace-after-acoustic-neuroma",
];

// Pages. The shop, cart, checkout and account pages belonged to the old
// WordPress shop, which signed copies now replaces. The disclaimer is no
// longer a page of its own; its wording lives in the footer of every page.
const pages = [
  // WordPress serves a static front page at the root and, at the same time,
  // under its own slug. Only the root is in the content inventory, but Search
  // Console shows /home/ still being crawled, so the second address was in use
  // as well and is sent to the same place.
  { from: "/home/", to: "/" },
  { from: "/blogs/", to: "/blog/" },
  // A post on the old site, but only ever a placeholder reading "To be
  // shared soon". It was left out of the migration, so it goes to the blog
  // rather than to a post of its own.
  { from: "/patient-stories/", to: "/blog/" },
  { from: "/cart/", to: "/signed-copies/" },
  { from: "/checkout/", to: "/signed-copies/" },
  { from: "/my-account/", to: "/signed-copies/" },
  { from: "/shop/", to: "/signed-copies/" },
  { from: "/book-shop/", to: "/signed-copies/" },
  { from: "/the-acoustic-neuroma-handbook/", to: "/acoustic-neuroma-handbook/" },
  { from: "/acoustic-neuroma/", to: "/acoustic-neuroma-handbook/" },
  { from: "/disclaimer/", to: "/" },
];

module.exports = [
  ...postSlugs.map((slug) => ({ from: `/${slug}/`, to: `/blog/${slug}/` })),
  ...pages,
];
