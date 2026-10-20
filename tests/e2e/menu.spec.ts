import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { HOME_PAGES, THEMES } from "./pages";

const MOBILE_MAX_WIDTH = 767;

for (const { path, other } of HOME_PAGES) {
  test.describe(`mobile menu on ${path}`, () => {
    test.beforeEach(({ viewport }) => {
      test.skip((viewport?.width ?? 0) > MOBILE_MAX_WIDTH, "The menu only exists on mobile");
    });

    test("opens, closes with Escape and goes to a section", async ({ page }) => {
      await page.goto(path);
      const menu = page.locator("#menu");
      await expect(menu).toBeHidden();
      await page.locator('button[popovertargetaction="show"]').click();
      await expect(menu).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(menu).toBeHidden();

      await page.locator('button[popovertargetaction="show"]').click();
      await menu.locator('a[href^="#"]').last().click();
      await expect(menu).toBeHidden();
      await expect(page).toHaveURL(/#/);
    });

    test("keeps the language switch inside the menu", async ({ page }) => {
      await page.goto(path);
      await page.locator('button[popovertargetaction="show"]').click();
      await page.locator(`#menu nav a[href="${other}"]`).click();
      await expect(page).toHaveURL(other);
    });

    for (const theme of THEMES) {
      test(`has no accessibility violations open in ${theme}`, async ({ page }) => {
        await page.emulateMedia({ colorScheme: theme });
        await page.goto(path);
        await page.locator('button[popovertargetaction="show"]').click();
        const { violations } = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        expect(violations).toEqual([]);
      });
    }
  });
}
