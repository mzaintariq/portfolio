import { profile } from "@/content/profile";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={`${styles.siteFooter} border-t border-[var(--border)]`}>
      <div className="container flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-6">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <p className="text-base font-semibold tracking-[-0.02em]">
            {profile.fullName}
          </p>
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-6 text-sm sm:justify-end">
            {profile.githubUrl && (
              <li>
                <a
                  className="inline-flex min-h-11 items-center hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            )}
            {profile.linkedinUrl && (
              <li>
                <a
                  className="inline-flex min-h-11 items-center hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            )}
            <li>
              <a
                className="inline-flex min-h-11 items-center hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                href="/resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
