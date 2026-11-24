import type { ReactNode } from "react";
import {
  CONTACT_EMAIL,
  FOUNDERS,
  GITHUB_URL,
  PROJECTS,
  SECTION_IDS,
  type Locale,
} from "@/config/site";
import { getDictionary } from "@/i18n";
import { ContactChannel } from "./ContactChannel";
import { KeyLink } from "./Key";
import { KeyRow } from "./KeyRow";
import { PageShell } from "./PageShell";
import { PartnerCard } from "./PartnerCard";
import { ProcessSteps } from "./ProcessSteps";
import { ProjectRow, type ProjectImage } from "./ProjectRow";
import { SectionHeader } from "./SectionHeader";

interface HomePageProps {
  locale: Locale;
  images: Record<(typeof PROJECTS)[number]["id"], ProjectImage>;
  /** The services list: an island passed in as children so only its toggles are hydrated. */
  children: ReactNode;
}

export function HomePage({ locale, images, children }: HomePageProps) {
  const t = getDictionary(locale);
  const servicesId = SECTION_IDS.services[locale];
  const projectsId = SECTION_IDS.projects[locale];
  const processId = SECTION_IDS.process[locale];
  const contactId = SECTION_IDS.contact[locale];

  return (
    <PageShell locale={locale} route="home">
      <section className="flex flex-col gap-10 pt-14 lg:gap-14 lg:pt-22">
        <h1 className="type-display text-content max-w-display text-balance">{t.hero.title}</h1>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <p className="type-lead text-content max-w-lead">{t.hero.lead}</p>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
            <KeyLink size="md" tone="inverse" href={`#${contactId}`}>
              {t.hero.contact}
            </KeyLink>
            <KeyLink size="md" href={`#${projectsId}`}>
              {t.hero.projects}
            </KeyLink>
          </div>
        </div>
        <div className="hero-keys">
          <KeyRow layout="hero" locale={locale} labels={t.nav} base="" />
        </div>
      </section>

      <section
        id={servicesId}
        aria-labelledby={`${servicesId}-title`}
        className="flex flex-col gap-6 pt-24 lg:flex-row lg:gap-24 lg:pt-40"
      >
        <div className="lg:w-90 lg:shrink-0">
          <SectionHeader
            id={`${servicesId}-title`}
            title={t.services.title}
            ruleClassName="lg:hidden"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-12">
          {children}
          <KeyLink
            size="md"
            tone="inverse"
            href={`#${contactId}`}
            className="w-full lg:w-auto lg:self-start"
          >
            {t.hero.contact}
          </KeyLink>
        </div>
      </section>

      <section
        id={projectsId}
        aria-labelledby={`${projectsId}-title`}
        className="flex flex-col gap-6 pt-24 lg:gap-8 lg:pt-40"
      >
        <SectionHeader id={`${projectsId}-title`} title={t.projects.title} />
        <div className="flex flex-col gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectRow
              key={project.id}
              id={project.id}
              name={t.projects.items[project.id].name}
              href={project.href}
              viewLabel={t.projects.viewProject}
              image={images[project.id]}
            />
          ))}
        </div>
      </section>

      <section
        id={processId}
        aria-labelledby={`${processId}-title`}
        className="flex flex-col gap-6 pt-24 lg:flex-row lg:items-start lg:gap-24 lg:pt-40"
      >
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:w-90 lg:shrink-0">
          <SectionHeader
            id={`${processId}-title`}
            title={t.process.title}
            ruleClassName="lg:hidden"
          />
          <p className="type-lead text-content-muted">{t.process.intro}</p>
        </div>
        <ProcessSteps steps={t.process.steps} />
      </section>

      <section
        id={contactId}
        aria-labelledby={`${contactId}-title`}
        className="flex flex-col gap-8 pt-24 lg:gap-10 lg:pt-40"
      >
        <SectionHeader id={`${contactId}-title`} title={t.contact.title} />
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-24">
          <div className="flex flex-col items-start gap-6 lg:w-column lg:shrink-0">
            <p className="type-statement text-content">{CONTACT_EMAIL}</p>
            <KeyLink size="md" tone="inverse" href={`mailto:${CONTACT_EMAIL}`}>
              {t.contact.cta}
            </KeyLink>
            <ContactChannel icon="github" href={GITHUB_URL}>
              {t.contact.github}
            </ContactChannel>
          </div>
          <ul className="flex flex-col gap-10 lg:flex-row">
            {FOUNDERS.map((founder) => (
              <li key={founder.name}>
                <PartnerCard founder={founder} labels={t.contact} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
