import {test} from "@playwright/test"
import fs from "fs"
let datafile =fs.readFileSync("D:/TekPyramid/Playwright/testData/singleSetdata.json")
 let data = JSON.parse(datafile)
test.describe("grouping test", ()=>{
    let url = data.url
    let username = data.username
    let password = data.password

    test("test1", async ({page})=>{
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
    })

      test("test2", async ({page})=>{
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
    })
    })


