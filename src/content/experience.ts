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
      "Client-embedded senior engineer on Elastic Path's commerce platform for 5+ years, building React, TypeScript, and Next.js products across an enterprise admin console, a payments and checkout vertical, and an open-source storefront.",
    highlights: [
      "Led the redesign of Commerce Manager's Product Editor, the primary UI merchants use to manage products and pricing, on a commerce platform processing tens of millions of API requests weekly for a portfolio of enterprise clients.",
      "Owned checkout and payments architecture work, including a payment-adapter redesign adopted as the package's contract within a week, and two checkout-integrity bugs found and fixed independently.",
      "Migrated legacy JavaScript modules to TypeScript using a strangler-fig approach and standardized 10+ data tables onto a single reusable pattern across two codebases.",
      "Mentored and onboarded junior engineers, interviewed frontend candidates, and received a client-awarded bonus for delivery quality.",
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
