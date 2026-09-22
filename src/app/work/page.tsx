import type { Metadata } from "next";
import { WorkEntry } from "@/components/work/work-entry";
import { workItems } from "@/content/work";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./work.module.css";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className={`${innerStyles.innerPage} ${styles.workPage}`}>
      <header className={`container ${innerStyles.innerPageHeader} ${innerStyles.indexPageMasthead}`}>
        <h1 className={`type-page-title ${innerStyles.innerPageTitle}`}>
          Professional Work
        </h1>
        <p className={`type-body ${innerStyles.innerPageIntroduction}`}>
          Selected professional experience building frontend products, with a
          focus on my role and publicly shareable contributions.
        </p>
      </header>

      {workItems.length > 0 ? (
        <ol className={styles.workStoryList}>
          {workItems.map((item, index) => (
            <li className={styles.workStoryBand} key={item.slug}>
              <WorkEntry item={item} index={index} />
            </li>
          ))}
        </ol>
      ) : (
        <p className={`container type-body ${innerStyles.innerEmpty}`}>
          Selected work will be added here.
        </p>
      )}
    </main>
  );
}
