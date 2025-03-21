import { test, expect } from '@playwright/test';
import { Home_Page } from '../Pages/HomePage';
import { Base_Page } from '../Pages/BasePage';
import { Links_Page } from '../Pages/LinksPage';
import { Form_Page } from '../Pages/FormPage';
import { Tool_Tips_Page } from '../Pages/ToolTipsPage';


test.beforeEach(async ({ page }) => {
    const home_page = new Home_Page(page);
    await home_page.navigateTo();

  
});

test('test sub menu links', async ({page}) => {
    const home_page = new Home_Page(page)
    await home_page.goToMenuElements()
    
    const base_page = new Base_Page(page)
    await base_page.clickToLinksSubMenu()

    const links_page = new Links_Page(page)
    //await links_page.clickToHomeLink()
    await links_page.clickToCreatedLinkAndCheckMessage()
    await links_page.clickToNoContentLinkAndCheckMessage()
    
 
});

test('test form menu', async ({page}) => {
    const home_page = new Home_Page(page)
    await home_page.goToMenuForms()
    
    const base_page = new Base_Page(page)
    await base_page.clickToPraticeFormSubMenu()

    const form_page = new Form_Page(page)
    await form_page.enter_first_name('John')
    await form_page.enter_last_name('Doe')
    await form_page.enter_email('john.doe@example.com')
    await form_page.select_gender('other')
    await form_page.enter_mobile('1234567890')
    //await form_page.enter_date('15/03/2025')
    await form_page.enter_date()
    await form_page.enter_subjects('math')
    await form_page.select_hobbies('sports')
    await form_page.enter_current_address('123 Main Street, CityVille')
    await form_page.enter_city_state()

    await form_page.submit()

 
});

test('test widgets', async ({page}) => {
    const home_page = new Home_Page(page)
    await home_page.goToMenuWidgets()
    
    const base_page = new Base_Page(page)
    await base_page.clickToToolTipsSubMenu()

    const tool_tips_page = new Tool_Tips_Page(page)
    await tool_tips_page.hover_button_and_check()
    // await tool_tips_page.hover_field_and_check()
    await tool_tips_page.hover_contrary_and_check()

 
});

test('test select menu', async ({page}) => {
    await page.goto('https://demoqa.com/');
    await page.locator('div').filter({ hasText: /^Widgets$/ }).nth(1).click();
    await page.getByText('Select Menu').click();
    await page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
    await page.getByText('Another root option', { exact: true }).click();
    await page.locator('#withOptGroup svg').click();
    await page.locator('#react-select-2-option-3').click();
    await page.locator('#selectOne svg').click();
    await page.getByText('Other', { exact: true }).click();
    await page.locator('#oldSelectMenu').selectOption('10');
    await page.locator('#selectMenuContainer svg').nth(2).click();
    await page.locator('#react-select-4-option-0').click();
    await page.locator('#react-select-4-option-1').click();
    await page.locator('#react-select-4-option-2').click();
    await page.locator('#react-select-4-option-3').click();
    await page.locator('#selectMenuContainer div').filter({ hasText: 'Multiselect drop down option' }).first().click();
    await page.locator('#cars').selectOption('audi');
})