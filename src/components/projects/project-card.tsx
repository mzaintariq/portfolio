import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="flex h-full min-w-0 flex-col [align-items:start]"
      aria-labelledby={`project-${project.slug}`}
    >
      {project.image && (
        <Link
          className="relative mb-6 block aspect-[16/10] w-full shrink-0 bg-[var(--surface)]"
          href={`/projects/${project.slug}`}
          aria-label={`Explore ${project.title}`}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1488px) 688px, (min-width: 768px) calc((100vw - 112px) / 2), calc(100vw - 48px)"
            className="object-cover"
          />
        </Link>
      )}
      <div className="flex h-full min-w-0 flex-1 flex-col [align-items:start]">
        {project.featured && <p className="type-metadata text-[var(--accent)]">Featured project</p>}
        <h2
          className={`type-section-title mt-3 text-[var(--accent)] text-balance ${styles.projectPreviewTitle}`}
          id={`project-${project.slug}`}
        >
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="type-body mt-5 max-w-[var(--reading-max-width)] text-[var(--muted)]">
          {project.description}
        </p>
        {project.technologies.length > 0 && (
          <p className="type-metadata mt-5 max-w-[var(--reading-max-width)] leading-[1.8]">
            <span className="sr-only">Technologies: </span>
            {project.technologies.join(" · ")}
          </p>
        )}
        <div className="mt-auto pt-8">
          <Link className="action-link" href={`/projects/${project.slug}`}>
            Explore project
            <span className="sr-only">: {project.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
          {project.links.length > 0 && (
            <div
              className={`mt-3 flex flex-wrap items-center gap-x-6 gap-y-3 text-[length:var(--text-navigation)] ${styles.projectPreviewSecondaryActions}`}
            >
              {project.links.map((link) => {
                const isExternal = /^https?:\/\//.test(link.url);
                return (
                  <a
                    className="action-link"
                    href={link.url}
                    key={`${link.label}-${link.url}`}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label} <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
                    {isExternal && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
