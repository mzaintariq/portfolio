import Image from "next/image";
import { FaBehance, FaInstagram } from "react-icons/fa6";
import {
  creativeItems,
  creativeSocialLinks,
  type CreativeCategory,
} from "@/content/creative";
import { profile } from "@/content/profile";
import styles from "./creative-work.module.css";

const categories: { id: string; label: CreativeCategory }[] = [
  { id: "ux-ui", label: "UX/UI" },
  { id: "visual-design", label: "Visual Design" },
];

export function CreativeWork() {
  const instagram = creativeSocialLinks.find((link) => link.type === "instagram");

  return (
    <section className="py-[var(--inner-section-space)]" aria-labelledby="creative-work-title">
      <div className="media-container">
        <div className="flex items-center justify-between gap-2 lg:gap-6">
          <h2 className="type-section-title min-w-0" id="creative-work-title">Creative Work</h2>
          <ul className="flex shrink-0 list-none items-center gap-y-3 p-0 lg:gap-x-6">
            {profile.behanceUrl && (
              <li>
                <a className="action-link min-w-11 justify-center after:hidden lg:min-w-0 lg:justify-start lg:after:block" href={profile.behanceUrl} target="_blank" rel="noopener noreferrer">
                  <FaBehance className="size-5 shrink-0" aria-hidden="true" />
                  <span className="sr-only lg:not-sr-only">Behance</span>
                  <span className="hidden lg:inline" aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            )}
            {instagram && (
              <li>
                <a className="action-link min-w-11 justify-center after:hidden lg:min-w-0 lg:justify-start lg:after:block" href={instagram.url} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="size-5 shrink-0" aria-hidden="true" />
                  <span className="sr-only lg:not-sr-only">Instagram</span>
                  <span className="hidden lg:inline" aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-12 lg:gap-16">
          {categories.map((category) => {
            const items = creativeItems.filter(
              (item) => item.featured && item.category === category.label,
            );
            return (
              <section
                className="grid grid-cols-1 gap-8 [align-items:start] lg:grid-cols-[minmax(0,min(10%,12rem))_minmax(0,1fr)] lg:gap-12"
                aria-labelledby={`creative-${category.id}`}
                key={category.id}
              >
                <h3 className="type-metadata text-[var(--accent)]" id={`creative-${category.id}`}>
                  {category.label}
                </h3>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-10 [align-items:start] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10">
                  {items.map((item) => {
                    const behance = item.links.find((link) => link.type === "behance");

                    return (
                      <article className="min-w-0" key={item.slug}>
                        {item.image && (
                          <div className="mb-2 lg:mb-4 overflow-hidden rounded-[var(--control-radius)] border border-[var(--border)] bg-[var(--surface)] p-2 sm:p-3">
                            <Image
                              src={item.image.src}
                              alt={item.image.alt}
                              width={1200}
                              height={800}
                              sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                              className="block h-auto w-full rounded-[calc(var(--control-radius)-4px)]"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <h4 className="text-[length:clamp(1.25rem,2vw,1.5rem)] font-semibold leading-[1.35] text-pretty">
                            {item.title}
                          </h4>
                          {behance && (
                            <div
                              className={`text-[length:var(--text-navigation)] ${styles.creativeItemLinks}`}
                            >
                              <a className="action-link justify-center after:hidden lg:min-w-0 lg:justify-start" href={behance.url} target="_blank" rel="noopener noreferrer">
                                <FaBehance className="size-5 shrink-0" aria-hidden="true" />
                                <span className="hidden lg:inline" aria-hidden="true">↗</span>
                              </a>
                            </div>
                          )}
                        </div>

                        <p className="mt-1 lg:mt-3 max-w-[var(--summary-max-width)] text-[var(--muted)]">
                          {item.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
