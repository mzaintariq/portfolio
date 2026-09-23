export type Profile = {
  fullName: string;
  displayName: string;
  headline: string;
  introduction: string;
  location: string | null;
  workAuthorization: string | null;
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
    "Senior software engineer building React and TypeScript products for enterprise commerce platforms",
  introduction:
    "I build React, TypeScript, and Next.js products for Elastic Path's commerce platform — a system processing tens of millions of API requests weekly for a portfolio of enterprise clients. My work spans an enterprise admin console, a payments and checkout vertical, and an open-source storefront used by external developers.",
  location: "Pearland, Texas",
  workAuthorization: "U.S. Citizen · Authorized to work in the U.S. without sponsorship",
  email: "mzaintariq@gmail.com",
  githubUrl: "https://github.com/mzaintariq",
  linkedinUrl: "https://linkedin.com/in/mzaintariq",
  behanceUrl: "https://www.behance.net/mzaintariq",
  portfolioUrl: null,
};
