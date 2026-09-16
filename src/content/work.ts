export type WorkItem = {
  title: string;
  slug: string;
  company?: string;
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
export const workItems: WorkItem[] = [];
