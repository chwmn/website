module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/styles/css/");
  eleventyConfig.setTemplateFormats(["css", "html", "liquid"]);
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("assets");

  function sortByPageOrder(values) {
    return values.slice().sort((a, b) => a.data.order - b.data.order);
  }

  eleventyConfig.addFilter("sortByPageOrder", sortByPageOrder);

  // You can return your Config object (optional).
  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts",
      input: "src",
      output: "dist",
    },
  };
};
