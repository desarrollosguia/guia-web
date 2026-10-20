import { CONTACT_EMAIL, FOUNDED_YEAR, SITE_NAME } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { Emphasis } from "./Emphasis";
import { KeyCap } from "./Key";

export function Footer({ text }: { text: Dictionary["footer"] }) {
  return (
    <footer className="mx-auto flex w-full max-w-page flex-col gap-8 pt-24 pb-14 lg:pt-30 lg:pb-24">
      <div aria-hidden="true" className="bg-border h-px w-full" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
        <p className="type-statement text-content">
          {text.before}{" "}
          <KeyCap size="xs" relief className="mx-1 align-middle">
            F
          </KeyCap>{" "}
          {text.and}{" "}
          <KeyCap size="xs" relief className="mx-1 align-middle">
            J
          </KeyCap>{" "}
          {text.are} <Emphasis>{text.emphasis}</Emphasis>
          {text.after}
        </p>
        <div className="type-small text-content-muted flex flex-col gap-2 lg:items-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-content">
            {CONTACT_EMAIL}
          </a>
          <p>
            © {FOUNDED_YEAR} {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
