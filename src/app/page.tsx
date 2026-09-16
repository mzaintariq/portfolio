import { Hero } from "@/components/hero";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <main>
      <Hero
        profile={profile}
        currentRole="Senior Software Engineer"
        currentCompany="Arbisoft"
      />
    </main>
  );
}
