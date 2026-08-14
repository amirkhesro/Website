// Eleventy configuration.
// Source files live in "src". The finished site is written to "_site".
module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
