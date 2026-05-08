import excel from 'exceljs'
import path from 'node:path'
/*
    This class contains all the reusable methods related to the Excel.
*/
class Excelutility
{

    async getRowCount(sheetName)
    {
        let book=new excel.Workbook()
        let file=await book.xlsx.readFile(path.join(__dirname,"../TestData/FirstData.xlsx"))
        return file.getWorksheet(sheetName).actualRowCount;
    }

    async getDatafromExcel(sheetName,rownum,colnum)
    {
        let book=new excel.Workbook()

        let file=await book.xlsx.readFile(path.join(__dirname,"../TestData/FirstData.xlsx"))

        return file.getWorksheet(sheetName).getRow(rownum).getCell(colnum).value;
    }

    async writeDataBackToExcel(sheetName,rownum,colnum,value)
    {
        let book=new excel.Workbook()

        let file=await book.xlsx.readFile(path.join(__dirname,"../TestData/FirstData.xlsx"))

        let sheet=file.getWorksheet(sheetName)

        if(sheet===null)
        {
            sheet=file.addWorksheet(sheetName)
        }

        sheet.getRow(rownum).getCell(colnum).value=value

        await book.xlsx.writeFile(path.join(__dirname,"../TestData/FirstData.xlsx"))
  
    }
}

export default Excelutility