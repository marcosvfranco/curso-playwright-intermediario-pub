import { expect, test } from '@playwright/test';

test('Sauce Demo website has correct title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await expect(page).toHaveTitle('Swag Labs');
});

test('Saucedemo products page has correct label text', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('input#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const productsLabel = page.getByTestId('title');
    await expect(productsLabel).toHaveText('Products');
});
