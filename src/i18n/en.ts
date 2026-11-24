import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Custom websites, apps, bots and systems",
    description:
      "We design and build websites, apps, bots and custom systems for companies and entrepreneurs.",
  },
  skipLink: "Skip to content",
  header: {
    homeLabel: "Go to home",
    languageLabel: "Language",
    themeLabel: "Theme",
    themeLight: "Light",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuLabel: "Menu",
    themeDark: "Dark",
  },
  nav: {
    label: "Main",
    services: "Services",
    projects: "Projects",
    process: "How we work",
    about: "About",
  },
  hero: {
    title: "From idea to a working system",
    lead: "We design and build to fit you. Tell us what you need.",
    contact: "Get in touch",
    projects: "Our projects",
  },
  services: {
    title: "Services",
    showIncluded: "What's included",
    hideIncluded: "Hide",
    items: [
      {
        name: "Websites",
        line: "So your business can be found online and visitors know what to do.",
        included: ["Interface design", "Site development", "Launch"],
      },
      {
        name: "Apps",
        line: "To turn an idea or a process into an app your team or your customers can use.",
        included: ["Experience design", "Development", "Testing"],
      },
      {
        name: "Bots",
        line: "To handle questions and bookings without answering everything by hand.",
        included: ["Conversation design", "Bot development", "Testing"],
      },
      {
        name: "Custom systems",
        line: "To organize what's done today in spreadsheets and messages, with a system built around how you work.",
        included: ["Data model", "Development", "Integration with what you already use"],
      },
      {
        name: "Integrations and automation",
        line: "So the systems you already use talk to each other and repetitive tasks go away.",
        included: ["Analysis of the systems involved", "API connections", "Integration testing"],
      },
    ],
  },
  projects: {
    title: "Projects",
    viewProject: "View project",
    items: {
      audenpass: {
        name: "Audenpass",
        imageAlt:
          "Audenpass home screen with the headline «The ticket to unique moments» and a featured event",
      },
    },
  },
  contact: {
    title: "Contact",
    cta: "Get in touch",
    github: "GitHub",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
  },
  footer: {
    before: "The",
    and: "and",
    are: "are your keyboard's",
    emphasis: "home keys",
    after: ": this is your starting point",
  },
  notFound: {
    metaTitle: "Page not found",
    title: "We couldn't find this page.",
    back: "Back to home",
  },
};
