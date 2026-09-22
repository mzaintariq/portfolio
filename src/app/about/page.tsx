import type { Metadata } from "next";
import Link from "next/link";
import { AboutSection } from "@/components/about/about-section";
import { aboutContent } from "@/content/about";
import { creativeBackground } from "@/content/creative";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./about.module.css";
import aboutSectionStyles from "@/components/about/about-section.module.css";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className={`${innerStyles.innerPage} ${styles.aboutPage}`}>
      <header className={`container ${innerStyles.innerPageHeader} ${styles.aboutPageHeader}`}>
        <h1 className={`type-page-title ${innerStyles.innerPageTitle}`}>About</h1>
        <p className={`type-section-title ${styles.aboutPageStatement}`}>{aboutContent.introduction}</p>
      </header>
      {aboutContent.sections.map((section) => (
        <AboutSection key={section.id} section={section} />
      ))}
      <section className={styles.creativeBackground} aria-labelledby="creative-background-title">
        <div className={`container ${aboutSectionStyles.aboutSectionLayout}`}>
          <h2 className="type-work-title" id="creative-background-title">
            {creativeBackground.title}
          </h2>
          <div className={aboutSectionStyles.aboutSectionEntries}>
            {creativeBackground.paragraphs.map((paragraph) => (
              <p className="type-body" key={paragraph}>{paragraph}</p>
            ))}
            <Link className="action-link" href="/projects">
              <span>View creative work</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
