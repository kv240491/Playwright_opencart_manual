export class SuccessPage {

    constructor(page) {
        this.page = page;
        this.msgConfirm = page.getByRole('heading', {
            name: 'Your Account Has Been Created!',
            exact: true
        });
    }
}