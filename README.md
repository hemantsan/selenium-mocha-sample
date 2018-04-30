## selenium-mocha-sample

### A brief summary about selenium and mocha

Mocha and Selenium both deal with testing software but they solve different problems.

**Mocha is test running framework.** You tell Mocha what tests you have and what tests you want to run and mocha will run your tests and report those that passed and those that failed. Mocha by itself provides a test running framework. You'll typically want to use an assertion library with it, like [Chai](http://chaijs.com/api/assert/). I have test suites where the only libraries providing testing support are Mocha together with Chai. This is a perfectly viable use-case.

---

**Selenium is a library for controlling browsers.** A major part of its scope is testing browser-based software. However, it can also be used for scraping web sites. This is something that Selenium can do that Mocha cannot do, by itself. Conversely Selenium is not a test running framework. Selenium has no facilities dedicated to delimiting tests and running only specific tests. You have to rely on a test running framework like Mocha to delimit one test from another.

---

If you want to write a test suite that tests a browser-based application you could use Mocha together with Selenium. Or Jasmine (another test running framework) with Selenium. Or you could use Behave (a Python based test runner) together with Selenium. Or you could use Mocha together with some other library that controls browsers.

### setup

`npm install`

*   make sure you have add [chromedriver.exe](https://sites.google.com/a/chromium.org/chromedriver/downloads) (chrome) and [geckodriver.exe](https://github.com/mozilla/geckodriver/releases/download/v0.20.1/geckodriver-v0.20.1-win64.zip) (firefox) in system's PATH variable.

Run the test

syntax : mocha path/to/test-folder/test-file.js  
example:  
&nbsp;&nbsp;&nbsp;for chrome : `npm test __test__/chrome-test.js`  
&nbsp;&nbsp;&nbsp;for firefox : `npm test __test__/firefox-test.js`  
&nbsp;&nbsp;&nbsp;mocha test : `npm test __test__/mocha-test.js`
