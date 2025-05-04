const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Passthrough for static files
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Register a date filter using Luxon
  eleventyConfig.addFilter("date", (dateObj, format = "MMMM dd, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // Collection for posts
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByTag("post").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
