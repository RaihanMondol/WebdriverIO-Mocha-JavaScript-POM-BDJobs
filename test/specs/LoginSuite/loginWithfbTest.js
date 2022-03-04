const LoginPage = require('../../pageobjects/login.page');


describe('My Login application', () => {
    it('should login with Facebook', async () => {
        await LoginPage.open();
        await browser.maximizeWindow()
        await browser.pause(1000)
        await LoginPage.loginfb('rm.qups@gmail.com', 'rm123456789');
        await browser.pause(5000)
    });
});