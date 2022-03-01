const login = require('../pageobjects/login.page');
const topBar = require('../pageobjects/topBarPage');

describe('Topbar Page Test', () => { 
   
    it('Login Test', async () => {
        await topBar.open();
        await browser.maximizeWindow();
        await login.login("rm.qups@gmail.com", "rm123456789");
        await browser.pause(10000);

    });

    it('TopBar', async () => {
        await topBar.clickBar();

    });
})