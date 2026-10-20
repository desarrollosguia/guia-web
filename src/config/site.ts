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

export interface Project {
  id: string;
  /** Optional: a project without a link is shown by name only. */
  href?: string;
}

export const PROJECTS = [
  { id: "audenpass" },
  { id: "world-cup-predictor", href: "https://wc-match-predictor-frontend.vercel.app/" },
] as const satisfies readonly Project[];

export type ProjectId = (typeof PROJECTS)[number]["id"];

export const SECTION_IDS = {
  projects: { es: "proyectos", en: "work" },
  contact: { es: "contacto", en: "contact" },
} as const satisfies Record<string, Record<Locale, string>>;

export const ROUTES = {
  home: { es: "/", en: "/en/" },
  notFound: { es: "/404", en: "/en/404" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteName = keyof typeof ROUTES;
