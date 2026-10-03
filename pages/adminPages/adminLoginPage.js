export class AdminLoginPage{
    constructor(page){
        this.page =page;
        this.txtUserName = page.getByLabel("Username");
        this.txtPassword = page.getByLabel("Password");
        this.btnLogin = page.getByRole("button",{name:"Login"});
        this.btnClose = page.locator("button.close");
    }

      async navigateTo(url){
        await this.page.goto(url);
    }

    async enterLoginDetails(userName, password){
        await this.txtUserName.fill(userName);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
        await this.btnClose.click();
    }
}