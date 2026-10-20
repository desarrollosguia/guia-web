import { LOCALES, ROUTES, type Locale, type RouteName } from "@/config/site";
import { en } from "./en";
import { es } from "./es";
import type { Dictionary } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = { es, en };

export const getDictionary = (locale: Locale): Dictionary => DICTIONARIES[locale];

export const routePath = (route: RouteName, locale: Locale): string => ROUTES[route][locale];

export const alternates = (route: RouteName): { locale: Locale; path: string }[] =>
  LOCALES.map((locale) => ({ locale, path: routePath(route, locale) }));
