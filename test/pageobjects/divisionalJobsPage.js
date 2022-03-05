const Page = require('./page');

 
class DivisionalPage extends Page {
    get dhakalocator(){
        return $('//*[@id="main"]/div/div[2]/div/div[1]/div/a[1]');
    }
    get barishallocator(){
        return $('//*[@id="main"]/div/div[2]/div/div[1]/div/a[2]');
    }
    get rangpurlocator(){
        return $('//*[@id="main"]/div/div[2]/div/div[1]/div/a[7]');
    }

    async clickdhakalocator(){
        await this.dhakalocator.click();
    }
    async clickbarishallocator(){
        await this.barishallocator.click();
    }
    async clickrangpurlocator(){
        await this.rangpurlocator.click();
    }
    open() {
        return super.open('');
    }

}
module.exports = new DivisionalPage();