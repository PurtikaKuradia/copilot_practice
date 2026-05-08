class signin{
    constructor(page){
        this.page = page;
        this.emailTF = page.locator('#txtusername')
        this.passwordTF = page.locator('#txtpassword')
        this.loginButton = page.locator('//button[@name="login"]')
    }
}
export default signin 