import { test, expect } from '@playwright/test';
import { Home_Page } from '../Pages/HomePage';
import { Base_Page } from '../Pages/BasePage';
import { Links_Page } from '../Pages/LinksPage';
import { Form_Page } from '../Pages/FormPage';
import { Tool_Tips_Page } from '../Pages/ToolTipsPage';
import { Select_Menu_Page } from '../Pages/SelectMenuPage';
import { Radio_Button_Page } from '../Pages/RadioButtonPage';
import { Dynamics_Properties_Page } from '../Pages/DynamicsPropertiesPage';
import { Profile_Page } from '../Pages/ProfilePage';
import { Register_Page } from '../Pages/RegisterPage';
import { Login_Page } from '../Pages/LoginPage';


test.beforeEach(async ({ page }) => {
    const home_page = new Home_Page(page);
    await home_page.navigateTo();
  
});

test('test links submenu', async ({page}) => {
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
    const home_page = new Home_Page(page)
    await home_page.goToMenuWidgets()

    const base_page = new Base_Page(page)
    await base_page.clickToSelectMenuSubMenu()

    const select_menu_page = new Select_Menu_Page(page)
    await select_menu_page.click_select_value()
    await select_menu_page.click_select_one()
    await select_menu_page.click_old_style_select_menu()
    await select_menu_page.multiselect_drop_down()
    await select_menu_page.standard_multi_select()

})

test('test menu Elements : Radio Button', async ({page}) => {
    const home_page = new Home_Page(page)
    await home_page.goToMenuElements()
    
    const base_page = new Base_Page(page)
    await base_page.clickToRadioButtonSubMenu()
    
    const radio_button_page = new Radio_Button_Page(page)
    await radio_button_page.click_yes_and_check()
    await radio_button_page.click_impressive_and_check()
    //await radio_button_page.click_no_and_check()      // a reprendre

});


test('test menu Elements : Dynamic Properties', async ({page}) => {
    const home_page = new Home_Page(page)
    await home_page.goToMenuElements()
    
    const base_page = new Base_Page(page)
    await base_page.clickToDynamicsPropertiesSubMenu()
  
    const dynamics_properties_page = new Dynamics_Properties_Page(page)
    await dynamics_properties_page.verifyColorChange()
 
});

test('test menu Book Application', async ({page}) => {
    const home_page = new Home_Page(page)
    await home_page.goToBookStoreApplication()

    const base_page = new Base_Page(page)
    await base_page.clickToProfileSubMenu()
  
    const profile_page = new Profile_Page(page)
    
    // await profile_page.clickToRegister()
    // const register_page = new Register_Page(page)
    // await register_page.enter_firstname('John')
    // await register_page.enter_lastname('Doe')
    // await register_page.enter_username('Jo')
    // await register_page.enter_password('1234testT@')
    // await register_page.click_register()
    
    await profile_page.clickToLogin()
    const login_Page = new Login_Page(page)
    await login_Page.login_as('jo', '1234testT@')
    await login_Page.check_connexion('jo')
 
});