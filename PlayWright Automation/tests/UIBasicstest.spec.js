const {test} = require('@playwright/test');

test('First Playwright Testcase', async ({browser}) => {
    // for chrome plugins, cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/practice');
    console.log (await.page.title());
    page.locator
});

// or
test('Second Playwright Testcase', async ({browser, page}) => {
    await page.goto('https://www.google.com');
});

