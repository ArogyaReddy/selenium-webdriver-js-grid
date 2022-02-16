
Selenium Grid
------------------------------------------------------

How to Setup Selenium Grid?
------------------------------------------------------
 🟢 Step 1 - Download the Selenium Server - https://www.selenium.dev/downloads/
 🟢 Step 2 - Run Server as Hub Role
   java -jar selenium-server-4.1.2.jar  hub

  http://192.168.1.198:4444/grid/console
  http://localhost:4444/grid/console

 🟢 Step 3 - Connect Node in Same Network.
  java -jar selenium-server-4.1.2.jar node
 🟢 Step 4 :  Verify the http://192.168.1.198:4444/grid/console OR  http://localhost:4444/grid/console


------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------

✅ What is Selenium Grid?
- It is Part of Selenium Suite.
- It Provides running multiple tests across different browsers, operating systems, and machines in parallel.
- It has a concept of Hub and Node.
 Hub :  Where you run the Test.Hub Passes Execution to Nodes
 Node : Where Execution Happens

✅ Why we need Selenium Grid?
 1. Multiple tests across different browsers, different OS
 2. Parallel Testing
 3. Speed up tests and decrease execution time

Test App ::::
http://the-internet.herokuapp.com/

//TODO:-- capabilities
//NOTE:--- https://www.selenium.dev/documentation/webdriver/capabilities/shared/

const {Builder, Capabilities} = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");
(async function example() {
let driver = await new Builder().
withCapabilities(caps).
forBrowser('chrome').
build();
try {
// Navigate to Url
await driver.get('https://www.google.com');
}
finally {
await driver.quit();
}
})();



//###################///
let webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let proxy = require('selenium-webdriver/proxy');
let opts = new chrome.Options();

(async function example() {
opts.setProxy(proxy.manual({http: '<HOST:PORT>'}));
let driver = new webdriver.Builder()
.forBrowser('chrome')
.setChromeOptions(opts)
.build();
try {
await driver.get("https://selenium.dev");
}
finally {
await driver.quit();
}
}());

//NOTE:-- https://www.selenium.dev/documentation/webdriver/remote_webdriver/
// Remote webdriver

const { Builder, Capabilities } = require("selenium-webdriver");
var capabilities = Capabilities.firefox();
(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://example.com")   
        .withCapabilities(capabilities)
        .build();
    try {
        await driver.get('http://www.google.com');
    } finally {
        await driver.quit();
    }
})(); 

