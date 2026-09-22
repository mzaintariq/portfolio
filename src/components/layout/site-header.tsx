"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import styles from "./site-header.module.css";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navigation.map((item) => (
        <li key={item.label}>
          <Link href={item.href} onClick={onNavigate}>
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <a href="/resume.pdf" onClick={onNavigate}>
          Resume
        </a>
      </li>
    </>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header className={styles.siteHeader} onKeyDown={handleKeyDown}>
      <div className={`container ${styles.headerInner}`}>
        <Link
          className={styles.brand}
          href="/"
          aria-label={`${profile.fullName}, home`}
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo-dark.png"
            alt={`${profile.fullName} Logo`}
            width={630}
            height={750}
            sizes="40px"
            loading="eager"
            fetchPriority="high"
            className={`${styles.brandLogo} ${styles.logoLightTheme}`}
          />
          <Image
            src="/logo-light.png"
            alt={`${profile.fullName} Logo`}
            width={630}
            height={750}
            sizes="40px"
            loading="eager"
            fetchPriority="high"
            className={`${styles.brandLogo} ${styles.logoDarkTheme}`}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <ul className={styles.navList}>
            <NavigationLinks />
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <div className={styles.mobileHeaderActions}>
          <ThemeToggle />
          <button
            className={styles.menuToggle}
            type="button"
            ref={menuButtonRef}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <FaXmark aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={styles.mobileNav}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <div className={styles.mobileNavContent}>
          <ul className={`container ${styles.mobileNavList}`}>
            <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
          </ul>
        </div>
      </nav>
    </header>
  );
}
