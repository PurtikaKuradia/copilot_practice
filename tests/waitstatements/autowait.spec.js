import {test} from "@playwright/test"
//actionTimeout will be applicabe to whole page
test.use({actionTimeout: 5000})
test("check", async ({page})=>{
    page.setDefaultTimeout(3000);
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@id='attended']").check()
})

test.only("check1", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("//input[@id='username']").fill("student")
    await page.locator("//button[@class='bt'").click({timeout:1000})
})