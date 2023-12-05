module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");
	eleventyConfig.addPassthroughCopy("./src/.htaccess");
	eleventyConfig.addPassthroughCopy({ "./src/CNAME": "/" });
  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
