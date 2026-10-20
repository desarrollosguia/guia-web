interface SectionHeaderProps {
  id: string;
  title: string;
}

export function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <h2 id={id} className="type-headline text-content">
        {title}
      </h2>
      <div aria-hidden="true" className="bg-border h-px w-full" />
    </div>
  );
}
