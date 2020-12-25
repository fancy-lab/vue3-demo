const config = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};

// Nextop rules
[
  'vue/no-parsing-error',
  'vue/no-unused-vars',
  'no-unused-vars',
  'vue/max-attributes-per-line',
  'vue/html-closing-bracket-newline',
  'vue/html-indent',
  'vue/html-self-closing',
  'vue/singleline-html-element-content-newline',
  'vue/require-default-prop',
  'vue/require-prop-types',
  'vue/this-in-template',
  'vue/no-unused-components',
  '@typescript-eslint/no-unused-vars',
].forEach(rule => {
  config.rules[rule] = 'off';
});

module.exports = config;
