#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

const DEFAULT_SOURCE = "design/tokens.local.json";
const OUTPUT = "src/styles/tokens.css";
const HEADER = "/* Archivo generado por scripts/build-tokens.mjs. No se edita a mano. */";
const THEMES = ["dark", "light"];

const source = process.argv[2] ?? DEFAULT_SOURCE;
const tokens = JSON.parse(readFileSync(source, "utf8"));

const declarations = (group, prefix, indent = "  ") =>
  Object.entries(group).map(([name, value]) => `${indent}--${prefix}${name}: ${value};`);

const themeVariables = (theme, indent) => [
  ...declarations(tokens.color[theme], "", indent),
  `${indent}color-scheme: ${theme};`,
];

const colorAliases = Object.keys(tokens.color.dark).map(
  (name) => `  --color-${name}: var(--${name});`,
);

const typeUtility = ([name, t]) =>
  [
    `@utility type-${name} {`,
    `  font-family: var(--font-${t.family});`,
    `  font-size: ${t.size};`,
    `  font-weight: ${t.weight};`,
    `  line-height: ${t["line-height"]};`,
    `  letter-spacing: ${t["letter-spacing"]};`,
    "}",
  ].join("\n");

const theme = [
  "@theme {",
  "  --color-*: initial;",
  "  --font-*: initial;",
  "  --radius-*: initial;",
  "  --shadow-*: initial;",
  "  --text-*: initial;",
  "  --font-weight-*: initial;",
  "  --leading-*: initial;",
  "  --tracking-*: initial;",
  "  --ease-*: initial;",
  "  --breakpoint-*: initial;",
  `  --spacing: ${tokens.spacing.base};`,
  ...declarations(tokens.font, "font-"),
  ...declarations(tokens.radius, "radius-"),
  ...declarations(tokens.size, "spacing-"),
  ...declarations(tokens.container, "container-"),
  ...declarations(tokens.breakpoint, "breakpoint-"),
  ...declarations(tokens.motion.duration, "transition-duration-"),
  ...declarations(tokens.motion.ease, "ease-"),
  "}",
].join("\n");

const themeInline = [
  "@theme inline {",
  ...colorAliases,
  ...declarations(tokens.shadow, "shadow-"),
  "}",
].join("\n");

const roots = [
  ":root {",
  ...themeVariables("dark", "  "),
  ...declarations(tokens.focus, "focus-ring-"),
  ...declarations(tokens.emphasis, "emphasis-"),
  ...declarations(tokens.key, "key-"),
  "}",
  "@media (prefers-color-scheme: light) {",
  "  :root:not([data-theme]) {",
  ...themeVariables("light", "    "),
  "  }",
  "}",
  ...THEMES.map((name) =>
    [`:root[data-theme="${name}"] {`, ...themeVariables(name, "  "), "}"].join("\n"),
  ),
].join("\n");

const css = [
  HEADER,
  theme,
  themeInline,
  roots,
  ...Object.entries(tokens.type).map(typeUtility),
].join("\n\n");
writeFileSync(OUTPUT, `${css}\n`);
console.log(`Tokens built from ${source} into ${OUTPUT}`);
