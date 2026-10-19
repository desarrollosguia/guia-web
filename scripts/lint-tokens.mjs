#!/usr/bin/env node
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = "src";
const EXTENSIONS = [".ts", ".tsx", ".astro", ".css"];
const GENERATED_FILES = new Set(["src/styles/tokens.css"]);
const BRAND_ALLOWED_PATHS = ["src/config/site.ts"];

const RULES = [
  {
    reason: "arbitrary Tailwind value (use a token or the spacing scale)",
    pattern: /\b[a-z0-9-]+-\[[^\]]+\](?!:)/,
  },
  {
    reason: "literal color (use a color token)",
    pattern: /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(/,
  },
  {
    reason: "loose typography class (use a type-* utility)",
    pattern:
      /\b(text-(xs|sm|base|lg|xl|\dxl)|font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)|leading-[\w.]+|tracking-[\w.]+)\b/,
  },
  {
    reason: "literal brand name (use SITE_NAME)",
    pattern: /\bguia\b/i,
    appliesTo: (path) => !BRAND_ALLOWED_PATHS.includes(path),
  },
];

const listFiles = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listFiles(path);
    return EXTENSIONS.some((extension) => entry.name.endsWith(extension)) ? [path] : [];
  });

const findings = listFiles(ROOT)
  .map((path) => relative(".", path))
  .filter((path) => !GENERATED_FILES.has(path))
  .flatMap((path) =>
    readFileSync(path, "utf8")
      .split("\n")
      .flatMap((line, index) =>
        RULES.filter((rule) => (rule.appliesTo ? rule.appliesTo(path) : true))
          .filter((rule) => rule.pattern.test(line))
          .map((rule) => `${path}:${index + 1}: ${rule.reason}`),
      ),
  );

if (findings.length > 0) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("Token lint passed.");
