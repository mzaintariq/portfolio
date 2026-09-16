import type { WorkItem } from "@/content/work";

type WorkEntryProps = {
  item: WorkItem;
  index: number;
};

export function WorkEntry({ item, index }: WorkEntryProps) {
  return (
    <article
      className="grid gap-7 border-t border-[var(--border)] py-10 sm:py-14 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:gap-12"
      aria-labelledby={`work-${item.slug}`}
    >
      <div className="min-w-0 text-sm leading-relaxed">
        <p className="text-xs font-semibold tracking-[0.12em] text-[var(--muted)] uppercase">
          {String(index + 1).padStart(2, "0")} / {item.category}
        </p>

        {(item.company || item.client) && (
          <p className="mt-5 font-medium sm:mt-8">
            {item.company}
            {item.client && (
              <span className="text-[var(--muted)]">
                {item.company ? " · Client: " : "Client: "}
                {item.client}
              </span>
            )}
          </p>
        )}
        <p className="mt-1 text-[var(--muted)]">{item.role}</p>
        <p className="mt-1 text-[var(--muted)]">{item.timeframe}</p>
      </div>

      <div className="min-w-0">
        <h2
          id={`work-${item.slug}`}
          className="max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl"
        >
          {item.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {item.summary}
        </p>

        {item.highlights.length > 0 && (
          <div className="mt-8">
            <h3 className="sr-only">Highlights</h3>
            <ul className="max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-neutral-400 sm:text-base">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {item.technologies.length > 0 && (
          <ul aria-label="Technologies" className="mt-8 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <li
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        )}

        {item.publicLinks && item.publicLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {item.publicLinks.map((link) => (
              <a
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                href={link.url}
                key={link.url}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
