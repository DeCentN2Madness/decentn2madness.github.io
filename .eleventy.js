const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/.htaccess");
	eleventyConfig.addPassthroughCopy({ "./src/CNAME": "/" });
	eleventyConfig.addPlugin(lightningCSS);
  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
