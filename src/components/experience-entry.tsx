import type { Experience } from "@/content/experience";

type ExperienceEntryProps = {
  experience: Experience;
};

export function ExperienceEntry({ experience }: ExperienceEntryProps) {
  return (
    <li className="relative pb-14 pl-6 last:pb-0 sm:pb-20 sm:pl-8 md:grid md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-10">
      <span
        aria-hidden="true"
        className="absolute top-1.5 -left-[5px] size-[9px] rounded-full bg-[var(--foreground)]"
      />

      <p className="text-sm font-semibold tracking-[-0.01em]">
        {experience.dates.start} – {experience.dates.end ?? "Present"}
      </p>

      <div className="min-w-0 mt-5 md:mt-0">
        <p className="text-sm font-medium text-[var(--muted)]">
          {experience.company} <span aria-hidden="true">·</span>{" "}
          {experience.location}
        </p>
        <h2 className="mt-2 text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl">
          {experience.role}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {experience.summary}
        </p>

        {experience.highlights.length > 0 && (
          <div className="mt-7">
            <h3 className="sr-only">Highlights</h3>
            <ul className="max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-[var(--list-marker)] sm:text-base">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {experience.technologies.length > 0 && (
          <ul aria-label="Technologies" className="mt-8 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <li
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
