import { test as base } from '@playwright/test';
import { CustomerPageRegistry } from '../pages/customerPages/customerPageRegistry.js';
import { AdminPageRegistry } from '../pages/adminPages/adminPageRegistry.js';

export const test = base.extend({

    // Customer page is created when the test starts
    customerPages: async ({ page }, use) => {

        const customerPages =
            new CustomerPageRegistry(page);

        await use(customerPages);
    },

    // Admin page is created only when adminApp() is called
    adminApp: async ({ browser }, use) => {

        let adminContext;

        const createAdminSession = async () => {

            adminContext = await browser.newContext();

            const adminPage =
                await adminContext.newPage();

            const adminPages =
                new AdminPageRegistry(adminPage);

            return adminPages;
        };

        try {
            await use(createAdminSession);
        } finally {

            if (adminContext) {
                await adminContext.close();
            }
        }
    }

});

export { expect } from '@playwright/test';