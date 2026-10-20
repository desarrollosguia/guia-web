export const SITE_NAME = "Guia";
export const SITE_URL = "https://desarrollosguia.com";
export const CONTACT_EMAIL = "hola@desarrollosguia.com";
export const GITHUB_URL = "https://github.com/desarrollosguia";
export const FOUNDED_YEAR = 2026;

export interface Founder {
  name: string;
  /** Digits only, with country code, as wa.me expects. */
  whatsapp: string;
  linkedin: string;
}

export const FOUNDERS: readonly Founder[] = [
  {
    name: "Florencia Morelli",
    whatsapp: "5491133292257",
    linkedin: "https://www.linkedin.com/in/florenciamorelli",
  },
  {
    name: "Juan Tomás Martínez",
    whatsapp: "5492474403165",
    linkedin: "https://www.linkedin.com/in/juan-tomas-martinez/",
  },
];

export const WHATSAPP_URL = "https://wa.me/";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export const HTML_LANG: Record<Locale, string> = { es: "es-AR", en: "en-US" };
export const OG_LOCALE: Record<Locale, string> = { es: "es_AR", en: "en_US" };

export const ROUTES = {
  home: { es: "/", en: "/en/" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteName = keyof typeof ROUTES;
