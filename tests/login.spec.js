import { expect, test } from '@playwright/test'

test('login test', async  ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    // Visit the URL Saucedemo
    await page.goto('https://www.saucedemo.com/')


   // Login 
    await page.locator('.form_input').first().fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator('.inventory_list')).toBeVisible()

    // Add two items to cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click()

    // Click the cart to check the items added 
    await page.locator('.shopping_cart_link').click()

    await page.pause()
})