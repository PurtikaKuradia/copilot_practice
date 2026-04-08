import {test} from "@playwright/test"
import loginPage from "../PageObjectModel/loginPage.page.js"
import singleSetdata from "../testData/singleSetdata.json"
test("Page Object Model", async ({page})=>{
    let url = singleSetdata.url
    let username = singleSetdata.username
    let password = singleSetdata.password
    let loginpg = new loginPage(page)
    //launch url
    await page.goto(url)

    await loginpg.usernameTextField.fill(username)
    await loginpg.passwordTextField.fill(password)
    await loginpg.submitButton.click()
    await page.waitForTimeout(3000)
})