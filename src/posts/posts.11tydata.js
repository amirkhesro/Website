// Directory data file: applies to every file in src/posts.
// Each post gets the post layout, the "posts" tag, and a /blog/<file-name>/ URL.
//
// It also works out a meta description from the opening of the post, so a
// post needs nothing in its front matter to get one. A post that wants a
// better description than its own first sentences can simply set
// "description:" in its front matter; base.njk prefers that over this.

// Search engines show roughly this much of a description before cutting it
// off themselves, so there is nothing to gain by going longer.
const MAX_LENGTH = 155;

// Blocks that can open a post but are not prose: a heading, a line of bold
// text acting as one, an image on its own, raw HTML, or a horizontal rule.
// The bold test deliberately matches only a block that is bold from end to
// end — a paragraph that merely *starts* with a bold phrase is prose, and
// several posts open that way.
const isNotProse = (block) =>
  block.startsWith("#") ||
  block.startsWith("<") ||
  /^\*\*(?:(?!\*\*)[\s\S])+\*\*$/.test(block) ||
  /^!\[[\s\S]*\)$/.test(block) ||
  /^([-*_]\s*){3,}$/.test(block);

// Markdown down to the words themselves. Link text is kept and the address
// dropped, because the words are what the sentence was written to read as.
const toPlainText = (markdown) =>
  markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, "")
    .replace(/\*\*|\*|__/g, "")
    .replace(/(^|\s)_([^_]+)_(?=\W|$)/g, "$1$2")
    .replace(/\\([\\`*_{}[\]()#+\-.!])/g, "$1")
    // Last, so that hard line breaks inside a paragraph close up too.
    .replace(/\s+/g, " ")
    .trim();

// The first prose of the post, gathered a paragraph at a time until there is
// enough to fill a description. Several posts open with a line or two of very
// short sentences, which is why this does not simply take the first paragraph.
const openingText = (markdown) => {
  // Front matter is not part of the raw input, but strip it if it ever is.
  const body = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
  const collected = [];
  let length = 0;

  for (const block of body.split(/\r?\n\s*\r?\n/)) {
    const trimmed = block.trim();
    if (!trimmed || isNotProse(trimmed)) continue;

    const text = toPlainText(trimmed);
    if (!text) continue;

    collected.push(text);
    length += text.length + 1;
    if (length >= MAX_LENGTH) break;
  }

  return collected.join(" ");
};

// Cut at a word boundary rather than mid-word. A description that happens to
// end on a finished sentence is left alone; anything else is marked as
// continuing, so it does not read as though the writing stopped there.
const truncate = (text) => {
  if (text.length <= MAX_LENGTH) return text;

  const cut = text.slice(0, MAX_LENGTH + 1);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = (lastSpace > 0 ? cut.slice(0, lastSpace) : cut.slice(0, MAX_LENGTH))
    .replace(/[\s,;:—–-]+$/, "");

  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}…`;
};

module.exports = {
  layout: "post.njk",
  tags: "posts",
  permalink: (data) => `/blog/${data.page.fileSlug}/`,

  // Kept under its own name rather than computed straight into "description",
  // so that a description written by hand in a post's front matter is never
  // in competition with this one. base.njk decides between them.
  eleventyComputed: {
    autoDescription: (data) => truncate(openingText(data.page.rawInput || "")),
  },
};
