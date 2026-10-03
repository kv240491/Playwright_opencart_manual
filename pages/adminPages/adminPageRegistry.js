import { AdminLoginPage } from "./adminLoginPage.js";
import { DashboardPage } from "./dashboardPage.js";
import { CustomerHomePage } from "./customerHomePage.js"


export class AdminPageRegistry {
    constructor(page) {
        this.adminLoginPage = new AdminLoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.customerHomePage = new CustomerHomePage(page);

    }

}