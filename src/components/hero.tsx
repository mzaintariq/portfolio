import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { Profile } from "@/content/profile";

type HeroProps = {
  profile: Profile;
  currentRole: string;
  currentCompany: string;
};

export function Hero({ profile, currentRole, currentCompany }: HeroProps) {
  return (
    <section
      className="border-b border-[var(--border)]"
      aria-labelledby="hero-title"
    >
      <div className="container pt-16 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
        <div className="grid gap-10 pb-16 sm:pb-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:pb-28">
          <div className="min-w-0">
            <h1
              id="hero-title"
              className="text-[clamp(3.25rem,8vw,6.5rem)] leading-[0.98] font-semibold tracking-[-0.065em]"
            >
              {profile.displayName}
            </h1>
          </div>

          <div className="min-w-0 lg:pt-1">
            <p className="max-w-2xl text-[clamp(1.65rem,3vw,2.5rem)] leading-[1.18] font-medium tracking-[-0.04em]">
              {profile.headline}
            </p>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {profile.introduction}
            </p>
          </div>
        </div>

        <div className="grid gap-8 border-t border-[var(--border)] pt-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <p className="max-w-xl self-center text-base leading-snug text-[var(--muted)]">
            Currently{" "}
            <span className="font-semibold text-[var(--foreground)]">
              {currentRole}
            </span>{" "}
            at{" "}
            <span className="font-semibold text-[var(--foreground)]">
              {currentCompany}
            </span>.
          </p>

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-sm bg-[var(--foreground)] px-5 text-sm font-medium text-[var(--background)] hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--foreground)]"
              href="/resume.pdf"
            >
              View Resume <span aria-hidden="true">↗</span>
            </a>
            <div className="flex flex-wrap items-center gap-x-2">
              {profile.githubUrl && (
                <a
                  className="inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub aria-hidden="true" className="size-4.5 shrink-0" />
                  GitHub
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  className="inline-flex min-h-11 items-center gap-2 rounded-sm px-3 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin aria-hidden="true" className="size-4.5 shrink-0" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
