import { profile } from "@/content/profile";
import styles from "./site-footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

const footerLinkClassName = [
  "group inline-flex min-h-11 min-w-6 items-center justify-center",
  "transition-colors duration-200 motion-reduce:transition-none",
  "hover:text-[var(--accent)] active:text-[var(--accent)] focus-visible:text-[var(--accent)]",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]",
].join(" ");

const footerIconClassName = [
  "size-5 shrink-0 motion-safe:transition-transform motion-safe:duration-200",
  "motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:-translate-y-0.5",
].join(" ");

export function SiteFooter() {
  return (
    <footer className={`${styles.siteFooter} border-t border-[var(--border)]`}>
      <div className="container flex items-center justify-between gap-2 py-5 sm:gap-8 sm:py-6">
        <div className="flex items-baseline gap-2 whitespace-nowrap sm:gap-4">
          <p className="text-xs font-semibold tracking-[-0.02em] sm:text-base">
            {profile.fullName}
          </p>
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()}
          </p>
        </div>

        <nav className="shrink-0" aria-label="Footer navigation">
          <ul className="flex items-center gap-2 text-sm sm:gap-6">
            {profile.githubUrl && (
              <li>
                <a
                  className={footerLinkClassName}
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className={footerIconClassName} aria-hidden="true" />
                  <span className="sr-only">GitHub (opens in a new tab)</span>
                </a>
              </li>
            )}
            {profile.linkedinUrl && (
              <li>
                <a
                  className={footerLinkClassName}
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className={footerIconClassName} aria-hidden="true" />
                  <span className="sr-only">LinkedIn (opens in a new tab)</span>
                </a>
              </li>
            )}
            <li>
              <a
                className={footerLinkClassName}
                href="/resume.pdf"
              >
                <IoDocumentText className={footerIconClassName} aria-hidden="true" />
                <span className="sr-only">Resume</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
