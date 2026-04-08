import {test} from "@playwright/test"
import path from "node:path"
import fs from "fs"

test("upload files", async ({page})=>{
    //best practice
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../uploadFiles/resume.txt"))
     await page.waitForTimeout(2000)
    await page.click("//button[text()='Upload Single File']")

    //upload single  file from local machine 
    await page.locator("#singleFileInput").setInputFiles("C:/Users/purti/Downloads/javcod.txt")
     await page.waitForTimeout(2000)
    await page.click("//button[text()='Upload Single File']")

    // upload multiple files from local computer
    await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/purti/Downloads/javcod.txt","C:/Users/purti/Downloads/gojek.txt"])
    await page.click("//button[text()='Upload Multiple Files']")
      await page.waitForTimeout(2000)


    //single file upload
    await page.locator("#singleFileInput").setInputFiles("D:/TekPyramid/Playwright/uploadFiles/resume.txt")
    await page.waitForTimeout(2000)

    //remove selected file

  //  await page.click("//button[text()='Upload Single File']")
 //   await page.locator("#singleFileInput").setInputFiles([]);// it will deselect selected files

    //multiple file upload
    await page.locator('#multipleFilesInput').setInputFiles(["D:/TekPyramid/Playwright/uploadFiles/resume1.xlsx","D:/TekPyramid/Playwright/uploadFiles/resume.txt"])
    await page.click("//button[text()='Upload Multiple Files']")
      await page.waitForTimeout(2000)
})

test("download files",async ({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByRole('textbox', {name:"Enter text here"}).fill("hello, i am downloading file")
    await page.locator('#fileName').fill('newfile.txt')
    //to wait for file to download
   let [downloadFile] =  await Promise.all([
     page.waitForEvent("download"),
    page.getByRole("button", {name:"Download"}).click()])
  //  let downloadfolder = "D:/TekPyramid/Playwright/downloadedFile";
    let filename = downloadFile.suggestedFilename()
    //if we want to it with particular file name
  //  await downloadFile.saveAs(path.join(downloadfolder, filename))

  await downloadFile.saveAs(path.join(__dirname,"../../downloadedFile", filename))
    //how to check where it is downloading
    console.log(await downloadFile.path())
    await page.waitForTimeout(3000)
})

test.only("download files without Promise.all",async ({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByRole('textbox', {name:"Enter text here"}).fill("hello, i am downloading file")
    await page.locator('#fileName').fill('newfile2.txt')
    //to wait for file to download
   let download =  page.waitForEvent("download")
   await page.getByRole("button", {name:"Download"}).click();
   let downloadFile  = await download

    let downloadfolder = "D:/TekPyramid/Playwright/downloadedFile";
    let filename = downloadFile.suggestedFilename()
    let fullpath  = path.join(downloadfolder, filename)
    //if we want to it with particular file name
   await downloadFile.saveAs(path.join(downloadfolder, filename))

 // await downloadFile.saveAs(path.join(__dirname,"../../downloadedFile", filename))
    //how to check where it is downloading
 //   console.log(await downloadFile.path())
    await page.waitForTimeout(3000)

    //verify if saved
    if(fs.existsSync(fullpath)){
        console.log(`file exists : ${fullpath}`)
    }else{
        console.log(`no such file exists`)
    }
})