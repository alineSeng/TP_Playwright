import { Page, expect } from '@playwright/test';


export class Links_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }
  
  async clickToHomeLink() {
    const home_link = await this.page.getByRole('link', { name: 'Home', exact: true })
    await home_link.click()
  }


  async clickToCreatedLinkAndCheckMessage(){
    const created_link = await this.page.getByRole('link', { name: 'Created' })
    const message = await this.page.locator('#linkResponse')
    await created_link.click()
    await expect(message).toBeVisible()
    await expect(message).toContainText('Link has responded with staus 201 and status text Created');
  }
 
  async clickToNoContentLinkAndCheckMessage(){
    const no_content_link = await this.page.getByRole('link', { name: 'No Content' })
    const message = await this.page.locator('#linkResponse')
    await no_content_link.click()
    await expect(message).toBeVisible()
    await expect(message).toContainText('Link has responded with staus 204 and status text No Content');
  }


     
}