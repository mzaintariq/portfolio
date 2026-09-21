import type { Experience } from "@/content/experience";

type ExperienceEntryProps = {
  experience: Experience;
};

export function ExperienceEntry({ experience }: ExperienceEntryProps) {
  return (
    <li className="experience-record">
      <p className="type-metadata inner-label experience-dates">
        {experience.dates.start} – {experience.dates.end ?? "Present"}
      </p>
      <div className="experience-content">
        <p className="experience-company">
          {experience.company} <span aria-hidden="true">·</span> {experience.location}
        </p>
        <h2 className="type-work-title">{experience.role}</h2>
        <p className="type-body experience-summary">{experience.summary}</p>

        {experience.highlights.length > 0 && (
          <div className="inner-highlights">
            <h3 className="sr-only">Highlights</h3>
            <ul className="inner-highlight-list">
              {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        )}

        {experience.technologies.length > 0 && (
          <p className="type-metadata inner-technologies">
            <span className="sr-only">Technologies: </span>
            {experience.technologies.join(" · ")}
          </p>
        )}
      </div>
    </li>
  );
}
