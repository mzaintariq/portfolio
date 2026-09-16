import Link from "next/link";
import { profile } from "@/content/profile";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Activity", href: "/activity" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          aria-label={`${profile.displayName}, home`}
        >
          <span className="brand-full">{profile.fullName}</span>
          <span className="brand-short">{profile.displayName}</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href="/resume.pdf">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
