import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist/**", ".astro/**", "playwright-report/**", "test-results/**"]),
  js.configs.recommended,
  tseslint.configs.strict,
  astro.configs.recommended,
  {
    files: ["src/**/*.tsx"],
    extends: [reactHooks.configs.flat.recommended, jsxA11y.flatConfigs.recommended],
  },
  {
    files: ["scripts/**/*.mjs", "*.config.{mjs,ts}"],
    languageOptions: { globals: globals.node },
  },
]);
