import { BOOKING_URL, CONTACT_EMAIL } from "../site";
import { Icon } from "./Icons";

const promises = [
  "A 30-minute audit of where AI can save your team time",
  "A free AI tutor demo built on one of your courses",
  "A clear, measurable success target agreed up front",
  "Zero fees if we don't deliver the desired result",
];

// Cal.com's embed view drops the page chrome; brand colour comes from Cal.com Settings → Appearance.
const bookingSrc = `${BOOKING_URL}/embed?${new URLSearchParams({ layout: "month_view", theme: "light" })}`;

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
            Book a Free AI Audit <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>

      <section id="contact" className="xn-section">
        <div className="xn-container xn-contact">
          <div>
            <h2 className="xn-h2">Book a free AI audit</h2>
            <p className="xn-contact__lead">
              Pick a time that suits you. We&apos;ll look at your academy or courses and show you exactly
              where AI can help.
            </p>
            <ul className="xn-checklist">
              {promises.map((item) => (
                <li key={item}>
                  <Icon name="check" size={20} strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="xn-contact__alt">
              Prefer email? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>

          <div className="xn-booking">
            <iframe
              src={bookingSrc}
              title="Book a free AI audit with Xentenix"
              loading="lazy"
              className="xn-booking__frame"
            />
          </div>
        </div>
      </section>
    </>
  );
}
