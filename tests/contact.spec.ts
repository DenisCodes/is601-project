const { test, expect } = require('@playwright/test');

test('Contact page displays correctly', async ({ page }: { page: any }) => {
  // Open the page
  await page.goto('http://localhost:3000/contact');

  // Check if the "Contact Us" heading is present
  const contactHeading = await page.waitForSelector('h2:has-text("Contact Us")');
  expect(contactHeading).toBeTruthy();

  // Check if the Newsletter component is rendered
  const newsletterComponent = await page.waitForSelector('div[data-testid="newsletter-container"]');
  expect(newsletterComponent).toBeTruthy();

  // Check if the Chef image is present
  const chefImage = await page.waitForSelector('img[alt="Chef"]');
  expect(chefImage).toBeTruthy();

  // Check if the phone number is present
  const phoneNumber = await page.waitForSelector('div:has-text("(123) 456-7891")');
  expect(phoneNumber).toBeTruthy();
});
