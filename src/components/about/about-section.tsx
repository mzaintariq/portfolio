import type { AboutSection as AboutSectionContent } from "@/content/about";
import styles from "./about-section.module.css";

type AboutSectionProps = {
  section: AboutSectionContent;
};

export function AboutSection({ section }: AboutSectionProps) {
  const isPrinciples = section.id === "how-i-work";
  const hasSurface = isPrinciples || section.id === "outside-of-work";

  return (
    <section
      aria-labelledby={`about-${section.id}`}
      className={`py-[var(--inner-section-space)] ${hasSurface ? "bg-[var(--surface)]" : ""} ${styles.aboutPageSection}`}
      id={section.id}
    >
      <div
        className={
          isPrinciples
            ? "container grid grid-cols-1 gap-10"
            : "container grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,min(30%,22rem))_minmax(0,1fr)] lg:gap-20"
        }
      >
        <h2 className="type-work-title" id={`about-${section.id}`}>{section.title}</h2>
        <div
          className={
            isPrinciples
              ? "grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12"
              : "grid grid-cols-1 gap-6"
          }
        >
          {section.entries.map((entry) => (
            <div key={entry.heading ?? entry.text}>
              {entry.heading && (
                <h3 className="mb-3 text-lg font-semibold leading-[var(--line-height-body)] text-[var(--accent)]">
                  {entry.heading}
                </h3>
              )}
              <p className="type-body max-w-[var(--reading-max-width)] text-[var(--muted)]">
                {entry.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
