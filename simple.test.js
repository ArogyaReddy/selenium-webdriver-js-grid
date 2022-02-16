"use strict";

const {
  WebDriver,
  Capabilities,
  Builder,
  until,
  By,
} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const driver = new Builder().forBrowser("chrome").build();

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
