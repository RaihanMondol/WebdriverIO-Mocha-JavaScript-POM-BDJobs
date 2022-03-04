const divisionaljob = require('../../pageobjects/divisionalJobsPage');


describe('Divisional Jobs Test', () => {
    it('Dhaka Jobs', async () => {
        await divisionaljob.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await divisionaljob.clickdhakalocator();
         
    });
});