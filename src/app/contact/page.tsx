import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const links = [
    ...(profile.githubUrl ? [{ label: "GitHub", href: profile.githubUrl }] : []),
    ...(profile.linkedinUrl ? [{ label: "LinkedIn", href: profile.linkedinUrl }] : []),
    { label: "Resume", href: "/resume.pdf" },
  ];

  return (
    <main className="container [--inner-section-space:clamp(var(--space-14),7vw,var(--space-24))] pb-[var(--inner-section-space)]">
      <header className="grid grid-cols-1 gap-6 pt-[clamp(var(--space-10),5vw,var(--space-20))] pb-[var(--inner-section-space)] [align-items:end]">
        <h1 className="type-page-title max-w-[14ch] text-balance [overflow-wrap:anywhere]">Contact</h1>
        <p className="type-body max-w-[var(--summary-max-width)] text-[var(--muted)] text-pretty">
          For conversations about frontend engineering roles or product work,
          get in touch by email or connect through the links below.
        </p>
      </header>

      <section
        className="bg-[var(--surface)] p-[clamp(var(--space-5),4vw,var(--space-12))]"
        aria-labelledby="contact-details"
      >
        <h2 className="sr-only" id="contact-details">Details</h2>
        <dl className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12">
          {profile.email && (
            <div className="col-span-full">
              <dt className="type-metadata text-[var(--accent)]">Email</dt>
              <dd className="mt-2 max-w-[var(--reading-max-width)]">
                <a
                  className="action-link text-[length:clamp(1.125rem,3.5vw,3rem)] [overflow-wrap:anywhere]"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </dd>
            </div>
          )}
          {profile.location && (
            <div>
              <dt className="type-metadata">Location</dt>
              <dd className="type-body mt-2 max-w-[var(--reading-max-width)]">{profile.location}</dd>
            </div>
          )}
          {profile.workAuthorization && (
            <div>
              <dt className="type-metadata">Work authorization</dt>
              <dd className="type-body mt-2 max-w-[var(--reading-max-width)]">{profile.workAuthorization}</dd>
            </div>
          )}
        </dl>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-4" aria-labelledby="contact-links">
        <h2 className="type-metadata text-[var(--accent)]" id="contact-links">Links</h2>
        <ul className="m-0 flex list-none flex-wrap items-center gap-x-6 gap-y-3 p-0">
          {links.map((link) => {
            const isExternal = /^https?:\/\//.test(link.href);
            return (
              <li key={link.label}>
                <a
                  className="action-link"
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {link.label} <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
                  {isExternal && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
