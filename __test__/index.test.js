/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const groceryList = require('../index');

let { key } = groceryList;

describe('test clicking buttons behaves as expected', () => {
  test('should add item to listItems when inputBox is submitted', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: ['--window-size=1400,900'],
    });
    const page = await browser.newPage();
    await page.goto('file:///Users/ken/Dropbox/grocerylist/index.html');
    await page.click('#inputBox');
    await page.type('#inputBox', 'Apple');
    await page.click('#submitButton');
    const listItemText1 = await page.$eval(`#listItem${key}`, (el) => el.textContent.slice(0, -17));
    expect(listItemText1).toBe('Apple');
    key += 1;
    await page.click('#inputBox');
    await page.type('#inputBox', 'Banana');
    await page.click('#submitButton');
    const listItemText2 = await page.$eval(`#listItem${key}`, (el) => el.textContent.slice(0, -17));
    // above line is still getting #listItem1 i.e. running too fast before key is updated...
    expect(listItemText2).toBe('Banana');
    await browser.close();
  }, 15000);
});
