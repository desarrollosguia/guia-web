import { NAV_SECTIONS, SECTION_IDS, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { KeyLink } from "./Key";

const LAYOUTS = {
  hero: { size: "lg", list: "grid grid-cols-2 gap-3 md:max-w-nav-row md:grid-cols-4 md:gap-5" },
  menu: { size: "lg", list: "flex flex-col gap-3" },
  compact: { size: "sm", list: "flex gap-3" },
} as const;

export type KeyRowLayout = keyof typeof LAYOUTS;

interface KeyRowProps {
  layout: KeyRowLayout;
  locale: Locale;
  labels: Dictionary["nav"];
  /** Where the sections live: empty on the home page, the home path anywhere else. */
  base: string;
}

export function KeyRow({ layout, locale, labels, base }: KeyRowProps) {
  const { size, list } = LAYOUTS[layout];
  return (
    <ul className={list}>
      {NAV_SECTIONS.map((section) => (
        <li key={section} className={layout === "compact" ? undefined : "contents"}>
          <KeyLink
            size={size}
            href={`${base}#${SECTION_IDS[section][locale]}`}
            data-nav-link
            className={layout === "compact" ? undefined : "w-full"}
          >
            {labels[section]}
          </KeyLink>
        </li>
      ))}
    </ul>
  );
}
