const Page = require('./page');

 
class JobSearchPage extends Page {
    get enterKeyword(){
        return $('//*[@id="txtKeyword"]');
    }
    get clickOrganizationType(){
        return $('//*[@id="qOT"]');
    }
    get selectOrganizationType(){
        return $('//*[@id="qOT"]/option[5]');
    }
    get clickSearchButton(){
        return $('//*[@id="main"]/div/div/div/div[6]/div[2]/form/button');
    }
    async searchJob(value){
        await this.enterKeyword.setValue(value);
        //await this.clickOrganizationType.click();
        //await this.selectOrganizationType.click();
        await this.clickSearchButton.click();
    }
    open (){
        return super.open("login");
    }


}
module.exports = new JobSearchPage();