import {test} from "@playwright/test"

test("hard coded wait", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.waitForTimeout(2000)
    await page.getByText("Username", {exact:true}).fill("student")
     await page.waitForTimeout(2000)
    await page.getByLabel("Password", {exact:true}).fill("Password123")
     await page.waitForTimeout(2000)
    await page.locator("button#submit").click();
     await page.waitForTimeout(4000)
})

test.only("autosuggestions",async ({page})=>{
    await page.goto("https://amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("saree")
    await page.waitForTimeout(4000)
    let a = await page.locator("//div[@class='autocomplete-results-container']").allTextContents()
    console.log(a)
})