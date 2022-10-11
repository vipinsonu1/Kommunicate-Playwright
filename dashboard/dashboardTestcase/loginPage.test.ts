import {test, expect} from "@playwright/test"
import LoginPage from "../page/login/loginPage"
import ENV from  "../../utils/env"

test("Login test_01",async({page})=>{
    const login=new LoginPage(page);
    await page.goto(`${ENV.BASE_URL}login`)
    await login.enterEmail("vipin+testkm06102022@kommunicate.io");
    await login.enterPass("Vipin123");
    await login.clickonLogin();


})

