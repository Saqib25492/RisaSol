import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      // Turn off the quote escaping rule (likely from eslint-plugin-react or similar)
      "react/no-unescaped-entities": "off",
      // Add more here if needed:
      // "html-escape/unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
