import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchPage } from '../pages/search.page';

test.describe('Etsy website', () => {

    test.beforeEach(async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await homePage.acceptCookies();
    });

    test('search', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchPage = new SearchPage(page);
        await expect(homePage.searchBar).toBeVisible();
        await homePage.searchBy( 'notebook');
        await expect (searchPage.resultsContainer).toBeVisible();
        // await searchPage.sortBy("price_asc");
    });

});