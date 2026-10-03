export class RegisterPage {

    constructor (page){
        this.page = page;
        this.txtFirstName = page.getByLabel("First Name");
        this.txtLastName = page.getByLabel("Last Name");
        this.txtEMail = page.getByLabel("E-Mail");
        this.txtTelephone = page.getByLabel("Telephone");
        this.txtPassword = page.getByLabel("Password",{exact: true});
        this.txtPasswordConfirm = page.getByLabel("Password Confirm");
        this.chkAgree = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('input[value="Continue"]');
    }

    async registerNewUser (userdata){
        await this.txtFirstName.fill(userdata.firstName);
        await this.txtLastName.fill(userdata.lastName);
        await this.txtEMail.fill(userdata.email);
        await this.txtTelephone.fill(userdata.phone);
        await this.txtPassword.fill(userdata.password);
        await this.txtPasswordConfirm.fill(userdata.password);
        await this.chkAgree.check();
        await this.btnContinue.click();
    }



}