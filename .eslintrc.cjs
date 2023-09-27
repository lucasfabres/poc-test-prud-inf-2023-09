module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript",
    "plugin:react/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    
  },
  plugins: ["react"],
  rules: {

    // Desativa regras que não batem bem com o typescript
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    'react/display-name': 'off',
    
    // Proibe o uso de "any"
    '@typescript-eslint/no-explicit-any': 'error',

    // Proibe o uso de "await" em não promises
    "@typescript-eslint/await-thenable": "error",

    "@typescript-eslint/strict-boolean-expressions": "off",

    "@typescript-eslint/explicit-function-return-type": 'off',

  },
};
