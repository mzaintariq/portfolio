import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { projects } from "@/content/projects";
import styles from "./featured-projects.module.css";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      className="py-[clamp(var(--space-12),6vw,var(--space-24))]"
      aria-labelledby="home-projects-title"
    >
      <div className="media-container">
        <header className="grid grid-cols-1 items-end gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10">
          <div>
            <p className="type-metadata mb-3 text-[var(--accent)]">02 / Projects</p>
            <h2 className="type-section-title" id="home-projects-title">
              {homeContent.featuredProjects.title}
            </h2>
            <p className="type-body mt-3 max-w-[var(--summary-max-width)] text-[var(--muted)]">
              {homeContent.featuredProjects.introduction}
            </p>
          </div>
          <Link className="action-link" href="/projects">
            {homeContent.featuredProjects.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </header>

        <ul className="mt-12 grid list-none grid-cols-1 gap-12 p-0 md:mt-16 md:grid-cols-2 md:gap-16">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <article
                className="flex h-full min-w-0 flex-col items-start"
                aria-labelledby={`home-project-${project.slug}`}
              >
                {project.image && (
                  <Link
                    className="relative mb-6 block aspect-[16/10] w-full"
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
                <h3
                  className={`type-work-title text-[var(--accent)] ${styles.homeProjectTitle}`}
                  id={`home-project-${project.slug}`}
                >
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <p className="type-metadata mt-3">
                  <span className="sr-only">Technologies: </span>
                  {project.technologies.slice(0, 4).join(" · ")}
                </p>
                <p className="type-body mt-5 mb-2 max-w-[var(--reading-max-width)] text-[var(--muted)]">
                  {project.description}
                </p>
                <div
                  className={`mt-auto flex flex-wrap gap-x-4 gap-y-0 pt-2 text-[length:var(--text-navigation)] ${styles.homeProjectActions}`}
                >
                  <Link className="action-link" href={`/projects/${project.slug}`}>
                    Explore project
                    <span className="sr-only">: {project.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  {project.links.length > 0 &&
                    project.links.map((link) => {
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
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
