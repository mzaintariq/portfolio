import type { WorkItem } from "@/content/work";
import innerStyles from "@/components/layout/inner-page.module.css";

type WorkEntryProps = {
  item: WorkItem;
  index: number;
};

export function WorkEntry({ item, index }: WorkEntryProps) {
  return (
    <article
      className="container grid grid-cols-1 gap-8 py-[var(--inner-section-space)] lg:grid-cols-[minmax(0,min(30%,22rem))_minmax(0,1fr)] lg:gap-20"
      aria-labelledby={`work-${item.slug}`}
      data-work-story
    >
      <div className="min-w-0">
        <p className="type-metadata text-[var(--accent)]">
          {String(index + 1).padStart(2, "0")} / {item.category}
        </p>
        {(item.company || item.client) && (
          <p className="mt-5 mb-2 text-[length:var(--text-navigation)] font-medium">
            {item.company}
            {item.client && (
              <span className="text-[var(--muted)]">
                {item.company ? " · Client: " : "Client: "}
                {item.client}
              </span>
            )}
          </p>
        )}
        <p className="type-metadata">{item.role}</p>
        <p className="type-metadata">{item.timeframe}</p>
      </div>

      <div className="min-w-0">
        <h2
          id={`work-${item.slug}`}
          className="type-section-title max-w-[24ch] scroll-mt-8 text-pretty"
        >
          {item.title}
        </h2>
        <p className="mt-6 max-w-[48ch] text-[length:clamp(1.125rem,2vw,1.5rem)] leading-[var(--line-height-body)] text-[var(--muted)]">
          {item.summary}
        </p>

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
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
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
