import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

type Listener = (event?: unknown) => void;

export class FakeElement {
  readonly attributes = new Map<string, string>();
  readonly listeners = new Map<string, Listener[]>();
  hidden = true;
  id = "";
  dataset: Record<string, string> = {};

  constructor(attributes: Record<string, string> = {}) {
    for (const [name, value] of Object.entries(attributes)) this.attributes.set(name, value);
  }

  getAttribute(name: string): string | null {
    return this.attributes.get(name) ?? null;
  }
  setAttribute(name: string, value: string): void {
    this.attributes.set(name, value);
  }
  removeAttribute(name: string): void {
    this.attributes.delete(name);
  }
  addEventListener(type: string, listener: Listener): void {
    this.listeners.set(type, [...(this.listeners.get(type) ?? []), listener]);
  }
  dispatch(type: string): void {
    for (const listener of this.listeners.get(type) ?? []) listener();
  }
}

export interface Page {
  root: FakeElement;
  byId: Record<string, FakeElement>;
  bySelector: Record<string, FakeElement[]>;
}

/** Runs a script from public/ against a minimal DOM, the way the browser would load it. */
export function runPublicScript(
  file: string,
  page: Page,
  globals: Record<string, unknown> = {},
): void {
  const document = new FakeElement();
  Object.assign(document, {
    documentElement: page.root,
    getElementById: (id: string) => page.byId[id] ?? null,
    querySelectorAll: (selector: string) => page.bySelector[selector] ?? [],
  });
  runInNewContext(readFileSync(`public/${file}`, "utf8"), { document, ...globals });
  document.dispatch("DOMContentLoaded");
}
