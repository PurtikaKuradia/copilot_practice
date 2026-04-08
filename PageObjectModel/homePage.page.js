class homePage{
    constructor(page){
        this.createTicketLink = page.locator('//a[.=" Create Ticket"]')
        this.viewTicketLink = page.locator('//a[.=" View Ticket"]')
    }
}
export default homePage