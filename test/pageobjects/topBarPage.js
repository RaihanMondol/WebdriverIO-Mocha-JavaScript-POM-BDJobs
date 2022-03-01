
const Page = require('./page');

 
class NavBarPage extends Page {
    
    get clickMybdJobs(){
        return $('//*[@id="menu"]/div/ul/li[2]/a');
    }
    get clickTrainning(){
        return $('//*[@id="menu"]/div/ul/li[3]/a');
    }
    get clickEmployers(){
        return $('//*[@id="menu"]/div/ul/li[4]/a')
    }
    async clickBar(){
        await this.clickMybdJobs.click()
        await browser.pause(15000)
        await this.clickTrainning.click()
        await browser.pause(15000)
        await this.clickEmployers.click()
        await browser.pause(15000)
    }
    open (){
        return super.open("login");
    }
}
module.exports = new NavBarPage();