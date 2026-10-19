#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

const SOURCE = "design/tokens.local.json";
const OUTPUT = "src/styles/tokens.css";
const HEADER = "/* Archivo generado por scripts/build-tokens.mjs. No se edita a mano. */";

const tokens = JSON.parse(readFileSync(SOURCE, "utf8"));

const entries = (group, prefix) =>
  Object.entries(group).map(([name, value]) => `  --${prefix}-${name}: ${value};`);

const typeUtility = ([name, t]) =>
  [
    `@utility type-${name} {`,
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
  `  --spacing: ${tokens.spacing.base};`,
  ...entries(tokens.color, "color"),
  ...entries(tokens.font, "font"),
  ...entries(tokens.radius, "radius"),
  ...entries(tokens.shadow, "shadow"),
  "}",
].join("\n");

const css = [HEADER, theme, ...Object.entries(tokens.type).map(typeUtility)].join("\n\n");
writeFileSync(OUTPUT, `${css}\n`);
console.log(`Tokens built from ${SOURCE} into ${OUTPUT}`);
