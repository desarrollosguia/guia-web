import { expect, test, type Page } from "@playwright/test";
import { HOME_PAGES } from "./pages";

const STEPS = 5;
const SCROLL_EFFECTS = [".process-line", ".process-number", ".process-name", ".process-text"];

/** The process section comes after the hero, the services and the projects. */
const processSection = (page: Page) => page.locator("#main section").nth(3);

const animationNames = (page: Page) =>
  page.evaluate(
    (selectors) =>
      selectors.map((selector) => {
        const element = document.querySelector(selector);
        return element ? getComputedStyle(element).animationName : null;
      }),
    SCROLL_EFFECTS,
  );

for (const { path } of HOME_PAGES) {
  test.describe(`process on ${path}`, () => {
    test("lists the five steps in order", async ({ page }) => {
      await page.goto(path);
      const steps = processSection(page).getByRole("listitem");
      await expect(steps).toHaveCount(STEPS);
      await expect(steps.first().locator(".process-number")).toHaveText("01");
      await expect(steps.last().locator(".process-number")).toHaveText("05");
    });

    test("ties the line and the steps to the scroll when motion is allowed", async ({ page }) => {
      await page.emulateMedia({ reducedMotion: "no-preference" });
      await page.goto(path);
      const supported = await page.evaluate(() => CSS.supports("animation-timeline", "view()"));
      test.skip(!supported, "the browser has no scroll timelines");
      expect(await animationNames(page)).toEqual([
        "process-advance",
        "process-number-lit",
        "process-name-lit",
        "process-text-lit",
      ]);
    });

    test("shows the full line and every step without animation when motion is reduced", async ({
      page,
    }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(path);
      expect(await animationNames(page)).toEqual(["none", "none", "none", "none"]);
    });
  });
}
