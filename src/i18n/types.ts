import type { ProjectId } from "@/config/site";

export interface Dictionary {
  meta: { title: string; description: string };
  skipLink: string;
  header: {
    homeLabel: string;
    languageLabel: string;
    themeLabel: string;
    themeSystem: string;
    themeLight: string;
    themeDark: string;
  };
  hero: { title: string; lead: string; contact: string; projects: string };
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
