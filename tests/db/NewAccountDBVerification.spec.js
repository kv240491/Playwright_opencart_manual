import { test, expect } from '../../fixtures/pageFixtures.js'
import { RandomDataUtil } from '../../utils/dataGenerator.js'
import { OpenCartTestData } from '../../testdata/openCartTestData.js'
import { executeQuery } from '../../utils/dbClient.js';


test('@master @db Verify new account in admin and DB', async ({ customerPages, adminApp }) => {

    const userData = RandomDataUtil.createUser();
    let adminPages;

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

    await test.step('5. login to the Admin', async () => {
        adminPages = await adminApp();
        await adminPages.adminLoginPage.navigateTo(OpenCartTestData.adminURL);
        await adminPages.adminLoginPage.enterLoginDetails(OpenCartTestData.adminUser, OpenCartTestData.adminPassword)
    })

    await test.step('6. Navigate to custome home page', async () => {
        await adminPages.dashboardPage.navigateToCustomerPage();
    })

    await test.step('7. Verify new user in the table', async () => {
        await expect(adminPages.customerHomePage.tblCustomer).toContainText(userData.email);
    })

    await test.step('verify data in the DB', async()=>{
        const sqlq ='SELECT customer_id, firstname, lastname, email, status, date_added FROM oc_customer WHERE email = ?';
        const rows = await executeQuery(sqlq, [userData.email]);
        console.log(rows[0].firstname);
        await expect(rows.length).toBe(1);
        await expect(rows[0].firstname).toBe(userData.firstName);
        await expect(rows[0].lastname).toBe(userData.lastName);
        await expect(rows[0].email).toBe(userData.email);
    })

})