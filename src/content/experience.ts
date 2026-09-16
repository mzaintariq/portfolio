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

export const experiences: Experience[] = [];
