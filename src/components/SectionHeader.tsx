interface SectionHeaderProps {
  id: string;
  title: string;
  /** Extra classes for the rule under the title, e.g. to hide it at some widths. */
  ruleClassName?: string | undefined;
}

export function SectionHeader({ id, title, ruleClassName }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <h2 id={id} className="type-headline text-content">
        {title}
      </h2>
      <div aria-hidden="true" className={`bg-border h-px w-full ${ruleClassName ?? ""}`} />
    </div>
  );
}
