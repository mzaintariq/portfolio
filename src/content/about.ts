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
          text: "Before touching a screen, I map out the whole workflow it belongs to — that's usually where the real complexity is hiding.",
        },
        {
          heading: "Frontend architecture",
          text: "Reusable patterns and clear boundaries keep a product practical to change months later, not just easy to ship today.",
        },
        {
          heading: "User experience",
          text: "The friction is usually in the tool, not the user — I look for where a capable interface still makes people think twice before the next click.",
        },
      ],
    },
    {
      id: "leadership",
      title: "Leadership",
      entries: [
        {
          text: "I mentor and onboard junior engineers, review code across frontend and backend changes, and interview frontend candidates, including contributing to how technical assessments are designed.",
        },
        {
          text: "I've received positive client feedback throughout the engagement, including a client-awarded bonus for delivery quality.",
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
