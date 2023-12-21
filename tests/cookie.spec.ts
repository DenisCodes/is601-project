import { test, expect } from '@playwright/test';

test('CookieBanner is displayed and user can interact with it', async ({ page }) => {
  // Navigate to your page
  await page.goto('http://localhost:3000');

   // Check if the CookieBanner is initially displayed
   const cookieBanner = await page.waitForSelector('[data-testid="cookie-banner"]');
   expect(cookieBanner).toBeTruthy();
 
   // Check if the modal is not initially open
   const modal = await page.$('[data-testid="cookie-policy-modal"]');
   expect(modal).toBeFalsy();
 
   // Click on the "Allow Cookies" button
   await page.click('[data-testid="cookie-banner-allow"]');
 
   // Check if the CookieBanner is hidden after user interaction
   await page.waitForSelector('[data-testid="cookie-banner"]', { state: 'hidden' });
 
   // Check if the modal is opened after clicking "Allow Cookies"
   const openedModal = await page.waitForSelector('[data-testid="cookie-policy-modal"]', { state: 'visible' });
   expect(openedModal).toBeTruthy();
 
   // Close the modal
   await page.click('[data-testid="close-modal-button"]');
 
   // Check if the modal is closed
   await page.waitForSelector('[data-testid="cookie-policy-modal"]', { state: 'hidden' });
});