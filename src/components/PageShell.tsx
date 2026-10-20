import type { ReactNode } from "react";
import { type Locale } from "@/config/site";
import { getDictionary, routePath } from "@/i18n";
import type { RouteName } from "@/config/site";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";
import { LOCALES } from "@/config/site";

interface PageShellProps {
  locale: Locale;
  route: RouteName;
  children: ReactNode;
}

export function PageShell({ locale, route, children }: PageShellProps) {
  const t = getDictionary(locale);
  const paths = Object.fromEntries(LOCALES.map((l) => [l, routePath(route, l)])) as Record<
    Locale,
    string
  >;

  return (
    <div className="bg-canvas text-content font-sans flex min-h-screen flex-col px-5">
      <SkipLink label={t.skipLink} />
      <Header text={t.header} locale={locale} homePath={routePath("home", locale)} paths={paths} />
      <main id="main" className="mx-auto flex w-full max-w-page flex-1 flex-col">
        {children}
      </main>
      <Footer text={t.footer} />
    </div>
  );
}
