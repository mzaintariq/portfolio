import type { AboutSection as AboutSectionContent } from "@/content/about";

type AboutSectionProps = {
  section: AboutSectionContent;
};

export function AboutSection({ section }: AboutSectionProps) {
  return (
    <section
      aria-labelledby={`about-${section.id}`}
      className="grid gap-6 border-t border-[var(--border)] py-10 sm:py-14 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12"
      id={section.id}
    >
      <h2
        className="text-xl leading-tight font-semibold tracking-[-0.03em] sm:text-2xl"
        id={`about-${section.id}`}
      >
        {section.title}
      </h2>
      <div className="max-w-2xl space-y-7">
        {section.entries.map((entry) => (
          <div key={entry.heading ?? entry.text}>
            {entry.heading && (
              <h3 className="mb-2 text-base font-semibold">{entry.heading}</h3>
            )}
            <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {entry.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
