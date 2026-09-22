import Link from "next/link";
import { homeContent } from "@/content/home";
import { workItems } from "@/content/work";
import homeSectionStyles from "./home-section.module.css";
import styles from "./featured-work.module.css";

export function FeaturedWork() {
  const featuredWork = homeContent.featuredWork.slugs.flatMap((slug) => {
    const item = workItems.find((work) => work.slug === slug);
    return item ? [item] : [];
  });

  return (
    <section className={styles.homeWork} aria-labelledby="home-work-title">
      <div className={`container ${styles.homeWorkLayout}`}>
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

        <ol className={styles.homeWorkStories}>
          {featuredWork.map((item) => (
            <li key={item.slug}>
              <article aria-labelledby={`home-work-${item.slug}`}>
                {(item.company || item.client) && (
                  <p className={`type-metadata ${styles.homeWorkContext}`}>
                    {item.company}
                    {item.client && (
                      <span>
                        {item.company ? " · Client: " : "Client: "}
                        {item.client}
                      </span>
                    )}
                  </p>
                )}
                <h3 className="type-work-title" id={`home-work-${item.slug}`}>
                  {item.title}
                </h3>
                <p className={`type-body ${styles.homeWorkSummary}`}>{item.summary}</p>
                <Link className="action-link" href={`/work#work-${item.slug}`}>
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
