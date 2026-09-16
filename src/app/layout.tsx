import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.fullName} | Software Engineer`,
    template: `%s | ${profile.fullName}`,
  },
  description: `The portfolio of ${profile.fullName}, a ${profile.headline}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
