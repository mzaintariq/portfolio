import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./project-detail.module.css";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className={`container ${innerStyles.innerPage}`}>
      <header className={styles.projectDetailHeader}>
        <Link className={`action-link ${styles.projectBackLink}`} href="/projects">
          Back to Projects <span aria-hidden="true">→</span>
        </Link>
        <div className={styles.projectDetailIntro}>
          <h1 className={`type-page-title ${innerStyles.innerPageTitle}`}>{project.title}</h1>
          <p className={`type-body ${innerStyles.innerPageIntroduction}`}>{project.description}</p>
        </div>
      </header>

      {project.image && (
        <div className={styles.projectDetailImage}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1488px) 1440px, calc(100vw - 48px)"
            className="object-contain"
            loading="eager"
          />
        </div>
      )}

      <div className={styles.projectDetailBody}>
        <section className={styles.projectOverview} aria-labelledby="project-overview">
          <h2 className="type-work-title" id="project-overview">Overview</h2>
          <p className="type-body">{project.longDescription}</p>
        </section>

        <div className={styles.projectDetailFacts}>
          {project.technologies.length > 0 && (
            <section aria-labelledby="project-technologies">
              <h2 className={`type-metadata ${innerStyles.innerLabel}`} id="project-technologies">Technologies</h2>
              <ul className={styles.projectTechnologyList}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </section>
          )}
          {project.links.length > 0 && (
            <section aria-labelledby="project-links">
              <h2 className={`type-metadata ${innerStyles.innerLabel}`} id="project-links">Links</h2>
              <ul className={innerStyles.innerActions}>
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
