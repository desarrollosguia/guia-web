import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "@playwright/test";
import { ALL_PAGES } from "./pages";

const HEADERS_FILE = "public/_headers";
const DIST = "dist";

const policy = readFileSync(HEADERS_FILE, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .find((line) => line.startsWith("Content-Security-Policy:"))
  ?.replace("Content-Security-Policy:", "")
  .trim();

const htmlFiles = (directory: string): string[] =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });

test("the policy is defined in _headers", () => {
  expect(policy).toBeTruthy();
});

for (const { path } of ALL_PAGES) {
  test(`${path} loads without CSP violations`, async ({ page }) => {
    const violations: string[] = [];
    page.on("console", (message) => {
      if (message.text().includes("Content Security Policy")) violations.push(message.text());
    });
    await page.route("**/*", async (route) => {
      const response = await route.fetch();
      await route.fulfill({
        response,
        headers: { ...response.headers(), "content-security-policy": policy ?? "" },
      });
    });
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    expect(violations).toEqual([]);
  });
}

test("built pages have no inline script, style element or style attribute", () => {
  for (const file of htmlFiles(DIST)) {
    const html = readFileSync(file, "utf8");
    expect(html, file).not.toMatch(/<script(?![^>]*\bsrc=)[^>]*>/);
    expect(html, file).not.toMatch(/<style[\s>]/);
    expect(html, file).not.toMatch(/\sstyle="/);
  }
});
