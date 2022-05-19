module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'eslint-config-prettier', 'react-app'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  rules: {
    'import/no-unresolved': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.json'] }],
    'global-require': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'warn',
    'import/no-anonymous-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [`${__dirname}/src`],
      },
    },
  },
};
