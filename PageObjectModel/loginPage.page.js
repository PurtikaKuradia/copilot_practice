class loginPage{
    constructor(page){
       this.usernameTextField =  page.locator("input#username")
       this.passwordTextField =  page.locator("input#password")
       this.submitButton =  page.locator("button#submit")
    }
}
export default loginPage