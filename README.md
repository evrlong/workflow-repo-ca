# Workflow Repository for the Course Assignment

This repository contains the **Workflow Course Assignment**.  
It is built with **Node.js**, using **npm scripts**, **Tailwind CSS**, **ESLint**, **Prettier**, **Vitest**, and **Playwright** to support development, testing, and code quality.

## Setup

1. **Install dependencies**  
   Make sure you have [Node.js] installed.  
   Then run:

   ```bash
   npm install
   ```

2. **Environment variables**  
   Create a `.env` file based on `.env.example`.  
   Add the following values:
   - `E2E_BASE_URL` – Base URL of the application under test (e.g. `http://localhost:5050`).
   - `E2E_USER_EMAIL` – Valid test user email.
   - `E2E_USER_PASSWORD` – Correct password for the test user.
   - `E2E_USER_BADPASSWORD` – Invalid password used for negative test cases.

   These variables are required for the end-to-end tests to work.

## Available npm scripts

All scripts can be run with `npm run <script>`.

| Script                    | Description                                                           |
| ------------------------- | --------------------------------------------------------------------- |
| `npm start`               | Starts a simple server and serves the site at [http://localhost:5050] |
| `npm run dev`             | Watches and rebuilds Tailwind CSS automatically on file changes.      |
| `npm run lint`            | Runs **ESLint** to check code style and catch issues.                 |
| `npm run lint:fix`        | Runs ESLint and automatically fixes problems where possible.          |
| `npm run format`          | Formats files with **Prettier** for consistent code style.            |
| `npm test`                | Runs unit tests using **Vitest**.                                     |
| `npm run test:watch`      | Runs Vitest in watch mode, automatically re-running tests on changes. |
| `npm run test:e2e`        | Runs end-to-end tests with **Playwright** (headless mode by default). |
| `npm run test:e2e:ui`     | Runs Playwright tests with the interactive UI.                        |
| `npm run test:e2e:headed` | Runs Playwright tests in headed mode (browser visible).               |
| `npm run test:e2e:report` | Opens the Playwright HTML report from the last test run.              |

## Recommended Workflow

1. Run `npm run dev` during development to keep Tailwind CSS up to date.
2. Use `npm run lint` and `npm run format` regularly to keep code clean.
3. Run `npm test` before committing to make sure unit tests pass.
4. Run `npm run test:e2e` to ensure the application works as expected end-to-end.
