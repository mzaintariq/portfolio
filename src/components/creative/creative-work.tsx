import {
  creativeItems,
  creativeSocialLinks,
  type CreativeCategory,
} from "@/content/creative";
import { profile } from "@/content/profile";
import styles from "./creative-work.module.css";

const categories: { id: string; label: CreativeCategory }[] = [
  { id: "ux-ui", label: "UX/UI" },
  { id: "visual-design", label: "Visual Design" },
];

export function CreativeWork() {
  const instagram = creativeSocialLinks.find((link) => link.type === "instagram");

  return (
    <section className="py-[var(--inner-section-space)]" aria-labelledby="creative-work-title">
      <div className="media-container">
        <h2 className="type-section-title" id="creative-work-title">Creative Work</h2>

        <div className="mt-16 grid grid-cols-1 gap-16">
          {categories.map((category) => {
            const items = creativeItems.filter(
              (item) => item.featured && item.category === category.label,
            );

            return (
              <section
                className="grid grid-cols-1 gap-8 [align-items:start] lg:grid-cols-[minmax(0,min(15%,12rem))_minmax(0,1fr)] lg:gap-12"
                aria-labelledby={`creative-${category.id}`}
                key={category.id}
              >
                <h3 className="type-metadata text-[var(--accent)]" id={`creative-${category.id}`}>
                  {category.label}
                </h3>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 [align-items:start] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10">
                  {items.map((item) => {
                    const behance = item.links.find((link) => link.type === "behance");

                    return (
                      <article className="min-w-0" key={item.slug}>
                        <h4 className="text-[length:clamp(1.25rem,2vw,1.5rem)] font-semibold leading-[1.35] text-pretty">
                          {item.title}
                        </h4>
                        <p className="mt-3 max-w-[var(--summary-max-width)] text-[var(--muted)]">
                          {item.description}
                        </p>
                        {behance && (
                          <div
                            className={`mt-3 text-[length:var(--text-navigation)] ${styles.creativeItemLinks}`}
                          >
                            <a className="action-link" href={behance.url} target="_blank" rel="noopener noreferrer">
                              <span>Behance</span>
                              <span aria-hidden="true">↗</span>
                              <span className="sr-only">: {item.title} (opens in a new tab)</span>
                            </a>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <ul className="mt-16 flex list-none flex-wrap items-center gap-x-6 gap-y-3 p-0">
          {profile.behanceUrl && (
            <li>
              <a className="action-link" href={profile.behanceUrl} target="_blank" rel="noopener noreferrer">
                <span>View full Behance portfolio</span>
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          )}
          {instagram && (
            <li>
              <a className="action-link" href={instagram.url} target="_blank" rel="noopener noreferrer">
                <span>Design Instagram</span>
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
