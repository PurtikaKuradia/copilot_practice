import {chromium, test} from "@playwright/test"
test("browser controls", async({page})=>{
    await page.goto("https:www.google.com")
    //title()
    console.log(await page.title());
    //viewportSize()
    let size = await page.viewportSize();
    //size()
    console.log(size)

    await page.setViewportSize({width:1000, height:500})
    let size1 = await page.viewportSize();
    console.log(size1)

    //url
    console.log(page.url()); 
})

test("cookies control",async({browser})=>{
let context = await browser.newContext();
let page = await context.newPage();
console.log(await context.cookies());

})
test.only("instance chromium", async()=>{
    let browser = await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage()
    await page.goto("https://www.google.com")
})
test("Screenshot",async({page})=>{
    await page.goto("https://www.google.com")
    await page.screenshot({path:"screenshot/ss.png"})
         let time = new Date().getTime();
          await page.screenshot({path:`screenshot/page-${time}.png`})
})