const link = require('../../pageobjects/quicklinksPage');


describe('Quick Links', () => {
    it('Part Time test', async () => {
        await link.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await link.quicklinkpartTime();
         
    });
});