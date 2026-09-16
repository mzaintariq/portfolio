import type { Metadata } from "next";
import { WorkEntry } from "@/components/work-entry";
import { workItems } from "@/content/work";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="container pb-20 sm:pb-28">
      <header className="grid gap-6 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
        <h1 className="text-[clamp(3rem,7vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.06em]">
          Professional Work
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Selected professional experience building frontend products, with a
          focus on my role and publicly shareable contributions.
        </p>
      </header>

      {workItems.length > 0 ? (
        <ol>
          {workItems.map((item, index) => (
            <li key={item.slug}>
              <WorkEntry item={item} index={index} />
            </li>
          ))}
        </ol>
      ) : (
        <p className="border-t border-[var(--border)] pt-8 text-[var(--muted)]">
          Selected work will be added here.
        </p>
      )}
    </main>
  );
}
