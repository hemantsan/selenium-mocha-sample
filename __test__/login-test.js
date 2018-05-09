var webdriver = require('selenium-webdriver');
var assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Login Page Test', function() {
    var driver;

    before(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });

    it('should load url', done => {
        driver.get('https://github.com/vieckys/');
        driver.wait(
            until.elementLocated(
                By.xpath(
                    '//*[@id="js-pjax-container"]/div/div[2]/div[2]/nav/a[2]'
                )
            )
        );

        driver
            .findElement(
                By.xpath(
                    '//*[@id="js-pjax-container"]/div/div[2]/div[2]/nav/a[2]'
                )
            )
            .click();
        done();
    });

    after(function() {
        driver.close();
    });
});
