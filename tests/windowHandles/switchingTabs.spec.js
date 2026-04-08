import {expect, test} from "@playwright/test"
test("window switch", async ({browser})=>{
     let context = await browser.newContext();
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    await page.click("(//a[@class='CIaYa1'])[1]")
    await page.waitForTimeout(3000)

    await page.goto("https://www.redbus.in/")
    await page.click("//a[text()='Contact us']")
    await page.waitForTimeout(3000)
    await page.click("#account_dd")
})

test.only("handling multiple tabs", async ({browser})=>{
     let context = await browser.newContext();
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    let [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.click("(//a[@class='CIaYa1'])[1]")])
    await page.waitForTimeout(3000)
    console.log(await page2.url());
    await expect(page2.url()).not.toBe("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")

     await page.goto("https://www.redbus.in/")
    let [page3]  =  await Promise.all([
         page.waitForEvent('popup'),
          page.click("//a[text()='Contact us']")])
    await page.waitForTimeout(3000)
     await page3.click("#account_dd")
})