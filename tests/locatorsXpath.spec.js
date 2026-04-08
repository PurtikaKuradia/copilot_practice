import {test} from "@playwright/test"
 test("locators", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //username text field
    await page.locator("//input[@id='username']").fill("student")
    //password text field
    await page.locator("//input[@id='password']").fill("Password123")
    //submit button
    await page.locator("//button[@id='submit']").click();
 })