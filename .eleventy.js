module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/css");


    eleventyConfig.addFilter("uppercase", function (value) {
        return value.toUpperCase();
      });
    

    return {
      dir: {
        input: "src",       
        includes: "_includes", 
        output: "dist",   
      },
    };
  };
  