import {test}  from "@playwright/test"
test("login sample", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student")
    await page.locator("input#password").fill("Password123")
    await page.locator("button#submit").click()
})
class LoginPage{
    constructor(page){
        this.usernameTF= page.locator("input#username")
        this.passwordTF = page.locator("input#password")
        this.submitButton = page.locator("button#submit")
    }
}
export default LoginPage