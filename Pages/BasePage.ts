import { Page } from '@playwright/test';


export class Base_Page {
  readonly page: Page;
 
  constructor(page: Page) {
      this.page = page;
      
  }

 
  
  async clickToLinksSubMenu() {
    const sub_menu_links = await this.page.getByText('Links', { exact: true })
    
    await sub_menu_links.click()

  }

  async clickToPraticeFormSubMenu() {
    const pratice_form_submenu = await this.page.getByText('Practice Form')
    
    await pratice_form_submenu.click()

  }

  async clickToToolTipsSubMenu() {
    const tool_tips_submenu = await this.page.getByText('Tool Tips')
    
    await tool_tips_submenu.click()

  }


 



     
}