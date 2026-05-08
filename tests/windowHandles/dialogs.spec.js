import {expect, test} from "@playwright/test"
test("dialogs handling automatically by Playwright", {tag:"@regression"}, async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.getByRole("button", {name:"Confirmation Alert"}).click()
    await expect(await page.locator('#demo')).toContainText('Cancel')
    await page.waitForTimeout(2000)
    await page.getByRole("button", {name: "Prompt Alert"}).click()
    await expect(await page.locator('#demo')).toContainText('cancelled ')
     await page.waitForTimeout(2000)
     
})
test("dialogs handling by script", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.on("dialog", async (dialog)=>{
       
        if(dialog.type()=='alert'){
             console.log(await dialog.message());
            await dialog.accept()
    }else if(dialog.type()=='confirm'){
        await dialog.accept()
    }else if(dialog.type()=='prompt'){
        if(dialog.defaultValue()=="tom"){
        console.log(await dialog.defaultValue())
        }else{
        await dialog.accept('tom')
        }
    }
    })
     await page.getByRole("button",{name:"Simple Alert"}).click()
       await page.waitForTimeout(2000)
      await page.getByRole("button", {name:"Confirmation Alert"}).click()
        await page.waitForTimeout(2000)
        await expect(await page.locator('#demo')).toContainText('OK')
      await page.getByRole("button", {name: "Prompt Alert"}).click()
      expect(await page.locator('#demo').textContent()).toBe('Hello tom! How are you today?')
       await page.waitForTimeout(2000)
})

test.only("dialogs using page.once()", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
     await page.getByRole("button",{name:"Simple Alert"}).click()
       await page.waitForTimeout(2000)
    await page.getByRole("button", {name:"Confirmation Alert"}).click()
      await page.waitForTimeout(2000)
     page.once("dialog", async (dialog)=>{dialog.accept("handled")})
      await page.getByRole("button", {name: "Prompt Alert"}).click()
        await page.waitForTimeout(2000)
      await page.reload()
      await page.getByRole("button", {name: "Prompt Alert"}).click()
       await page.waitForTimeout(2000)
})
