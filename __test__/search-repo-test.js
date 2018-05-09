var webdriver = require('selenium-webdriver');
var assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Open github and search for a repository', function() {
    var driver;

    before(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });

    it('should load url', async () => {
        await driver.get('https://github.com/vieckys/');
    });

    it('should click on repositories tab', async () => {
        let tab = await driver
            .findElement(
                By.xpath(
                    '//*[@id="js-pjax-container"]/div/div[2]/div[2]/nav/a[2]'
                )
            )
            .click();

        driver.wait(until.urlContains('?tab=repositories'), 10000);
    });

    it('should click on search textfield and type', async () => {
        let textField = await driver.wait(
            until.elementLocated(By.xpath('//*[@id="your-repos-filter"]')),
            1000
        );

        await textField.click();
        await textField.sendKeys('react-axios-sample');
    });

    after(function() {
        driver.sleep(2000);
        driver.close();
    });
});
