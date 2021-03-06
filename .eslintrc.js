/**
 * ESLint config
 * @see https://eslint.org/
 * @see https://eslint.org/docs/rules/ */
module.exports = {
  parser: 'babel-eslint',

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],

  globals: {
    it: 'readonly',
    expect: 'readonly',
    Atomics: 'readonly',
    describe: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['babel', 'react', 'import'],

  rules: {
    'react/react-in-jsx-scope': 0,
    'import/order': 2,
    'import/first': 2,
    'import/exports-last': 0,
    'import/no-duplicates': 2,
    'import/default': 2,
    'import/newline-after-import': 2,
    'import/no-absolute-path': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'import/no-useless-path-segments': 2,
    'import/no-relative-parent-imports': 2,
    'import/no-deprecated': 2,
    'import/no-mutable-exports': 2,
    'import/max-dependencies': [2, {max: 15}],
    'import/no-extraneous-dependencies': [
      2,
      {devDependencies: false, optionalDependencies: false, peerDependencies: false},
    ],

    eqeqeq: ['error', 'always'],

    camelcase: 'error',
  },

  settings: {
    // eslint-plugin-react settings
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },

    propWrapperFunctions: [],

    linkComponents: [],
  },
};