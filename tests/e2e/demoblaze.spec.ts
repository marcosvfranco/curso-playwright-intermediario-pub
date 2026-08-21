import test, { expect } from '@playwright/test';

test.describe('Demoblaze - Testes de cookies', () => {
    // test.describe.configure({ timeout: 3000 });

    // test.beforeAll(async ({ browser }) => {
    //     test.setTimeout(5000);
    //     const page = await browser.newPage();
    //     await page.goto('https://www.demoblaze.com');
    // });

    test('Verificar cookies limpos logado', async ({ page, context }) => {
        // await page.goto('https://www.demoblaze.com', { timeout: 5000 }); // timeout de navigation
        await page.goto('https://www.demoblaze.com'); // timeout de navigation
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
        await context.clearCookies();

        await page.goto('https://www.demoblaze.com');
        await expect(nameOfUser).toBeHidden();
    });

    test('Verificar cookies limpos logado 2', async ({ page, context }) => {
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
        await context.clearCookies();

        await page.goto('https://www.demoblaze.com');
        await expect(nameOfUser).toBeHidden();
    });
});
