const LoginPage = require('../../pageobjects/login.page');
 

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await browser.maximizeWindow()
        await browser.pause(5000)
        await LoginPage.login('rm.qups@gmail.com', 'rm123456789');
        await browser.pause(5000);
    });
    it('should log out', async () => {
        await browser.pause(1000)
        await LoginPage.logout()
        await browser.pause(5000)
    });
    // it('should close Advertise', async () => {
    //      await LoginPage.closeAdvertise()
    // });
    it('should login with Facebook', async () => {
        await browser.pause(1000)
        await LoginPage.loginfb('rm.qups@gmail.com', 'rm123456789');
        await browser.pause(5000)
    });
});


