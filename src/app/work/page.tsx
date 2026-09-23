import type { Metadata } from "next";
import { WorkEntry } from "@/components/work/work-entry";
import { workItems } from "@/content/work";
import styles from "./work.module.css";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="[--inner-section-space:clamp(var(--space-14),7vw,var(--space-24))] pb-0">
      <header className="container grid grid-cols-1 gap-6 pt-[clamp(var(--space-10),5vw,var(--space-20))] pb-[var(--inner-section-space)] [align-items:end] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <h1 className="type-page-title max-w-[14ch] text-balance [overflow-wrap:anywhere]">
          Professional Work
        </h1>
        <p className="type-body max-w-[var(--summary-max-width)] text-[var(--muted)] text-pretty">
          Selected professional experience building frontend products, with a
          focus on my role and publicly shareable contributions.
        </p>
      </header>

      {workItems.length > 0 ? (
        <ol className="list-none p-0">
          {workItems.map((item, index) => (
            <li className={styles.workStoryBand} key={item.slug}>
              <WorkEntry item={item} index={index} />
            </li>
          ))}
        </ol>
      ) : (
        <p className="container type-body text-[var(--muted)]">
          Selected work will be added here.
        </p>
      )}
    </main>
  );
}
