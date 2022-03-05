const Page = require('./page');

 
class SighnUpPage extends Page {

    get clickSignIn(){
         
        return $('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/a');
    }
    get clickCreatAccountButton(){
        return $('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/ul/li/div[1]/div[2]/div[3]/a[2]');
    }
    get clickgeneralcreateAccountButton(){
        return $('//*[@id="wcj"]/div/div/div[3]/div');
    }
    get enterUserName(){
        return $("//*[@id='txtFirstName']");
    }
    get selectGender(){
        return $('//*[@id="wb"]/div[1]/div[2]/div/fieldset/div[3]/label');
    }
    get clickSkillType(){
        return $('//*[@id="selected_Cat"]');
    }
    get selectSkillType(){
        return $('//*[@id="selected_Cat"]/option[9]');
    }
    get enterEmail(){
        return $('//*[@id="txtEmail1"]');
    }
    get enterPhonNumber(){
        return $('//*[@id="txtMobile"]');
    }
    get clickEmailButton(){
        return $('//*[@id="userInfo"]/div[1]/div/fieldset/div[2]/label/span[1]');
    }
    get clickPhoneButton(){
        return $('//*[@id="userInfo"]/div[1]/div/fieldset/div[3]/label/span[1]/span');
    }
    get enterPassword(){
        return $('//*[@id="txtPassword"]');
    }
    get enterRePassword(){
        return $('[//*[@id="txtPassword"]');
    }
    get clickAgreButton(){
        return $('//*[@id="checkCodition"]');
    }
    get clickSubscribeButton(){
        return $('//*[@id="termAndCondition"]/div[2]/label/input');
    }
    get clickSubmitButton(){
        return $('//*[@id="Continue"]');
    }


    async createAccount(){
        await browser.pause(5000);
        await this.clickSignIn.click();
        await browser.pause(5000);
        await this.clickCreatAccountButton.click();
        await browser.pause(3000);
        await this.clickgeneralcreateAccountButton.click();
        await browser.pause(3000);
        await this.enterUserName.setValue("Raihan");
        await browser.pause(3000);
        await this.selectGender.click();
        await browser.pause(1000);
        await this.clickSkillType.click();
        await browser.pause(1000);
        await this.selectSkillType.click();
        await browser.pause(1000);
        await this.enterEmail.setValue('rm.qups@gmail.com');
        await browser.pause(1000);
        await this.enterPhonNumber.setValue("01784054592");
        await browser.pause(10000);
        await this.clickPhoneButton.click();
        await browser.pause(1000)
        await this.enterPassword.setValue("rm123456789");
        await this.enterRePassword.setValue("rm123456789");
        await browser.pause(1000);
        await this.clickSubmitButton.click()
        await browser.pause(5000);

    }
    open() {
        return super.open('');
    }
}
module.exports = new SighnUpPage();