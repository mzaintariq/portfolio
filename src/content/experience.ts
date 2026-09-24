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
      start: "June 2024",
      end: null,
    },
    location: "Remote",
    summary:
      "Sustained Elastic Path Studio through a team reduction as its sole frontend engineer, then moved into Elastic Path's core commerce platform in 2025, leading a major admin-console redesign and a payments and checkout vertical.",
    highlights: [
      "Became the sole frontend engineer maintaining Elastic Path Studio after a team reduction in late 2024, sustaining the product through an extended maintenance phase.",
      "Beginning January 2025, moved into Elastic Path's core commerce platform and led the redesign of Commerce Manager's Product Editor (~120 files, my largest single area of ownership), coordinating a single Save across six or more backend resources.",
      "Owned checkout and payments architecture for a focused Plasmic storefront engagement, including a payment-adapter redesign adopted as the package's contract within a week.",
      "Standardized 10+ legacy data tables onto a single reusable pattern, adopted platform-wide across two codebases.",
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
  {
    company: "Arbisoft",
    role: "Software Engineer",
    dates: {
      start: "June 2021",
      end: "June 2024",
    },
    location: "Remote",
    summary:
      "Client-embedded engineer building the visual editor and admin experience for Unstack (acquired by Elastic Path and rebranded as Elastic Path Studio in April 2023).",
    highlights: [
      "Built and iterated on Studio's core visual page editor and design system, including responsive design controls, onboarding flows, and Shopify merchant integration.",
      "Migrated high-churn editor modules from JavaScript to TypeScript using a strangler-fig approach, improving type safety without pausing feature delivery.",
      "Supported the post-acquisition integration of Unstack into Elastic Path Commerce, including account pages, cart and checkout features, and storefront wiring.",
      "Debugged cross-surface commerce consistency issues across cart, checkout, and account flows.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Django",
    ],
  },
];
