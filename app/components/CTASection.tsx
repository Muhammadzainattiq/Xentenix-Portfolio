import { Icon } from "./Icons";

const promises = [
  "A free AI tutor demo built on one of your courses",
  "A clear, measurable success target agreed up front",
  "Zero fees if we don't deliver the desired result",
];

export function CTASection() {
  return (
    <>
      <section className="xn-cta-band">
        <div className="xn-container xn-cta-band__inner">
          <h2>
            Ready for AI that moves
            <br />
            <span>your learning outcomes?</span>
          </h2>
          <a href="#contact" className="xn-btn xn-btn--white">
            Get Your Free Demo <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>

      <section id="contact" className="xn-section">
        <div className="xn-container xn-contact">
          <div>
            <h2 className="xn-h2">Let&apos;s build your free demo</h2>
            <p className="xn-contact__lead">
              Tell us about your academy or courses. We&apos;ll reply within one business day with how
              we&apos;d get you the result.
            </p>
            <ul className="xn-checklist">
              {promises.map((item) => (
                <li key={item}>
                  <Icon name="check" size={20} strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form className="xn-form">
            <div className="xn-form-2col">
              <div className="xn-field">
                <label htmlFor="firstName">First name</label>
                <input id="firstName" name="firstName" type="text" placeholder="Jane" autoComplete="given-name" />
              </div>
              <div className="xn-field">
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Smith" autoComplete="family-name" />
              </div>
            </div>
            <div className="xn-field">
              <label htmlFor="email">Work email</label>
              <input id="email" name="email" type="email" placeholder="jane@academy.com" autoComplete="email" />
            </div>
            <div className="xn-field">
              <label htmlFor="company">Academy / company</label>
              <input id="company" name="company" type="text" placeholder="Bright Minds Academy" autoComplete="organization" />
            </div>
            <div className="xn-field">
              <label htmlFor="message">What outcome do you need?</label>
              <textarea id="message" name="message" placeholder="e.g. Our teachers spend 15 hours a week grading mock tests..." />
            </div>
            <button type="submit" className="xn-btn xn-btn--primary">
              Request My Free Demo <Icon name="arrow" size={18} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
