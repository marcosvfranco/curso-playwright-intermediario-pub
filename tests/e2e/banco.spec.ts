import { expect, test } from '@playwright/test';

test('Sauce Demo website has correct title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await expect(page).toHaveTitle('Swag Labs');
});
