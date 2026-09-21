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

export const creativeBackground = {
  title: "Creative background",
  paragraphs: [
    "Before and during university, I worked across UX/UI, graphic design, branding, visual communication, and student-society creative work.",
    "That background shapes how I approach engineering today: using visual hierarchy, interaction clarity, and product thinking to make complex interfaces easier to understand.",
  ],
};

// Images will be added when approved assets are available.
export const creativeItems: CreativeItem[] = [
  {
    title: "DementiaCare+",
    slug: "dementia-care",
    category: "UX/UI",
    description:
      "A UX/UI concept focused on designing a supportive digital experience around dementia care.",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/90369259/DementiaCare-UXUI-Concept-for-Dementia-Care",
        type: "behance",
      },
    ],
    featured: true,
  },
  {
    title: "Eye.Assisted",
    slug: "eye-assisted",
    category: "UX/UI",
    description:
      "An accessible eye-testing web application concept exploring assistive interaction and inclusive interface design.",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/114488519/Eye-Assisted-Accessible-Eye-Testing-Web-App",
        type: "behance",
      },
    ],
    featured: true,
  },
  {
    title: "LUMS Eat",
    slug: "lums-eat",
    category: "UX/UI",
    description:
      "A UX/UI concept for simplifying campus food ordering at LUMS through a clearer digital ordering experience.",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/114483647/LUMS-EAT-UIUX-Concept-for-Campus-Food-Ordering",
        type: "behance",
      },
    ],
    featured: true,
  },
  {
    title: "FiLUMS 2018",
    slug: "filums-2018",
    category: "Visual Design",
    description:
      "Branding and visual-design work created for FiLUMS 2018 across event and promotional materials.",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/90373245/FiLUMS-2018",
        type: "behance",
      },
    ],
    featured: true,
  },
  {
    title: "LUMS Olympiad 2019",
    slug: "lums-olympiad-2019",
    category: "Visual Design",
    description:
      "Event branding and visual design across social media, print, delegate materials, proposals, merchandise, awards, and event collateral.",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/84329611/LUMS-Olympiad-2019-Event-Branding-Visual-Design",
        type: "behance",
      },
    ],
    featured: true,
  },
  {
    title: "Danger/Hazard",
    slug: "danger-hazard",
    category: "Visual Design",
    description:
      "A COVID-19 awareness poster that won a university design competition.",
    image: null,
    links: [
      {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/107577451/DangerHazard-COVID-19-Awareness-Poster-Design",
        type: "behance",
      },
    ],
    featured: true,
  },
  {
    title: "Animals",
    slug: "animals",
    category: "Personal Work",
    description:
      "A personal visual-design exploration centered on animal-themed artwork.",
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
    description:
      "A personal visual series inspired by Marvel heroes.",
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
    description:
      "A personal visual series inspired by Marvel villains.",
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
