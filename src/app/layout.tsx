import type { Metadata } from "next";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.fullName} | Software Engineer`,
  description: `The portfolio of ${profile.fullName}, a ${profile.headline}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
