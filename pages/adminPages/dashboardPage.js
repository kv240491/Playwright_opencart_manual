export class DashboardPage {
    constructor(page){
        this.page = page;
        this.linkCustomer = page.getByRole("link",{name:"Customers"}).nth(1);
        this.linkCustomerMenu = page.locator("li#menu-customer");
        
    }

    async navigateToCustomerPage(){
        await this.linkCustomerMenu.click();
        await this.linkCustomer.click();
    }
}