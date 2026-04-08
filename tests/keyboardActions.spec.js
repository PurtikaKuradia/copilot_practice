import {test} from "@playwright/test"
test("Keyboard Actions",async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator("#name").fill("pavana")
    // await page.locator("#name").type("pavana")
    // //or
    // await page.type("#name", "pavana")
    //or 
    //   await page.locator("#name").click()
    //   await page.keyboard.type("pavana")
    //   await page.waitForTimeout(2000)

    //insertText()
    await page.locator("#name").click()
    await page.keyboard.insertText("pavana")
     await page.waitForTimeout(2000)

     //down( ) and up()
     await page.keyboard.down("Space")
     await page.keyboard.up("Space")
     await page.keyboard.down("R")
     await page.keyboard.up("R")
     await page.waitForTimeout(2000)

     //press()
     await page.keyboard.press('Tab')
     await page.keyboard.type("aa@gmail.com")
     await page.keyboard.press("Control+A")
      await page.keyboard.press("Control+C")
       await page.keyboard.press('Tab')
       await page.keyboard.press("Control+V")
          await page.waitForTimeout(2000)
})
test.only("scroll using keyboard actions",async({page})=>{
    await page.goto("https://www.amazon.in/")
    for(let i =1; i<11;i++){
        await page.keyboard.press('ArrowDown')
         await page.waitForTimeout(1000)
    }
    
    await page.waitForTimeout(5000)
     for(let i =1; i<6;i++){
        await page.keyboard.press('ArrowUp')
         await page.waitForTimeout(1000)
    }

})