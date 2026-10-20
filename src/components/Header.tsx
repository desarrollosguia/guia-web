import type { Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";

interface HeaderProps {
  text: Dictionary["header"];
  locale: Locale;
  homePath: string;
  paths: Record<Locale, string>;
}

export function Header({ text, locale, homePath, paths }: HeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-page items-center justify-between py-4 lg:py-7">
      <a href={homePath} aria-label={text.homeLabel}>
        <Logo />
      </a>
      <div className="flex items-center gap-3">
        <LanguageSwitch label={text.languageLabel} current={locale} paths={paths} />
        <div className="hidden md:block">
          <ThemeSwitch
            label={text.themeLabel}
            labels={{ system: text.themeSystem, light: text.themeLight, dark: text.themeDark }}
          />
        </div>
      </div>
    </header>
  );
}
