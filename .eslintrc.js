// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'eslint:recommended'],
  ignorePatterns: ['/dist/*'],
  parser: '@typescript-eslint/parser',
  'rules': {
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': 1,
    'no-trailing-spaces': 'error',
    'eol-last': 1,
    'semi': ['error', 'always'],
    'jsx-quotes': [2, 'prefer-double'],
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'default-param-last': 'error',
    'no-use-before-define': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': 'off',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'object-curly-newline': ['error', {
      'ImportDeclaration': {
        'multiline': true,
        'minProperties': 3,
      },
    }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': [0],
    '@typescript-eslint/no-unused-vars': 'error',
    'react/function-component-definition': [
      2,
      {
        'namedComponents': 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
  },
};
