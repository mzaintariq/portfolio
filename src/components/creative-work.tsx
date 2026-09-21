import {
  creativeBackground,
  creativeItems,
  creativeSocialLinks,
  type CreativeCategory,
} from "@/content/creative";
import { profile } from "@/content/profile";

const categories: { id: string; label: CreativeCategory }[] = [
  { id: "ux-ui", label: "UX/UI" },
  { id: "visual-design", label: "Visual Design" },
];

export function CreativeWork() {
  const instagram = creativeSocialLinks.find((link) => link.type === "instagram");

  return (
    <section className="creative-background" aria-labelledby="creative-background-title">
      <div className="container">
        <div className="about-section-layout">
          <h2 className="type-work-title" id="creative-background-title">
            {creativeBackground.title}
          </h2>
          <div className="about-section-entries">
            {creativeBackground.paragraphs.map((paragraph) => (
              <p className="type-body" key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="creative-groups">
          {categories.map((category) => {
            const items = creativeItems.filter(
              (item) => item.featured && item.category === category.label,
            );

            return (
              <section className="creative-group" aria-labelledby={`creative-${category.id}`} key={category.id}>
                <h3 className="type-metadata inner-label" id={`creative-${category.id}`}>
                  {category.label}
                </h3>
                <div className="creative-items">
                  {items.map((item) => {
                    const behance = item.links.find((link) => link.type === "behance");

                    return (
                      <article className="creative-item creative-item-featured" key={item.slug}>
                        <h4 className="creative-item-title">{item.title}</h4>
                        <p className="creative-item-description">{item.description}</p>
                        {behance && (
                          <div className="creative-item-links">
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

        <ul className="inner-actions creative-portfolio-links">
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
