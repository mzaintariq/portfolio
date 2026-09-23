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
    title: "Commerce Manager",
    slug: "commerce-manager",
    company: "Arbisoft",
    client: "Elastic Path",
    summary:
      "Elastic Path's enterprise admin console for managing catalogs, products, orders, and subscriptions — a large-scale React/TypeScript SPA used by merchants, developers, and internal teams.",
    category: "Professional Work",
    role: "Senior Software Engineer",
    timeframe: "2022 - Present",
    technologies: [
      "React",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "TanStack Table",
    ],
    highlights: [
      "Led the redesign of the Product Editor (~120 files, my largest single area of ownership), rebuilding it into a split-view, tabbed workflow with a form provider that coordinates a single Save across six or more backend resources.",
      "Rebuilt the Bundle Editor and Catalog Rules flows, including a rule simulator for validating targeting and scheduling before publish.",
      "Standardized 10+ legacy data tables onto a single reusable pattern, adopted platform-wide across the console.",
    ],
  },

  {
    title: "Plasmic Storefront — Checkout & Payments",
    slug: "plasmic-storefront-checkout-payments",
    company: "Arbisoft",
    client: "Elastic Path",
    summary:
      "Owned the checkout and payments vertical on Elastic Path's fork of Plasmic, a visual storefront builder — built on top of an existing session and auth architecture.",
    category: "Professional Work",
    role: "Senior Software Engineer",
    timeframe: "Aug – Sep 2026",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Stripe",
      "Commerce APIs",
    ],
    highlights: [
      "Redesigned the payment-adapter model so each gateway declares its own payment sequence, removing hardcoded Stripe assumptions — adopted as the package's contract within a week.",
      "Independently found and fixed two checkout-integrity bugs at the payment boundary: one that let physical orders skip shipping, and one that could overcharge from stale shipping data.",
      "Implemented Stripe 3D Secure end-to-end, including an error taxonomy that distinguishes genuine bank challenges from upstream API failures.",
    ],
  },

  {
    title: "Composable Commerce Frontend",
    slug: "composable-commerce-frontend",
    company: "Arbisoft",
    client: "Elastic Path",
    summary:
      "Built and maintain the flagship reference storefront for Elastic Path's open-source headless-commerce starter kit.",
    category: "Professional Work",
    role: "Senior Software Engineer",
    timeframe: "2022 - Present",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Algolia",
      "REST APIs",
    ],
    highlights: [
      "Built the storefront's locale-first architecture — routing, currency formatting, and locale-aware search — from the ground up.",
      "Integrated Algolia search via a custom adapter with URL-synced filters, and wrote a 325-line test suite covering cart and checkout pricing logic.",
      "Shipped as part of a public repository used by external developers evaluating the platform.",
    ],
  },

  {
    title: "Studio (formerly Unstack) Visual Editor",
    slug: "elastic-path-studio-visual-editor",
    company: "Arbisoft",
    client: "Unstack",
    summary:
      "Built and maintained the visual page-editor and admin experience for Elastic Path Studio (formerly Unstack), from pre-acquisition product through long-term maintenance.",
    category: "Professional Work",
    role: "Senior Software Engineer",
    timeframe: "2021 - 2026",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Design Systems",
      "Responsive UI",
    ],
    highlights: [
      "Migrated high-churn editor modules from JavaScript to TypeScript using a strangler-fig approach, improving type safety without pausing feature delivery.",
      "Standardized 10+ legacy data tables onto a single reusable pattern, adopted platform-wide across two codebases.",
      "Sustained the product through an extended maintenance phase, triaging production defects across editor, commerce, and integrations with a shrinking team.",
    ],
  },
];
