import Link from "next/link";
import { Hero } from "@/components/hero";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { workItems } from "@/content/work";

export default function Home() {
  const featuredWork = workItems.filter((item) =>
    homeContent.featuredWork.slugs.includes(item.slug),
  );
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main>
      <Hero
        profile={profile}
        currentRole="Senior Software Engineer"
        currentCompany="Arbisoft"
      />

      <section className="border-b border-[var(--border)]" aria-labelledby="home-work-title">
        <div className="container py-14 sm:py-20">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <h2
                className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl"
                id="home-work-title"
              >
                {homeContent.featuredWork.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)]">
                {homeContent.featuredWork.introduction}
              </p>
            </div>
            <Link
              className="inline-flex min-h-11 items-center gap-2 font-medium hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
              href="/work"
            >
              {homeContent.featuredWork.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
            {featuredWork.map((item) => (
              <li className="border-t border-[var(--border)] py-7" key={item.slug}>
                {(item.company || item.client) && (
                  <p className="text-sm text-[var(--muted)]">
                    {item.company}
                    {item.client && (
                      <span>
                        {item.company ? " · Client: " : "Client: "}
                        {item.client}
                      </span>
                    )}
                  </p>
                )}
                <h3 className="mt-3 text-xl leading-snug font-semibold tracking-[-0.03em] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)]">
                  {item.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-[var(--border)]" aria-labelledby="home-projects-title">
        <div className="container py-14 sm:py-20">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <h2
                className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl"
                id="home-projects-title"
              >
                {homeContent.featuredProjects.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)]">
                {homeContent.featuredProjects.introduction}
              </p>
            </div>
            <Link
              className="inline-flex min-h-11 items-center gap-2 font-medium hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
              href="/projects"
            >
              {homeContent.featuredProjects.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <li className="border-t border-[var(--border)] py-7" key={project.slug}>
                <h3 className="text-xl leading-snug font-semibold tracking-[-0.03em] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <li
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
                    {project.links.map((link) => {
                      const isExternal = /^https?:\/\//.test(link.url);

                      return (
                        <a
                          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                          href={link.url}
                          key={`${link.label}-${link.url}`}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                        >
                          {link.label} <span aria-hidden="true">↗</span>
                          {isExternal && (
                            <span className="sr-only">(opens in a new tab)</span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--border)]" aria-labelledby="home-about-title">
        <div className="container grid gap-6 py-14 sm:py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12">
          <h2
            className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl"
            id="home-about-title"
          >
            {homeContent.about.title}
          </h2>
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              {aboutContent.introduction}
            </p>
            <Link
              className="mt-5 inline-flex min-h-11 items-center gap-2 font-medium hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
              href="/about"
            >
              {homeContent.about.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="home-contact-title">
        <div className="container grid gap-6 py-14 sm:py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12">
          <h2
            className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl"
            id="home-contact-title"
          >
            {homeContent.contact.title}
          </h2>
          <div>
            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {homeContent.contact.introduction}
            </p>
            <Link
              className="mt-5 inline-flex min-h-11 items-center gap-2 font-medium hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
              href="/contact"
            >
              {homeContent.contact.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
