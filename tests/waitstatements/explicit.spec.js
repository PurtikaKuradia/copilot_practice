import {test} from "@playwright/test"
 
test("element waits", async({page})=>{
    await page.goto("https://amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("dress")
     await page.locator('//div[@role="row"]',{hasText:" for woman"}).waitFor({timeout:15000})
       await page.locator('//div[@role="row"]').waitFor({timeout:5000})
    let a = await page.locator("//div[@role='row']").allTextContents()
    console.log(a)
})
test("element state waits", async({page})=>{
    await page.goto("https://amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("dress").waitFor({state:"visible", timeout:15000})
     await page.locator('//div[@role="row"]',{hasText:" for woman"}).waitFor()
       await page.locator('//div[@role="row"]').waitFor({timeout:15000})
    let a = await page.locator("//div[@role='row']").allTextContents()
    console.log(a)

})
test("wait for selector", async({page})=>{
    await page.goto("https://amazon.in/")
 //   await page.locator("input#twotabsearchtextbox").fill("dress")
    await page.waitForSelector("//input[@id='twotabsearchtextbox']",{state:"visible"})
      (await page.waitForSelector("//input[@id='twotabsearchtextbox']")).fill("shoes")
    await page.locator('//div[@role="row"]',{hasText:" for woman"}).waitFor()
       
    let a = await page.locator("//div[@role='row']").allTextContents()
    console.log(a)
})