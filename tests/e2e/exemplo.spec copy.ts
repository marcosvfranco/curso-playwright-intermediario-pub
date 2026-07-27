import { expect, test as setup } from '@playwright/test';

setup('Demoblaze website has correct title', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    // eslint-disable-next-line playwright/no-standalone-expect
    await expect(page).toHaveTitle('STORE');
    await page.context().storageState({ path: '.auth.json' });
});
