import type { Founder } from "@/config/site";
import { WHATSAPP_URL } from "@/config/site";
import { ContactChannel } from "./ContactChannel";

interface PartnerCardProps {
  founder: Founder;
  labels: { whatsapp: string; linkedin: string };
}

export function PartnerCard({ founder, labels }: PartnerCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="type-statement text-content">{founder.name}</p>
      <div className="flex flex-wrap gap-3">
        <ContactChannel
          icon="whatsapp"
          href={`${WHATSAPP_URL}${founder.whatsapp}`}
          aria-label={`${labels.whatsapp} ${founder.name}`}
        >
          {labels.whatsapp}
        </ContactChannel>
        <ContactChannel
          icon="linkedin"
          href={founder.linkedin}
          aria-label={`${labels.linkedin} ${founder.name}`}
        >
          {labels.linkedin}
        </ContactChannel>
      </div>
    </div>
  );
}
