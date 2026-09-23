import type { AboutSection as AboutSectionContent } from "@/content/about";
import styles from "./about-section.module.css";

type AboutSectionProps = {
  section: AboutSectionContent;
};

export function AboutSection({ section }: AboutSectionProps) {
  return (
    <section
      aria-labelledby={`about-${section.id}`}
      className={`${styles.aboutPageSection}${section.id === "how-i-work" ? ` ${styles.aboutPrinciples}` : ""}${section.id === "outside-of-work" ? ` ${styles.aboutOutside}` : ""}`}
      id={section.id}
    >
      <div className={`container ${styles.aboutSectionLayout}`}>
        <h2 className="type-work-title" id={`about-${section.id}`}>{section.title}</h2>
        <div className={styles.aboutSectionEntries}>
          {section.entries.map((entry) => (
            <div key={entry.heading ?? entry.text}>
              {entry.heading && <h3 className={styles.aboutEntryHeading}>{entry.heading}</h3>}
              <p className="type-body">{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
