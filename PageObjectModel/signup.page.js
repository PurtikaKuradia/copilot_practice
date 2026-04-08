class signup{
    constructor(page){
       this.nameTF =  page.locator('#name')
       this.emailTF = page.locator('#email')
       this.passwordTF = page.locator('#password')
       this.repasswordTF = page.locator('#cpassword')
       this.contactnoTF = page.locator('#txtpassword')
       this.maleRadio = page.locator('//input[@value="m"]')
       this.femaleRadio = page.locator('//input[@value="f"]')
       this.submitButton = page.locator('//input[@type="submit"]')
    }
}
export default signup