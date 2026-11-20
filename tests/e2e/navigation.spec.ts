import { expect, test } from "@playwright/test";
import { HOME_PAGES } from "./pages";

const MOBILE_MAX_WIDTH = 767;
const NAV_KEYS = 4;

for (const { path } of HOME_PAGES) {
  test.describe(`key navigation on ${path}`, () => {
    test("has four keys that lead to sections of the home", async ({ page }) => {
      await page.goto(path);
      const keys = page.locator("main [data-nav-link]");
      await expect(keys).toHaveCount(NAV_KEYS);
      for (const href of await keys.evaluateAll((links) =>
        links.map((l) => l.getAttribute("href")),
      )) {
        expect(href).toMatch(/^#[\w-]+$/);
      }
    });

    test("marks the key of the visible section with aria-current and a line", async ({ page }) => {
      await page.goto(path);
      const projects = page.locator("main [data-nav-link]").nth(1);
      await expect(projects).not.toHaveAttribute("aria-current");
      const target = (await projects.getAttribute("href")) ?? "";
      await page.locator(target).scrollIntoViewIfNeeded();
      await page.evaluate((id) => document.querySelector(id)?.scrollIntoView(), target);
      await expect(projects).toHaveAttribute("aria-current", "true");
      await expect(projects.locator("span:visible")).toHaveCount(1);
    });

    test("is reachable with the keyboard and shows the focus ring", async ({ page }) => {
      await page.goto(path);
      const first = page.locator("main [data-nav-link]").first();
      await first.focus();
      await expect(first).toBeFocused();
      const outline = await first.evaluate((el) => getComputedStyle(el).outlineStyle);
      expect(outline).toBe("solid");
    });

    test("compact header appears with the scroll on desktop", async ({ page, viewport }) => {
      test.skip((viewport?.width ?? 0) <= MOBILE_MAX_WIDTH, "The compact header is desktop only");
      await page.goto(path);
      const compact = page.locator("header [data-nav-link]").first();
      await expect(compact).toBeHidden();
      await page.mouse.wheel(0, 600);
      await expect(compact).toBeVisible();
    });
  });
}
