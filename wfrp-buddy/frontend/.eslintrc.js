/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser", // TypeScript parser for .ts files
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-recommended", // Recommended Vue 3 rules
    "plugin:@typescript-eslint/recommended", // Recommended TypeScript rules
    "plugin:vuetify/recommended", // Vuetify-specific linting rules
    "@vue/eslint-config-typescript",
    "./.eslintrc-auto-import.json",
    "prettier",
  ],
  plugins: [
    "vue",
    "@typescript-eslint",
    "vuetify", // Vuetify linting plugin
  ],
  rules: {
    // Vue and TypeScript rules
    "vue/multi-word-component-names": "off", // Disable multi-word component name rule (useful for Vuetify)
    "@typescript-eslint/explicit-module-boundary-types": "off", // Disable forcing return types
    "@typescript-eslint/no-explicit-any": "off", // Allow usage of `any` type

    // Vuetify-specific rules
    "vuetify/no-deprecated-classes": "error", // Prevent usage of deprecated Vuetify classes
    // "vuetify/no-legacy-grid": "error", // Enforce using the new grid system
  },
};
