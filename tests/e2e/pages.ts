export const HOME_PAGES = [
  { path: "/", lang: "es-AR", other: "/en/" },
  { path: "/en/", lang: "en-US", other: "/" },
] as const;

export const NOT_FOUND_PAGES = [
  { path: "/404/", lang: "es-AR", other: "/en/404/" },
  { path: "/en/404/", lang: "en-US", other: "/404/" },
] as const;

export const ALL_PAGES = [...HOME_PAGES, ...NOT_FOUND_PAGES];

export const THEMES = ["dark", "light"] as const;

const MOBILE_MAX_WIDTH = 767;

type PageLike = import("@playwright/test").Page;

/** Below 768 px the language and theme switches live inside the menu. */
export const openMenuOnMobile = async (page: PageLike): Promise<void> => {
  const width = page.viewportSize()?.width ?? Infinity;
  if (width <= MOBILE_MAX_WIDTH) await page.locator('button[popovertargetaction="show"]').click();
};
