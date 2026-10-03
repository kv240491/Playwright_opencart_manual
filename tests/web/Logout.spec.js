import { test, expect } from '../../fixtures/pageFixtures.js'
import { OpenCartTestData } from '../../testdata/openCartTestData.js'

test('@master 4. Logout Flow', async ({ customerPages }) => {

    await test.step('1. Navigate to the app URL', async () => {
        await customerPages.homePage.navigateTo(OpenCartTestData.appURL);
    });

    await test.step('2. Navigate to Login page', async () => {
        await customerPages.homePage.navigateToLoginPage();
    })

    await test.step('3. Enter Login details and click on Login', async () => {
        await customerPages.loginPage.enterLoginDetails(OpenCartTestData.validCustomer);
    })

    await test.step('4. Verify the Account Page after login', async () => {
        await expect(customerPages.myAccountPage.linkAccount).toBeVisible();
    });

    await test.step('5. Click on the Logout Link after login', async () => {
        await expect(customerPages.myAccountPage.linkLogout).toBeVisible();
        await customerPages.homePage.logoutFromApp();
    });

    await test.step('6. Verify account is logout', async ()=>{
        await expect(customerPages.logoutPage.lblAccLogout).toBeVisible();
    })

    await test.step('7. click on continue and verify home page', async ()=>{
        await customerPages.logoutPage.navigateToHomePage();
        await expect(customerPages.homePage.product).toBeVisible();
    })


})