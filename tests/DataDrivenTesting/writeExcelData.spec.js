import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

test("write data into excel",async ({page})=>{
    let book = new excel.Workbook()
   await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
    let sheet = await book.getWorksheet("Sheet5")
    if(!sheet){
        sheet = book.addWorksheet("Sheet5")
    }
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    //first() will use to wait for loading suggestions
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
    let suggestions = await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
   console.log(suggestions)
   for(let text of suggestions){
    let i = suggestions.indexOf(text)
    sheet.getRow(i+1).getCell(1).value= text
   }
    // sheet.getRow(1).getCell(1).value="hello"
    await book.xlsx.writeFile(path.join(__dirname,"../../testData/excelData.xlsx"))
})