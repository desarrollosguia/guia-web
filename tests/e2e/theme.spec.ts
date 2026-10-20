import { expect, test } from "@playwright/test";
import { HOME_PAGES, openMenuOnMobile } from "./pages";

for (const { path } of HOME_PAGES) {
  test.describe(`theme switch on ${path}`, () => {
    test("overrides the system theme and remembers the choice", async ({ page }) => {
      await page.emulateMedia({ colorScheme: "dark" });
      await page.goto(path);
      await openMenuOnMobile(page);
      const light = page.locator('[data-theme-value="light"]:visible');
      await expect(light).toBeVisible();
      await light.click();
      await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
      await expect(light).toHaveAttribute("aria-pressed", "true");

      await page.reload();
      await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
      await openMenuOnMobile(page);

      await page.locator('[data-theme-value="system"]:visible').click();
      await expect(page.locator("html")).not.toHaveAttribute("data-theme");
    });
  });
}
