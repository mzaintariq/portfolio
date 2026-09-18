export type Experience = {
  company: string;
  role: string;
  dates: {
    start: string;
    end: string | null;
  };
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "Arbisoft",
    role: "Senior Software Engineer",
    dates: {
      start: "June 2021",
      end: null,
    },
    location: "Remote",
    summary:
      "Frontend-focused engineer building React, TypeScript, and Next.js applications across enterprise commerce platforms, CMS/editor experiences, and developer tooling.",
    highlights: [
      "Designed and delivered complex frontend workflows for enterprise applications.",
      "Built reusable UI patterns and scalable frontend architecture across multiple products.",
      "Collaborated with product, design, backend, and QA teams to ship reliable user experiences.",
      "Mentored engineers, reviewed code, and contributed to frontend engineering practices.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "React Query",
      "Playwright",
      "Tailwind CSS",
    ],
  },
];