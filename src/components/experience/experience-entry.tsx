import type { Experience } from "@/content/experience";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./experience-entry.module.css";

type ExperienceEntryProps = {
  experience: Experience;
};

export function ExperienceEntry({ experience }: ExperienceEntryProps) {
  return (
    <li className={styles.experienceRecord}>
      <p className={`type-metadata ${innerStyles.innerLabel}`}>
        {experience.dates.start} – {experience.dates.end ?? "Present"}
      </p>
      <div className={styles.experienceContent}>
        <p className={styles.experienceCompany}>
          {experience.company} <span aria-hidden="true">·</span> {experience.location}
        </p>
        <h2 className="type-work-title">{experience.role}</h2>
        <p className={`type-body ${styles.experienceSummary}`}>{experience.summary}</p>

        {experience.highlights.length > 0 && (
          <div className={innerStyles.innerHighlights}>
            <h3 className="sr-only">Highlights</h3>
            <ul className={innerStyles.innerHighlightList}>
              {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        )}

        {experience.technologies.length > 0 && (
          <p className={`type-metadata ${innerStyles.innerTechnologies}`}>
            <span className="sr-only">Technologies: </span>
            {experience.technologies.join(" · ")}
          </p>
        )}
      </div>
    </li>
  );
}
