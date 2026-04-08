import {test} from "@playwright/test"
test("", async ({browser})=>{
    let context = await browser.newContext({permissions:["notifications", "microphone", "geolocation"]})
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator('#browNotButton').click()
    let result = await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result}`)
    //revoke all permissions----
    await context.clearPermissions()
     let result1 = await page.evaluate(()=>{return Notification.requestPermission()})
     console.log(`permissions:${result1}`)
})