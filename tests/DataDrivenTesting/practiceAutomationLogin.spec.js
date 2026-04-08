import {test} from "@playwright/test"
import fs from "fs"
let datafile = fs.readFileSync("D:/TekPyramid/Playwright/testData/practiceAutomationLogin.json")
let data = JSON.parse(datafile)
test("practice Automation login", async ({page})=>{
    await page.goto(data.url)
    await page.locator("input#username").fill(data.username)
    await page.locator("input#password").fill(data.password)
    await page.locator('button#submit').click()
    let title = await page.title()
    // console.log(title)
    if(title =="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials")
    }else{
        console.log("Invalid credentials")
    }
})
test.only("multiple set of data", async({page})=>{
    //we can't use await inside synchronous function
    // data.forEach(element => {
    //     let url= element.url
    //     let username = element.username
    //     let password = element.password
    //     await page.goto()
    // });

    for(let testdata of data){
        let url = testdata.url
        let username = testdata.username
        let password = testdata.password
        await page.goto(url)
        await page.locator("input#username").fill(username)
    await page.locator("input#password").fill(password)
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
