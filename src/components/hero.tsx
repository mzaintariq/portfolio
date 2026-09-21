import Image from "next/image";
import type { Profile } from "@/content/profile";

type HeroProps = {
  profile: Profile;
  currentRole: string;
  currentCompany: string;
};

export function Hero({ profile, currentRole, currentCompany }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title" className="type-display hero-name">
            {profile.displayName}
          </h1>

          <p className="hero-headline">{profile.headline}</p>
          <p className="type-body hero-introduction">{profile.introduction}</p>

          <div className="hero-context">
            <p>
              Currently <span>{currentRole}</span> at{" "}
              <span>{currentCompany}</span>.
            </p>
            {profile.location && <p>Based in {profile.location}</p>}
          </div>

          <div className="hero-actions">
            <a className="hero-resume" href="/resume.pdf">
              View Resume <span aria-hidden="true">↗</span>
            </a>
            <div className="hero-social-links">
              {profile.githubUrl && (
                <a
                  className="action-link"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  className="action-link"
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="hero-portrait">
          <Image
            src="/images/profile/hero-portrait.png"
            alt={`Portrait of ${profile.fullName}`}
            fill
            sizes="(min-width: 1024px) 432px, (min-width: 544px) 512px, calc(100vw - 32px)"
            loading="eager"
            fetchPriority="high"
            className="hero-portrait-image"
          />
        </div>
      </div>
    </section>
  );
}
