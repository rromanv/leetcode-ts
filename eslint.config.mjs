import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

const files = ['**/*.{js,mjs,cjs,ts}']

export default defineConfig([
  { files },
  { files, languageOptions: { globals: globals.node } },
  { files, plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          cacheIgnorePattern: '^_',
        },
      ],
    },
  },
])
