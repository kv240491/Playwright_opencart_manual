import { test, expect } from '../../fixtures/pageFixtures.js'
import { OpenCartTestData } from '../../testdata/openCartTestData.js'
import { DataProvider } from '../../utils/dataReader.js';
import path from 'path';

const filePath = path.resolve(
            process.cwd(),
            'testdata',
            'opencart_logindata.xlsx'
        );

const jsonData = DataProvider.readExcel(filePath);

for (const data of jsonData) {


    test(`@master @Datadriven ${data.TestName}`, async ({ customerPages }) => {

        await test.step('1. Navigate to the app URL', async () => {
            await customerPages.homePage.navigateTo(OpenCartTestData.appURL);
        });

        await test.step('2. Navigate to Login page', async () => {
            await customerPages.homePage.navigateToLoginPage();
        });

        await test.step('3. Enter Login details and click on Login', async () => {
            await customerPages.loginPage.enterLoginDetails(data);
        });

        await test.step('4. Verify the result', async () => {

            if (data.expected === 'success') {
                await expect(
                    customerPages.myAccountPage.linkAccount
                ).toBeVisible();
            } else {
                await expect(
                    customerPages.loginPage.msgError
                ).toBeVisible();
            }
        });
    });
}