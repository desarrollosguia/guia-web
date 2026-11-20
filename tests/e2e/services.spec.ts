import { expect, test, type Page } from "@playwright/test";
import { HOME_PAGES } from "./pages";

const SERVICES = 5;
const INCLUDED_ITEMS = 3;

/** The services section comes right after the hero. */
const servicesSection = (page: Page) => page.locator("#main section").nth(1);

for (const { path } of HOME_PAGES) {
  test.describe(`services on ${path}`, () => {
    test("lists five services, each with a closed toggle", async ({ page }) => {
      await page.goto(path);
      const toggles = servicesSection(page).getByRole("button");
      await expect(toggles).toHaveCount(SERVICES);
      for (const toggle of await toggles.all()) {
        await expect(toggle).toHaveAttribute("aria-expanded", "false");
      }
    });

    test("opens and closes the included items from the keyboard", async ({ page }) => {
      await page.goto(path);
      const toggle = servicesSection(page).getByRole("button").first();
      const panelId = await toggle.getAttribute("aria-controls");
      const panel = page.locator(`[id="${panelId}"]`);
      await expect(panel).toBeHidden();

      await toggle.scrollIntoViewIfNeeded();
      await expect(page.locator("astro-island:not([ssr])")).toHaveCount(1);
      await toggle.focus();
      await page.keyboard.press("Enter");
      await expect(toggle).toHaveAttribute("aria-expanded", "true");
      await expect(panel.getByRole("listitem")).toHaveCount(INCLUDED_ITEMS);
      await expect(panel).toBeVisible();

      await page.keyboard.press("Space");
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(panel).toBeHidden();
    });

    test("has a single call to action at the end of the section", async ({ page }) => {
      await page.goto(path);
      const links = servicesSection(page).getByRole("link");
      await expect(links).toHaveCount(1);
      await expect(links.first()).toHaveAttribute("href", /#(contacto|contact)$/);
    });
  });
}
