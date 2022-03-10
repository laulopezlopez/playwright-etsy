import {Locator, Page} from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly resultsContainer: Locator;
    readonly sortDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resultsContainer=page.locator('[data-search-results-container]');
        this.sortDropdown=page.locator('[data-sort-by-menu-desktop]');

    }

    async goto() {
        await this.page.goto('https://www.etsy.com/search');
    }



    async sortBy(sortType: string) {
        await this.sortDropdown.click();

        switch (sortType) {
            case 'most_relevant':
                await this.page.locator('[data-sort-by-most_relevant]').click();
                break;
            case 'date_desc':
                await this.page.locator('[data-sort-by-date_desc]').click();
                break;
            default:
                await this.page.locator(`[data-sort-by="${sortType}"]`).click();
        }

    }
}