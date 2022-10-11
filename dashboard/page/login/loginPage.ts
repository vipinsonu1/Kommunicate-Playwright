import {Page} from "@playwright/test"

export default class LoginPage {
 constructor (public page: Page){

 }
async enterEmail(email: string){
    await this.page.locator("#email-input-field")
    .type(email);
}

async enterPass(password: string){
    await this.page.locator('input[type="password"]')
    .type(password);
}
 
async clickonLogin(){
    await Promise.all([
        this.page.waitForNavigation({waitUntil: "networkidle"}),
        await this.page.click("#login-button")
    ]) 
}
}
