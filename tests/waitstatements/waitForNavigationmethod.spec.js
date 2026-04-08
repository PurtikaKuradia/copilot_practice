import {test} from "@playwright/test"
test("waitForNavigation",async({page})=>{
    await page.goto("https://www.amazon.in/")
    //deprecated method waitForNavigation()
//  await  Promise.all([
//     await page.waitForNavigation({waitUntil:"domcotentloaded"}),
//   await page.click("#nav-cart-count-container") ])

await page.click("#nav-cart-count-container")
 
})
test("waitForLoadState",async({page})=>{
    await page.goto("https://www.amazon.in/")
 await  Promise.all([
    await page.waitForNavigation({waitUntil:"domcotentloaded"}),
  await page.click("#nav-cart-count-container") ])
await page.waitForLoadState('domcontentloaded', {timeout:2000})// by default it will wait for load state

})

test("waitForEvent", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.fill('#writeArea', " i am downloading the file")
   let [downloadfile] = await Promise.all([
     page.waitForEvent('download'),
     page.click('#downloadButton')])
    console.log(await downloadfile.path());
})
//custom waits
test("custom waits", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill('HP Laptop')
    await page.waitForFunction(()=>{let ele = document.querySelectorAll('.s-suggestion-container')
        return ele.length>1
    })
   let autoSuugestion= await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
   console.log(autoSuugestion)
})

test.only("custom waits for page loading", async({page})=>{
    await page.goto("https://www.amazon.in/")
     await page.waitForFunction(()=>{return document.readyState==='complete'})
    await page.locator('input#twotabsearchtextbox').fill('HP Laptop')
   
  
})