import { test, expect } from '../../fixtures/pageFixtures.js'
import { RandomDataUtil } from '../../utils/dataGenerator.js'
import { OpenCartTestData } from '../../testdata/openCartTestData.js'

test('@master @web register a new account', async ({ customerPages }) => {

    const userData = RandomDataUtil.createUser();

     await test.step('1. Navigate to the app URL', async () => {
           await customerPages.homePage.navigateTo(OpenCartTestData.appURL);
       });
    await test.step('2. Navigate to Register Page', async () => {
        await customerPages.homePage.navigateToRegister();
    });
    await test.step('3. Register the new user', async () => {
        await customerPages.registerPage.registerNewUser(userData);
    });
    await test.step('4. Verify the new user is registered', async () => {
        await expect(customerPages.successPage.msgConfirm).toBeVisible();
    });
    await test.step('5. Navigate to my account page', async () => {
        await customerPages.homePage.navigateToMyAccount();
    });
    await test.step('6. Verify the Account Page', async () => {
        await expect(customerPages.myAccountPage.linkAccount).toBeVisible();
    });
})

