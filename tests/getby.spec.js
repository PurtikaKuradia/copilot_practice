import {test} from "@playwright/test"

test.describe.configure({retries:2}); // to retry the particular test case
 test("get by methods", async({page})=>{
  //  await page.goto("https://demo.nopcommerce.com/login/")
    //getByLabel
  //  await page.getByLabel("Email:",{exact:true}).fill("aa@gmail.com");
    //getByPlaceholder
   // await page.getByPlaceholder("Search store",{exact:true}).fill("computers");

    //getByText
   // await page.getByText("Log in ").first().click();

    //getByAltText
   // await page.getByAltText("nopCommerce demo store",{exact:true}).click();

    //getByTitle()
  //  await page.goto("https://demo.nopcommerce.com/electronics")
  //  await page.getByTitle("Show products in category Camera & photo").first().click();

    //getByRole()
    await page.getByRole("link", {name:" Camera & photo "}).first().click();
    
  
    //getByTestId
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("password").fill("abcd")

 })
 