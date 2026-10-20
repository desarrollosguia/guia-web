import type { ComponentPropsWithoutRef } from "react";
import { Icon, type IconName } from "./Icon";

interface ContactChannelProps extends ComponentPropsWithoutRef<"a"> {
  icon: IconName;
}

export function ContactChannel({ icon, children, ...rest }: ContactChannelProps) {
  return (
    <a
      target="_blank"
      rel="noopener"
      className="type-label text-content-muted border-border-strong hover:border-content hover:text-content inline-flex items-center gap-2 rounded-full border px-4 py-2 transition duration-fast ease-standard"
      {...rest}
    >
      <Icon name={icon} className="size-4" />
      {children}
    </a>
  );
}
