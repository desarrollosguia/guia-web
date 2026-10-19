import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = [
  { path: "/", lang: "es-AR", other: "/en/" },
  { path: "/en/", lang: "en-US", other: "/" },
] as const;

for (const { path, lang, other } of PAGES) {
  test.describe(`landing ${path}`, () => {
    test("has the right language and one h1", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    });

    test("links both languages and the default", async ({ page }) => {
      await page.goto(path);
      const alternates = await page
        .locator('link[rel="alternate"]')
        .evaluateAll((links) => links.map((link) => link.getAttribute("hreflang")));
      expect(alternates).toEqual(["es-AR", "en-US", "x-default"]);
    });

    test("switches language", async ({ page }) => {
      await page.goto(path);
      await page.locator(`nav a[href="${other}"]`).click();
      await expect(page).toHaveURL(other);
    });

    test("has no horizontal scroll", async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(overflow).toBe(false);
    });

    test("has no accessibility violations", async ({ page }) => {
      await page.goto(path);
      const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(violations).toEqual([]);
    });
  });
}
