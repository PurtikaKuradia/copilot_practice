import {test} from "@playwright/test"
//page fixture
// test("fixtures", async({page})=>{
//     await page.goto("https://www.amazon.in/")  
// })

//browser fixtures
test("fixtures",async({browser, browserName})=>{
    console.log(browserName)
    let context = await browser.newContext()
    // let page = await context.newPage()
    // await page.goto("https://www.amazon.in/")

})