import { test, expect } from '../../fixtures/pageFixtures.js'
import { RandomDataUtil } from '../../utils/dataGenerator.js'
import { OpenCartTestData } from '../../testdata/openCartTestData.js'

test('@master Verify Shopping Cart Product', async ({ customerPages }) => {

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

    await test.step('7. Click on the Logout Link after login', async () => {
        await expect(customerPages.myAccountPage.linkLogout).toBeVisible();
        await customerPages.homePage.logoutFromApp();
    });

    await test.step('8. Verify account is logout', async () => {
        await expect(customerPages.logoutPage.lblAccLogout).toBeVisible();
    });

    await test.step('9. Navigate to Login page', async () => {
        await customerPages.homePage.navigateToLoginPage();
    });

    await test.step('10. Enter Login details and click on Login', async () => {
        await customerPages.loginPage.enterLoginDetails(userData);
    });

    await test.step('11. Verify the Account Page after login', async () => {
        await expect(customerPages.myAccountPage.linkAccount).toBeVisible();
    });

    await test.step('12. Verify the Logout Link after login', async () => {
        await expect(customerPages.myAccountPage.linkLogout).toBeVisible();
    });

    await test.step('13. search the product and verify the result', async ()=>{
        await customerPages.homePage.searchProduct(OpenCartTestData.prodMacAir);
        await customerPages.searchResultsPage.verifySearchResult(OpenCartTestData.prodMacAir);
    });

    await test.step('14 add product to the cart and verify the msg', async ()=>{
        await customerPages.searchResultsPage.addProductToCartandVerifySuccessMsg(OpenCartTestData.prodMacAir);
    });

    await test.step('15 Varify the product in shopping cart', async ()=>{
        await customerPages.homePage.navigateToShoppingCart();
        await customerPages.shoppingCartPage.verifyProductInShoppingCart(OpenCartTestData.prodMacAir);
    });
})

