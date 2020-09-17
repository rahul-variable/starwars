module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true },
      },
    ],
    'class-methods-use-this': 'off',
    'react/no-array-index-key': 'off',
    'no-debugger': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': { webpack: { config: 'webpack.config.js' } },
  },
  root: true,
};
