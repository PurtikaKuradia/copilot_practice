class createTicket{
    constructor(page){
        this.subjectTF = page.locator('#subject')
        this.TTDropdown = page.locator('//select[@name="tasktype"]')
        this.pDropdown = page.locator('//select[@name="priority"]')
        this.descriptionTA = page.locator('//textarea[@name="description"]') 
        this.sendButton = page.locator('//input[@name="send"]')
    } 
}
export default createTicket