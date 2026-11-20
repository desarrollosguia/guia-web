import { describe, expect, it } from "vitest";
import { FakeElement, runPublicScript } from "./support/public-script";

const THEME_BUTTONS = "[data-theme-value]";

const setup = ({ stored, systemDark }: { stored?: string; systemDark: boolean }) => {
  const root = new FakeElement();
  const light = new FakeElement({ "data-theme-value": "light" });
  const dark = new FakeElement({ "data-theme-value": "dark" });
  light.dataset["themeValue"] = "light";
  dark.dataset["themeValue"] = "dark";
  const wrapper = new FakeElement();
  const store = new Map<string, string>(stored ? [["theme", stored]] : []);
  const localStorage = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => void store.set(key, value),
    removeItem: (key: string) => void store.delete(key),
  };
  runPublicScript(
    "theme.js",
    {
      root,
      byId: {},
      bySelector: { "[data-theme-switch]": [wrapper], [THEME_BUTTONS]: [light, dark] },
    },
    { localStorage, matchMedia: () => ({ matches: systemDark }) },
  );
  return { root, light, dark, wrapper, store };
};

describe("theme script", () => {
  it("starts dark when the system is dark and nothing was chosen", () => {
    expect(setup({ systemDark: true }).root.dataset["theme"]).toBe("dark");
  });

  it("starts light when the system is light and nothing was chosen", () => {
    expect(setup({ systemDark: false }).root.dataset["theme"]).toBe("light");
  });

  it("prefers the remembered choice over the system", () => {
    expect(setup({ stored: "light", systemDark: true }).root.dataset["theme"]).toBe("light");
  });

  it("ignores a stored value that is not a theme", () => {
    expect(setup({ stored: "system", systemDark: true }).root.dataset["theme"]).toBe("dark");
  });

  it("shows the switch and presses the active theme", () => {
    const { wrapper, light, dark } = setup({ systemDark: true });
    expect(wrapper.hidden).toBe(false);
    expect(dark.getAttribute("aria-pressed")).toBe("true");
    expect(light.getAttribute("aria-pressed")).toBe("false");
  });

  it("switches, presses the clicked option and remembers it", () => {
    const { root, light, dark, store } = setup({ systemDark: true });
    light.dispatch("click");
    expect(root.dataset["theme"]).toBe("light");
    expect(light.getAttribute("aria-pressed")).toBe("true");
    expect(dark.getAttribute("aria-pressed")).toBe("false");
    expect(store.get("theme")).toBe("light");
  });
});
