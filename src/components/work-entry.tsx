import type { WorkItem } from "@/content/work";

type WorkEntryProps = {
  item: WorkItem;
  index: number;
};

export function WorkEntry({ item, index }: WorkEntryProps) {
  return (
    <article className="container work-story" aria-labelledby={`work-${item.slug}`}>
      <div className="work-story-context">
        <p className="type-metadata inner-label">
          {String(index + 1).padStart(2, "0")} / {item.category}
        </p>
        {(item.company || item.client) && (
          <p className="work-story-company">
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

      <div className="work-story-content">
        <h2 id={`work-${item.slug}`} className="type-section-title work-story-title">
          {item.title}
        </h2>
        <p className="work-story-summary">{item.summary}</p>

        {item.highlights.length > 0 && (
          <div className="inner-highlights">
            <h3 className="sr-only">Highlights</h3>
            <ul className="inner-highlight-list">
              {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        )}

        {item.technologies.length > 0 && (
          <p className="type-metadata inner-technologies">
            <span className="sr-only">Technologies: </span>
            {item.technologies.join(" · ")}
          </p>
        )}

        {item.publicLinks && item.publicLinks.length > 0 && (
          <div className="inner-actions work-story-links">
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
