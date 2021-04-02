const differenceInCalendarDays = require('date-fns/differenceInCalendarDays')
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("**/*.woff2");
  eleventyConfig.addPassthroughCopy("**/*.css");
  eleventyConfig.addPassthroughCopy("**/*.json");
  eleventyConfig.setTemplateFormats(["html", "liquid"]);
  eleventyConfig.addLiquidFilter("paddZeros", (days)=>days<1000?days.toString().padStart(3, '0'):'Err');
  eleventyConfig.addLiquidFilter("getActivityFromType", function(activities, activity) {
    // cannot get liquid where to work so its a filter now
    return activities.find(a=>a.type === activity)
  });
  eleventyConfig.addLiquidFilter("daysDiff", (dateString)=>differenceInCalendarDays(new Date(), new Date(dateString)));
  return {
    dir: {
      output: "../public",
    },
  };
  
};
