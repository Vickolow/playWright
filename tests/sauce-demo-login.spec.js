import { expect, test } from '@playwright/test'
import { Login } from '../page-objects/Login'
//import { data } from "../helper/data.json"
const { data } = require('../helper/data.json')
 
test.describe.configure('Login Module', () => {
    let login
    test.beforeEach(async ({page})=>{
        login = new Login(page)
        await page.goto('https://www.saucedemo.com/')
    })

    test('@UITEST Login with valid credentials', async ({page, context})=>{
        await expect(page.locator('.form_input').nth(0)).toHaveAttribute('data-test','username')
        await login.loginSteps(data.validCredentials.username , data.validCredentials.password)
        await page.waitForTimeout(1000)
        const products = await page.locator ('span:has-text("Products")').textContent()
        expect(products).toEqual('Products')
    })

    test('Login as a locked_out_user', async ({page})=>{
        await login.loginSteps(data.locked_out_user.username, data.locked_out_user.password)
        const erroMsg = page.getByText('Epic sadface: Sorry, this user has been locked out.').isVisible()
        expect(erroMsg).toBeTruthy()

    })
})