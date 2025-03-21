import { Page, Locator } from '@playwright/test';


export class Base_Page {
  readonly page: Page;
  readonly links_submenu: Locator;
  readonly pratice_form_submenu: Locator;
  readonly tool_tips_submenu: Locator;
  readonly select_menu_submenu: Locator;
  readonly radio_button_submenu: Locator;
  readonly dynamics_properties_submenu: Locator;
  readonly profile_submenu: Locator;

 
  constructor(page: Page) {
      this.page = page;
      this.links_submenu = this.page.getByText('Links', { exact: true })
      this.pratice_form_submenu = this.page.getByText('Practice Form')
      this.tool_tips_submenu = this.page.getByText('Tool Tips')
      this.select_menu_submenu = this.page.getByRole('list').getByText('Select Menu')
      this.radio_button_submenu = this.page.getByRole('listitem').filter({ hasText: 'Radio Button' })
      this.dynamics_properties_submenu = this.page.getByText('Dynamic Properties')
      this.profile_submenu = this.page.getByText('Profile')
  
  }

  async clickToLinksSubMenu() {
    await this.links_submenu.click()
  }

  async clickToPraticeFormSubMenu() {
    await this.pratice_form_submenu.click()
  }

  async clickToToolTipsSubMenu() {
    await this.tool_tips_submenu.click()
  }

  async clickToSelectMenuSubMenu() {
    await this.select_menu_submenu.click()
  }
 
  async clickToRadioButtonSubMenu() {
    await this.radio_button_submenu.click()
  }

   
  async clickToDynamicsPropertiesSubMenu() {
    await this.dynamics_properties_submenu.click()
  }

  async clickToProfileSubMenu() {
    await this.profile_submenu.click()
  }


     
}