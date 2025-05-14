import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactHooks from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Add ignore patterns
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "out/**",
      "coverage/**",
      "public/**"
    ]
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: [
      "react-hooks"
    ],
    rules: {
      // semi: ["error", "always"],
      "no-undef": "error",
      ...reactHooks.configs.recommended.rules,
    },
  }),
];

export default eslintConfig;