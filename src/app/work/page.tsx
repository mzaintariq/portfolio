import type { Metadata } from "next";
import { WorkEntry } from "@/components/work-entry";
import { workItems } from "@/content/work";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="inner-page work-page">
      <header className="container inner-page-header">
        <h1 className="type-page-title inner-page-title">
          Professional Work
        </h1>
        <p className="type-body inner-page-introduction">
          Selected professional experience building frontend products, with a
          focus on my role and publicly shareable contributions.
        </p>
      </header>

      {workItems.length > 0 ? (
        <ol className="work-story-list">
          {workItems.map((item, index) => (
            <li className="work-story-band" key={item.slug}>
              <WorkEntry item={item} index={index} />
            </li>
          ))}
        </ol>
      ) : (
        <p className="container type-body inner-empty">
          Selected work will be added here.
        </p>
      )}
    </main>
  );
}
