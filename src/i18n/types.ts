import type { NavSection, ProjectId } from "@/config/site";

export interface Dictionary {
  meta: { title: string; description: string };
  skipLink: string;
  header: {
    homeLabel: string;
    languageLabel: string;
    themeLabel: string;
    themeLight: string;
    themeDark: string;
    menuOpen: string;
    menuClose: string;
    menuLabel: string;
  };
  nav: { label: string } & Record<NavSection, string>;
  hero: { title: string; lead: string; contact: string; projects: string };
  services: {
    title: string;
    showIncluded: string;
    hideIncluded: string;
    items: readonly {
      name: string;
      line: string;
      /** The three things a service includes. */
      included: readonly [string, string, string];
    }[];
  };
  process: {
    title: string;
    intro: string;
    steps: readonly { name: string; line: string }[];
  };
  projects: {
    title: string;
    viewProject: string;
    items: Record<ProjectId, { name: string; imageAlt: string }>;
  };
  contact: { title: string; cta: string; github: string; whatsapp: string; linkedin: string };
  footer: {
    before: string;
    and: string;
    are: string;
    emphasis: string;
    /** Carries its own leading space or punctuation, so it attaches right after the emphasis. */
    after: string;
  };
  notFound: { metaTitle: string; title: string; back: string };
}
