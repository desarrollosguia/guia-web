import { getImage } from "astro:assets";
import audenpass from "@/assets/projects/audenpass.png";
import predictor from "@/assets/projects/predictor.png";
import type { ProjectId } from "@/config/site";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import type { ProjectImage } from "@/components/ProjectRow";

const SOURCES = { audenpass, "world-cup-predictor": predictor } as const satisfies Record<
  ProjectId,
  ImageMetadata
>;
const SRCSET_WIDTHS = [520, 1040] as const;
const FORMAT = "webp";

export async function getProjectImages(locale: Locale): Promise<Record<ProjectId, ProjectImage>> {
  const t = getDictionary(locale);
  const entries = await Promise.all(
    (Object.keys(SOURCES) as ProjectId[]).map(async (id) => {
      const variants = await Promise.all(
        SRCSET_WIDTHS.map((width) => getImage({ src: SOURCES[id], width, format: FORMAT })),
      );
      const [base, largest] = [variants[0], variants[variants.length - 1]];
      if (!base || !largest) throw new Error(`No image generated for ${id}`);
      const srcSet = variants
        .map((variant, index) => `${variant.src} ${SRCSET_WIDTHS[index]}w`)
        .join(", ");
      const image: ProjectImage = {
        src: largest.src,
        srcSet,
        width: Number(base.attributes.width),
        height: Number(base.attributes.height),
        alt: t.projects.items[id].imageAlt,
      };
      return [id, image] as const;
    }),
  );
  return Object.fromEntries(entries) as Record<ProjectId, ProjectImage>;
}
