import type { Experience } from "@/content/experience";
import innerStyles from "@/components/layout/inner-page.module.css";

type ExperienceEntryProps = {
  experience: Experience;
};

export function ExperienceEntry({ experience }: ExperienceEntryProps) {
  return (
    <li className="grid grid-cols-1 gap-6 bg-[var(--surface)] p-[clamp(var(--space-5),4vw,var(--space-12))] lg:grid-cols-[minmax(0,min(27.5%,20rem))_minmax(0,1fr)] lg:gap-12">
      <p className="type-metadata text-[var(--accent)]">
        {experience.dates.start} – {experience.dates.end ?? "Present"}
      </p>
      <div className="min-w-0">
        <p className="mb-3 text-[length:var(--text-navigation)] text-[var(--muted)]">
          {experience.company} <span aria-hidden="true">·</span> {experience.location}
        </p>
        <h2 className="type-work-title">{experience.role}</h2>
        <p className="type-body mt-5 max-w-[var(--reading-max-width)] text-[var(--muted)]">
          {experience.summary}
        </p>

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
