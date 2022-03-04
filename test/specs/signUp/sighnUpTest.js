const sighnup = require('../../pageobjects/sighnUpPage');


describe('Sighn Up Test', () => {
    it('Sighn Up', async () => {
        await sighnup.open();
        await browser.maximizeWindow()
        await browser.pause(1000)
        await sighnup.createAccount();
        await browser.pause(10000);
    });
});