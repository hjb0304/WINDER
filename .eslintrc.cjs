module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "import"],
  rules: {
    "react/react-in-jsx-scope": "off", // Vite+React는 필요 없음
    "react/prop-types": "off", // TS 쓸 때 불필요
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
