"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { profile } from "@/content/profile";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Activity", href: "/activity" },
  { label: "About", href: "/about" },
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
          aria-label={`${profile.displayName}, home`}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="brand-full">{profile.fullName}</span>
          <span className="brand-short">{profile.displayName}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            <NavigationLinks />
          </ul>
        </nav>

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

      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
      >
        <ul className="container mobile-nav-list">
          <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
        </ul>
      </nav>
    </header>
  );
}
