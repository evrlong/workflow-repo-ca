// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// Definer test-globals eksplisitt (fungerer uten at du må installere Jest)
const testGlobals = {
  describe: 'readonly',
  it: 'readonly',
  test: 'readonly',
  expect: 'readonly',
  beforeEach: 'readonly',
  afterEach: 'readonly',
  beforeAll: 'readonly',
  afterAll: 'readonly',
};

export default [
  // Standard: nettleser-kode
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // Anbefalte regler
  pluginJs.configs.recommended,

  // Skru av regler som krasjer med Prettier
  prettierConfig,

  // Kjør Prettier via ESLint
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // ✅ Testfiler: tillat describe/it/expect osv.
  {
    files: ['**/*.test.js', '**/*.spec.js', 'tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...testGlobals,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // Node-baserte konfigfiler (CommonJS)
  {
    files: [
      '**/tailwind.config.js',
      '**/tailwind.config.cjs',
      '**/postcss.config.js',
      '**/postcss.config.cjs',
    ],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },
  },

  // Node-baserte konfigfiler (ESM)
  {
    files: ['**/tailwind.config.mjs', '**/postcss.config.mjs'],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // Playwright-config (Node, ESM)
  {
    files: [
      '**/playwright.config.js',
      '**/playwright.config.mjs',
      '**/playwright.config.ts',
      '**/playwright.config.cjs',
    ],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      // Bruk 'module' fordi du importerer med ESM i playwright.config.js
      // (bytt til 'commonjs' hvis du bruker .cjs)
      sourceType: 'module',
    },
  },

  // Ignorer bygg/avhengigheter
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];
