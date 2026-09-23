import Link from "next/link";
import { homeContent } from "@/content/home";
import { workItems } from "@/content/work";
import homeSectionStyles from "./home-section.module.css";

export function FeaturedWork() {
  const featuredWork = homeContent.featuredWork.slugs.flatMap((slug) => {
    const item = workItems.find((work) => work.slug === slug);
    return item ? [item] : [];
  });

  return (
    <section
      className="bg-[var(--surface)] py-[clamp(var(--space-12),6vw,var(--space-24))]"
      aria-labelledby="home-work-title"
    >
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,min(40%,26rem))_minmax(0,1fr)] lg:gap-24">
        <header className={homeSectionStyles.homeSectionIntro}>
          <p className={`type-metadata ${homeSectionStyles.homeSectionLabel}`}>01 / Selected work</p>
          <h2 className="type-section-title" id="home-work-title">
            {homeContent.featuredWork.title}
          </h2>
          <p className={`type-body ${homeSectionStyles.homeSectionDescription}`}>
            {homeContent.featuredWork.introduction}
          </p>
          <Link className="action-link" href="/work">
            {homeContent.featuredWork.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </header>

        <ol className="m-0 grid list-none grid-cols-1 gap-12 p-0 lg:gap-16">
          {featuredWork.map((item) => (
            <li key={item.slug}>
              <article aria-labelledby={`home-work-${item.slug}`}>
                {(item.company || item.client) && (
                  <p className="type-metadata mb-4">
                    {item.company}
                    {item.client && (
                      <span>
                        {item.company ? " · Client: " : "Client: "}
                        {item.client}
                      </span>
                    )}
                  </p>
                )}
                <h3 className="type-work-title max-w-[26ch] text-pretty" id={`home-work-${item.slug}`}>
                  {item.title}
                </h3>
                <p className="type-body mt-5 max-w-[var(--reading-max-width)] text-[var(--muted)]">{item.summary}</p>
                <Link
                  className="action-link mt-3 text-[length:var(--text-navigation)]"
                  href={`/work#work-${item.slug}`}
                >
                  Read work overview
                  <span className="sr-only">: {item.title}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
