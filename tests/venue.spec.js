import { test, expect } from '@playwright/test';

test.describe('Venue navigation', () => {
  test('user can open the first venue details from the list', async ({
    page,
  }) => {
    await page.goto('/');

    const firstVenue = page.locator('#venue-container a').first();
    await firstVenue.waitFor();

    await firstVenue.click();

    await expect(page.locator('h1')).toContainText('Venue details');
  });
});
