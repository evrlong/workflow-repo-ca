// playwright.config.js
// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    baseURL: 'http://localhost:5050', // tilpass hvis du kjører dev-server
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});
