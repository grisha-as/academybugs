import { MainPage, ProductPage } from './index'


export class App {
    constructor(page){
        this.page = page;
        this.mainPage = new MainPage(page);
        this.productPage = new ProductPage(page);
    }
};