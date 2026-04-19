import nextTypescript from "eslint-config-next/typescript";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import tailwindcss from "eslint-plugin-tailwindcss";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const withTypescriptFiles = (configs) => {
  return configs.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  }));
};

const eslintConfig = [
  ...nextTypescript,
  ...nextCoreWebVitals,
  ...withTypescriptFiles(
    compat.extends("plugin:@typescript-eslint/recommended-type-checked"),
  ),
  ...withTypescriptFiles(
    compat.extends("plugin:@typescript-eslint/stylistic-type-checked"),
  ),
  ...compat.extends("plugin:tailwindcss/recommended"),
  ...compat.extends("prettier"),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
      tailwindcss,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        project: true,
      },
    },

    settings: {
      tailwindcss: {
        callees: ["cn"],
      },
    },

    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",

      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/require-await": "off",

      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: null,
      },
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
  }
];

export default eslintConfig;
