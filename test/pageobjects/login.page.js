

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get clickSignIn(){
        return $('//*[@id="lin_header_mid02"]/div[1]/div/nav/ul/li[6]/a');
    }
    get inputUsername() {
        return $('#TXTUSERNAME');
    }
    get clickNext(){
        return $('//*[@id="form1"]/div[2]/div/div[2]/div/div[2]/input');
    }

    get inputPassword() {
        return $('#TXTPASS');
    }

    get btnSubmit() {
        return $('//*[@id="form1"]/div[2]/div/div[2]/div/div[2]/input');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.clickSignIn.click()
        await browser.pause(3000)
        await this.inputUsername.setValue(username);
        await browser.pause(3000)
        await this.clickNext.click()
        await browser.pause(3000)
        await this.inputPassword.setValue(password);
        await browser.pause(3000)
        await this.btnSubmit.click();
        await browser.pause(6000);

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
