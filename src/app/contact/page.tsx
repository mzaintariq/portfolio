import type { Metadata } from "next";
import { profile } from "@/content/profile";
import innerStyles from "@/components/layout/inner-page.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const links = [
    ...(profile.githubUrl ? [{ label: "GitHub", href: profile.githubUrl }] : []),
    ...(profile.linkedinUrl ? [{ label: "LinkedIn", href: profile.linkedinUrl }] : []),
    { label: "Resume", href: "/resume.pdf" },
  ];

  return (
    <main className={`container ${innerStyles.innerPage}`}>
      <header className={`${innerStyles.innerPageHeader} ${styles.contactPageHeader}`}>
        <h1 className={`type-page-title ${innerStyles.innerPageTitle}`}>Contact</h1>
        <p className={`type-body ${innerStyles.innerPageIntroduction}`}>
          For conversations about frontend engineering roles or product work,
          get in touch by email or connect through the links below.
        </p>
      </header>

      <section className={styles.contactDetails} aria-labelledby="contact-details">
        <h2 className="sr-only" id="contact-details">Details</h2>
        <dl className={styles.contactDetailsList}>
          {profile.email && (
            <div className={styles.contactEmailBlock}>
              <dt className={`type-metadata ${innerStyles.innerLabel}`}>Email</dt>
              <dd>
                <a className={`action-link ${styles.contactEmailLink}`} href={`mailto:${profile.email}`}>
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

      <section className={styles.contactPageLinks} aria-labelledby="contact-links">
        <h2 className={`type-metadata ${innerStyles.innerLabel}`} id="contact-links">Links</h2>
        <ul className={innerStyles.innerActions}>
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
