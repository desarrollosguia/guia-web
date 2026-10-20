export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="type-label bg-inverse text-on-inverse sr-only rounded-md px-5 py-3 focus:not-sr-only focus:fixed focus:top-4 focus:left-5 focus:z-10"
    >
      {label}
    </a>
  );
}
