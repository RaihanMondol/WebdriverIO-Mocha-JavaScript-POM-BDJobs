const link = require('../../pageobjects/quicklinksPage');


describe('Quick Links', () => {
    it('Locatiopn Wise test', async () => {
        await link.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await link.quicklinklocationwise();
         
    });
});