module.exports = {
  plugins: ['prettier', 'chai-friendly'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:chai-friendly/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    mocha: true,
  },
  globals: {
    process: true,
  },
  rules: {
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'max-classes-per-file': 0,
    'no-plusplus': 0,
    'sonarjs/cognitive-complexity': 0,
    'sonarjs/no-collapsible-if': 0,
    'sonarjs/no-duplicate-string': 0,
    'sonarjs/no-identical-functions': 0,
  },
};
