import { test, expect } from '@playwright/test';

test('Home page renders correctly', async ({ page }) => {
  // Open the page
  await page.goto('http://localhost:3000');

  // Check if the page title is correct
  const title = await page.title();
  expect(title).toBe('Rustic Italian Trattoria'); 

  // Check if the main heading is present
  const mainHeading = await page.waitForSelector('h1');
  expect(await mainHeading.innerText()).toBe('Rustic Italian Trattoria');

  // Check if the "Get a taste of Italy at home!" subtitle is present
  const subtitle = await page.waitForSelector('h3');
  expect(await subtitle.innerText()).toBe('Get a taste of Italy at home!');

  // Check if the images are present and have the correct alt attributes
  const doorImage = await page.waitForSelector('img[alt="door"]');
  expect(doorImage).toBeTruthy();

  const ladyImage = await page.waitForSelector('img[alt="lady"]');
  expect(ladyImage).toBeTruthy();
});