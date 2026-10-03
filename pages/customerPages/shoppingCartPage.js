import { expect } from "@playwright/test";
export class ShoppingCartPage {

    constructor(page){
        this.page = page;
        this.linkCheckout = page.getByRole('link',{name:"Checkout"});
    }

     async verifyProductInShoppingCart (product){
            await expect(this.page.getByRole('link',{name :product, exact:true}).nth(1)).toBeVisible();
        }

    async clickOnCheckout (){
        await this.linkCheckout.click();
        await this.linkCheckout.isVisible();
    } 
}