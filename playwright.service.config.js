import { defineConfig } from '@playwright/test';
import {
    createAzurePlaywrightConfig,
    ServiceOS
} from '@azure/playwright';
import { DefaultAzureCredential } from '@azure/identity';

import baseConfig from './playwright.config.js';

/*
 * Azure Playwright Workspaces Configuration
 *
 * This configuration extends the existing playwright.config.js.
 *
 * Base Playwright configuration continues to control:
 * - testDir
 * - timeout
 * - retries
 * - workers
 * - projects
 * - viewport
 * - screenshots
 * - videos
 * - traces
 *
 * This file adds:
 * - Azure Playwright hosted browsers
 * - Azure authentication
 * - Azure Playwright Workspace reporting
 */

export default defineConfig(

    // Existing framework configuration
    baseConfig,

    // Azure Playwright Workspaces configuration
    createAzurePlaywrightConfig(baseConfig, {

        /*
         * Allows Azure-hosted browsers to access services
         * available through the machine running the tests.
         */
        exposeNetwork: '<loopback>',

        /*
         * Maximum time to establish the connection
         * with Azure-hosted Playwright browsers.
         */
        connectTimeout: 3 * 60 * 1000,

        /*
         * OS used by Azure-hosted browsers.
         */
        os: ServiceOS.LINUX,

        /*
         * Azure authentication.
         *
         * Locally this can use your Azure CLI login.
         * In CI/CD it can use the configured Azure identity.
         */
        credential: new DefaultAzureCredential()
    }),

    /*
     * Reporting configuration
     *
     * HTML must be configured before the
     * Azure Playwright Workspace reporter.
     *
     * Existing framework reporters are retained.
     */
    {
        reporter: [

            // Playwright HTML Report
            [
                'html',
                {
                    open: 'never',
                    outputFolder: 'reports/html'
                }
            ],

            // Azure Playwright Workspaces Report
            [
                '@azure/playwright/reporter'
            ],

            // Console Report
            [
                'list'
            ],

            // JUnit Report
            [
                'junit',
                {
                    outputFile: 'reports/results.xml'
                }
            ],

            // Framework Custom Reporter
            [
                './utils/CustomReporter.js'
            ],

            // Allure Report
            [
                'allure-playwright',
                {
                    outputFolder: 'allure-results'
                }
            ]
        ]
    }
);