import type { Metadata } from "next";
import { ExperienceEntry } from "@/components/experience/experience-entry";
import { experiences } from "@/content/experience";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./experience.module.css";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <main className={`${innerStyles.innerPage}`}>
      <header className={`container ${innerStyles.innerPageHeader} ${innerStyles.indexPageMasthead}`}>
        <h1 className={`type-page-title ${innerStyles.innerPageTitle}`}>
          Experience
        </h1>
        <p className={`type-body ${innerStyles.innerPageIntroduction}`}>
          A timeline of the roles and responsibilities that have shaped my
          professional work.
        </p>
      </header>

      {experiences.length > 0 ? (
        <ol className={`container ${styles.experienceList}`}>
          {experiences.map((experience) => (
            <ExperienceEntry
              experience={experience}
              key={`${experience.company}-${experience.role}-${experience.dates.start}`}
            />
          ))}
        </ol>
      ) : (
        <p className={`container type-body ${innerStyles.innerEmpty}`}>
          Experience will be added here.
        </p>
      )}
    </main>
  );
}
