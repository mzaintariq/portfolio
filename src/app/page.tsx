import { profile } from "@/content/profile";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Activity", href: "#activity" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "/resume.pdf" },
];

const sections = [
  { id: "work", label: "Selected Work" },
  { id: "activity", label: "Developer Activity" },
  { id: "experience", label: "Experience" },
  { id: "experiments", label: "Experiments" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={`${profile.displayName}, home`}>
            <span className="brand-full">{profile.fullName}</span>
            <span className="brand-short">{profile.displayName}</span>
          </a>

          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <p className="eyebrow">{profile.headline}</p>
            <h1 id="hero-title">{profile.fullName}</h1>
            <p className="hero-introduction">{profile.introduction}</p>
          </div>
        </section>

        <div className="container sections">
          {sections.map((section) => (
            <section
              className="placeholder-section"
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-title`}
            >
              <p className="section-label">Section</p>
              <h2 id={`${section.id}-title`}>{section.label}</h2>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
