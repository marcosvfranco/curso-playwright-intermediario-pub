import test, { expect } from '@playwright/test';

test('Verificar Titulo Demoblaze', async ({ page }) => {
    await page.goto('');
    await expect(page).toHaveTitle('STORE');
});
