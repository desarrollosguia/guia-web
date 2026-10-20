import type { Locale } from "@/config/site";
import { getDictionary, routePath } from "@/i18n";
import { KeyLink } from "./Key";
import { PageShell } from "./PageShell";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <PageShell locale={locale} route="notFound">
      <section className="flex flex-col items-start gap-8 pt-24 pb-40 lg:gap-12 lg:pt-40 lg:pb-80">
        <h1 className="type-display text-content max-w-display text-balance">{t.notFound.title}</h1>
        <KeyLink size="md" tone="inverse" href={routePath("home", locale)}>
          {t.notFound.back}
        </KeyLink>
      </section>
    </PageShell>
  );
}
