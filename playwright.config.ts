// @ts-check
import { PlaywrightTestConfig, devices } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config: PlaywrightTestConfig = {
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',

    use: {
        testIdAttribute: 'data-test',
        // baseURL: 'https://www.saucedemo.com',
        headless: process.env.NOHEADLESS ? false : true,
        // storageState: 'storageState.json',
        // viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true
        // video: 'on',
        // screenshot: 'only-on-failure',
        // trace: 'on',
        // launchOptions: {
        //     slowMo: 200
        // }
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'Setup Demoblaze',
            use: { ...devices['Desktop Chrome'], channel: 'chrome' },
            testMatch: /setup\.ts/
        },

        {
            name: 'Desktop Chrome',
            dependencies: ['Setup Demoblaze'],
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
                storageState: 'storageState.json'
            },
            testMatch: /demoblaze\.spec\.ts/
        },

        {
            name: 'firefox',
            dependencies: ['Setup Demoblaze'],
            use: {
                ...devices['Desktop Firefox'],
                storageState: 'storageState.json'
            },
            testMatch: /demoblaze\.spec\.ts/
        },

        {
            name: 'webkit',
            dependencies: ['Setup Demoblaze'],
            use: {
                ...devices['Desktop Safari'],
                storageState: 'storageState.json'
            },
            testMatch: /demoblaze\.spec\.ts/
        },

        /* Test against mobile viewports. */
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
            testIgnore: /demoblaze\.spec\.ts/
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
            testIgnore: /demoblaze\.spec\.ts/
        }

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ]

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
};

export default config;
