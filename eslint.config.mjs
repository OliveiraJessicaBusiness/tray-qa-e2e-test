import globals from 'globals';
import cypress from 'eslint-plugin-cypress';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
        ...globals.cypress,
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      'no-undef': 'off',
    },
  },
];
