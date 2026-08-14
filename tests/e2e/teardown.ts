import { expect, test as teardown } from '@playwright/test';

teardown('Teardown Demoblaze', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');

    await page.context().storageState({ path: 'storageState.json' });
    console.log('Teardown Demoblaze completed successfully.');
});
