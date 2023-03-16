module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    semi: [2, "always", { omitLastInOneLineBlock: true }],
    "semi-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    "vue/multi-word-component-names": "off",
  },
};
