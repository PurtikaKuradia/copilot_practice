import {test} from "@playwright/test"

 test("element control", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //inputValue()
    await page.locator("#name").fill("pavana")
    let username =     await page.locator("#name").inputValue();
    console.log(username);

    await page.locator("#email").type("aa@gmail.com")
   let email =  await page.locator("#email").inputValue();
   console.log(email);
 //   await page.locator("//button[text()='Register']").click();
    //await page.pause(3000);
 //  let text =  await page.locator("//section[@class='poppins text-[14px]' and text()='Radio Button']").innerText();
   // console.log(text);

    //allTextContents()
    let text1 = await page.locator("//section[@class='poppins text-[14px]']").allTextContents()
    console.log(text1)

    //element.getAttribute("attributeName")
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
   let id =  await page.locator("//input[@id='male']").getAttribute("id")
    console.log(id);

    //element.all()


 })
 test.only("controls",async ({page})=>{
//     await page.goto("https://www.flipkart.com/")
//    let a = await page.locator("//div[@class='css-175oi2r r-1awozwy']").all()
//    console.log(a)

//    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
  //  await page.locator("//section[@class='poppins text-[14px]']").first().waitFor()
//      let b = await page.locator("//section[@class='poppins text-[14px]']").all()
//    console.log(b)

   //isVisible()
   //page.locator("selector").isVisible()
//    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//    await page.locator("//input[@id='phone']").fill("2334555")
//    let a = await page.locator("//input[@id='phone']").isVisible();
//    console.log(a)
//    //isEnabled()
//    let c = await page.locator("//input[@id='phone']").isEnabled();
//    console.log(c)
//    //isDisabled()
//      let d = await page.locator("//input[@id='phone']").isDisabled();
//    console.log(d)
//    //isEditable()
//    let e = await page.locator("//input[@id='phone']").isEditable();
//    console.log(e)

    //isChecked()
     await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
//     await page.locator("//input[@id='domain_a']").click()
//   let f =   await page.locator("//input[@id='domain_a']").isChecked();
// console.log(f);

//waitFor()
await page.locator("//input[@id='domain_a']").waitFor({state: 'visible', timeout:3000})



 })