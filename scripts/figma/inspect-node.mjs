#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { resolveFigmaCli } from "./figma-cli.mjs";

const FIGMA_CLI = resolveFigmaCli();
const DEFAULT_DEPTH = 5;
const [nodeId, depthArg] = process.argv.slice(2);

if (!nodeId) {
  console.error("Usage: pnpm figma:inspect <nodeId> [depth]");
  process.exit(1);
}

const maxDepth = Number(depthArg ?? DEFAULT_DEPTH);

const inspector = `
const variableNames = {};
async function variableName(id) {
  if (!id) return null;
  if (!variableNames[id]) {
    const variable = await figma.variables.getVariableByIdAsync(id);
    variableNames[id] = variable ? variable.name : id;
  }
  return variableNames[id];
}
const toHex = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
async function paint(node, key) {
  const paints = node[key];
  if (!paints || paints === figma.mixed || !paints.length) return null;
  const visible = paints.find((p) => p.visible !== false);
  if (!visible) return null;
  const alpha = visible.opacity < 1 ? "@" + Math.round(visible.opacity * 100) + "%" : "";
  if (visible.boundVariables && visible.boundVariables.color) return "var:" + (await variableName(visible.boundVariables.color.id)) + alpha;
  if (visible.type === "SOLID") return toHex(visible.color) + alpha + " (SIN TOKEN)";
  return visible.type;
}
async function bound(node, key) {
  const b = node.boundVariables && node.boundVariables[key];
  return b ? "$" + (await variableName(b.id)) : node[key];
}
async function describe(node, depth, lines) {
  const parts = [node.name + " #" + node.id + " [" + node.type + "]"];
  if (node.type === "INSTANCE") {
    const main = await node.getMainComponentAsync();
    if (main) parts.push("-> " + (main.parent && main.parent.type === "COMPONENT_SET" ? main.parent.name + "{" + main.name + "}" : main.name));
  }
  parts.push(Math.round(node.width) + "x" + Math.round(node.height));
  if (node.layoutMode && node.layoutMode !== "NONE") {
    parts.push((node.layoutMode === "HORIZONTAL" ? "row" : "col") + " gap=" + (await bound(node, "itemSpacing")) +
      " p=" + [await bound(node, "paddingTop"), await bound(node, "paddingRight"), await bound(node, "paddingBottom"), await bound(node, "paddingLeft")].join(",") +
      " main=" + node.primaryAxisAlignItems + " cross=" + node.counterAxisAlignItems);
  }
  if (node.layoutSizingHorizontal) parts.push("sizing=" + node.layoutSizingHorizontal + "/" + node.layoutSizingVertical);
  const fill = await paint(node, "fills");
  if (fill && node.type !== "TEXT") parts.push("bg=" + fill);
  const stroke = await paint(node, "strokes");
  if (stroke) parts.push("stroke=" + stroke + " w=" + String(node.strokeWeight) + " " + node.strokeAlign);
  if (node.cornerRadius && node.cornerRadius !== figma.mixed && node.cornerRadius > 0) parts.push("radius=" + (await bound(node, "topLeftRadius")));
  if (node.opacity < 1) parts.push("opacity=" + node.opacity);
  if (typeof node.effectStyleId === "string" && node.effectStyleId) {
    const style = await figma.getStyleByIdAsync(node.effectStyleId);
    if (style) parts.push("effect=" + style.name);
  }
  if (node.type === "TEXT") {
    let textStyle = "SIN ESTILO";
    if (typeof node.textStyleId === "string" && node.textStyleId) {
      const style = await figma.getStyleByIdAsync(node.textStyleId);
      if (style) textStyle = style.name;
    }
    parts.push(JSON.stringify(node.characters.slice(0, 120)) + " style=" + textStyle + " color=" + fill);
  }
  if (node.visible === false) parts.push("HIDDEN");
  lines.push("  ".repeat(depth) + parts.join(" "));
  const isIcon = node.name.startsWith("lucide:");
  if ("children" in node && depth < ${maxDepth} && !isIcon) {
    for (const child of node.children) await describe(child, depth + 1, lines);
  }
}
const root = await figma.getNodeByIdAsync(${JSON.stringify(nodeId)});
if (!root) return "Node not found: ${nodeId}";
const lines = [];
await describe(root, 0, lines);
return lines.join("\\n");
`;

const dir = mkdtempSync(join(tmpdir(), "figma-inspect-"));
const file = join(dir, "inspect.js");
writeFileSync(file, inspector);
try {
  const output = execFileSync("node", [FIGMA_CLI, "eval", "--file", file], {
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024,
  });
  process.stdout.write(output);
} finally {
  rmSync(dir, { recursive: true, force: true });
}
