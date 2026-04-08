import { test, expect} from  "@playwright/test"
test("radio button", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("#attended").check()
    await page.waitForTimeout(2000)
    //asserting
    console.log(await page.locator("#attended").isChecked());
    await expect(await page.locator("#attended")).toBeChecked()
    await expect(await page.locator("#attended").isChecked()).toBeTruthy()
})

test("check box", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("#domain_b").check()
    await page.waitForTimeout(2000)

        //asserting
    console.log(await page.locator("#attended").isChecked());
    await expect(await page.locator("#attended")).toBeChecked()
    await expect(await page.locator("#attended").isChecked()).toBeTruthy()


    await page.locator("#domain_b").uncheck()
        await page.waitForTimeout(2000)
    //asserting
    console.log(await page.locator("#attended").isChecked());
    await expect(await page.locator("#attended")).toBeChecked()
    await expect(await page.locator("#attended").isChecked()).toBeFalsy()
})