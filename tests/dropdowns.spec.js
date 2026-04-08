import {test} from "@playwright/test"
test("dropdowns", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('#select3')
    //selectOption()
     await page.waitForTimeout(2000)
 //   await page.locator('#select3').selectOption({value:"India"})// selecting through value
 //    await page.locator('#select3').selectOption({label:"India"}) //label
  //  await page.locator('#select3').selectOption({index:7})//using index
  await page.locator('#select3').selectOption('India')// we can pass value and label
    await page.waitForTimeout(2000)
})
test("multiple selection dropdown", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.waitForTimeout(3000)
    //.selectOption([{value:'Mens Casual Premium Slim Fit T-Shirts '},{value:'Mens Cotton Jacket'},{value:'Mens Casual Slim Fit'}])
    await page.locator('#select-multiple-native').selectOption([{index:1},{index:3}])
    await page.locator('//button[text()="Add"]').click()
    await page.waitForTimeout(3000)

})
test("custom drodown", async({page})=>{
    await page.goto("https://www.amazon.in/s?k=shoes&crid=3FAE0GWUZQM8I&sprefix=shoes%2Caps%2C380&ref=nb_sb_noss_2")
    await page.locator('#a-autoid-0-announce').click({force:true})
    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
  let options =  await page.locator('//a[@class="a-dropdown-link"]').all()
  for(let option of options){
    let text = await option.textContent()
    if(text.includes('Best ')){
        await option.click()
    }
  }
  await page.waitForTimeout(3000)

})

test("custom drop down using xpath", async({page})=>{
    await page.goto("https://www.amazon.in/s?k=shoes&crid=3FAE0GWUZQM8I&sprefix=shoes%2Caps%2C380&ref=nb_sb_noss_2")
    await page.locator('#a-autoid-0-announce').click({force:true})
    await page.locator('#s-result-sort-select_1').first().waitFor()
  await page.waitForTimeout(3000)

})
test.only("avoid hard coding of xpath", async({page})=>{
    await page.goto("https://www.amazon.in/s?k=shoes&crid=3FAE0GWUZQM8I&sprefix=shoes%2Caps%2C380&ref=nb_sb_noss_2")
    await page.locator('#a-autoid-0-announce').click({force:true})
    await page.locator('#s-result-sort-select_1').first().waitFor()
     let options =  await page.locator('//a[@class="a-dropdown-link"]').all()
     let text = "Price: Low to High";
     await page.locator(`//a[@class='a-dropdown-link' and text()='${text}']`).click()
     await page.waitForTimeout(3000)

})