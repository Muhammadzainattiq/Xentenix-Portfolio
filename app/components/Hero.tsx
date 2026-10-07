import { Icon, type IconName } from "./Icons";

const chips: { icon: IconName; label: string }[] = [
  { icon: "book", label: "AI Tutors" },
  { icon: "exam", label: "AI Assessment & Grading" },
  { icon: "layers", label: "Content-to-Course" },
  { icon: "chat", label: "Student Support Agents" },
];

export function Hero() {
  return (
    <section id="hero" className="xn-hero">
      <div className="xn-hero__glow" aria-hidden="true" />
      <div className="xn-hero__dots" aria-hidden="true" />

      <div className="xn-container xn-hero__inner">
        <span className="xn-badge">
          <span className="xn-badge__dot" aria-hidden="true" />
          AI for Education &amp; Training businesses
        </span>

        <h1 className="xn-hero__title">
          We deliver <span className="xn-accent">Outcomes</span>
          <br />
          not just Code
        </h1>

        <p className="xn-hero__sub">
          AI tutors, auto-grading and student-support agents for academies, course creators and training
          companies. <strong>Don&apos;t pay a single penny if you don&apos;t get the desired result.</strong>
        </p>

        <div className="xn-hero__actions">
          <a href="#contact" className="xn-btn xn-btn--primary">
            Book a Free AI Audit <Icon name="arrow" size={18} />
          </a>
          <a href="#work" className="xn-btn xn-btn--ghost">
            See Our Work <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="xn-chips">
          {chips.map((chip) => (
            <span key={chip.label} className="xn-chip">
              <Icon name={chip.icon} size={18} />
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
