/* eslint-env node */

import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config(); // Laster variabler fra .env

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: process.env.E2E_BASE_URL || 'http://localhost:5500',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // Du kan ta med Firefox/WebKit også om ønskelig
  ],
  // Hvis du starter dev-server med "npm run dev", la Playwright gjøre det for deg:
  // Bytt command til din dev-komando hvis den er annerledes.
  webServer: {
    command: 'npx http-server -p 5500 .',
    url: process.env.E2E_BASE_URL || 'http://localhost:5500',
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
