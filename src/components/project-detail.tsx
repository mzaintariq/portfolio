import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="container inner-page project-detail-page">
      <header className="project-detail-header">
        <Link className="action-link project-back-link" href="/projects">
          Back to Projects <span aria-hidden="true">→</span>
        </Link>
        <div className="project-detail-intro">
          <h1 className="type-page-title inner-page-title">{project.title}</h1>
          <p className="type-body inner-page-introduction">{project.description}</p>
        </div>
      </header>

      {project.image && (
        <div className="project-detail-image">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1184px) 1152px, calc(100vw - 32px)"
            className="object-contain"
            loading="eager"
          />
        </div>
      )}

      <div className="project-detail-body">
        <section className="project-overview" aria-labelledby="project-overview">
          <h2 className="type-work-title" id="project-overview">Overview</h2>
          <p className="type-body">{project.longDescription}</p>
        </section>

        <div className="project-detail-facts">
          {project.technologies.length > 0 && (
            <section aria-labelledby="project-technologies">
              <h2 className="type-metadata inner-label" id="project-technologies">Technologies</h2>
              <ul className="project-technology-list">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </section>
          )}
          {project.links.length > 0 && (
            <section aria-labelledby="project-links">
              <h2 className="type-metadata inner-label" id="project-links">Links</h2>
              <ul className="inner-actions">
                {project.links.map((link) => {
                  const isExternal = /^https?:\/\//.test(link.url);
                  return (
                    <li key={`${link.label}-${link.url}`}>
                      <a
                        className="action-link"
                        href={link.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        {link.label} <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
                        {isExternal && <span className="sr-only">(opens in a new tab)</span>}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
