import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="container pb-20 sm:pb-28">
      <header className="pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <Link
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
          href="/projects"
        >
          <span aria-hidden="true">←</span> Back to Projects
        </Link>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <h1 className="max-w-4xl text-[clamp(3rem,8vw,6.5rem)] leading-[0.98] font-semibold tracking-[-0.065em]">
            {project.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {project.description}
          </p>
        </div>
      </header>

      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--foreground)] sm:aspect-[16/8]">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-end p-6 text-[var(--background)] sm:p-10 lg:p-14"
          >
            <span className="max-w-3xl text-[clamp(2.25rem,6vw,5rem)] leading-[1] font-semibold tracking-[-0.06em]">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <section
        aria-labelledby="project-overview"
        className="grid gap-6 border-b border-[var(--border)] py-10 sm:py-14 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12"
      >
        <h2
          className="text-xl leading-tight font-semibold tracking-[-0.03em] sm:text-2xl"
          id="project-overview"
        >
          Overview
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {project.longDescription}
        </p>
      </section>

      {project.technologies.length > 0 && (
        <section
          aria-labelledby="project-technologies"
          className="grid gap-6 border-b border-[var(--border)] py-10 sm:py-14 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12"
        >
          <h2
            className="text-xl leading-tight font-semibold tracking-[-0.03em] sm:text-2xl"
            id="project-technologies"
          >
            Technologies
          </h2>
          <ul className="flex max-w-2xl flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.links.length > 0 && (
        <section
          aria-labelledby="project-links"
          className="grid gap-6 py-10 sm:py-14 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12"
        >
          <h2
            className="text-xl leading-tight font-semibold tracking-[-0.03em] sm:text-2xl"
            id="project-links"
          >
            Links
          </h2>
          <ul className="flex flex-wrap gap-3">
            {project.links.map((link) => {
              const isExternal = /^https?:\/\//.test(link.url);

              return (
                <li key={`${link.label}-${link.url}`}>
                  <a
                    className="inline-flex min-h-11 items-center gap-2 border border-[var(--border)] px-4 text-sm font-medium hover:border-[var(--foreground)] hover:bg-[var(--border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                    href={link.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                    {isExternal && (
                      <span className="sr-only">(opens in a new tab)</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
}
