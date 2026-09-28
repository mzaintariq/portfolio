import Image from "next/image";
import type { ProjectMedia, ProjectMediaGroup } from "@/content/project-details";

export const fullMediaSizes = "(min-width: 1360px) 1312px, calc(100vw - 48px)";
const halfMediaSizes = "(min-width: 1360px) 632px, (min-width: 1024px) calc((100vw - 96px) / 2), calc(100vw - 48px)";

type ProjectImageProps = {
  media: ProjectMedia;
  sizes?: string;
  eager?: boolean;
};

export function ProjectImage({ media, sizes = fullMediaSizes, eager = false }: ProjectImageProps) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-[var(--control-radius)] border border-[var(--border)] bg-[var(--surface)] p-2 sm:p-3">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={sizes}
          className="block h-auto w-full"
          loading={eager ? "eager" : "lazy"}
        />
      </div>
      {media.caption && (
        <figcaption className="type-metadata mt-3 max-w-[var(--reading-max-width)] text-pretty">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ProjectMediaRenderer({ group, full = false }: { group: ProjectMediaGroup; full?: boolean }) {
  const sizes = full ? fullMediaSizes : halfMediaSizes;

  if (group.type === "single") {
    return <ProjectImage media={group.media} sizes={sizes} />;
  }

  // Container queries keep pairs and galleries readable in half-width sections too.
  return (
    <figure className="@container min-w-0">
      {group.type === "responsive-pair" ? (
        <div className="grid grid-cols-1 items-start gap-6 @min-[30rem]:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
          <ProjectImage
            media={group.desktop}
            sizes={full ? "(min-width: 1360px) 966px, (min-width: 768px) 72vw, calc(100vw - 48px)" : sizes}
          />
          <div className="mx-auto w-full max-w-72 @min-[30rem]:max-w-none">
            <ProjectImage media={group.mobile} sizes="(min-width: 1360px) 312px, 288px" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-start gap-6 @min-[30rem]:grid-cols-2">
          {group.media.map((media, index) => (
            <ProjectImage key={`${media.src}-${index}`} media={media} sizes={halfMediaSizes} />
          ))}
        </div>
      )}
      {group.caption && (
        <figcaption className="type-metadata mt-4 max-w-[var(--reading-max-width)] text-pretty">
          {group.caption}
        </figcaption>
      )}
    </figure>
  );
}
