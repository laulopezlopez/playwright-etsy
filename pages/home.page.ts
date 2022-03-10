import {Locator, Page} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBar: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.locator('#global-enhancements-search-query');
        this.searchButton=page.locator('[data-id="gnav-search-submit-button"]');

    }

    async goto() {
        await this.page.goto('https://www.etsy.com/');
    }

    async acceptCookies() {
        await this.page.locator('#gdpr-single-choice-overlay .wt-overlay__footer .wt-btn--filled').click();
    }

    async searchBy(text: string) {
        await this.page.fill('#global-enhancements-search-query', text);
        await this.searchButton.click();
    }
}