export type PriorExperience = {
  title: string;
  summary: string;
};

export type Education = {
  institution: string;
  degree: string;
  dates: {
    start: string;
    end: string;
  };
};

export const priorExperience: PriorExperience = {
  title: "Before Arbisoft",
  summary:
    "Three years in creative leadership roles across university media and photography societies — Head of Productions, plus design and branding direction for two major campus events (FiLUMS, LUMS Olympiad).",
};

export const education: Education = {
  institution: "Lahore University of Management Sciences",
  degree: "BS, Computer Science",
  dates: {
    start: "Aug 2017",
    end: "Jun 2021",
  },
};
