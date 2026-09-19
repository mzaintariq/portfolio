export type CreativeCategory = "UX/UI" | "Visual Design" | "Personal Work";

export type CreativeLink = {
  label: string;
  url: string;
  type?: "behance" | "instagram" | "other";
};

export type CreativeItem = {
  title: string;
  slug: string;
  category: CreativeCategory;
  description: string;
  image: {
    src: string;
    alt: string;
  } | null;
  links: CreativeLink[];
  featured: boolean;
};

// Descriptions and featured selections remain unset until approved copy and
// curation are available. Images can be added after assets enter the repository.
export const creativeItems: CreativeItem[] = [
  {
    title: "DementiaCare",
    slug: "dementia-care",
    category: "UX/UI",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/90369259/DementiaCare-UXUI-Concept-for-Dementia-Care",
        type: "behance",
      },
    ],
    featured: false,
  },
  {
    title: "Eye-Assisted Accessible Eye Testing Web App",
    slug: "eye-assisted-accessible-eye-testing-web-app",
    category: "UX/UI",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/114488519/Eye-Assisted-Accessible-Eye-Testing-Web-App",
        type: "behance",
      },
    ],
    featured: false,
  },
  {
    title: "LUMS EAT",
    slug: "lums-eat",
    category: "UX/UI",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/114483647/LUMS-EAT-UIUX-Concept-for-Campus-Food-Ordering",
        type: "behance",
      },
    ],
    featured: false,
  },
  {
    title: "FiLUMS 2018",
    slug: "filums-2018",
    category: "Visual Design",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/90373245/FiLUMS-2018",
        type: "behance",
      },
    ],
    featured: false,
  },
  {
    title: "LUMS Olympiad 2019 Event Branding & Visual Design",
    slug: "lums-olympiad-2019-event-branding-visual-design",
    category: "Visual Design",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/84329611/LUMS-Olympiad-2019-Event-Branding-Visual-Design",
        type: "behance",
      },
    ],
    featured: false,
  },
  {
    title: "Danger/Hazard — COVID-19 Awareness Poster Design",
    slug: "danger-hazard-covid-19-awareness-poster-design",
    category: "Visual Design",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/107577451/DangerHazard-COVID-19-Awareness-Poster-Design",
        type: "behance",
      },
    ],
    featured: false,
  },
  {
    title: "Animals",
    slug: "animals",
    category: "Personal Work",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/90379859/Animals",
        type: "behance",
      },
    ],
    featured: false,
  },
  {
    title: "Heroes (MCU)",
    slug: "heroes-mcu",
    category: "Personal Work",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/97583679/Heroes-(MCU)",
        type: "behance",
      },
    ],
    featured: false,
  },
  {
    title: "Villains (MCU)",
    slug: "villains-mcu",
    category: "Personal Work",
    description: "",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/107576141/Villains-(MCU)",
        type: "behance",
      },
    ],
    featured: false,
  },
];

export const creativeSocialLinks: CreativeLink[] = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/dezaintariq",
    type: "instagram",
  },
];
