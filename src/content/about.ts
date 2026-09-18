export type AboutEntry = {
  heading?: string;
  text: string;
};

export type AboutSection = {
  id: string;
  title: string;
  entries: AboutEntry[];
};

export type AboutContent = {
  introduction: string;
  sections: AboutSection[];
};

export const aboutContent: AboutContent = {
  introduction:
    "I focus on the part of software where product decisions, interaction design, and frontend structure meet.",
  sections: [
    {
      id: "background",
      title: "Background",
      entries: [
        {
          text: "My background is in frontend and product engineering: shaping interfaces that need to be useful today and maintainable as they evolve.",
        },
        {
          text: "I've worked across enterprise commerce, CMS/editor platforms, and developer tools, where demanding workflows need to feel coherent to the people using them.",
        },
      ],
    },
    {
      id: "how-i-work",
      title: "How I work",
      entries: [
        {
          heading: "Product thinking",
          text: "I try to understand the whole workflow before deciding what an individual screen should do.",
        },
        {
          heading: "Frontend architecture",
          text: "I use reusable patterns and clear boundaries so a product remains practical to change.",
        },
        {
          heading: "User experience",
          text: "I pay attention to where capable tools create friction and make the next action easier to understand.",
        },
      ],
    },
    {
      id: "outside-of-work",
      title: "Outside of work",
      entries: [
        {
          text: "TrackTV and Digital Cookbook are personal projects where I explore product ideas end to end, from the underlying structure to the interface people use.",
        },
      ],
    },
  ],
};
