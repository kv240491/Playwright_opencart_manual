export class CustomerHomePage {
    constructor(page){
        this.page=page;
        this.tblCustomer = page.getByRole('table').filter({hasText:"Customer Name"});
    }
}