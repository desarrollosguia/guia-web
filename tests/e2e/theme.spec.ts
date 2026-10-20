import { expect, test } from "@playwright/test";
import { HOME_PAGES } from "./pages";

const MOBILE_MAX_WIDTH = 767;

for (const { path } of HOME_PAGES) {
  test.describe(`theme switch on ${path}`, () => {
    test.beforeEach(({ viewport }) => {
      test.skip((viewport?.width ?? 0) <= MOBILE_MAX_WIDTH, "The mobile header is pending");
    });

    test("overrides the system theme and remembers the choice", async ({ page }) => {
      await page.emulateMedia({ colorScheme: "dark" });
      await page.goto(path);
      const light = page.locator('[data-theme-value="light"]');
      await expect(light).toBeVisible();
      await light.click();
      await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
      await expect(light).toHaveAttribute("aria-pressed", "true");

      await page.reload();
      await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

      await page.locator('[data-theme-value="system"]').click();
      await expect(page.locator("html")).not.toHaveAttribute("data-theme");
    });
  });
}
