module.exports = function(eleventyConfig) {
    // Copy static assets (like CSS)
    eleventyConfig.addPassthroughCopy("src/css");
  
    eleventyConfig.addCollection("post", function(collectionApi) {
      return collectionApi.getFilteredByTag("post").reverse();
    });
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  