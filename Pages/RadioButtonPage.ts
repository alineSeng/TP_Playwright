import { Page, expect } from '@playwright/test';



export class Radio_Button_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }

  async click_yes_and_check() {
    const yes_radio = this.page.locator('label').filter({ hasText: 'Yes' })
    const message = this.page.getByRole('paragraph').getByText('Yes')
    await yes_radio.click()
    await expect(message).toBeVisible()
    await expect(message).toContainText('Yes')

  }

  async click_impressive_and_check() {
    const impressive_radio = this.page.getByText('Impressive')
    const message = this.page.getByRole('paragraph').getByText('Impressive')
    await impressive_radio.click()
    await expect(message).toBeVisible()
    await expect(message).toContainText('Impressive')

  }
 
  async click_no_and_check() {
    const no_radio = this.page.getByText('No')
    const message = this.page.getByRole('paragraph').getByText('No')
    //await no_radio.click()


  }
 

  

}