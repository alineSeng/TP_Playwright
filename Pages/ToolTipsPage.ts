import { Page, expect } from '@playwright/test';

export class Tool_Tips_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }

  async hover_button_and_check() {
    const hover_me_to_see = this.page.getByRole('button', { name: 'Hover me to see' })
    const hover_text = this.page.getByText('You hovered over the Button')

    await hover_me_to_see.hover()

    await hover_text.waitFor({ state: 'visible' })
    const hover_text_value = await hover_text.textContent()
    
    await console.log(`Hover text: ${hover_text_value}`);
    expect(hover_text_value).toBe('You hovered over the Button')

  }

  async hover_field_and_check() {
    const hover_me_to_see = this.page.locator('#toolTipTextField')
    const hover_text = this.page.getByRole('textbox', { name: 'Hover me to see' })

    await hover_me_to_see.hover()

    await hover_text.waitFor({ state: 'visible' })
    const hover_text_value = await hover_text.textContent()
    
    await console.log(`Hover text: ${hover_text_value}`);
    expect(hover_text_value).toBe('You hovered over the text field')

  }
  
  async hover_contrary_and_check() {
    const hover_contrary= this.page.getByRole('link', { name: 'Contrary' })
    const hover_text = this.page.getByText('You hovered over the Contrary')

    await hover_contrary.hover()

    await hover_text.waitFor({ state: 'visible' })
    const hover_text_value = await hover_text.textContent()
    
    await console.log(`Hover text: ${hover_text_value}`);
    expect(hover_text_value).toBe('You hovered over the Contrary')

  }
  
 

     
}