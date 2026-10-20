import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { ALL_PAGES, HOME_PAGES, NOT_FOUND_PAGES, THEMES, openMenuOnMobile } from "./pages";

const PREDICTOR_URL = "https://wc-match-predictor-frontend.vercel.app/";

for (const { path, lang, other } of ALL_PAGES) {
  test.describe(`page ${path}`, () => {
    test("has the right language and one h1", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    });

    test("switches language", async ({ page }) => {
      await page.goto(path);
      await openMenuOnMobile(page);
      await page.locator(`nav a[href="${other}"]:visible`).click();
      await expect(page).toHaveURL(other);
    });

    test("has no horizontal scroll", async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(overflow).toBe(false);
    });

    for (const theme of THEMES) {
      test(`has no accessibility violations in ${theme}`, async ({ page }) => {
        await page.emulateMedia({ colorScheme: theme });
        await page.goto(path);
        const { violations } = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        expect(violations).toEqual([]);
      });
    }

    test("follows the system theme", async ({ page }) => {
      const canvas = async () =>
        page.evaluate(() => getComputedStyle(document.documentElement).backgroundColor);
      await page.emulateMedia({ colorScheme: "dark" });
      await page.goto(path);
      const dark = await canvas();
      await page.emulateMedia({ colorScheme: "light" });
      expect(await canvas()).not.toBe(dark);
    });
  });
}

for (const { path } of HOME_PAGES) {
  test.describe(`home ${path}`, () => {
    test("links both languages and the default", async ({ page }) => {
      await page.goto(path);
      const alternates = await page
        .locator('link[rel="alternate"]')
        .evaluateAll((links) => links.map((link) => link.getAttribute("hreflang")));
      expect(alternates).toEqual(["es-AR", "en-US", "x-default"]);
    });

    test("lists the WhatsApp and LinkedIn links of both founders", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('a[href^="https://wa.me/"]')).toHaveCount(2);
      await expect(page.locator('a[href^="https://www.linkedin.com/in/"]')).toHaveCount(2);
    });

    test("keeps the mail link readable", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('a[href="mailto:hola@desarrollosguia.com"]').first()).toBeVisible();
    });

    test("shows Audenpass without a link and the predictor with one", async ({ page }) => {
      await page.goto(path);
      const audenpass = page.getByRole("article").filter({ hasText: "Audenpass" });
      await expect(audenpass.getByRole("link")).toHaveCount(0);
      await expect(page.locator(`a[href="${PREDICTOR_URL}"]`)).toHaveCount(1);
    });

    test("is indexable", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    });
  });
}

for (const { path } of NOT_FOUND_PAGES) {
  test(`404 ${path} is not indexable and has no alternates`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
    await expect(page.locator('link[rel="canonical"], link[rel="alternate"]')).toHaveCount(0);
  });
}
