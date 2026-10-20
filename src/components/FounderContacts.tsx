import { FOUNDERS, WHATSAPP_URL, type Founder } from "@/config/site";

interface FounderContactsProps {
  title: string;
}

const CHANNELS = [
  {
    label: "WhatsApp",
    href: (founder: Founder) => `${WHATSAPP_URL}${founder.whatsapp}`,
  },
  { label: "LinkedIn", href: (founder: Founder) => founder.linkedin },
] as const;

export function FounderContacts({ title }: FounderContactsProps) {
  return (
    <section aria-labelledby="contact-title" className="flex flex-col gap-6">
      <h2 id="contact-title" className="type-title">
        {title}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {FOUNDERS.map((founder) => (
          <li
            key={founder.name}
            className="bg-surface border-border flex flex-col gap-4 rounded-md border p-6"
          >
            <span className="type-title">{founder.name}</span>
            <div className="flex flex-wrap gap-3">
              {CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href(founder)}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${channel.label} ${founder.name}`}
                  className="type-label text-content-muted hover:text-content border-border rounded-full border px-4 py-2"
                >
                  {channel.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
