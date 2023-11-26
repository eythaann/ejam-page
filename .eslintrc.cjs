// Migrate built-in rules to @stylistic/js namespace
/* eslint @stylistic/migrate/migrate-js: "error" */

// Migrate `@typescript-eslint` rules to @stylistic/ts namespace
/* eslint @stylistic/migrate/migrate-ts: "error" */

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@stylistic', 'simple-import-sort', '@stylistic/migrate'],
  rules: {
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^react$'],
        [''],
        ['(modules/shared).*(infrastructure)', '(modules).*(infrastructure)', '(infrastructure)'],
        ['(modules/shared).*(app)', '(modules).*(app)', 'app'],
        ['(modules/shared).*(domain)', '(modules).*(domain)', 'domain'],
        ['(.css)$'],
      ],
    }],
    'no-dupe-keys': 'error',
    '@stylistic/key-spacing': ['error', { beforeColon: false }],
    '@stylistic/block-spacing': 'error',
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],

    '@stylistic/object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': false }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-curly-newline': ['error', {
      'ImportDeclaration': 'never',
      'ObjectExpression': {
        'minProperties': 2,
        'consistent': true,
      },
      'ObjectPattern': {
        'minProperties': 4,
        'consistent': true,
      },
      'ExportDeclaration': {
        'multiline': true,
        'minProperties': 3,
      },
    }],

    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    'no-nested-ternary': 'error',

    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
    }],
    '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    '@typescript-eslint/no-unused-vars': ['warn', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
    }],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': 'error',
    '@stylistic/no-multi-spaces': ['error'],
    '@stylistic/no-trailing-spaces': ['error'],
    '@stylistic/space-infix-ops': ['error'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-indent': ['error', 2],
    '@stylistic/member-delimiter-style': ['error'],
    '@typescript-eslint/prefer-enum-initializers': ['error'],
    '@stylistic/type-annotation-spacing': ['error'],
    '@typescript-eslint/no-var-requires': ['off'],
  },
};
