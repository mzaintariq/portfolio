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
        <h1 id="hero-title" className="type-display hero-name">
          {profile.fullName}
        </h1>
        <div className="hero-copy">
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

        <Image
          src="/images/profile/hero-portrait-dark.png"
          alt={`Portrait of ${profile.fullName}`}
          width={2494}
          height={3850}
          sizes="(min-width: 1184px) 461px, (min-width: 1024px) calc((100vw - 56px) / 2.45), (min-width: 416px) 384px, calc(100vw - 32px)"
          loading="eager"
          fetchPriority="high"
          className="hero-portrait hero-portrait-dark"
        />
        <Image
          src="/images/profile/hero-portrait-light.png"
          alt={`Portrait of ${profile.fullName}`}
          width={2157}
          height={2415}
          sizes="(min-width: 1184px) 461px, (min-width: 1024px) calc((100vw - 56px) / 2.45), (min-width: 416px) 384px, calc(100vw - 32px)"
          loading="eager"
          fetchPriority="high"
          className="hero-portrait hero-portrait-light"
        />
      </div>
    </section>
  );
}
