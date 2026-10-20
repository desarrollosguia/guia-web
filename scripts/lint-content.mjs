#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src", "docs", "public", "README.md"];
const EXTENSIONS = [".ts", ".tsx", ".astro", ".css", ".md", ".svg", ".txt", ".json"];

const RULES = [
  { reason: "em dash (use a comma, a colon or two sentences)", pattern: /—/ },
  { reason: "brand written with an accent (the brand is Guia)", pattern: /\bGuía\b/ },
];

const listFiles = (path) => {
  if (!existsSync(path)) return [];
  if (statSync(path).isDirectory()) {
    return readdirSync(path).flatMap((name) => listFiles(join(path, name)));
  }
  return EXTENSIONS.some((extension) => path.endsWith(extension)) ? [path] : [];
};

const findings = ROOTS.flatMap(listFiles).flatMap((path) =>
  readFileSync(path, "utf8")
    .split("\n")
    .flatMap((line, index) =>
      RULES.filter((rule) => rule.pattern.test(line)).map(
        (rule) => `${path}:${index + 1}: ${rule.reason}`,
      ),
    ),
);

if (findings.length > 0) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("Content lint passed.");
