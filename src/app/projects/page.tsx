import type { Metadata } from "next";
import { CreativeWork } from "@/components/creative/creative-work";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const orderedProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <main className="[--inner-section-space:clamp(var(--space-14),7vw,var(--space-24))] pb-0">
      <header className="container grid grid-cols-1 gap-6 pt-[clamp(var(--space-10),5vw,var(--space-20))] pb-[var(--inner-section-space)] [align-items:end] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <h1 className="type-page-title max-w-[14ch] text-balance [overflow-wrap:anywhere]">
          Projects
        </h1>
        <p className="type-body max-w-[var(--summary-max-width)] text-[var(--muted)] text-pretty">
          Personal products, experiments, and demos built outside my
          professional work.
        </p>
      </header>

      {orderedProjects.length > 0 ? (
        <div className="bg-[var(--surface)] py-[clamp(var(--space-10),6vw,var(--space-20))]">
          <ul className="media-container grid list-none grid-cols-1 gap-14 p-0 md:grid-cols-2 md:gap-16">
            {orderedProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="container type-body text-[var(--muted)]">
          Projects will be added here.
        </p>
      )}
      <CreativeWork />
    </main>
  );
}
