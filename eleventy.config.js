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

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
