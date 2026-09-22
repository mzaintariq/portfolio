import { FeaturedProjects } from "@/components/home/featured-projects";
import { FeaturedWork } from "@/components/home/featured-work";
import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { profile } from "@/content/profile";
import homeSectionStyles from "@/components/home/home-section.module.css";
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

      <section className={styles.homeAbout} aria-labelledby="home-about-title">
        <div className={`container ${styles.homeAboutLayout}`}>
          <header className={homeSectionStyles.homeSectionIntro}>
            <p className={`type-metadata ${homeSectionStyles.homeSectionLabel}`}>03 / About</p>
            <h2 className="type-work-title" id="home-about-title">
              {homeContent.about.title}
            </h2>
          </header>
          <div className={styles.homeAboutCopy}>
            <p className={`type-section-title ${styles.homeAboutStatement}`}>{aboutContent.introduction}</p>
            {aboutSupportingCopy && <p className={`type-body ${styles.homeAboutSupport}`}>{aboutSupportingCopy}</p>}
            <Link className="action-link" href="/about">
              {homeContent.about.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.homeContact} aria-labelledby="home-contact-title">
        <div className={`container ${styles.homeContactLayout}`}>
          <header className={homeSectionStyles.homeSectionIntro}>
            <p className={`type-metadata ${homeSectionStyles.homeSectionLabel}`}>04 / Contact</p>
            <h2 className={`type-page-title ${styles.homeContactTitle}`} id="home-contact-title">
              {homeContent.contact.title}
            </h2>
            <p className={`type-body ${homeSectionStyles.homeSectionDescription}`}>
              {homeContent.contact.introduction}
            </p>
          </header>
          <div className={styles.homeContactActions}>
            {profile.email && (
              <a className={`action-link ${styles.homeContactEmail}`} href={`mailto:${profile.email}`}>
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
