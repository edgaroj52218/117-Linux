const { chromium } = require('playwright');
const path = require('path');

(async () => {

    const filePath = path.resolve('/home/edgarsteven/projects/117-Linux/docs/index.html');
    const fileUrl = `file://${filePath}`;
  // Launch a Chromium browser instance
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Open your local HTML file
  await page.goto(fileUrl);

  // Interact with elements in your HTML file
  const title = await page.title();
  console.log('Page title:', title);

  // Example: Click a button by its selector
  await page.click('#my-button');

  // Example: Fill an input field
  await page.fill('#my-input', 'Hello, Playwright!');

  // Close the browser
  await browser.close();
})();
