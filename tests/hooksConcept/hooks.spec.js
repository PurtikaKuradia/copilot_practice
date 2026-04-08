import {test} from "@playwright/test"
test.beforeAll('before all', ()=>{
    console.log("connect to database")

})
test.afterAll('after all', ()=>{
    console.log("disconnect to database")
})
test.beforeEach('before each', ()=>{
    console.log("login to app ")
})
test.afterEach('AfterEach', ()=>{
    console.log("logout to app")
// await page.getByRole('link', { name: 'Customer Service' }).click();
// await page.locator('html').click();
// await page.getByRole('link', { name: 'Bestsellers' }).click();
// await page.locator('.a-link-normal.aok-block').first().click();
})
test('test1', ()=>{
    console.log("test1 ")
})
test('test2', ()=>{
    console.log("test2 ")
})
