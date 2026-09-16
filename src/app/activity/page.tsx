import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = { title: "Activity" };

export default function ActivityPage() {
  return (
    <PlaceholderPage
      title="Activity"
      description="GitHub and GitLab contribution activity will be added here."
    />
  );
}
