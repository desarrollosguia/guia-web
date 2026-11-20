import { expect, test } from "@playwright/test";
import { HOME_PAGES, THEMES, openMenuOnMobile } from "./pages";

for (const { path } of HOME_PAGES) {
  test.describe(`theme switch on ${path}`, () => {
    for (const theme of THEMES) {
      test(`starts as the system when nothing was chosen (${theme})`, async ({ page }) => {
        await page.emulateMedia({ colorScheme: theme });
        await page.goto(path);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        await openMenuOnMobile(page);
        await expect(page.locator(`[data-theme-value="${theme}"]:visible`)).toHaveAttribute(
          "aria-pressed",
          "true",
        );
      });
    }

    test("shows a line under the selected theme", async ({ page }) => {
      await page.emulateMedia({ colorScheme: "dark" });
      await page.goto(path);
      await openMenuOnMobile(page);
      const selected = page.locator('[data-theme-value="dark"]:visible');
      await expect(selected.locator("span")).toBeVisible();
      await expect(page.locator('[data-theme-value="light"]:visible span')).toBeHidden();
    });

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
    });
  });
}
