var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get("https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/");
driver.getTitle().then(function (title) {

    console.log("\n" + title);

});

driver.quit();