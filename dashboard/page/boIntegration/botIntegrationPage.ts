import {Page} from "@playwright/test"
export default class LoginPage {
 constructor (public page: Page){

 }
async clickOnBot(){
    await Promise.all([
        this.page.waitForNavigation({waitUntil: "networkidle"}),
        await this.page.click("#ac-bot-integrations")
    ]) 
}
async clickOnBot1(){
    await Promise.all([
        this.page.waitForNavigation({waitUntil: "networkidle"}),
        await this.page.click("#ac-bot-integrations")
    ]) 
}


}