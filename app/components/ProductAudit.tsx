import { Icon, type IconName } from "./Icons";

const areas: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "target",
    title: "Learner journey gaps",
    description: "Where students drop off, get stuck or wait too long for help, and how AI can step in.",
  },
  {
    icon: "flow",
    title: "Work worth automating",
    description: "Grading, content creation, support and admin tasks your team still handles by hand.",
  },
  {
    icon: "layers",
    title: "AI features that fit",
    description: "Tutors, adaptive practice, instant feedback and smart search shaped around your users.",
  },
  {
    icon: "chart",
    title: "A prioritised roadmap",
    description: "Every opportunity ranked by impact and effort, so you know exactly what to build first.",
  },
];

export function ProductAudit() {
  return (
    <section id="audit" className="xn-section">
      <div className="xn-container">
        <div className="xn-audit">
          <div className="xn-audit__intro">
            <span className="xn-audit__badge">For EdTech product owners</span>
            <h2 className="xn-h2">
              A free AI audit of <span className="xn-accent">your product</span>
            </h2>
            <p>
              Already running a learning app or platform? We&apos;ll study it end to end and show you where AI
              can lift learner outcomes, cut manual work and open up new features, at no cost and with no
              obligation to work with us.
            </p>
            <a href="#contact" className="xn-btn xn-btn--primary">
              Request Your Free Audit <Icon name="arrow" size={18} />
            </a>
          </div>

          <ul className="xn-audit__areas">
            {areas.map((area) => (
              <li key={area.title}>
                <span className="xn-audit__icon">
                  <Icon name={area.icon} size={22} />
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
