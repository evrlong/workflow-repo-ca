// tests/auth.spec.js
import { test, expect } from '@playwright/test';

// NB: Verdiene kommer fra miljøvariabler (Steg 1 + configen i Steg 2)
const VALID_EMAIL = process.env.E2E_USER_EMAIL;
const VALID_PASSWORD = process.env.E2E_USER_PASSWORD;

test.describe('Login', () => {
  test('User can log in with valid credentials', async ({ page }) => {
    // Login-siden din aktiverer loginFormListener() når path starter med /login
    await page.goto('/login/');

    // HTML: placeholder="Email" / "Password", knappetekst "Login"
    await page.getByPlaceholder('Email').fill(VALID_EMAIL);
    await page.getByPlaceholder('Password').fill(VALID_PASSWORD);
    await page.getByRole('button', { name: /^login$/i }).click();

    // LoginFormListener gjør window.location.href = '/'
    await expect(page).not.toHaveURL(/\/login\/?$/);
    await expect(page).toHaveURL(/\/$/); // lander på forsiden
  });

  test('User sees an error message with invalid credentials', async ({
    page,
  }) => {
    await page.goto('/login');

    await page.getByPlaceholder('Email').fill('notreal@example.com');
    await page.getByPlaceholder('Password').fill('definitely-wrong');
    await page.getByRole('button', { name: /^login$/i }).click();

    // displayMessage lager <div role="alert">... — allerede i koden din
    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();

    // Valgfritt: sjekk at meldingen faktisk har noe innhold
    await expect(alert).toContainText(/.+/);
    // Hvis API-en returnerer typiske setninger, kan du snevre inn:
    // await expect(alert).toContainText(/invalid|incorrect|failed|feil/i);
  });
});
