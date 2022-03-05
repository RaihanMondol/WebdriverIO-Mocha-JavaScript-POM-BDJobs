

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    //login start
    get clickSignIn(){
         
        return $('//*[@id="lin_header_mid02"]/div[1]/div/nav/ul/li[6]/a');
    }
    get clickSignIn2(){
        return $('/html/body/div[7]/div/nav/ul/li[6]/a');
    }
   
    get inputUsername() {
        return $('#TXTUSERNAME');
    }
    get clickNext(){
        return $('//*[@id="form1"]/div[2]/div/div[2]/div/div[2]/input');
    }

    get inputPassword() {
        return $('//*[@id="PASS"]');
    }

    get btnSubmit() {
        return $('//*[@id="form1"]/div[2]/div/div[2]/div/div[2]/input');
    }
    //fb login start
    get clickFbButton(){
        return $('//*[@id="fb_button"]/i');
    }
    get clickUserName(){
        return $('//*[@id="userDetailsDropdown"]/span[1]');
    }
    get clicklogOut(){
        return $('/html/body/div[7]/div/nav/ul/li[8]/ul/li[7]/a');
    }
    get closeAddvertise(){
        return $('//*[@id="dismiss-button"]');
    }
    // employer login
    get employerSighnIn(){
        return $('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/ul/li/div[2]/div[2]/div[3]/a[1]');
    }
    get closeAdvertise2(){
        return $('//*[@id="webCamCheckModal"]/div/div/a');
    }
    get clickEmployers(){
        return $('//*[@id="menu"]/div/ul/li[4]/a')
    }
    get enterEmail(){
        return $('/html/body/div[6]/div/div/div[2]/div/form/div[1]/fieldset/label[1]/input');
    }
    get enterPassword(){
        return $('/html/body/div[6]/div/div/div[2]/div/form/div[1]/fieldset/label[2]/input');
    }
    get clickSubmitEmployerButton(){
        return $('/html/body/div[6]/div/div/div[2]/div/form/div[3]/input');
    }
     
    


     
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
        await browser.pause(3000);

    }
    async logout(){
        await browser.pause(2000)
        await this.clickUserName.click()
        await browser.pause(2000)
        await this.clicklogOut.click()
        await browser.pause(2000)
        
        
    }
    async closeAdvertise(){
        await this.closeAddvertise.click()
        await browser.pause(5000)
    }

    async loginfb (username, password) {
        await this.clickSignIn.click()
        await browser.pause(3000)
        await this.clickFbButton.click()
        
    }
    async loginEmployerSighnIn(email, password){
        await this.clickEmployers.click();
        await browser.pause(10000);
        //await this.enterEmail.click();
        await this.enterEmail.setValue(email);
        await browser.pause(5000);
        await this.enterPassword.setValue(password);
        await browser.pause(5000);
        await this.clickSubmitEmployerButton.click();
       
   
    }
   

    
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
