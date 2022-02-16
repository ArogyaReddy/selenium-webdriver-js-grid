"use strict";

const { Capabilities, Builder, until, By } = require("selenium-webdriver");

const caps = Capabilities.chrome();
// Capabilities.firefox();

let driver = new Builder()
  .usingServer("http://localhost:4444/wd/hub")
  .withCapabilities(caps)
  .build();

const lnkAddRemove = driver.findElement(
  By.xpath('//*[@id="content"]/ul/li[2]/a')
);

const btnAddElement = driver.findElement(
  By.xpath('//*[@id="content"]/div/button')
);

const openApp = async function () {
  await driver.get("http://the-internet.herokuapp.com/");
  await driver.sleep(5000);

  await driver.getTitle().then(function (pageTitle) {
    console.log("pageTitle: " + pageTitle);
  });

  await driver.sleep(2000);
  await lnkAddRemove.click();
  await driver.sleep(2000);
  await btnAddElement.click();
  await driver.sleep(2000);
  await driver.quit();
};

const addElement = async function () {
  await driver.sleep(2000);
  await lnkAddRemove.click();
  await driver.sleep(2000);
  await btnAddElement.click();
};

const closeApp = async function () {
  await driver.sleep(2000);
  await driver.quit();
};

openApp();
// addElement();
// closeApp();
