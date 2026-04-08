import {test} from "@playwright/test"
test("GreenCart click Items",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
    let products = await page.locator("//div[@class='product']").all()
    for(let i=2; i<=8;i+=2){
		for(let j=1; j<i; j++){
            await page.locator(`(//a[@class='increment'])[${i}]`).click()
	}
	}
})