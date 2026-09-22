import type { Metadata } from "next";
import Link from "next/link";
import { AboutSection } from "@/components/about-section";
import { aboutContent } from "@/content/about";
import { creativeBackground } from "@/content/creative";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <header className="container inner-page-header about-page-header">
        <h1 className="type-page-title inner-page-title">About</h1>
        <p className="type-section-title about-page-statement">{aboutContent.introduction}</p>
      </header>
      {aboutContent.sections.map((section) => (
        <AboutSection key={section.id} section={section} />
      ))}
      <section className="creative-background" aria-labelledby="creative-background-title">
        <div className="container about-section-layout">
          <h2 className="type-work-title" id="creative-background-title">
            {creativeBackground.title}
          </h2>
          <div className="about-section-entries">
            {creativeBackground.paragraphs.map((paragraph) => (
              <p className="type-body" key={paragraph}>{paragraph}</p>
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
