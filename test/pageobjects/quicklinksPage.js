const Page = require('./page');

 
class QuickLinkPage extends Page {

    get quickLink(){
        return $('/html/body/div[8]/div/nav/ul/li[4]/a/span');
    }
    get clickNewJob(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[1]/a');
    }
    get deadline(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[2]/a');
    }
    get partTime(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[3]/a');
    }
    get contractual(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[4]/a');
    }
    get government(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[5]/a');
    }
    get locationwise(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[6]/a');
    }
    get employerlist(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[7]/a');
    }

    async quicklinknewjob(){
        await this.quickLink.click();
        await browser.pause(3000)
        await this.clickNewJob.click();
    }
    async quicklinkdeadline(){
        await this.quickLink.click();
        await browser.pause(3000)
        await this.deadline.click();
    }
    async quicklinkpartTime(){
        await this.quickLink.click();
        await browser.pause(3000)
        await this.partTime.click();
    }
    async quicklinkcontractual(){
        await this.quickLink.click();
        await browser.pause(3000)
        await this.contractual.click();
    }
    async quicklinkgovernment(){
        await this.quickLink.click();
        await browser.pause(3000)
        await this.government.click();
    }
    async quicklinklocationwise(){
        await this.quickLink.click();
        await browser.pause(3000)
        await this.locationwise.click();
    }
    async quicklinkemployerlist(){
        await this.quickLink.click();
        await browser.pause(3000)
        await this.employerlist.click();
    }
}
module.exports = new QuickLinkPage();