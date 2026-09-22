import type { Metadata } from "next";
import { CreativeWork } from "@/components/creative/creative-work";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./projects.module.css";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const orderedProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <main className={`${innerStyles.innerPage} ${styles.projectsPage}`}>
      <header className={`container ${innerStyles.innerPageHeader} ${innerStyles.indexPageMasthead}`}>
        <h1 className={`type-page-title ${innerStyles.innerPageTitle}`}>
          Projects
        </h1>
        <p className={`type-body ${innerStyles.innerPageIntroduction}`}>
          Personal products, experiments, and demos built outside my
          professional work.
        </p>
      </header>

      {orderedProjects.length > 0 ? (
        <div className={styles.projectsCollection}>
          <ul className={`container ${styles.projectGrid}`}>
            {orderedProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={`container type-body ${innerStyles.innerEmpty}`}>
          Projects will be added here.
        </p>
      )}
      <CreativeWork />
    </main>
  );
}
