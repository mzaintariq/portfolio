import { FeaturedProjects } from "@/components/home/featured-projects";
import { FeaturedWork } from "@/components/home/featured-work";
import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { profile } from "@/content/profile";
import styles from "./home.module.css";

export default function Home() {
  const aboutSupportingCopy = aboutContent.sections
    .find((section) => section.id === "how-i-work")
    ?.entries.find((entry) => entry.heading === "User experience")?.text;

  return (
    <main className={styles.homePage}>
      <Hero
        profile={profile}
        currentRole="Senior Software Engineer"
        currentCompany="Arbisoft"
      />

      <FeaturedWork />

      <FeaturedProjects />

      <section
        className="bg-[var(--surface)] py-[clamp(var(--space-12),6vw,var(--space-24))]"
        aria-labelledby="home-about-title"
      >
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,min(40%,26rem))_minmax(0,1fr)] lg:gap-24">
          <header>
            <p className="type-metadata mb-3 text-[var(--accent)]">03 / About</p>
            <h2 className="type-section-title" id="home-about-title">
              {homeContent.about.title}
            </h2>
          </header>
          <div>
            <p className="type-section-title max-w-[24ch] text-[length:clamp(1.5rem,2.75vw,2.5rem)] font-medium text-pretty">
              {aboutContent.introduction}
            </p>
            {aboutSupportingCopy && (
              <p className="type-body mt-6 max-w-[var(--reading-max-width)] text-[var(--muted)]">
                {aboutSupportingCopy}
              </p>
            )}
            <Link className="action-link mt-6" href="/about">
              {homeContent.about.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="pt-[clamp(var(--space-12),6vw,var(--space-20))] pb-12"
        aria-labelledby="home-contact-title"
      >
        <div className="container grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
          <header>
            <p className="type-metadata mb-3 text-[var(--accent)]">04 / Contact</p>
            <h2
              className="type-page-title text-[length:clamp(2.25rem,4.5vw,4rem)] text-balance"
              id="home-contact-title"
            >
              {homeContent.contact.title}
            </h2>
            <p className="type-body mt-3 max-w-[var(--summary-max-width)] text-[var(--muted)]">
              {homeContent.contact.introduction}
            </p>
          </header>
          <div className="flex min-w-0 flex-col items-start gap-4 lg:justify-self-end">
            {profile.email && (
              <a
                className="action-link text-[length:clamp(1rem,2vw,1.5rem)] [overflow-wrap:anywhere]"
                href={`mailto:${profile.email}`}
              >
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
