import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <PlaceholderPage
      title="Experience"
      description="A professional timeline will be added here."
    />
  );
}
