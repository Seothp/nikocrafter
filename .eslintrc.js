export default [
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      // not relevant for react 18.x.x
      "react/react-in-jsx-scope": "off",
      // antipattern - https://t.me/why_not_export_default (RU ONLY)
      "import/no-default-export": "error",
    },
  },
];
