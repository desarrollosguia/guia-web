import { SECTION_IDS, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { Icon } from "./Icon";
import { keyClassName, KeyLink } from "./Key";
import { KeyRow } from "./KeyRow";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";

const MENU_ID = "menu";

interface MobileMenuProps {
  text: Dictionary["header"];
  nav: Dictionary["nav"];
  cta: string;
  locale: Locale;
  homePath: string;
  sectionsBase: string;
  paths: Record<Locale, string>;
}

/** Opens as a native popover, so it needs no JavaScript to open, close with Esc or return focus. */
export function MobileMenu({
  text,
  nav,
  cta,
  locale,
  homePath,
  sectionsBase,
  paths,
}: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        type="button"
        popoverTarget={MENU_ID}
        popoverTargetAction="show"
        aria-label={text.menuOpen}
        className={keyClassName({ size: "sm", className: "w-key-sm" })}
      >
        <Icon name="menu" className="size-5" />
      </button>
      <div
        id={MENU_ID}
        popover="auto"
        data-menu
        role="dialog"
        aria-label={text.menuLabel}
        className="bg-canvas text-content m-0 size-full max-h-none max-w-none border-0 p-0 open:flex open:flex-col"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <a href={homePath} aria-label={text.homeLabel}>
            <Logo />
          </a>
          <button
            type="button"
            popoverTarget={MENU_ID}
            popoverTargetAction="hide"
            aria-label={text.menuClose}
            className={keyClassName({
              size: "sm",
              className: "w-key-sm bg-surface-raised! shadow-none!",
            })}
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>
        <nav aria-label={nav.label} className="px-5 pt-10">
          <KeyRow layout="menu" locale={locale} labels={nav} base={sectionsBase} />
        </nav>
        <div className="flex flex-1 flex-col justify-end gap-4 px-5 pt-8 pb-14">
          <div className="flex items-center gap-4">
            <LanguageSwitch label={text.languageLabel} current={locale} paths={paths} />
            <ThemeSwitch
              label={text.themeLabel}
              labels={{ light: text.themeLight, dark: text.themeDark }}
            />
          </div>
          <KeyLink
            size="md"
            tone="inverse"
            href={`${sectionsBase}#${SECTION_IDS.contact[locale]}`}
            className="w-full"
          >
            {cta}
          </KeyLink>
        </div>
      </div>
    </div>
  );
}
