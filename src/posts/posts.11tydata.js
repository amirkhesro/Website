// Directory data file: applies to every file in src/posts.
// Each post gets the post layout, the "posts" tag, and a /blog/<file-name>/ URL.
module.exports = {
  layout: "post.njk",
  tags: "posts",
  permalink: (data) => `/blog/${data.page.fileSlug}/`,
};
