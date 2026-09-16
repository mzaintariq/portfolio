import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <PlaceholderPage
      title="Work"
      description="Professional case studies will be added here."
    />
  );
}
