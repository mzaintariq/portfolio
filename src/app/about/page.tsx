import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { aboutContent } from "@/content/about";

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
    </main>
  );
}
