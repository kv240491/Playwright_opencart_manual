
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    // Maximum time allowed for each test
    timeout: 30 * 1000,

    // Folder containing Playwright test files
    testDir: './tests',

    // Allow tests to execute in parallel
    fullyParallel: true,

    // Retry failed tests twice in CI
    retries: process.env.CI ? 2 : 0,

    // Use one worker in CI; otherwise use Playwright defaults
    workers: process.env.CI ? 1 : undefined,

    // Test reports
    reporter: [
        ['list'],

        ['html', {
            open: 'never',
            outputFolder: 'reports/html'
        }],

        ['junit', {
            outputFile: 'reports/results.xml'
        }],

        ['./utils/CustomReporter.js'],

        ['allure-playwright', {
            outputFolder: 'allure-results'
        }]
    ],

    // Common settings for all projects
    use: {

        trace: 'on-first-retry',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        headless: false,

        viewport: {
            width: 1280,
            height: 720
        },

        ignoreHTTPSErrors: true,

        permissions: ['geolocation']
    },

    // Execute tests tagged with @master
    grep: /@master/,

    // Browser configurations
    projects: [
        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome'],

                // Override device defaults
                viewport: {
                    width: 1280,
                    height: 720
                }
            }
        }

        // Enable these projects when needed:
        //
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] }
        // },
        //
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] }
        // }
    ]

});
