import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PlaceholderPage
      title="Projects"
      description="Personal projects and demos will be added here."
    />
  );
}
