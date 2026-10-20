import { describe, expect, it } from "vitest";
import { FOUNDERS } from "@/config/site";

describe("founders", () => {
  it.each(FOUNDERS)("$name has a WhatsApp number in wa.me format", ({ whatsapp }) => {
    expect(whatsapp).toMatch(/^549\d{10}$/);
  });

  it.each(FOUNDERS)("$name has a LinkedIn profile link", ({ linkedin }) => {
    expect(linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\/[\w-]+\/?$/);
  });
});
