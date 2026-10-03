import { HomePage } from './homePage.js';
import { MyAccountPage } from './myAccountPage.js';
import { RegisterPage } from './registerPage.js';
import { SuccessPage } from './successPage.js';
import { LoginPage } from './loginPage.js';
import { LogoutPage } from './logoutPage.js';
import { SearchResultsPage } from './searchResultsPage.js';
import { ShoppingCartPage } from './shoppingCartPage.js';

export class CustomerPageRegistry {
    constructor (page){
        this.homePage = new HomePage(page);
        this.myAccountPage = new MyAccountPage(page);
        this.registerPage = new RegisterPage(page);
        this.successPage = new SuccessPage(page);
        this.loginPage = new LoginPage(page);
        this.logoutPage = new LogoutPage(page);
        this.searchResultsPage = new SearchResultsPage(page);
        this.shoppingCartPage = new ShoppingCartPage(page);
    }
}