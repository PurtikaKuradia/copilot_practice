import {expect, test} from "@playwright/test"
test.describe("parallel execution", ()=>{ 
test.describe.configure({mode: "parallel"});
test("Single and Multi select", async ({page})=>{
  //  page.setDefaultTimeout(10000);
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log(page.title());
    await page.getByPlaceholder("Enter Name").fill("Raju");
    await page.getByPlaceholder("Enter EMail").fill("raju@gmail.com");
    await page.getByRole("textbox", {name : 'Enter Phone'}).fill("9876543210")
    await page.getByRole("textbox", {name: 'Address:'}).fill('asdfghjklkjhgfdsa')
    await page.getByRole("radio", {name:'Male', exact:true}).check();
    await page.getByRole("checkbox", {name:'Sunday'}).check();
   let dropdown =  await page.locator('#country')
   await dropdown.selectOption({value:'india'});
    await expect(dropdown).toHaveValue('india');

    let color= await page.locator('#colors')
   await color.selectOption([{value:"red"}, {value:"blue"}, {value:"green"}]);
   let a =  await color.allInnerTexts();
   console.log(a.filter(e=>{console.log(e.split("\n"))}))
    await page.getByRole('button', {name : 'Point Me'}).hover();
    
    await page.getByRole('link',{name:'Mobiles'}).hover();
    page.on('dialog', async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    })
await page.getByRole('button', {name: 'Simple Alert'}).click();
await page.waitForTimeout(3000);

    })

    test("multiple tab", async ({browser})=>{
        let context = await browser.newContext();
        let page = await context.newPage();
        await page.goto('https://testautomationpractice.blogspot.com/')
        let [page1] = await Promise.all([
             page.waitForEvent('popup'),
        page.getByRole('button', {name : 'New Tab'}).click()
        ])
        await page.waitForTimeout(3000)
        let a = await page1.getByText("Software Testing & Automation Tutorials ").textContent()
        console.log(a);
    })  
   
})

