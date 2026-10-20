import { CONTACT_EMAIL, FOUNDED_YEAR, GITHUB_URL, SITE_NAME, type Locale } from "@/config/site";
import { alternates, getDictionary } from "@/i18n";
import { FounderContacts } from "./FounderContacts";
import { Keycap } from "./Keycap";
import { LanguageSwitch } from "./LanguageSwitch";

interface LandingProps {
  locale: Locale;
}

const KEYS = ["F", "J"] as const;

export function Landing({ locale }: LandingProps) {
  const t = getDictionary(locale);
  const paths = Object.fromEntries(
    alternates("home").map(({ locale: l, path }) => [l, path]),
  ) as Record<Locale, string>;

  return (
    <div className="bg-canvas text-content font-sans flex min-h-screen flex-col px-6 sm:px-12">
      <header className="flex items-center justify-between py-6">
        <a href={paths[locale]} aria-label={t.header.homeLabel} className="type-title">
          {SITE_NAME}
        </a>
        <LanguageSwitch label={t.header.languageLabel} current={locale} paths={paths} />
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-16 py-16">
        <div className="flex flex-col gap-6">
          <h1 className="type-display max-w-3xl text-balance">{t.hero.title}</h1>
          <p className="type-lead text-content-muted max-w-2xl text-pretty">{t.hero.lead}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="bg-accent text-on-accent type-label rounded-full px-6 py-3"
            >
              {t.contact.cta}
            </a>
            <a
              href={GITHUB_URL}
              rel="noopener"
              className="type-label text-content-muted hover:text-content rounded-full border border-border px-6 py-3"
            >
              {t.contact.github}
            </a>
          </div>
        </div>

        <section className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
          <div role="img" aria-label={t.brand.keysLabel} className="flex gap-6">
            {KEYS.map((letter) => (
              <Keycap key={letter} letter={letter} />
            ))}
          </div>
          <p className="type-lead text-content-muted max-w-md text-pretty">{t.brand.idea}</p>
        </section>

        <FounderContacts title={t.contact.title} />
      </main>

      <footer className="type-body text-content-muted py-6">
        © {FOUNDED_YEAR} {SITE_NAME}
      </footer>
    </div>
  );
}
