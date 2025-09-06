// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

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
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  pluginJs.configs.recommended,

  prettierConfig,

  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },

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

  {
    files: ['**/tailwind.config.mjs', '**/postcss.config.mjs'],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

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

      sourceType: 'module',
    },
  },

  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];
