import {test} from "@playwright/test"
test("sample execution", async ({page})=>{
    await page.goto("https://automationexercise.com/")
    await page.locator('//div[@class="single-products"]/descendant::a[@data-product-id="1" and text()="Add to cart"]').first().click();
    await page.waitForTimeout(2000)
    page.screenshot({path:""})
})