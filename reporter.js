var HtmlReporter = require('nightwatch-html-reporter');
const fs = require('fs-extra');

/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports/'
});
 
module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};