import { test as base } from '@playwright/test';
import { App } from '../pages/appPage';

export const test = base.extend({
    app: async({ page }, use) => {
        const app = new App(page);
        //todo перенести в process.env
        await page.goto('https://academybugs.com/find-bugs/');
        await use(app);
    }
});      