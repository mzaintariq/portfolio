import type { Metadata } from "next";
import { ExperienceEntry } from "@/components/experience-entry";
import { experiences } from "@/content/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <main className="inner-page experience-page">
      <header className="container inner-page-header index-page-masthead">
        <h1 className="type-page-title inner-page-title">
          Experience
        </h1>
        <p className="type-body inner-page-introduction">
          A timeline of the roles and responsibilities that have shaped my
          professional work.
        </p>
      </header>

      {experiences.length > 0 ? (
        <ol className="container experience-list">
          {experiences.map((experience) => (
            <ExperienceEntry
              experience={experience}
              key={`${experience.company}-${experience.role}-${experience.dates.start}`}
            />
          ))}
        </ol>
      ) : (
        <p className="container type-body inner-empty">
          Experience will be added here.
        </p>
      )}
    </main>
  );
}
