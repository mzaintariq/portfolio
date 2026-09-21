import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-preview" aria-labelledby={`project-${project.slug}`}>
      {project.image && (
        <Link className="project-preview-image" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1200px) 544px, (min-width: 768px) 45vw, calc(100vw - 32px)"
            className="object-cover"
          />
        </Link>
      )}
      <div className="project-preview-copy">
        {project.featured && <p className="type-metadata inner-label">Featured project</p>}
        <h2 className="type-section-title project-preview-title" id={`project-${project.slug}`}>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="type-body project-preview-description">{project.description}</p>
        {project.technologies.length > 0 && (
          <p className="type-metadata inner-technologies">
            <span className="sr-only">Technologies: </span>
            {project.technologies.join(" · ")}
          </p>
        )}
        <div className="project-preview-actions">
          <Link className="action-link" href={`/projects/${project.slug}`}>
            Explore project
            <span className="sr-only">: {project.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
          {project.links.length > 0 && (
            <div className="inner-actions inner-secondary-actions">
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
