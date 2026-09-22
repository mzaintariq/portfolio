import Image from "next/image";
import type { Profile } from "@/content/profile";
import styles from "./hero.module.css";

type HeroProps = {
  profile: Profile;
  currentRole: string;
  currentCompany: string;
};

export function Hero({ profile, currentRole, currentCompany }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.heroLayout}`}>
        <h1 id="hero-title" className={`type-display ${styles.heroName}`}>
          {profile.fullName}
        </h1>
        <div className={styles.heroCopy}>
          <p className={styles.heroHeadline}>{profile.headline}</p>
          <p className={`type-body ${styles.heroIntroduction}`}>{profile.introduction}</p>

          <div className={styles.heroContext}>
            <p>
              Currently <span>{currentRole}</span> at{" "}
              <span>{currentCompany}</span>.
            </p>
            {profile.location && <p>Based in {profile.location}</p>}
          </div>

          <div className={styles.heroActions}>
            <a className={styles.heroResume} href="/resume.pdf">
              View Resume <span aria-hidden="true">↗</span>
            </a>
            <div className={styles.heroSocialLinks}>
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
          className={`${styles.heroPortrait} ${styles.heroPortraitDark}`}
        />
        <Image
          src="/images/profile/hero-portrait-light.png"
          alt={`Portrait of ${profile.fullName}`}
          width={2157}
          height={2415}
          sizes="(min-width: 1184px) 461px, (min-width: 1024px) calc((100vw - 56px) / 2.45), (min-width: 416px) 384px, calc(100vw - 32px)"
          loading="eager"
          fetchPriority="high"
          className={`${styles.heroPortrait} ${styles.heroPortraitLight}`}
        />
      </div>
    </section>
  );
}
