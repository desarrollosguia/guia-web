import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

type Palette = Record<string, string>;
const { color } = JSON.parse(readFileSync("design/tokens.local.json", "utf8")) as {
  color: { dark: Palette; light: Palette };
};

const TEXT_MINIMUM = 4.5;
const GRAPHIC_MINIMUM = 3;
const CHANNELS = [
  { start: 1, weight: 0.2126 },
  { start: 3, weight: 0.7152 },
  { start: 5, weight: 0.0722 },
] as const;
const HEX_RADIX = 16;
const CHANNEL_MAX = 255;
const LINEAR_THRESHOLD = 0.03928;

const luminance = (hex: string): number =>
  CHANNELS.reduce((total, { start, weight }) => {
    const value = parseInt(hex.slice(start, start + 2), HEX_RADIX) / CHANNEL_MAX;
    const linear = value <= LINEAR_THRESHOLD ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    return total + weight * linear;
  }, 0);

const contrast = (foreground: string, background: string): number => {
  const [first, second] = [luminance(foreground), luminance(background)];
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
};

const valueOf = (palette: Palette, name: string): string => {
  const value = palette[name];
  if (value === undefined) throw new Error(`Missing color token: ${name}`);
  return value;
};

const PAIRS: readonly [string, string, number][] = [
  ["content", "canvas", TEXT_MINIMUM],
  ["content-muted", "canvas", TEXT_MINIMUM],
  ["content-subtle", "canvas", TEXT_MINIMUM],
  ["content", "surface", TEXT_MINIMUM],
  ["content-muted", "surface", TEXT_MINIMUM],
  ["content-subtle", "surface", TEXT_MINIMUM],
  ["on-inverse", "inverse", TEXT_MINIMUM],
  ["border-strong", "canvas", GRAPHIC_MINIMUM],
  ["border-strong", "surface", GRAPHIC_MINIMUM],
  ["focus", "canvas", GRAPHIC_MINIMUM],
  ["accent", "canvas", GRAPHIC_MINIMUM],
];

describe("color tokens", () => {
  it("has the same names in both themes", () => {
    expect(Object.keys(color.light).sort()).toEqual(Object.keys(color.dark).sort());
  });

  describe.each(["dark", "light"] as const)("%s theme", (theme) => {
    it.each(PAIRS)("%s on %s reaches the AA minimum", (foreground, background, minimum) => {
      const palette = color[theme];
      expect(
        contrast(valueOf(palette, foreground), valueOf(palette, background)),
      ).toBeGreaterThanOrEqual(minimum);
    });
  });
});
