import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const links = [
    ...(profile.githubUrl
      ? [{ label: "GitHub", href: profile.githubUrl }]
      : []),
    ...(profile.linkedinUrl
      ? [{ label: "LinkedIn", href: profile.linkedinUrl }]
      : []),
    { label: "Resume", href: "/resume.pdf" },
  ];

  return (
    <main className="container pb-20 sm:pb-28">
      <header className="grid gap-6 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
        <h1 className="text-[clamp(3rem,7vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.06em]">
          Contact
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          For conversations about frontend engineering roles or product work,
          get in touch by email or connect through the links below.
        </p>
      </header>

      <section
        aria-labelledby="contact-details"
        className="grid gap-6 border-t border-[var(--border)] py-10 sm:py-14 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12"
      >
        <h2
          className="text-xl leading-tight font-semibold tracking-[-0.03em] sm:text-2xl"
          id="contact-details"
        >
          Details
        </h2>
        <dl className="max-w-2xl space-y-7">
          {profile.email && (
            <div>
              <dt className="text-sm text-[var(--muted)]">Email</dt>
              <dd className="mt-1 text-base font-medium break-words sm:text-lg">
                <a
                  className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </dd>
            </div>
          )}
          {profile.location && (
            <div>
              <dt className="text-sm text-[var(--muted)]">Location</dt>
              <dd className="mt-1 text-base font-medium sm:text-lg">
                {profile.location}
              </dd>
            </div>
          )}
          {profile.workAuthorization && (
            <div>
              <dt className="text-sm text-[var(--muted)]">
                Work authorization
              </dt>
              <dd className="mt-1 text-base font-medium sm:text-lg">
                {profile.workAuthorization}
              </dd>
            </div>
          )}
        </dl>
      </section>

      <section
        aria-labelledby="contact-links"
        className="grid gap-6 border-t border-[var(--border)] py-10 sm:py-14 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12"
      >
        <h2
          className="text-xl leading-tight font-semibold tracking-[-0.03em] sm:text-2xl"
          id="contact-links"
        >
          Links
        </h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map((link) => {
            const isExternal = /^https?:\/\//.test(link.href);

            return (
              <li key={link.label}>
                <a
                  className="inline-flex min-h-11 items-center gap-2 font-medium hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {link.label} <span aria-hidden="true">↗</span>
                  {isExternal && (
                    <span className="sr-only">(opens in a new tab)</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
