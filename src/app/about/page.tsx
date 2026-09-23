import type { Metadata } from "next";
import Link from "next/link";
import { AboutSection } from "@/components/about/about-section";
import { aboutContent } from "@/content/about";
import { creativeBackground } from "@/content/creative";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="[--inner-section-space:clamp(var(--space-14),7vw,var(--space-24))] pb-0">
      <header className="container grid grid-cols-1 gap-6 pt-[clamp(var(--space-10),5vw,var(--space-20))] pb-[var(--inner-section-space)] [align-items:start] lg:grid-cols-[minmax(0,min(30%,22rem))_minmax(0,1fr)] lg:gap-20">
        <h1 className="type-page-title max-w-[14ch] text-balance [overflow-wrap:anywhere]">About</h1>
        <p className="type-section-title max-w-[27ch] font-medium text-pretty">
          {aboutContent.introduction}
        </p>
      </header>
      {aboutContent.sections.map((section) => (
        <AboutSection key={section.id} section={section} />
      ))}
      <section className="py-[var(--inner-section-space)]" aria-labelledby="creative-background-title">
        <div className="container grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,min(30%,22rem))_minmax(0,1fr)] lg:gap-20">
          <h2 className="type-work-title" id="creative-background-title">
            {creativeBackground.title}
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {creativeBackground.paragraphs.map((paragraph) => (
              <p
                className="type-body max-w-[var(--reading-max-width)] text-[var(--muted)]"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
            <Link className="action-link" href="/projects">
              <span>View creative work</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
