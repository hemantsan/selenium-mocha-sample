var webdriver = require('selenium-webdriver');
var assert = require('assert');

describe('Firefox Test', function() {
    var driver;

    before(function() {
        console.log('before START');

        driver = new webdriver.Builder().forBrowser('firefox').build();

        console.log('before END');
    });

    it('should load url', function(done) {
        console.log('it START');

        driver
            .get(
                'https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/'
            )
            .then(() => done());

        driver
            .getTitle()
            .then(function(title) {
                console.log('\n' + title);
            })
            .then(() => done());

        console.log('it END');
    });

    after(function() {
        console.log('after START');

        driver.quit();

        console.log('after END');
    });
});
