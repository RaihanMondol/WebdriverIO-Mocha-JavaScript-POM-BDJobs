const live = require('../../pageobjects/livePage');


describe('Live', () => {
    it('Live Job', async () => {
        await live.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await live.clicklivejoblocator();
         
    });
});