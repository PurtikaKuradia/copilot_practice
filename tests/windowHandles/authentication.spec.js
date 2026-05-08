import {test } from "@playwright/test";
test("authentication", async ({browser})=>{
    let context = await browser.newContext({httpCredentials:{
        username: 'admin',
        password:'admin'
    }});
    const  page = await context.newPage();
    //we can also pass in URL but it is not recommanded
//    await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    await page.pause();
})

