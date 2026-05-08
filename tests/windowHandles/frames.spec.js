import {expect, test} from "@playwright/test"
test("frames", {tag:"@smoke"}, async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // total frames
   let count =  await page.frames()
   console.log(count.length)
   for(let frame of count){
    console.log(await frame.title())
   }
   console.log(await page.title())

   //--------------------------------
   //-------------A-1----frame()------name, url--------
  let frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
   await frame1.locator('//input[@name="mytext1"]').fill("aaaaa")
   await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain('aaaaa')

   let tfframe = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
   await tfframe.fill("bbbbb")
   await page.waitForTimeout(2000)
   //==========A3=========
   let frame2=await page.locator('//frame[@src="frame_2.html"]').contentFrame()
   frame2.locator('//input[@name="mytext2"]').fill("ccccccc")
   await page.waitForTimeout(2000)

   //------------------------
   let frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   let button = await frame3.frameLocator('//iframe').locator('//div[@class="ulDsOb" and .="I am a human"]')
  await  button.click();
   
})