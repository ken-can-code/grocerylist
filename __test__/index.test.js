/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const groceryList = require('../index');

const { key } = groceryList;

describe('test clicking buttons behaves as expected', () => {
  it('should add item to listItems when inputBox is submitted', async () => {
    jest.setTimeout(15000);
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 8,
      args: ['--window-size=1400,900'],
    });
    const page = await browser.newPage();
    await page.goto('file:///Users/ken/Dropbox/grocerylist/index.html');
    await page.click('#inputBox');
    await page.type('#inputBox', 'Apple');
    await page.click('#submitButton');
    const listItemText = await page.$eval(`#listItem${key}`, (el) => el.textContent.slice(0, -17));
    expect(listItemText).toBe('Apple');
  });
});
