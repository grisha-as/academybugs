import { expect } from '@playwright/test';
import { test } from '../src/fixture/fixture';
import { CommentBuilder } from '../src/helpers/builder';
import { errorMessages } from '../src/helpers/errorMassages';

test.describe('Find bugs', () => {
	
	test('@UI Size productImage for product Dark Grey Jeans', async ({ app }) => {
		await app.mainPage.openProductImage();
		
		await test.step(`Проверка, что виден текст 'What did you find out'`, async () => {
			await expect(app.mainPage.bugPopup).toBeVisible();
			await expect(app.mainPage.bugPopup).toContainText(errorMessages.bugPopup);
		})
   	});

	test('@Functional Manufacturer page can’t be found', async ({ app }) => {
		await app.mainPage.goToProductPage();
		await app.productPage.goToManufacturerInfo();

		await test.step(`Проверка, что виден текст 'What did you find out'`, async () => {
			await expect(app.mainPage.bugPopup).toBeVisible();
			await expect(app.mainPage.bugPopup).toContainText(errorMessages.bugPopup);
		})
   	});

	   test('@Content Description should translate it to English language', async ({ app }) => {
		await app.mainPage.goToProductPage();
		await app.productPage.clickProductDescription();

		await test.step(`Проверка, что виден текст 'What did you find out'`, async () => {
			await expect(app.mainPage.bugPopup).toBeVisible();
			await expect(app.mainPage.bugPopup).toContainText(errorMessages.bugPopup);
		})
   	});

	test('@Crash View quantity by 10', async ({ app }) => {
		await app.mainPage.getViewQuantity(10);

		await test.step(`Проверка, что виден текст 'You found a crash bug'`, async () => {
			await expect(app.mainPage.crashOverlay).toBeVisible();
			await expect(app.mainPage.crashOverlay).toContainText(errorMessages.crashBug);
   		})
	});

	test('@Crash View quantity by 50', async ({ app }) => {
		await app.mainPage.getViewQuantity(50);

		await test.step(`Проверка, что виден текст 'You found a crash bug'`, async () => {
			await expect(app.mainPage.crashOverlay).toBeVisible();
			await expect(app.mainPage.crashOverlay).toContainText(errorMessages.crashBug);
   		})
	});

	test('@Crash Select currency', async ({ app }) => {
		await app.mainPage.goToProductPage();
		await app.productPage.selectСurrency('EUR');

		await test.step(`Проверка, что виден текст 'You found a crash bug'`, async () => {
			await expect(app.mainPage.crashOverlay).toBeVisible();
			await expect(app.mainPage.crashOverlay).toContainText(errorMessages.crashBug);
   		})
	});

	test('@Crash Post comment', async ({ app }) => {
		const commentBuilder = new CommentBuilder()
			.addComment()
			.addUsername()
			.addEmail()
			.generate();
				
		await app.mainPage.goToProductPage();
		await app.productPage.postComment(commentBuilder.comment, commentBuilder.username, commentBuilder.email);

		await test.step(`Проверка, что виден текст 'You found a crash bug'`, async () => {
			await expect(app.mainPage.crashOverlay).toBeVisible();
			await expect(app.mainPage.crashOverlay).toContainText(errorMessages.crashBug);
   		})
	});

});