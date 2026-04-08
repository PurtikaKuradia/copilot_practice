import {test} from "@playwright/test"
import validInvalidData from "../../testData/ValidInvalidData.json"

test("Valid and Invalid Array of data", async ({page})=>{
for(let d of validInvalidData.valid){
     await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
    await page.locator("input#password").fill(d.password)
    await page.locator('button#submit').click()
       let title = await page.title()
    // console.log(title)
    if(title =="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials")
    }else{
        console.log("Invalid credentials")
    }
}
for(let d of validInvalidData.invalid){
 
     await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
    await page.locator("input#password").fill(d.password)
    await page.locator('button#submit').click()
       let title = await page.title()
    // console.log(title)
    if(title =="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials")
    }else{
        console.log("Invalid credentials")
    }
}
})
test.only("Data from Object", async ({page})=>{
    for(let key in validInvalidData){
        console.log(key)
        for(let e of validInvalidData[key]){
            await page.goto(e.url)
        await page.locator("input#username").fill(e.username)
    await page.locator("input#password").fill(e.password)
    await page.locator('button#submit').click()
       let title = await page.title()
    // console.log(title)
    if(title =="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials")
    }else{
        console.log("Invalid credentials")
    }
        }
    }
})