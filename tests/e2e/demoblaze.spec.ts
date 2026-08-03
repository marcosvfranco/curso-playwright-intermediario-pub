import test, { expect } from '@playwright/test';

test('Verificar estado logado', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
    const nameOfUser = page.locator('#nameofuser');
    await expect(nameOfUser).toHaveText('Welcome test+cursomarcos@test.com');
});
