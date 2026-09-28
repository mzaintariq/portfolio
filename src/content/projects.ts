export type ProjectLink = {
  label: string;
  url: string;
  type?: "github" | "live" | "case-study" | "demo" | "other";
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null;
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "TrackTV",
    slug: "tracktv",
    description:
      "A private TV and movie tracking application for managing watch progress, upcoming releases, and personal viewing history.",
    longDescription:
      "Built a full-featured media tracking experience with Next.js, React, and TypeScript. The application combines server-rendered pages with interactive client components for search, previews, watch progress management, and personalized libraries. It includes TMDB integration, authentication, history migration workflows, and responsive interfaces designed around real user workflows.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "TMDB API",
    ],
    image: { src: '/screenshots/tracktv-explore.png', alt: 'TrackTV Screenshot', width: 2104, height: 1494 },
    links: [
      {
        label: "Live Demo",
        url: "https://tracktv.vercel.app/shows",
        type: "live",
      },
      {
        label: "GitHub",
        url: "https://github.com/mzaintariq/tv-tracker",
        type: "github",
      },
    ],
    featured: true,
  },

  {
    title: "Digital Cookbook",
    slug: "digital-cookbook",
    description:
      "A full-stack recipe management platform with structured recipe authoring, publishing workflows, and cooking-focused interactions.",
    longDescription:
      "Built a digital cookbook experience focused on preserving and managing recipes through structured content workflows. The application includes a responsive recipe experience, protected administration, drag-and-drop editing, image management, and serving-size scaling. It combines Nuxt, Vue, TypeScript, PostgreSQL, and Prisma to deliver a complete full-stack product.",
    technologies: [
      "Nuxt",
      "Vue",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    image: { src: '/screenshots/zaika-homepage.png', alt: 'Digital Cookbook Screenshot', width: 2104, height: 1494 },
    links: [
      {
        label: "Live Demo",
        url: "https://digitalcookbook.vercel.app/",
        type: "live",
      },
      {
        label: "GitHub",
        url: "https://github.com/mzaintariq/digital-cookbook",
        type: "github",
      },
    ],
    featured: true,
  },
];
