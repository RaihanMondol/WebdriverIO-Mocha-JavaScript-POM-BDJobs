const search = require('../pageobjects/jobSearchPage');

describe('Job Search Test', async () => {
    it('Searchy Job', async () => {
        await search.open();
        await browser.maximizeWindow();
        await search.searchJob("QA Engineer");
        await browser.pause(15000);
    });
})