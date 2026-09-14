import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Zain Tariq | Software Engineer",
  description:
    "The portfolio of Muhammad Zain Tariq, a frontend-focused senior software engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
