import {test} from "@playwright/test"
 test("locators", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //username text field
    await page.locator("input#username").fill("student")
    //password text field
    await page.locator("input#password").fill("Password123")
    //submit button
    await page.locator("button#submit").click();
 })