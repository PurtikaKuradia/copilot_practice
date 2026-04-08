import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"

test("read single data", async ({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testData/excelData.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")
//    let data = await sheet.getRow(1).getCell(1).toString()
    let data = await sheet.getRow(1).getCell(1).value
    console.log(data)
})

test("read multiple data", async ({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testData/excelData.xlsx"))
    let sheet = await book.getWorksheet("Sheet2")
//    let data = await sheet.getRow(1).getCell(1).toString()
    for(let row =1; row<=sheet.actualRowCount;row++){
        for(let c = 1; c<=sheet.actualColumnCount;c++){
           let data = await sheet.getRow(row).getCell(c).value
    console.log(data) 
        }
    }
})
test.only("pass testdata to the app", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testData/excelData.xlsx"))
    let sheet = book.getWorksheet("Sheet3")
    let alldata= []
    for(let r=1; r<=sheet.actualRowCount;r++){
        let row = sheet.getRow(r)
        let url = row.getCell(1).toString()
        let usn = row.getCell(2).toString()
        let pwd = row.getCell(3).toString()
        alldata.push({url:url,usn:usn,pwd:pwd})
    }
    console.log(alldata)
    for(let d of alldata){
        await page.goto(d.url)
        await page.waitForTimeout(3000)
        await page.getByRole("link",{name:'CRM'}).click()
       let p2=  page.waitForEvent("popup")
        await page.getByRole("link", {name:'Small CRM'}).click()
       let page2 =  await p2
       await page2.getByRole("link", {name:"Admin"}).click()
       await page2.locator("#txtusername").fill(d.usn)
    await page2.locator("#txtpassword").fill(d.pwd)
    await page2.locator("//button[.='Login']").click()
    await page2.close()
    await page.waitForTimeout(3000)
    }
    
   
})
