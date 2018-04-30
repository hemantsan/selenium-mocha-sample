var webdriver = require('selenium-webdriver');
var assert = require('assert');

describe('Google Test', function() {
    var driver;

    before(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });

    it('should load url', function(done) {
        driver
            .get('https://github.com/vieckys/selenium-mocha-sample')
            .then(() => driver.getTitle())
            .then(title => {
                console.log('\n Page Title is : ' + title);
            })
            .then(() => done());
    });

    after(function() {
        driver.quit();
    });
});
