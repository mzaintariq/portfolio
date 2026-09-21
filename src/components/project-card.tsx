import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden border border-[var(--border)] hover:border-[var(--muted)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--foreground)]">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-end p-6 text-[var(--background)] sm:p-8"
          >
            <span className="max-w-md text-3xl leading-tight font-semibold tracking-[-0.05em] sm:text-4xl">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {project.featured && (
          <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-[var(--muted)] uppercase">
            Featured project
          </p>
        )}
        <h2 className="text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl">
          <Link
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
            href={`/projects/${project.slug}`}
          >
            {project.title}
          </Link>
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        )}

        {project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-8">
            {project.links.map((link) => {
              const isExternal = /^https?:\/\//.test(link.url);

              return (
                <a
                  className="inline-flex min-h-11 items-center gap-2 border border-[var(--border)] px-4 text-sm font-medium hover:border-[var(--foreground)] hover:bg-[var(--border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                  href={link.url}
                  key={`${link.label}-${link.url}`}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {link.label} <span aria-hidden="true">↗</span>
                  {isExternal && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
