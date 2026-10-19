interface KeycapProps {
  letter: string;
}

export function Keycap({ letter }: KeycapProps) {
  return (
    <div className="bg-surface-raised shadow-key rounded-lg size-28 sm:size-40 flex flex-col items-center justify-center gap-2 border border-border">
      <span className="type-key text-content">{letter}</span>
      <span className="bg-accent h-1 w-8 rounded-full" />
    </div>
  );
}
