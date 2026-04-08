import {test} from "@playwright/test"
test("basic mouse actions", async ({page})=>{
    //click()
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.locator("#btn_two").click()//left click()
    await page.waitForTimeout(2000)
    await page.locator('//a[text()="Right Click"]').click({modifiers:["Shift"]})// shift+click

    //rightClick()
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    // await page.locator("#btn_a").click({button:"right"})
    // await page.waitForTimeout(2000)

    //doubleClick()
  //   await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
  //   await page.locator("#btn_a").dblclick()
  //double click using clickCount
//    await page.locator("#btn_a").click({clickCount:2})
//     await page.waitForTimeout(2000)

    //down and up 
    // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    // await page.locator("#circle").hover()
    // await page.mouse.down()
    // await page.waitForTimeout(3000)
    // await page.mouse.up();
    // await page.waitForTimeout(3000)

    //disabled or hidden buttons
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
   // await page.locator("#submit").click({force:true})
   await page.locator("#submit").dispatchEvent('click')
    await page.waitForTimeout(3000)

    //mouse hover
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    await page.waitForTimeout(3000)
    await page.mouse.move(100,200)
    await page.waitForTimeout(3000)

})

test("scrolling", async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    // await page.waitForTimeout(2000)
    // await page.mouse.wheel(0, 1000)
    // await page.waitForTimeout(2000)
    //  await page.mouse.wheel(0, -1000)
    // await page.waitForTimeout(2000)

    //  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    // await page.waitForTimeout(2000)
    // await page.mouse.wheel(1000, 0)
    // await page.waitForTimeout(2000)
    //  await page.mouse.wheel(-1000, 0)
    // await page.waitForTimeout(2000)

    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
})
test.only("drag and drop",async ({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    // await page.locator('//div[text()="Drag Me"]').hover()
    //  await page.waitForTimeout(2000)
    // await page.mouse.down()
    //  await page.waitForTimeout(2000)
    // await page.mouse.move(200, 500)
    //  await page.waitForTimeout(2000)
    // await page.mouse.up()
    //  await page.waitForTimeout(2000)

     // drag and drop to target
    //  await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    //  await page.locator('//div[text()="Mobile Charger"]').hover()
    //  await page.waitForTimeout(2000)
    // await page.mouse.down()
    //  await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
    //  await page.mouse.up()
    //  await page.waitForTimeout(2000)

     //drag and drop
    //   await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    //  await page.locator('//div[text()="Mobile Charger"]').hover()
    //   await page.waitForTimeout(2000)
    //     await page.mouse.down()
    //       await page.waitForTimeout(2000)
    // let box =  await page.locator('//div[text()="Mobile Accessories"]/parent::div').boundingBox()
    // await page.mouse.move(box.x, box.y)
    // await page.mouse.up()
    //   await page.waitForTimeout(2000)

      //dragTo
        await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    let source =  await page.locator('//div[text()="Mobile Charger"]')
    let target = await page.locator('//div[text()="Mobile Accessories"]/parent::div')
    await page.waitForTimeout(2000)
    await source.dragTo(target)
    await page.waitForTimeout(3000)

})