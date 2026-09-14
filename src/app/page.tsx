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
          <a className="brand" href="#top" aria-label="Zain Tariq, home">
            <span className="brand-full">Muhammad Zain Tariq</span>
            <span className="brand-short">Zain Tariq</span>
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
            <p className="eyebrow">Frontend-focused senior software engineer</p>
            <h1 id="hero-title">Muhammad Zain Tariq</h1>
            <p className="hero-introduction">
              A portfolio of selected work, experience, and experiments.
            </p>
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
