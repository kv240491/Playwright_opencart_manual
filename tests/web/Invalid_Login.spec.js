import { test, expect } from '../../fixtures/pageFixtures.js'
import { OpenCartTestData } from '../../testdata/openCartTestData.js'

test('@master 3. Invalid Login Flow', async ({ customerPages }) => {

    await test.step('1. Navigate to the app URL', async () => {
        await customerPages.homePage.navigateTo(OpenCartTestData.appURL);
    });

    await test.step('2. Navigate to Login page', async () => {
        await customerPages.homePage.navigateToLoginPage();
    })

    await test.step('3. Enter Invalid Login details and click on Login', async () => {
        await customerPages.loginPage.enterLoginDetails(OpenCartTestData.invalidCustomer);
    })

    await test.step('4. Verify the error message', async () => {
        await expect(customerPages.loginPage.msgError).toBeVisible();
        await expect(customerPages.loginPage.msgError).toContainText("Warning: No match for E-Mail Address and/or Password.");
    });

    await test.step('5. Verify the Logout Link is not displayed', async () => {
        await expect(customerPages.myAccountPage.linkLogout).not.toBeVisible();
    });
})