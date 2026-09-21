import type { AboutSection as AboutSectionContent } from "@/content/about";

type AboutSectionProps = {
  section: AboutSectionContent;
};

export function AboutSection({ section }: AboutSectionProps) {
  return (
    <section
      aria-labelledby={`about-${section.id}`}
      className={`about-page-section${section.id === "how-i-work" ? " about-principles" : ""}`}
      id={section.id}
    >
      <div className="container about-section-layout">
        <h2 className="type-work-title" id={`about-${section.id}`}>{section.title}</h2>
        <div className="about-section-entries">
          {section.entries.map((entry) => (
            <div key={entry.heading ?? entry.text}>
              {entry.heading && <h3 className="about-entry-heading">{entry.heading}</h3>}
              <p className="type-body">{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
