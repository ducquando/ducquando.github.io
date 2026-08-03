import js from '@eslint/js';
import ts from 'typescript-eslint';

export default [
  { 
    ignores: ['**/node_modules/**', '**/build/**'],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
];
