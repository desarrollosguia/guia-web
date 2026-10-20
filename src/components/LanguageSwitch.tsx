import { HTML_LANG, LOCALES, type Locale } from "@/config/site";
import { KeyLink } from "./Key";

interface LanguageSwitchProps {
  label: string;
  current: Locale;
  paths: Record<Locale, string>;
}

export function LanguageSwitch({ label, current, paths }: LanguageSwitchProps) {
  return (
    <nav aria-label={label}>
      <ul className="flex gap-2">
        {LOCALES.map((locale) => (
          <li key={locale}>
            <KeyLink
              size="sm"
              href={paths[locale]}
              lang={HTML_LANG[locale]}
              hrefLang={HTML_LANG[locale]}
              aria-current={locale === current ? "page" : undefined}
              className="uppercase"
            >
              {locale}
            </KeyLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
