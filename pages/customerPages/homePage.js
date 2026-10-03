export class HomePage {

   constructor (page){
    this.page = page;
    this.linkMyAccountMenu = page.getByRole("Link",{name:"My Account"}).first();
    this.linkRegister = page.getByRole("Link",{name:"Register"}).first();
    this.linkMyAccount = page.getByRole("Link",{name:"My Account"}).nth(1);
    this.linkLogin = page.getByRole("Link",{name:"Login"}).first();
    this.linkLogout = page.getByRole("Link",{name:"Logout"}).first();
    this.product = page.locator('div.product-layout').first();
    this.txtMainSearch = page.getByPlaceholder("Search")
    this.btnMainSearch = page.locator('div#search button');
    this.linkShoppingcart = page.getByTitle("Shopping Cart");
    }

    async navigateToSubLinkFromMenu(Menu, Sublink){
        await Menu.click();
        await Sublink.click();
    }

    async navigateToRegister(){
        await this.navigateToSubLinkFromMenu(this.linkMyAccountMenu,this.linkRegister);
    }

    async navigateToMyAccount(){
       await this.navigateToSubLinkFromMenu(this.linkMyAccountMenu,this.linkMyAccount);
    }

    async navigateTo(url){
        await this.page.goto(url);
    }

     async navigateToLoginPage(){
       await this.navigateToSubLinkFromMenu(this.linkMyAccountMenu,this.linkLogin);
    }

     async logoutFromApp(){
       await this.navigateToSubLinkFromMenu(this.linkMyAccountMenu,this.linkLogout);
    }

    async searchProduct (product){
        await this.txtMainSearch.fill(product);
        await this.btnMainSearch.click();
    }

    async navigateToShoppingCart(){
        await this.linkShoppingcart.click();
    }

}