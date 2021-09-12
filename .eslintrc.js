module.exports = {
  root: true,
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': [2, 'tab'],
    'no-tabs': 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
