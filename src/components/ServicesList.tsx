import { useId, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { KeyButton } from "./Key";

type ServicesText = Dictionary["services"];

interface ServiceItemProps {
  position: number;
  item: ServicesText["items"][number];
  showLabel: string;
  hideLabel: string;
}

const pad = (position: number): string => String(position).padStart(2, "0");

function ServiceItem({ position, item, showLabel, hideLabel }: ServiceItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="border-border border-b">
      <div className="flex flex-col gap-5 py-6 lg:flex-row lg:justify-between lg:gap-6 lg:py-8">
        <div className="flex gap-4 lg:gap-8">
          <span aria-hidden="true" className="type-statement text-content-subtle tabular-nums">
            {pad(position)}
          </span>
          <div className="flex flex-col gap-3">
            <h3 className="type-title text-content">{item.name}</h3>
            <p className="type-body text-content-muted">{item.line}</p>
          </div>
        </div>
        <KeyButton
          size="sm"
          className="aria-expanded:bg-surface-raised aria-expanded:shadow-key-pressed shrink-0 self-start whitespace-nowrap"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? hideLabel : showLabel}
        </KeyButton>
      </div>
      <ul id={panelId} hidden={!open} className="flex flex-col gap-3 pb-8 lg:pl-22">
        {item.included.map((included) => (
          <li key={included} className="type-body text-content">
            {included}
          </li>
        ))}
      </ul>
    </li>
  );
}

interface ServicesListProps {
  text: ServicesText;
}

export function ServicesList({ text }: ServicesListProps) {
  return (
    <ul className="flex flex-col">
      {text.items.map((item, index) => (
        <ServiceItem
          key={item.name}
          position={index + 1}
          item={item}
          showLabel={text.showIncluded}
          hideLabel={text.hideIncluded}
        />
      ))}
    </ul>
  );
}
