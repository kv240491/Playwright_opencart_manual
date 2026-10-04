# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\AccountRegistration.spec.js >> @master register a new account
- Location: tests\web\AccountRegistration.spec.js:5:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'homePage')
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/pageFixtures.js'
  2  | import { RandomDataUtil } from '../../utils/dataGenerator.js'
  3  | import { OpenCartTestData } from '../../testdata/openCartTestData.js'
  4  | 
  5  | test('@master register a new account', async ({ app }) => {
  6  | 
  7  |     const userData = RandomDataUtil.createUser();
  8  | 
  9  |      await test.step('1. Navigate to the app URL', async () => {
> 10 |            await app.CustomerPages.homePage.navigateTo(OpenCartTestData.appURL);
     |                                    ^ TypeError: Cannot read properties of undefined (reading 'homePage')
  11 |        });
  12 |     await test.step('2. Navigate to Register Page', async () => {
  13 |         await app.CustomerPages.homePage.navigateToRegister();
  14 |     });
  15 |     await test.step('3. Register the new user', async () => {
  16 |         await app.CustomerPages.registerPage.registerNewUser(userData);
  17 |     });
  18 |     await test.step('4. Verify the new user is registered', async () => {
  19 |         await expect(app.CustomerPages.successPage.msgConfirm).toBeVisible();
  20 |     });
  21 |     await test.step('5. Navigate to my account page', async () => {
  22 |         await app.CustomerPages.homePage.navigateToMyAccount();
  23 |     });
  24 |     await test.step('6. Verify the Account Page', async () => {
  25 |         await expect(app.CustomerPages.myAccountPage.linkAccount).toBeVisible();
  26 |     });
  27 | })
  28 | 
  29 | 
```