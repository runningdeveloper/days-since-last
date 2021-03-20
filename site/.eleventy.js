module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["css", "js", "html", "liquid", "json", "woff2"]);
  return {
    dir: {
      output: "../public",
    },
  };
};
