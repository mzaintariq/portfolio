import {
  creativeItems,
  creativeSocialLinks,
  type CreativeCategory,
} from "@/content/creative";
import { profile } from "@/content/profile";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./creative-work.module.css";

const categories: { id: string; label: CreativeCategory }[] = [
  { id: "ux-ui", label: "UX/UI" },
  { id: "visual-design", label: "Visual Design" },
];

export function CreativeWork() {
  const instagram = creativeSocialLinks.find((link) => link.type === "instagram");

  return (
    <section className={styles.creativeWork} aria-labelledby="creative-work-title">
      <div className="media-container">
        <h2 className="type-section-title" id="creative-work-title">Creative Work</h2>

        <div className={styles.creativeGroups}>
          {categories.map((category) => {
            const items = creativeItems.filter(
              (item) => item.featured && item.category === category.label,
            );

            return (
              <section className={styles.creativeGroup} aria-labelledby={`creative-${category.id}`} key={category.id}>
                <h3 className={`type-metadata ${innerStyles.innerLabel}`} id={`creative-${category.id}`}>
                  {category.label}
                </h3>
                <div className={styles.creativeItems}>
                  {items.map((item) => {
                    const behance = item.links.find((link) => link.type === "behance");

                    return (
                      <article className={`${styles.creativeItem} ${styles.creativeItemFeatured}`} key={item.slug}>
                        <h4 className={styles.creativeItemTitle}>{item.title}</h4>
                        <p className={styles.creativeItemDescription}>{item.description}</p>
                        {behance && (
                          <div className={styles.creativeItemLinks}>
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

        <ul className={`${innerStyles.innerActions} ${styles.creativePortfolioLinks}`}>
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
