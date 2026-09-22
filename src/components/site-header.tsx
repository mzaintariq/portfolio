"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="container header-inner">
        <Link
          className="brand"
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
            className="brand-logo logo-light-theme"
          />
          <Image
            src="/logo-light.png"
            alt={`${profile.fullName} Logo`}
            width={630}
            height={750}
            sizes="40px"
            loading="eager"
            fetchPriority="high"
            className="brand-logo logo-dark-theme"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            <NavigationLinks />
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <div className="mobile-header-actions">
          <ThemeToggle />
          <button
            className="menu-toggle"
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
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <div className="mobile-nav-content">
          <ul className="container mobile-nav-list">
            <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
          </ul>
        </div>
      </nav>
    </header>
  );
}
