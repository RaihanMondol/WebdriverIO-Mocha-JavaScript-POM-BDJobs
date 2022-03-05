
const Page = require('./page');

 
class MainNavBarPage extends Page {
    get testEmployalibility(){
        return $('//*[@id="lin_header_mid02"]/div[1]/div/nav/ul/li[2]/a');
    }
    get jobSearch(){
        return $('//*[@id="lin_header_mid02"]/div[1]/div/nav/ul/li[3]/a');
    }
    get quickLink(){
        return $('/html/body/div[8]/div/nav/ul/li[4]/a/span');
    }
    get careerResource(){
        return $('/html/body/div[8]/div/nav/ul/li[5]/a');
    }
   
    
    
    async mainnavbar(){
        await this.testEmployalibility.click();
        await browser.pause(10000);
        await this.jobSearch.click();
        await browser.pause(10000);
        await this.quickLink.click();
        await browser.pause(10000);
        await this.careerResource.click();
        await browser.pause(10000);
    }
   

}
module.exports = new MainNavBarPage();