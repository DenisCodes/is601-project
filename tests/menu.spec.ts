import { test, expect } from '@playwright/test';

test('Menu page displays correctly', async ({ page }: { page: any }) => {
  // Open the page
  await page.goto('http://localhost:3000/menu'); // Replace with the actual URL of your application

  // Check if the "Menu" heading is present
  const menuHeading = await page.waitForSelector('h2:has-text("Menu")');
  expect(menuHeading).toBeTruthy();

  // Check if each menu item card is present
  const menuCards = await page.$$('[data-testid="menu-card"]');
  expect(menuCards).toHaveLength(3); // Assuming there are three menu items based on the provided code

  // Check details for each menu item
  for (let i = 0; i < menuCards.length; i++) {
    const menuCard = menuCards[i];

    // Check if the menu item title is present
    const title = await menuCard.$('h4');
    expect(title).toBeTruthy();

    // Check if the menu item ingredients are present
    const ingredients = await menuCard.$('p');
    expect(ingredients).toBeTruthy();

    // Check if the menu item price is present
    const price = await menuCard.$('h5');
    expect(price).toBeTruthy();
  }
});
