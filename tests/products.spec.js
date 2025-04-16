import { test, expect } from '@playwright/test' 

test('testing', async ({page})=>{
    const product = 'Sauce Labs Bike Light'
    const productLists = page.locator('.inventory_item')
    const productCount = await productLists.count()

    console.log(productCount)


    for (let i = 0; i < productCount; ++i) {
        const productName = await productLists.nth(i).locator('.inventory_item_label a').textContent()
        if (productName === product[i]) {
            // Introducing getbyrole
            await productLists.nth(i).getByRole('button', {name: 'Add to cart'}).click()
        }
        
    }

    // await page.locator('.shopping_cart_link').click()
    // const cartProduct = await page.locator('.inventory_details_name.large_size' ).textContent()
    // expect(cartProduct).toEqual('Sauce Labs Bike Light')
})