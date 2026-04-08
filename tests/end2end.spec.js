import {test} from "@playwright/test"
import landing from "../PageObjectModel/landing.page.js"
import signup from "../PageObjectModel/signup.page.js"
import signin from "../PageObjectModel/signin.page.js"
import createTicket from "../PageObjectModel/createTicket.page.js"
import homePage from "../PageObjectModel/homePage.page.js"
import loginPage from "../PageObjectModel/loginPage.page.js"
import end2end from "../testData/end2end.json"

test("End to end scenario", async ({page})=>{
    let url = end2end.url
    let name = end2end.name
    let email = end2end.email
    let password = end2end.password
    let repassword = end2end.repassword
    let contact = end2end.contact
    let subject = end2end.subject
    let description = end2end.description
    page.on("dialog", async (dialog)=>{
        console.log(await dialog.message);
        await dialog.accept()
    })
    let landingpg = new landing(page)
    let signupPG = new signup(page)
    let signinpg = new signin(page)
    let createTkt = new createTicket(page)
    let homepg = new homePage(page)
    let loginpg = new loginPage(page)
    //launch the url
    await page.goto(url)
    await landingpg.signupLink.click()
    //enter name for nameTF
    await signupPG.nameTF.fill(name)

    //email TF
    await signupPG.emailTF.fill(email)
    //passwordTF
    await signupPG.passwordTF.fill(password)
    //Re-enter password
    await signupPG.repasswordTF.fill(repassword)

    //contact no TF
    await signupPG.contactnoTF.fill(contact)
    // gender radio button
    await signupPG.maleRadio.click()
    //submit button
    await signupPG.submitButton.click()
    //alert- get the message

    //e-mail tf
    await signinpg.emailTF.fill(email)
    //passwordTF
    await signinpg.passwordTF.fill(password)
    //click on login
    await signinpg.loginButton.click()
    //create ticket-click
    await homepg.createTicketLink.click()
    //add subject to subTF
    await createTkt.subjectTF.fill(subject)
    //select an option from task type dropdown
    await createTkt.TTDropdown.selectOption({value:"ot1"})
    //priority drop down
    await createTkt.pDropdown.selectOption({value:"important"})
    // des textF
    await createTkt.descriptionTA.fill(description)
    // send button
    await createTkt.sendButton.click()
    //alert --mess --accept
    //click on view ticket
    await homepg.viewTicketLink.click()
    //take Screenshot
    await page.screenshot({path:'/screenshot/ticketss.png'})
})