import type { WorkItem } from "@/content/work";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./work-entry.module.css";

type WorkEntryProps = {
  item: WorkItem;
  index: number;
};

export function WorkEntry({ item, index }: WorkEntryProps) {
  return (
    <article className={`container ${styles.workStory}`} aria-labelledby={`work-${item.slug}`}>
      <div className={styles.workStoryContext}>
        <p className={`type-metadata ${innerStyles.innerLabel}`}>
          {String(index + 1).padStart(2, "0")} / {item.category}
        </p>
        {(item.company || item.client) && (
          <p className={styles.workStoryCompany}>
            {item.company}
            {item.client && (
              <span>
                {item.company ? " · Client: " : "Client: "}
                {item.client}
              </span>
            )}
          </p>
        )}
        <p className="type-metadata">{item.role}</p>
        <p className="type-metadata">{item.timeframe}</p>
      </div>

      <div className={styles.workStoryContent}>
        <h2 id={`work-${item.slug}`} className={`type-section-title ${styles.workStoryTitle}`}>
          {item.title}
        </h2>
        <p className={styles.workStorySummary}>{item.summary}</p>

        {item.highlights.length > 0 && (
          <div className={innerStyles.innerHighlights}>
            <h3 className="sr-only">Highlights</h3>
            <ul className={innerStyles.innerHighlightList}>
              {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        )}

        {item.technologies.length > 0 && (
          <p className={`type-metadata ${innerStyles.innerTechnologies}`}>
            <span className="sr-only">Technologies: </span>
            {item.technologies.join(" · ")}
          </p>
        )}

        {item.publicLinks && item.publicLinks.length > 0 && (
          <div className={`${innerStyles.innerActions} ${styles.workStoryLinks}`}>
            {item.publicLinks.map((link) => (
              <a className="action-link" href={link.url} key={link.url}>
                {link.label}
                <span aria-hidden="true">{/^https?:\/\//.test(link.url) ? "↗" : "→"}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
