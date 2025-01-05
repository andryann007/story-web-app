import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  daStyle,
  eslintConfigPrettier,

  {
    rules: {
      'space-infix-ops': ['error'],
      'brace-style': ['error', '1tbs'],
      'space-before-blocks': ['error', 'always'],
    },
  },

  {
    ignores: ['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js'],
  },
];
