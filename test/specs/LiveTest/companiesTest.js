const live = require('../../pageobjects/livePage');


describe('Live', () => {
    it('Companies Test', async () => {
        await live.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await live.clickcompanieslocator();
         
    });
});