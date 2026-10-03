export class MyAccountPage {
    constructor(page){
        this.page = page;
        this.linkAccount = page.getByRole("link",{name:"Account", exact: true});
        this.linkLogout = page.getByRole('link', { name: 'Logout' });

    }
}