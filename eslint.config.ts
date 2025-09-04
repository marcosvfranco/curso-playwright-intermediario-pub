// eslint.config.ts
import playwright from 'eslint-plugin-playwright';
import typescriptParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export default tseslint.config([
    {
        files: ['**/*.ts', '**/*.cts', '**/*.mts'],
        ignores: ['**/*.d.ts', '**/*.map', '**/*.js', '**/*.mjs', '**/*.cjs'],
        ...playwright.configs['flat/recommended'],

        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
                warnOnUnsupportedTypeScriptVersion: true
            }
        },

        plugins: {
            '@typescript-eslint': typescriptParser,
            playwright: playwright
        },

        rules: {
            ...playwright.configs['flat/recommended'].rules,

            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            indent: [
                'error',
                4,
                {
                    ignoredNodes: ['ArrayExpression']
                }
            ],
            'no-multi-spaces': ['error'],
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'no-trailing-spaces': ['error'],
            eqeqeq: ['error'],
            'eol-last': ['error'],
            'no-empty-pattern': 'off',
            'playwright/no-page-pause': ['warn'],
            'playwright/missing-playwright-await': ['error'],
            'playwright/no-networkidle': ['off']
        }
    }
]);
