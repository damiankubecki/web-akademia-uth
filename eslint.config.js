// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintPrettier = require('eslint-plugin-prettier/recommended');

const commonRules = {
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintPrettier,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      ...commonRules,
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'web', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'web', style: 'kebab-case' },
      ],
    },
  },
  {
    files: ['**/*.html'],
    ignores: ['**/index.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      eslintPrettier,
    ],
    rules: {
      ...commonRules,
    },
  }
);
