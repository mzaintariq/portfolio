import type { Metadata } from "next";
import { ExperienceEntry } from "@/components/experience/experience-entry";
import { experiences } from "@/content/experience";
import { education, priorExperience } from "@/content/profile-data";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <main className="[--inner-section-space:clamp(var(--space-14),7vw,var(--space-24))] pb-[var(--inner-section-space)]">
      <header className="container grid grid-cols-1 gap-6 pt-[clamp(var(--space-10),5vw,var(--space-20))] pb-[var(--inner-section-space)] [align-items:end] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <h1 className="type-page-title max-w-[14ch] text-balance [overflow-wrap:anywhere]">
          Experience
        </h1>
        <p className="type-body max-w-[var(--summary-max-width)] text-[var(--muted)] text-pretty">
          A timeline of the roles and responsibilities that have shaped my
          professional work.
        </p>
      </header>

      {experiences.length > 0 ? (
        <ol className="container grid list-none gap-12 p-0">
          {experiences.map((experience) => (
            <ExperienceEntry
              experience={experience}
              key={`${experience.company}-${experience.role}-${experience.dates.start}`}
            />
          ))}
        </ol>
      ) : (
        <p className="container type-body text-[var(--muted)]">
          Experience will be added here.
        </p>
      )}

      <div className="container mt-12 border-t border-[var(--border)] pt-8">
        <div className="space-y-8 text-sm leading-relaxed text-[var(--muted)]">
          <section aria-labelledby="prior-experience-title">
            <h2 className="text-base font-semibold" id="prior-experience-title">
              {priorExperience.title}
            </h2>
            <p className="mt-2">{priorExperience.summary}</p>
          </section>

          <section aria-labelledby="education-title">
            <h2 className="text-base font-semibold" id="education-title">
              Education
            </h2>
            <p className="mt-2">{education.institution} — {education.degree}</p>
            <p className="mt-1">{education.dates.start} – {education.dates.end}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
