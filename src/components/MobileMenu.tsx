import { SECTION_IDS, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { Icon } from "./Icon";
import { keyClassName, KeyLink } from "./Key";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";

const MENU_ID = "menu";

interface MobileMenuProps {
  text: Dictionary["header"];
  sections: { projects: string; contact: string };
  locale: Locale;
  homePath: string;
  paths: Record<Locale, string>;
}

/** Opens as a native popover, so it needs no JavaScript to open, close with Esc or return focus. */
export function MobileMenu({ text, sections, locale, homePath, paths }: MobileMenuProps) {
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
        <nav className="flex flex-col gap-3 px-5 pt-10">
          <KeyLink size="lg" relief href={`#${SECTION_IDS.projects[locale]}`}>
            {sections.projects}
          </KeyLink>
          <KeyLink size="lg" relief href={`#${SECTION_IDS.contact[locale]}`}>
            {sections.contact}
          </KeyLink>
        </nav>
        <div className="flex flex-1 items-end justify-between gap-4 px-5 pt-6 pb-10">
          <LanguageSwitch label={text.languageLabel} current={locale} paths={paths} />
          <ThemeSwitch
            label={text.themeLabel}
            labels={{ system: text.themeSystem, light: text.themeLight, dark: text.themeDark }}
          />
        </div>
      </div>
    </div>
  );
}
