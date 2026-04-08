import {test, expect} from "@playwright/test"
test("assertions", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")
    //URL and title assertion
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page).toHaveTitle("nopCommerce demo store. Register")
    //visibility assertion
    await expect(page.locator(".header-logo")).toBeVisible()
    await expect(page.locator("input#small-searchterms")).toBeEnabled()
    //radio button assertion
   const radioButton =  await page.locator("#gender-male")
   await radioButton.click()
   await expect(radioButton).toBeChecked()
    await expect(page.locator("#gender-female")).not.toBeChecked()
    //checkbox assertion
    await expect(page.locator(".form-check-input")).toBeChecked()
    //attribute assertion
    await expect(page.locator("#register-button")).toHaveAttribute('type','submit')
    //text assertion- it matches the exact text
    await expect(page.locator(".page-title h1")).toHaveText("Register")
    await expect(page.locator(".page-title h1")).toContainText("Reg")
    //text assertion
    let emailTF = await page.locator("#Email")
    await emailTF.fill("test@demo.com")
    await expect(emailTF).toHaveValue("test@demo.com")
    
})