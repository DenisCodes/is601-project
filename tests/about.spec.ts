import { test, expect } from '@playwright/test';

test('About page displays correctly', async ({ page }: { page: any }) => {
  // Open the page
  await page.goto('http://localhost:3000/about');

  // Check if the "About Us" heading is present
  const aboutUsHeading = await page.waitForSelector('[data-testid="about-us-heading"]');
  expect(aboutUsHeading).toBeTruthy();

  // Check if the text content is present
  const textContent1 = await page.waitForSelector('[data-testid="about-us-text-1"]');
  expect(textContent1).toBeTruthy();

  const textContent2 = await page.waitForSelector('[data-testid="about-us-text-2"]');
  expect(textContent2).toBeTruthy();

  const textContent3 = await page.waitForSelector('[data-testid="about-us-text-3"]');
  expect(textContent3).toBeTruthy();

  // Check if the image is present
  const chefImage = await page.waitForSelector('[data-testid="chef-image"]');
  expect(chefImage).toBeTruthy();
});
