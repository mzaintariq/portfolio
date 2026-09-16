export type WorkItem = {
  title: string;
  slug: string;
  company?: string;
  client?: string;
  summary: string;
  category: string;
  role: string;
  timeframe: string;
  technologies: string[];
  highlights: string[];
  publicLinks?: {
    label: string;
    url: string;
  }[];
  images?: {
    src: string;
    alt: string;
  }[];
};

// Add only work details and assets approved for public sharing.
export const workItems: WorkItem[] = [
  {
    title: "Commerce Manager Product Editor",
    slug: "commerce-manager-product-editor",
    company: "Arbisoft",
    client: "Elastic Path",
    summary:
      "Redesigned an enterprise product management experience into a scalable React workflow for complex merchant operations.",
    category: "Professional Work",
    role: "Senior Frontend Engineer",
    timeframe: "2024 - Present",
    technologies: [
      "React",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "TanStack Table",
    ],
    highlights: [
      "Built reusable frontend patterns for complex product configuration workflows.",
      "Improved consistency across editing experiences involving multiple product resources.",
      "Focused on maintainable architecture, validation, and intuitive enterprise workflows.",
    ],
  },

  {
    title: "Plasmic Commerce Integration",
    slug: "plasmic-commerce-integration",
    company: "Arbisoft",
    client: "Elastic Path",
    summary:
      "Built frontend commerce experiences connecting visual content creation with enterprise storefront and checkout workflows.",
    category: "Professional Work",
    role: "Senior Frontend Engineer",
    timeframe: "2025 - Present",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Stripe",
      "Commerce APIs",
    ],
    highlights: [
      "Designed scalable frontend patterns for commerce checkout flows.",
      "Improved reliability of payment and order flows through robust frontend state management.",
      "Collaborated across product, design, and engineering teams to deliver production features.",
    ],
  },

  {
    title: "Composable Commerce Frontend",
    slug: "composable-commerce-frontend",
    company: "Arbisoft",
    client: "Elastic Path",
    summary:
      "Developed modern Next.js commerce storefront experiences with search, localization, and reusable frontend integrations.",
    category: "Professional Work",
    role: "Frontend Engineer",
    timeframe: "2022 - Present",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Algolia",
      "REST APIs",
    ],
    highlights: [
      "Built customer-facing commerce experiences using modern React and Next.js patterns.",
      "Implemented search, localization, and reusable storefront capabilities.",
      "Contributed to an open-source composable commerce reference storefront.",
    ],
  },

  {
    title: "Elastic Path Studio Visual Editor",
    slug: "elastic-path-studio-visual-editor",
    company: "Arbisoft",
    client: "Elastic Path",
    summary:
      "Built frontend tooling for visual commerce editing experiences, enabling flexible content customization and responsive design workflows.",
    category: "Professional Work",
    role: "Frontend Engineer",
    timeframe: "2021 - 2024",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Design Systems",
      "Responsive UI",
    ],
    highlights: [
      "Developed reusable editor components and configurable UI controls.",
      "Implemented responsive design capabilities including device-specific styling and visibility behavior.",
      "Modernized frontend code while improving maintainability across editor experiences.",
    ],
  },
];
