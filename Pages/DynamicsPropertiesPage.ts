import { Page, expect } from '@playwright/test';



export class Dynamics_Properties_Page {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
      
  }
 
  // Permet de vérifier la couleur du texte, le récupère et affiche dans la console la couleur initiale et la couleur finale
  async verifyColorChange() {
   
    const color_change_button = this.page.getByRole('button', { name: 'Color Change' });
    const initial_color = await color_change_button.evaluate((button) => window.getComputedStyle(button).color);
    
    await color_change_button.click()
    console.log('Couleur initiale :', initial_color);
 
    await expect
      .poll(async () => await color_change_button.evaluate((btn) => window.getComputedStyle(btn).color), { timeout: 6000 })
      .not.toBe(initial_color);
   
    console.log('Couleur Finale :', await color_change_button.evaluate((btn) => window.getComputedStyle(btn).color));
  }
  

}
  
