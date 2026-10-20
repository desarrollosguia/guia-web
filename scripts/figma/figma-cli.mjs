#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

export function resolveFigmaCli() {
  if (existsSync(".env.local")) process.loadEnvFile(".env.local");
  const figmaCli = process.env.FIGMA_CLI;
  if (!figmaCli || !existsSync(figmaCli)) {
    console.error("Set FIGMA_CLI in .env.local to the path of figma-cli's src/index.js");
    process.exit(1);
  }
  return figmaCli;
}

export function runFigmaCli(args, options = {}) {
  return spawnSync("node", [resolveFigmaCli(), ...args], { stdio: "inherit", ...options });
}

const isEntryPoint = import.meta.url === `file://${process.argv[1]}`;
if (isEntryPoint) {
  const result = runFigmaCli(process.argv.slice(2));
  process.exit(result.status ?? 1);
}
