var webdriver = require('selenium-webdriver');
var assert = require('assert');
var chai = require('chai');
var should = chai.should();

const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Login Page Test', function() {
    let driver;

    before('This is an example login form for Selenium tests', async () => {
        let target = '';
        for (var index in process.argv) {
            var str = process.argv[index];
            if (str.indexOf('--target') == 0) {
                target = str.substr(9);
            }
        }
        driver = await new webdriver.Builder().forBrowser('chrome').build();
    });

    it('should load login url', async () => {
        await driver.get(
            'https://crossbrowsertesting.github.io/login-form.html'
        );
    });

    it('should login if credentials are matched', async () => {
        let email = 'tester@crossbrowsertesting.com',
            pass = 'test123',
            emailText = await driver.wait(
                until.elementLocated(By.id('username'))
            ),
            passText = await driver.wait(
                until.elementLocated(By.id('password'))
            ),
            btnLogin = await driver.wait(until.elementLocated(By.id('submit')));

        emailText.click();
        emailText.sendKeys(email);

        passText.click();
        passText.sendKeys(pass);

        btnLogin.click();

        let success = await driver.wait(
            until.elementLocated(By.xpath('//*[@id="logged-in"]')),
            5000
        );
        let successMsg = await success.getAttribute('textContent');

        successMsg.should.equal('You are now logged in!');
    });

    it.skip('should show error message if credentials are not matched', async () => {
        let email = 'the@wrong.email',
            pass = 'wrong',
            emailText = await driver.wait(
                until.elementLocated(By.id('username'))
            ),
            passText = await driver.wait(
                until.elementLocated(By.id('password'))
            ),
            btnLogin = await driver.wait(until.elementLocated(By.id('submit')));

        emailText.click();
        emailText.sendKeys(email);

        passText.click();
        passText.sendKeys(pass);

        btnLogin.click();

        let failed = await driver.wait(
            until.elementLocated(By.className('alert-danger')),
            5000
        );
        let failedMsg = await failed.getAttribute('textContent');

        failedMsg.should.equal('Username or password is incorrect');
    });

    after(function() {
        driver.sleep(3000);
        driver.close();
    });
});
