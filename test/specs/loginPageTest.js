const LoginPage = require('../pageobjects/login.page');
 

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await browser.maximizeWindow()
        await browser.pause(5000)
        await LoginPage.login('rm.qups@gmail.com', 'rm123456789');
    });
});


