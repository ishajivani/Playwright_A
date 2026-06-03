import { test, expect } from '@playwright/test';

test('Multi Tab Handling', async ({ page }) => {
await page.goto('https://www.amazon.in/');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).dblclick();
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('boat');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-product-image-container').first().click();
  const page1 = await page1Promise;
await page1.getByRole('button', { name: 'Add to cart' }).click();

});
