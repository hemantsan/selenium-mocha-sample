var webdriver = require('selenium-webdriver');
var assert = require('assert');

describe('Google Search', function() {
    var driver;

    before(function() {
        console.log('\n' + ' --before START-- ');

        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

        console.log('\n' + ' --before END-- ');
    });

    it('should load url', function(done) {
        console.log('\n' + ' --it START-- ');
        driver.get(
            'https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/'
        );

        driver.getTitle().then(function(title) {
            console.log('\n' + 'Page title : ' + title);
        });

        done();

        console.log('\n' + ' --it END-- ');
    });

    after(function() {
        console.log('\n' + ' --after START-- ');

        driver.quit();

        console.log('\n' + ' --after END-- ');
    });
});
