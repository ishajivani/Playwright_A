import { test, expect } from '@playwright/test';

test('Amazon Search Using Locators', async ({ page }) => {

await page.goto('https://www.amazon.in/');
await page.locator('#twotabsearchtextbox').fill('iphone 17');
await page.locator('#nav-search-submit-button').click(); 
await page.locator('#a-autoid-1-announce').click();
await expect (page.locator('#nav-cart-count')).toHaveText('1');
await page.locator('#nav-cart-count').click();
await page.getByRole('link', { name: 'Amazon.in' }).click();
//await page.locator('#nav-logo-sprites').click();
});
