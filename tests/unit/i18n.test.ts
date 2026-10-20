import { describe, expect, it } from "vitest";
import { LOCALES, ROUTES } from "@/config/site";
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
