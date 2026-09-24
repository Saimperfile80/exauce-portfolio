export default [
  {
    ignores: [".next/*", "node_modules/*", "public/*", "dist/*"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-unused-vars": "off",
    },
  },
];
