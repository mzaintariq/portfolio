import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="container pb-20 sm:pb-28">
      <header className="grid gap-6 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
        <h1 className="text-[clamp(3rem,7vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.06em]">
          About
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {aboutContent.introduction}
        </p>
      </header>

      {aboutContent.sections.map((section) => (
        <AboutSection key={section.id} section={section} />
      ))}
    </main>
  );
}
