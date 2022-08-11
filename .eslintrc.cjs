module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/script-setup-no-uses-vars': 'off',
    'no-unused-expressions': 'off',
    semi: ['error', 'always'],
    'vue/multi-word-component-names': 'off',
    'prefer-template': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: false,
        singleAttributePerLine: true,
        printWidth: 120,
      },
    ],
  },
};
