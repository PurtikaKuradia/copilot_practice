import {test} from "@playwright/test"
test("AutoSuggest dropdown", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("clothes")
   await page.locator("(//div[@class='s-suggestion-container'])[1]")
    let suggestions =  await page.locator("//div[@class='s-suggestion-container']").all()
    for(let option of suggestions){
        let text = await option.textContent()
        if(text.includes(" organizer")){
            option.click()
            break;
        }
    }
    await page.waitForTimeout(3000)

})

test.only("AutoSuggest dropdown using arrow key", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("clothes")
   await page.locator("(//div[@class='s-suggestion-container'])[1]")
   await page.keyboard.press("ArrowDown")
   await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)

})