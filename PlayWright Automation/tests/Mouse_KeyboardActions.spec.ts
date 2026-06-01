import { test, expect } from '@playwright/test';

test('Mouse Actions', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('#nav-link-accountList').hover();
    await page.locator('#icp-nav-flyout').hover();
    await page.locator('#nav-link-amazonprime').hover();
    await page.mouse.wheel(0, 1000);
    await page.mouse.wheel(0, -500);
    await page.locator('#nav-cart').hover();
    await page.locator('#nav-cart').click();
    await page.goBack();
    await page.locator('#nav-logo-sprites').hover();
    await page.locator('#nav-logo-sprites').dblclick();
    await page.locator('#nav-logo-sprites').click({  button: 'right' });

});

    // await page.goto('https://www.amazon.in/');
    // await page.getByPlaceholder('Search Amazon.in').fill('mobile');
    // // ==========================
    // // Mouse Hover Actions
    // // ==========================
    // await page.getByRole('link', {name: /Account & Lists/i}).hover();
    // await page.waitForTimeout(2000);
    // // Hover Language Menu
    // await page.locator('#icp-nav-flyout').hover();
    // await page.waitForTimeout(1000);
    // // Hover Prime Menu
    // await page.getByText('Prime').hover();
    // // ==========================
    // // Mouse Wheel Actions
    // // ==========================
    // await page.mouse.wheel(0, 1000);
    // await page.waitForTimeout(1000);
    // await page.mouse.wheel(0, 1000);
    // // Scroll Back Up
    // await page.mouse.wheel(0, -500);
    // // ==========================
    // // Filter Selection
    // // ==========================
    // const samsungFilter = page.getByRole('checkbox', { name: /Samsung/i });
    // await samsungFilter.scrollIntoViewIfNeeded();
    // await samsungFilter.click();
    // // ==========================
    // // Open Product
    // // ==========================
    // const firstProduct = page.locator('[data-component-type="s-search-result"] h2').first();
    // await firstProduct.hover();
    // await firstProduct.click();



test('Keyboard Actions', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill('mobile');
    await page.keyboard.press('Enter');
    // await page.waitForLoadState('networkidle');
    await page.locator('#brandsRefinements').locator('.a-icon.a-icon-checkbox').first().check();
    await page.keyboard.press('Space');
    await page.keyboard.press('PageDown');
    await page.locator('#brandsRefinements').locator('.a-icon.a-icon-checkbox').nth(3).check();
    await page.keyboard.press('Enter');
    // // ==========================
    // // Keyboard Navigation
    // // ==========================
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');

});
