import {test} from "@playwright/test"
test("",{tag:"@smoke"},  async ({browser})=>{
    //creating multiple tabs manually
    let context = await browser.newContext();
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
    let page2 = await context.newPage()
    await page2.goto("https://www.amazon.in/")
    
})