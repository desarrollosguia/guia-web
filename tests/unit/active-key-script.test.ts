import { describe, expect, it } from "vitest";
import { FakeElement, runPublicScript } from "./support/public-script";

type ObserverCallback = (entries: { target: FakeElement; isIntersecting: boolean }[]) => void;

const SECTION_IDS = ["servicios", "proyectos"];

const setup = () => {
  const sections = Object.fromEntries(
    SECTION_IDS.map((id) => [id, Object.assign(new FakeElement(), { id })]),
  );
  const links = SECTION_IDS.flatMap((id) => [
    new FakeElement({ href: `#${id}` }),
    new FakeElement({ href: `#${id}` }),
  ]);
  let notify: ObserverCallback = () => undefined;
  const observed: FakeElement[] = [];
  class FakeObserver {
    constructor(callback: ObserverCallback) {
      notify = callback;
    }
    observe(target: FakeElement) {
      observed.push(target);
    }
  }
  runPublicScript(
    "nav.js",
    { root: new FakeElement(), byId: sections, bySelector: { "[data-nav-link]": links } },
    { IntersectionObserver: FakeObserver },
  );
  const current = () =>
    links.filter((l) => l.getAttribute("aria-current")).map((l) => l.getAttribute("href"));
  const see = (id: string, isIntersecting: boolean) =>
    notify([{ target: sections[id] as FakeElement, isIntersecting }]);
  return { observed, sections, current, see };
};

describe("active key script", () => {
  it("observes every section a link points to", () => {
    const { observed, sections } = setup();
    expect(observed).toEqual(Object.values(sections));
  });

  it("marks every link to the visible section, in the header and the menu", () => {
    const { current, see } = setup();
    see("servicios", true);
    expect(current()).toEqual(["#servicios", "#servicios"]);
  });

  it("moves the mark when another section becomes visible", () => {
    const { current, see } = setup();
    see("servicios", true);
    see("servicios", false);
    see("proyectos", true);
    expect(current()).toEqual(["#proyectos", "#proyectos"]);
  });

  it("clears the mark when the visible section leaves and nothing replaces it", () => {
    const { current, see } = setup();
    see("servicios", true);
    see("servicios", false);
    expect(current()).toEqual([]);
  });

  it("keeps the mark when a section that was not active leaves", () => {
    const { current, see } = setup();
    see("servicios", true);
    see("proyectos", false);
    expect(current()).toEqual(["#servicios", "#servicios"]);
  });
});
