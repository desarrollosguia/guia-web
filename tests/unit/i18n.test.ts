import { describe, expect, it } from "vitest";
import { LOCALES, PROJECTS, ROUTES } from "@/config/site";
import { alternates, getDictionary, routePath } from "@/i18n";

const collectStrings = (value: unknown): string[] =>
  typeof value === "string" ? [value] : Object.values(value as object).flatMap(collectStrings);

describe("dictionaries", () => {
  it.each(LOCALES)("%s has no empty text", (locale) => {
    const texts = collectStrings(getDictionary(locale));
    expect(texts.length).toBeGreaterThan(0);
    expect(texts.every((text) => text.trim().length > 0)).toBe(true);
  });

  it.each(LOCALES)("%s has no em dash and no accented brand", (locale) => {
    const texts = collectStrings(getDictionary(locale)).join("\n");
    expect(texts).not.toMatch(/—/);
    expect(texts).not.toMatch(/\bGuía\b/);
  });

  it("has the same keys in every language", () => {
    const keysOf = (value: unknown, prefix = ""): string[] =>
      typeof value === "string"
        ? [prefix]
        : Object.entries(value as object).flatMap(([key, child]) =>
            keysOf(child, prefix ? `${prefix}.${key}` : key),
          );
    const [first, ...rest] = LOCALES.map((locale) => keysOf(getDictionary(locale)));
    rest.forEach((keys) => expect(keys).toEqual(first));
  });
});

describe("routes", () => {
  it("serves Spanish at the root and English under /en/", () => {
    expect(routePath("home", "es")).toBe("/");
    expect(routePath("home", "en")).toBe("/en/");
  });

  it("lists one alternate per language for every route", () => {
    Object.keys(ROUTES).forEach((route) => {
      const found = alternates(route as keyof typeof ROUTES).map(({ locale }) => locale);
      expect(found).toEqual([...LOCALES]);
    });
  });
});

describe("project config", () => {
  it("shows a project without link when href is missing", () => {
    const withoutLink = PROJECTS.filter((project) => !("href" in project));
    expect(withoutLink.map((project) => project.id)).toEqual(["audenpass"]);
  });

  it.each(PROJECTS)("$id has a name and an image description in every language", ({ id }) => {
    LOCALES.forEach((locale) => {
      const item = getDictionary(locale).projects.items[id];
      expect(item.name.length).toBeGreaterThan(0);
      expect(item.imageAlt.length).toBeGreaterThan(0);
    });
  });
});

describe("not found routes", () => {
  it("has one page per language outside the home routes", () => {
    expect(routePath("notFound", "es")).toBe("/404/");
    expect(routePath("notFound", "en")).toBe("/en/404/");
  });
});
