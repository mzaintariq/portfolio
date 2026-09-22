import type { Metadata } from "next";
import { CreativeWork } from "@/components/creative-work";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const orderedProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <main className="inner-page projects-page">
      <header className="container inner-page-header index-page-masthead">
        <h1 className="type-page-title inner-page-title">
          Projects
        </h1>
        <p className="type-body inner-page-introduction">
          Personal products, experiments, and demos built outside my
          professional work.
        </p>
      </header>

      {orderedProjects.length > 0 ? (
        <div className="projects-collection">
          <ul className="container project-grid">
            {orderedProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="container type-body inner-empty">
          Projects will be added here.
        </p>
      )}
      <CreativeWork />
    </main>
  );
}
