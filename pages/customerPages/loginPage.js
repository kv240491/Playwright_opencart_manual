
export class LoginPage {

    constructor(page){
        this.page = page;
        this.txtEmail = page.getByLabel("E-Mail Address");
        this.txtpassword = page.getByLabel("Password");
        this.btnLogin = page.locator('input[value="Login"]');
        this.msgError = page.locator('div.alert-dismissible');
    }

    async enterLoginDetails (loginData){
        await this.txtEmail.fill(loginData.email);
        await this.txtpassword.fill(loginData.password);
        await this.btnLogin.click();
    }
}