export type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: {
    src: string;
    alt: string;
  } | null;
  links: {
    label: string;
    url: string;
  }[];
  featured: boolean;
};

export const projects: Project[] = [];
