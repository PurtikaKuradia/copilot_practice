import {test} from "@playwright/test"
//fail
// test.fail("Test Annnotations", async({page})=>{
//     console.log("test 1")
// })

//fixme
// test.fixme("Test Annnotations", async({page})=>{
//     console.log("test 1")
// })

//skip
// test.skip("Test 2", async({page})=>{
//     console.log("test 2")
// })

//skip
// test("Test 2", async({browserName})=>{
//     test.skip(browserName==="firefox")
//     console.log("test 2")
// })

//slow
// test("Test 2", async({browserName})=>{
//     test.slow()
//     console.log("test 2")
// })

//only
// test.only("Test 3", async({page})=>{
//     console.log("test 3")
// })

//describe
test.describe("login", async()=>{
    test("valid cred", async({browserName})=>{
   // test.skip(browserName==="firefox")
    console.log("test 2")
})
test("Invalid Cred", async()=>{
    test.setTimeout(5000)
    console.log("test 3")
})
    
})

//setTimeout