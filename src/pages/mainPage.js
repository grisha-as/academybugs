import { test } from '@playwright/test';

export class MainPage {
	constructor(page) {
		this.page = page;

		this.bugPopup = page.getByRole('heading', { name: 'What did you find out?' });
        this.crashOverlay = page.getByRole('heading', { name: 'You found a crash bug' });

        this.closePopupButton = page.locator('#close-popup');
        this.viewQuantity10Button = page.getByRole('link', { name: '10' });
        this.viewQuantity50Button = page.getByRole('link', { name: '50' });
        this.productImage = page.locator('#ec_product_image_effect_4281370').getByRole('link');
        this.productName = page.getByRole('link', { name: 'DNK Yellow Shoes' });
        		
	};
	
	async open() {
		await test.step('Открыть https://academybugs.com/find-bugs/', async () => {
            await this.page.goto('/');
            });
	};
    
    async openProductImage() {
        await test.step('Открыть productImage Dark Grey Jeans', async () => {
            await this.productImage.click();
        });
	};

    async goToProductPage() {
        await test.step('Открыть productPage DNK Yellow Shoes', async () => {
            await this.productName.click();
        });
	};

    async getViewQuantity(number) {
        await test.step(`Нажать View ${number}`, async () => {
            switch (number) {
                case 10:
                    await this.viewQuantity10Button.click();
                    break;
                case 25:
                    await this.viewQuantity50Button.click();
                    break;
                case 50:
                    await this.viewQuantity50Button.click();
                    break;
                default:
                    throw new Error(`Недопустимое значение для getViewQuantity: ${number}`);
            }
        });
    }
    
    async closePopup() {
		await test.step('Закрыть bugPopup', async () => {
            await this.closePopupButton.click();
        })
	};
}
