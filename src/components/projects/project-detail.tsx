import Link from "next/link";
import type { Project } from "@/content/projects";
import type { ProjectDetail as ProjectDetailContent, ProjectDetailSection } from "@/content/project-details";
import { ProjectImage, ProjectMediaRenderer } from "./project-media";

type ProjectDetailProps = {
  project: Project;
  details?: ProjectDetailContent;
};

function ProjectActions({ links }: { links: Project["links"] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {links.map((link) => {
        const isExternal = /^https?:\/\//.test(link.url);
        return (
          <li key={`${link.label}-${link.url}`}>
            <a
              className="action-link type-navigation"
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
  );
}

function DetailSection({ section }: { section: ProjectDetailSection }) {
  const isResponsivePair = section.media?.type === "responsive-pair";
  const full = section.layout === "full" || !section.media || isResponsivePair;
  const textRight = !full && section.layout === "text-right";
  const headingId = `project-section-${section.id}`;

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      className="grid scroll-mt-8 grid-cols-1 items-start gap-8 border-t border-[var(--border)] py-12 lg:grid-cols-2"
    >
      <div className={`min-w-0 ${full ? "lg:col-span-2" : ""} ${textRight ? "lg:col-start-2 lg:row-start-1" : ""}`}>
        {section.eyebrow && <p className="type-metadata mb-4 text-[var(--accent)]">{section.eyebrow}</p>}
        <h2 id={headingId} className={`type-work-title text-pretty ${full ? "" : "max-w-[28ch]"}`}>{section.title}</h2>
        <p className="type-body mt-5 whitespace-pre-line text-[var(--muted)]">{section.body}</p>
        {!!section.bullets?.length && (
          <ul className="type-body mt-6 list-disc space-y-3 pl-5 text-[var(--muted)] marker:text-[var(--accent)]">
            {section.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
        )}
      </div>
      {section.media && (
        <div className={`min-w-0 ${full ? "lg:col-span-2" : ""} ${textRight ? "lg:col-start-1 lg:row-start-1" : ""}`}>
          <ProjectMediaRenderer group={section.media} full={full} />
        </div>
      )}
    </section>
  );
}

export function ProjectDetail({ project, details }: ProjectDetailProps) {
  return (
    <main className="pb-12 [overflow-wrap:anywhere]">
      <header className="container pt-4 pb-10">
        <Link className="action-link type-navigation" href="/projects">
          <span aria-hidden="true">←</span> Projects
        </Link>
        <div className="mt-6 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-12">
          <h1 className="type-page-title lg:text-[4.8rem] max-w-[14ch] text-balance">{project.title}</h1>
          <p className="type-body lg:text-right lg:justify-self-end max-w-[var(--summary-max-width)] text-pretty text-[var(--muted)]">{project.description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-6 border-t border-[var(--border)] pt-6 lg:mt-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {project.links.length > 0 && <ProjectActions links={project.links} />}
          {project.technologies.length > 0 && (
            <dl className="max-w-[var(--summary-max-width)] lg:max-w-[50%]">
              <dt className="type-metadata mb-2 text-[var(--accent)]">Technologies</dt>
              <dd className="type-metadata leading-relaxed">{project.technologies.join(" · ")}</dd>
            </dl>
          )}
        </div>
      </header>

      {project.image && (
        <div className="media-container">
          <ProjectImage media={project.image} eager />
        </div>
      )}

      <div className="container">
        <section className="grid grid-cols-1 gap-6 py-12" aria-labelledby="project-overview">
          <h2 className="type-work-title" id="project-overview">Overview</h2>
          <div className="type-body space-y-6 whitespace-pre-line text-[var(--muted)]">
            <p>{project.longDescription}</p>
            {details?.introduction && <p>{details.introduction}</p>}
          </div>
        </section>

        {details?.sections.map((section) => <DetailSection key={section.id} section={section} />)}

        {project.links.length > 0 && (
          <footer className="flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-metadata">Explore {project.title}</p>
            <ProjectActions links={project.links} />
          </footer>
        )}
      </div>
    </main>
  );
}
