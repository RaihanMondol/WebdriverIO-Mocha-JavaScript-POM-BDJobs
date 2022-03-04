const link = require('../../pageobjects/quicklinksPage');


describe('Quick Links', () => {
    it('Contractual Test', async () => {
        await link.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await link.quicklinkcontractual();
         
    });
});