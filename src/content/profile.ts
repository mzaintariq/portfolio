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
    "Senior frontend and product engineer translating complex workflows into intuitive web experiences",
  introduction:
    "I build complex interfaces and products with React, TypeScript, and Next.js. I bring frontend architecture and product thinking together to make sophisticated experiences clear and usable.",
  location: "Pearland, Texas",
  email: "mzaintariq@gmail.com",
  githubUrl: "https://github.com/mzaintariq",
  linkedinUrl: "https://linkedin.com/in/mzaintariq",
  behanceUrl: "https://www.behance.net/mzaintariq",
  portfolioUrl: null,
};
