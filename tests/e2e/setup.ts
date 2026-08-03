import { expect, test as setup } from '@playwright/test';

setup('Setup Demoblaze', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('test+cursomarcos@test.com');
    await page.locator('#loginpassword').fill('Test1234!');
    await page.locator('div.modal-footer > button[onclick="logIn()"]').click();

    const nameOfUser = page.locator('#nameofuser');
    // eslint-disable-next-line playwright/no-standalone-expect
    await expect(nameOfUser).toHaveText('Welcome test+cursomarcos@test.com');

    await page.context().storageState({ path: 'storageState.json' });
});
