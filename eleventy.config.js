// Eleventy configuration.
// Source files live in "src". The finished site is written to "_site".
module.exports = function (eleventyConfig) {
  // "14 August 2026" — the format used for post dates across the site.
  eleventyConfig.addFilter("readableDate", (value) =>
    new Date(value).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
  );

  // "2026-08-14" — machine readable date for the <time> element.
  eleventyConfig.addFilter("htmlDate", (value) =>
    new Date(value).toISOString().slice(0, 10)
  );

  // Links in posts that leave the site open in a new tab. Links to
  // amirkhesro.com are left alone: they become internal once the new site
  // is live, and will be rewritten as relative paths at launch.
  eleventyConfig.amendLibrary("md", (md) => {
    const isOffsite = (href) =>
      /^https?:\/\//i.test(href) &&
      !/^https?:\/\/(www\.)?amirkhesro\.com(\/|$|\?|#)/i.test(href);

    const base =
      md.renderer.rules.link_open ||
      ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      if (isOffsite(tokens[idx].attrGet("href") || "")) {
        tokens[idx].attrSet("target", "_blank");
        tokens[idx].attrSet("rel", "noopener");
      }
      return base(tokens, idx, options, env, self);
    };
  });

  // Copy static assets straight through to the built site.
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/downloads");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
