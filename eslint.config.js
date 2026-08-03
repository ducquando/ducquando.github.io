import js from '@eslint/js';
import ts from 'typescript-eslint';
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	globalIgnores(['**/node_modules/**', '**/build/**']),
  js.configs.recommended,
  ...ts.configs.recommended,
]);