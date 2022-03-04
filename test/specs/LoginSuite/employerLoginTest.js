const loginPage = require('../../pageobjects/login.page')
 

describe('Employer login Test', () => {
    it('Employer Login', async () => {
        await loginPage.open();
        await browser.maximizeWindow();
        await loginPage.loginEmployerSighnIn("rm.qups@gmail.com", "rm123456789");
    });
})