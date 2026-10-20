import type { ReactNode } from "react";

export function Emphasis({ children }: { children: ReactNode }) {
  return <em className="emphasis-wavy not-italic">{children}</em>;
}
