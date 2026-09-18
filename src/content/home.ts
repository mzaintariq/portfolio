export type HomeContent = {
  featuredWork: {
    title: string;
    introduction: string;
    linkLabel: string;
    slugs: string[];
  };
  featuredProjects: {
    title: string;
    introduction: string;
    linkLabel: string;
  };
  about: {
    title: string;
    linkLabel: string;
  };
  contact: {
    title: string;
    introduction: string;
    linkLabel: string;
  };
};

export const homeContent: HomeContent = {
  featuredWork: {
    title: "Featured work",
    introduction: "A few examples of product-facing frontend work from my professional experience.",
    linkLabel: "Explore all work",
    slugs: [
      "commerce-manager-product-editor",
      "elastic-path-studio-visual-editor",
    ],
  },
  featuredProjects: {
    title: "Featured projects",
    introduction: "Products and experiments built beyond my professional work.",
    linkLabel: "View all projects",
  },
  about: {
    title: "About my approach",
    linkLabel: "More about me",
  },
  contact: {
    title: "Get in touch",
    introduction: "For frontend engineering opportunities or product conversations, let's connect.",
    linkLabel: "Contact me",
  },
};
