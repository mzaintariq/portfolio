export type Profile = {
  fullName: string;
  displayName: string;
  headline: string;
  introduction: string;
  location: string | null;
  email: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
  behanceUrl: string | null;
  portfolioUrl: string | null;
};

export const profile: Profile = {
  fullName: "Muhammad Zain Tariq",
  displayName: "Zain Tariq",
  headline:
    "Senior frontend engineer building scalable interfaces for complex enterprise systems",
  introduction:
    "I build React, TypeScript, and Next.js applications across enterprise commerce platforms, admin systems, CMS/editor experiences, and developer tools. I pair frontend architecture with product thinking to make sophisticated systems clear to use and practical to evolve.",
  location: "Pearland, Texas",
  email: "mzaintariq@gmail.com",
  githubUrl: "https://github.com/mzaintariq",
  linkedinUrl: "https://linkedin.com/in/mzaintariq",
  behanceUrl: "https://www.behance.net/mzaintariq",
  portfolioUrl: null,
};
