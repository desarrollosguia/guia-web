import { SITE_NAME } from "@/config/site";

export function Logo() {
  return (
    <span className="flex flex-col gap-1">
      <span className="type-wordmark text-content">{SITE_NAME}</span>
      <span aria-hidden="true" className="bg-accent h-bar-thick-lg w-bar-md rounded-full" />
    </span>
  );
}
