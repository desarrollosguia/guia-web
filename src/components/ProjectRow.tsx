import { KeyLink } from "./Key";

export interface ProjectImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

interface ProjectRowProps {
  id: string;
  name: string;
  href?: string | undefined;
  viewLabel: string;
  image: ProjectImage;
}

export function ProjectRow({ id, name, href, viewLabel, image }: ProjectRowProps) {
  const titleId = `project-${id}`;
  return (
    <article
      aria-labelledby={titleId}
      className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-12 lg:py-10"
    >
      <div className="flex flex-col items-start gap-5 lg:w-column">
        <h3 id={titleId} className="type-title text-content text-balance">
          {name}
        </h3>
        {href && (
          <KeyLink size="sm" href={href} target="_blank" rel="noopener" aria-describedby={titleId}>
            {viewLabel}
          </KeyLink>
        )}
      </div>
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="(min-width: 64rem) 32.5rem, 100vw"
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="aspect-8/5 w-full object-cover lg:w-column"
      />
    </article>
  );
}
