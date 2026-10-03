import {expect} from '@playwright/test'

export class SearchResultsPage {
    constructor(page){
        this.page = page;
        this.btnAddToCart = page.getByRole('button',{name:"Add to Cart"});
        this.lblAddtoCartMsg = page.locator("div.alert-success");
    }

    async verifySearchResult(product){
        await expect(this.page.getByRole('link',{name :product, exact:true}).nth(1)).toBeVisible();
    }

    async addProductToCartandVerifySuccessMsg (product){
        const msg =`Success: You have added ${product} to your shopping cart`
        await this.btnAddToCart.click();
        await expect(this.lblAddtoCartMsg).toContainText(msg);

    }
}