import { SECTION_IDS, type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { KeyLink } from "./Key";
import { KeyRow } from "./KeyRow";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitch } from "./ThemeSwitch";

interface HeaderProps {
  text: Dictionary["header"];
  nav: Dictionary["nav"];
  cta: string;
  locale: Locale;
  homePath: string;
  /** Where the sections live: empty on the home page, the home path anywhere else. */
  sectionsBase: string;
  paths: Record<Locale, string>;
}

/**
 * On desktop the header is a 106 px box whose bar and row move to the compact 82 px state with
 * the scroll (see global.css), so its height never changes and the page below does not shift.
 */
export function Header({ text, nav, cta, locale, homePath, sectionsBase, paths }: HeaderProps) {
  return (
    <header className="-mx-5 px-5 md:pointer-events-none md:sticky md:top-0 md:z-10">
      <div
        aria-hidden="true"
        className="header-bar bg-canvas border-border absolute inset-x-0 top-0 bottom-6 hidden border-b md:block"
      />
      <div className="header-row relative mx-auto flex w-full max-w-page items-center justify-between py-4 md:py-7">
        <a href={homePath} aria-label={text.homeLabel} className="pointer-events-auto">
          <Logo />
        </a>
        <nav aria-label={nav.label} className="header-keys pointer-events-auto hidden md:block">
          <KeyRow layout="compact" locale={locale} labels={nav} base={sectionsBase} />
        </nav>
        <div className="pointer-events-auto hidden items-center gap-3 md:flex">
          <LanguageSwitch label={text.languageLabel} current={locale} paths={paths} />
          <div className="grid">
            <div className="header-theme col-start-1 row-start-1 justify-self-end">
              <ThemeSwitch
                label={text.themeLabel}
                labels={{ light: text.themeLight, dark: text.themeDark }}
              />
            </div>
            <KeyLink
              size="sm"
              tone="inverse"
              href={`${sectionsBase}#${SECTION_IDS.contact[locale]}`}
              className="header-cta invisible col-start-1 row-start-1 justify-self-end"
            >
              {cta}
            </KeyLink>
          </div>
        </div>
        <MobileMenu
          text={text}
          nav={nav}
          cta={cta}
          locale={locale}
          homePath={homePath}
          sectionsBase={sectionsBase}
          paths={paths}
        />
      </div>
    </header>
  );
}
