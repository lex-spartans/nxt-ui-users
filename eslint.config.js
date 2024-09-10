const js = require('@eslint/js');
const angularEslint = require('@angular-eslint/eslint-plugin');
const angularEslintTemplate = require('@angular-eslint/eslint-plugin-template');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const preferArrowPlugin = require('eslint-plugin-prefer-arrow');
const importPlugin = require('eslint-plugin-import');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = [
  // Configuración básica de ESLint
  js.configs.recommended,

  // Ignorar archivos de prueba .spec.ts
  {
    ignores: ['**/*.spec.ts', '**/*.d.ts', 'eslint.config.js'],
  },

  // Reglas específicas para TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020, // Asegura compatibilidad con ES2020
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angularEslint,
      'prefer-arrow': preferArrowPlugin,
      'unused-imports': unusedImports,
      jsdoc: jsdocPlugin,
      import: importPlugin,
    },
    rules: {
      // Reglas de Angular
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true,
          afterBlockComment: false,
          beforeLineComment: true,
          afterLineComment: false,
          allowBlockStart: true,
          allowBlockEnd: true,
          allowObjectStart: true,
          allowObjectEnd: true,
          allowArrayStart: true,
          allowArrayEnd: true,
          allowClassStart: true,
          allowClassEnd: true,
        },
      ],
      'max-len': [
        'error',
        {
          code: 80,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'error',

      // Reglas de TypeScript
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/typedef': [
        'error',
        {
          arrayDestructuring: false,
          arrowParameter: true,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: true,
        },
      ],

      // Reglas de ESLint adicionales en modo estricto
      'no-console': 'warn', // Permitir logs solo como advertencia
      eqeqeq: 'error', // Requiere uso de === y !==
      curly: 'error', // Requiere uso de llaves en bloques
      'no-var': 'error', // Requiere el uso de let o const en lugar de var
      'prefer-const': 'error', // Prefiere const cuando sea posible

      // Configura algunas reglas básicas de JSDoc
      'jsdoc/check-alignment': 'error', // Asegura que las etiquetas JSDoc estén alineadas
      'jsdoc/check-param-names': 'error', // Chequea que los nombres de los parámetros coincidan
      'jsdoc/check-tag-names': 'error', // Asegura que las etiquetas sean válidas
      'jsdoc/check-types': 'error', // Chequea la validez de los tipos especificados
      'jsdoc/require-jsdoc': [
        'error',
        {
          // Requiere JSDoc para funciones y clases
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
          },
        },
      ],
      'jsdoc/require-param': 'error', // Requiere que todos los parámetros estén documentados
      'jsdoc/require-param-type': 'error', // Requiere que los tipos de los parámetros estén especificados
      'jsdoc/require-returns': 'error', // Requiere etiquetas de retorno en funciones
      'jsdoc/require-returns-type': 'error', // Requiere que los tipos de retorno estén especificados

      // Configuraciones de prefer-arrow
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
          allowStandaloneDeclarations: true,
        },
      ],

      // Configuraciones de eslint-plugin-import
      'import/no-default-export': 'error', // Desalienta el uso de exportaciones por defecto
      'unused-imports/no-unused-imports': 'error', // Asegura que todos los módulos y exportaciones sean utilizados
      'import/order': [
        'error',
        {
          // Ordena las importaciones de forma consistente
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@angular/**',
              group: 'external',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/first': 'error', // Asegura que todas las importaciones estén en la parte superior del archivo
      'import/no-duplicates': 'error', // Prohíbe las importaciones duplicadas
    },
  },

  // Reglas específicas para HTML y plantillas Angular
  {
    files: ['**/*.html'],
    processor: '@angular-eslint/template',
    plugins: {
      '@angular-eslint/template': angularEslintTemplate,
    },
    rules: {
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/no-autofocus': 'error',
      '@angular-eslint/template/i18n': [
        'warn',
        {
          checkId: true,
          checkText: true,
        },
      ],
    },
  },
];
