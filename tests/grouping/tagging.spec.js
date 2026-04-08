import {test} from "@playwright/test"
test("tags @module1", async ({browser})=>{
    //creating multiple tabs manually
    let context = await browser.newContext();
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
    let page2 = await context.newPage()
    await page2.goto("https://www.amazon.in/")
    
})
test("tag1 @module1", {tag:"@module1"}, async ({browser})=>{
    //creating multiple tabs manually
    let context = await browser.newContext();
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
    let page2 = await context.newPage()
    await page2.goto("https://www.amazon.in/")
    
})

test("taggs @module1", {tag:["@module1", "@smoke1"]}, async ({browser})=>{
    //creating multiple tabs manually
    let context = await browser.newContext();
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
    let page2 = await context.newPage()
    await page2.goto("https://www.amazon.in/")
    
})