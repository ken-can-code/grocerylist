/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const groceryList = require('../index');

let { key } = groceryList;

describe('test clicking buttons behaves as expected', () => {
  async function launchBrowser() {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: ['--window-size=1400,900'],
    });
    const page = await browser.newPage();
    await page.goto('file:///Users/ken/Dropbox/grocerylist/index.html');
    return {
      browser,
      page,
    };
    // {
    // browser: browser,
    // page: page,
    // }
  }
  test('should add first list item to listItems with inputBox text as textContent', async () => {
    const puppeteerItems = await launchBrowser();
    const { page, browser } = puppeteerItems;
    // const page = puppeteerItems.page
    // const browser = puppeteerItems.browser
    await page.click('#inputBox');
    await page.type('#inputBox', 'Apple');
    await page.click('#submitButton');
    const listItemText1 = await page.$eval(`#listItem${key}`, (el) => el.textContent.slice(0, -17));
    expect(listItemText1).toBe('Apple');
    key += 1; // done manually
    await page.click('#inputBox');
    await page.type('#inputBox', 'Banana');
    await page.click('#submitButton');
    const listItemText2 = await page.$eval(`#listItem${key}`, (el) => el.textContent.slice(0, -17));
    // above line is still getting #listItem1 i.e. running too fast before key is updated...
    expect(listItemText2).toBe('Banana');
    await browser.close();
  }, 15000);
});
