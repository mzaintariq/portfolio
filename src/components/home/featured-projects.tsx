import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { projects } from "@/content/projects";
import homeSectionStyles from "./home-section.module.css";
import styles from "./featured-projects.module.css";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className={styles.homeProjects} aria-labelledby="home-projects-title">
      <div className="container">
        <header className={styles.homeProjectsHeading}>
          <div className={homeSectionStyles.homeSectionIntro}>
            <p className={`type-metadata ${homeSectionStyles.homeSectionLabel}`}>02 / Projects</p>
            <h2 className="type-section-title" id="home-projects-title">
              {homeContent.featuredProjects.title}
            </h2>
            <p className={`type-body ${homeSectionStyles.homeSectionDescription}`}>
              {homeContent.featuredProjects.introduction}
            </p>
          </div>
          <Link className="action-link" href="/projects">
            {homeContent.featuredProjects.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </header>

        <ul className={styles.homeProjectList}>
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <article className={styles.homeProject} aria-labelledby={`home-project-${project.slug}`}>
                {project.image && (
                  <Link
                    className={styles.homeProjectImage}
                    href={`/projects/${project.slug}`}
                    aria-label={`Explore ${project.title}`}
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1200px) 544px, (min-width: 768px) 45vw, calc(100vw - 32px)"
                    />
                  </Link>
                )}
                <h3 className={`type-work-title ${styles.homeProjectTitle}`} id={`home-project-${project.slug}`}>
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <p className={`type-metadata ${styles.homeProjectTechnologies}`}>
                  <span className="sr-only">Technologies: </span>
                  {project.technologies.slice(0, 4).join(" · ")}
                </p>
                <p className={`type-body ${styles.homeProjectDescription}`}>{project.description}</p>
                <Link className={`action-link ${styles.homeProjectDetailLink}`} href={`/projects/${project.slug}`}>
                  Explore project
                  <span className="sr-only">: {project.title}</span>
                  <span aria-hidden="true">→</span>
                </Link>
                {project.links.length > 0 && (
                  <div className={styles.homeProjectExternalLinks}>
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
                          {link.label}
                          <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
                          {isExternal && <span className="sr-only">(opens in a new tab)</span>}
                        </a>
                      );
                    })}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
