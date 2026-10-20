import { HTML_LANG, LOCALES, type Locale } from "@/config/site";

interface LanguageSwitchProps {
  label: string;
  current: Locale;
  paths: Record<Locale, string>;
}

export function LanguageSwitch({ label, current, paths }: LanguageSwitchProps) {
  return (
    <nav aria-label={label}>
      <ul className="flex gap-1">
        {LOCALES.map((locale) => (
          <li key={locale}>
            <a
              href={paths[locale]}
              lang={HTML_LANG[locale]}
              hrefLang={HTML_LANG[locale]}
              aria-current={locale === current ? "page" : undefined}
              className="type-label text-content-muted aria-[current=page]:bg-surface-raised aria-[current=page]:text-content hover:text-content rounded-full px-3 py-2 uppercase"
            >
              {locale}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
