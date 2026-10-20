import type { Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitch } from "./ThemeSwitch";

interface HeaderProps {
  text: Dictionary["header"];
  sections: { projects: string; contact: string };
  locale: Locale;
  homePath: string;
  paths: Record<Locale, string>;
}

export function Header({ text, sections, locale, homePath, paths }: HeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-page items-center justify-between py-4 lg:py-7">
      <a href={homePath} aria-label={text.homeLabel}>
        <Logo />
      </a>
      <div className="hidden items-center gap-3 md:flex">
        <LanguageSwitch label={text.languageLabel} current={locale} paths={paths} />
        <ThemeSwitch
          label={text.themeLabel}
          labels={{ system: text.themeSystem, light: text.themeLight, dark: text.themeDark }}
        />
      </div>
      <MobileMenu
        text={text}
        sections={sections}
        locale={locale}
        homePath={homePath}
        paths={paths}
      />
    </header>
  );
}
