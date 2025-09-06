import { test, expect } from '@playwright/test';

const VALID_EMAIL = process.env.E2E_USER_EMAIL;
const VALID_PASSWORD = process.env.E2E_USER_PASSWORD;

test.describe('Login', () => {
  test('User can log in with valid credentials', async ({ page }) => {
    await page.goto('/login/');

    await page.getByPlaceholder('Email').fill(VALID_EMAIL);
    await page.getByPlaceholder('Password').fill(VALID_PASSWORD);
    await page.getByRole('button', { name: /^login$/i }).click();

    await expect(page).not.toHaveURL(/\/login\/?$/);
    await expect(page).toHaveURL(/\/$/);
  });

  test('User sees an error message with invalid credentials', async ({
    page,
  }) => {
    await page.goto('/login');

    await page.getByPlaceholder('Email').fill('notreal@example.com');
    await page.getByPlaceholder('Password').fill('definitely-wrong');
    await page.getByRole('button', { name: /^login$/i }).click();

    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();

    await expect(alert).toContainText(/.+/);
  });
});
