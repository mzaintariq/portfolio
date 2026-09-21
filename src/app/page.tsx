import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { workItems } from "@/content/work";

export default function Home() {
  const featuredWork = homeContent.featuredWork.slugs.flatMap((slug) => {
    const item = workItems.find((work) => work.slug === slug);
    return item ? [item] : [];
  });
  const featuredProjects = projects.filter((project) => project.featured);
  const aboutSupportingCopy = aboutContent.sections
    .find((section) => section.id === "how-i-work")
    ?.entries.find((entry) => entry.heading === "User experience")?.text;

  return (
    <main className="home-page">
      <Hero
        profile={profile}
        currentRole="Senior Software Engineer"
        currentCompany="Arbisoft"
      />

      <section className="home-work" aria-labelledby="home-work-title">
        <div className="container home-work-layout">
          <header className="home-section-intro">
            <p className="type-metadata home-section-label">01 / Selected work</p>
            <h2 className="type-section-title" id="home-work-title">
              {homeContent.featuredWork.title}
            </h2>
            <p className="type-body home-section-description">
              {homeContent.featuredWork.introduction}
            </p>
            <Link className="action-link" href="/work">
              {homeContent.featuredWork.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </header>

          <ol className="home-work-stories">
            {featuredWork.map((item) => (
              <li key={item.slug}>
                <article aria-labelledby={`home-work-${item.slug}`}>
                  {(item.company || item.client) && (
                    <p className="type-metadata home-work-context">
                      {item.company}
                      {item.client && (
                        <span>
                          {item.company ? " · Client: " : "Client: "}
                          {item.client}
                        </span>
                      )}
                    </p>
                  )}
                  <h3 className="type-work-title" id={`home-work-${item.slug}`}>
                    {item.title}
                  </h3>
                  <p className="type-body home-work-summary">{item.summary}</p>
                  <Link className="action-link" href={`/work#work-${item.slug}`}>
                    Read work overview
                    <span className="sr-only">: {item.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-projects" aria-labelledby="home-projects-title">
        <div className="container">
          <header className="home-projects-heading">
            <div className="home-section-intro">
              <p className="type-metadata home-section-label">02 / Projects</p>
              <h2 className="type-section-title" id="home-projects-title">
                {homeContent.featuredProjects.title}
              </h2>
              <p className="type-body home-section-description">
                {homeContent.featuredProjects.introduction}
              </p>
            </div>
            <Link className="action-link" href="/projects">
              {homeContent.featuredProjects.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </header>

          <ul className="home-project-list">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <article className="home-project" aria-labelledby={`home-project-${project.slug}`}>
                  {project.image && (
                    <Link
                      className="home-project-image"
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
                  <h3 className="type-work-title home-project-title" id={`home-project-${project.slug}`}>
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="type-metadata home-project-technologies">
                    <span className="sr-only">Technologies: </span>
                    {project.technologies.slice(0, 4).join(" · ")}
                  </p>
                  <p className="type-body home-project-description">{project.description}</p>
                  <Link className="action-link home-project-detail-link" href={`/projects/${project.slug}`}>
                    Explore project
                    <span className="sr-only">: {project.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  {project.links.length > 0 && (
                    <div className="home-project-external-links">
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

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="container home-about-layout">
          <header className="home-section-intro">
            <p className="type-metadata home-section-label">03 / About</p>
            <h2 className="type-work-title" id="home-about-title">
              {homeContent.about.title}
            </h2>
          </header>
          <div className="home-about-copy">
            <p className="type-section-title home-about-statement">{aboutContent.introduction}</p>
            {aboutSupportingCopy && <p className="type-body home-about-support">{aboutSupportingCopy}</p>}
            <Link className="action-link" href="/about">
              {homeContent.about.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="home-contact-title">
        <div className="container home-contact-layout">
          <header className="home-section-intro">
            <p className="type-metadata home-section-label">04 / Contact</p>
            <h2 className="type-page-title home-contact-title" id="home-contact-title">
              {homeContent.contact.title}
            </h2>
            <p className="type-body home-section-description">
              {homeContent.contact.introduction}
            </p>
          </header>
          <div className="home-contact-actions">
            {profile.email && (
              <a className="action-link home-contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            )}
            <Link className="action-link" href="/contact">
              {homeContent.contact.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
