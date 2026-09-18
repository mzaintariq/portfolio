import type { Metadata } from "next";
import { ExperienceEntry } from "@/components/experience-entry";
import { experiences } from "@/content/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <main className="container pb-20 sm:pb-28">
      <header className="grid gap-6 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
        <h1 className="text-[clamp(3rem,7vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.06em]">
          Experience
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          A timeline of the roles and responsibilities that have shaped my
          professional work.
        </p>
      </header>

      {experiences.length > 0 ? (
        <ol className="ml-1 border-l border-[var(--border)]">
          {experiences.map((experience) => (
            <ExperienceEntry
              experience={experience}
              key={`${experience.company}-${experience.role}-${experience.dates.start}`}
            />
          ))}
        </ol>
      ) : (
        <p className="border-t border-[var(--border)] pt-8 text-[var(--muted)]">
          Experience will be added here.
        </p>
      )}
    </main>
  );
}
