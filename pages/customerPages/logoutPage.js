
export class LogoutPage {

    constructor(page){
        this.page = page;
        this.lblAccLogout = page.getByRole('heading',{name:"Account Logout"});
        this.btnContinue = page.getByRole('link',{name : "Continue"});
    }

    async navigateToHomePage (){
        await this.btnContinue.click();
    }
}