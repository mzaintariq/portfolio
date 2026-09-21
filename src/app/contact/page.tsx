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
    <main className="container inner-page contact-page">
      <header className="inner-page-header contact-page-header">
        <h1 className="type-page-title inner-page-title">Contact</h1>
        <p className="type-body inner-page-introduction">
          For conversations about frontend engineering roles or product work,
          get in touch by email or connect through the links below.
        </p>
      </header>

      <section className="contact-details" aria-labelledby="contact-details">
        <h2 className="sr-only" id="contact-details">Details</h2>
        <dl className="contact-details-list">
          {profile.email && (
            <div className="contact-email-block">
              <dt className="type-metadata inner-label">Email</dt>
              <dd>
                <a className="action-link contact-email-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
          )}
          {profile.location && (
            <div>
              <dt className="type-metadata">Location</dt>
              <dd className="type-body">{profile.location}</dd>
            </div>
          )}
          {profile.workAuthorization && (
            <div>
              <dt className="type-metadata">Work authorization</dt>
              <dd className="type-body">{profile.workAuthorization}</dd>
            </div>
          )}
        </dl>
      </section>

      <section className="contact-page-links" aria-labelledby="contact-links">
        <h2 className="type-metadata inner-label" id="contact-links">Links</h2>
        <ul className="inner-actions">
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
