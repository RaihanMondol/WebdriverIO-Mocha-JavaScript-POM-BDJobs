const bar = require('../../pageobjects/MainNavBarPage');


describe('Main Nav Bar Test', () => {
    it('main nav Bar', async () => {
        await bar.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await bar.mainnavbar();
         
    });
});