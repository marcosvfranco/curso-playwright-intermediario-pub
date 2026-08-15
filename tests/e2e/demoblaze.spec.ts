import test, { expect } from '@playwright/test';

test('Verificar estado logado', async ({ page, context }) => {
    await page.goto('https://www.demoblaze.com');
    const nameOfUser = page.locator('#nameofuser');
    await expect(nameOfUser).toHaveText('Welcome test+cursomarcos@test.com');
    await expect(nameOfUser).toHaveText('Welcome test+cursomarcos@test.com');

    await context.addCookies([
        {
            name: 'user-preference-theme',
            value: 'dark',
            domain: 'www.demoblaze.com',
            path: '/',
        },
    ]);

    let cookies = await context.cookies();
    console.log('Cookies:', cookies);

    await context.clearCookies();

    await page.goto('https://www.demoblaze.com');
    await expect(nameOfUser).toBeHidden();
});
