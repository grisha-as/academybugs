import { test } from '@playwright/test';

export class ProductPage {
    constructor(page) {
        this.page = page;

        this.currencyConversionSelect = page.locator('#ec_currency_conversion');
        this.productDescription  = page.locator('.ec_details_description.academy-bug');

        this.commentTextbox = page.getByRole('textbox', { name: 'Comment' });
        this.nameTextbox = page.getByRole('textbox', { name: 'Name*' });
        this.emailTextbox = page.getByRole('textbox', { name: 'Email*' });

        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
        this.manufacturerLink =  page.getByRole('link', { name : 'DNK'});
    };
    
    async selectСurrency (currency = 'EUR') {
        await test.step(`Выбрать валюту ${currency}`, async () => {
           await this.currencyConversionSelect.selectOption(`${currency}`);
        });
    };

    async clickProductDescription () {
        await test.step(`Кликнуть на описание продукта`, async () => {
           await this.productDescription.waitFor();
           await this.productDescription.click();
        });
    };

    async goToManufacturerInfo () {
        await test.step(`Кликнуть по ссылке Manufacturer`, async () => {
            await this.manufacturerLink.waitFor();
            await this.manufacturerLink.click()
        });
    };

    async postComment(comment, name, email) {
        await test.step('Оставить комментарий к продукту', async () => {
            await this.commentTextbox.click();
            await this.commentTextbox.fill(comment);
            await this.nameTextbox.click();
            await this.nameTextbox.fill(name);
            await this.emailTextbox.click();
            await this.emailTextbox.fill(email);
            await this.postCommentButton.click();
        });
	};
}