import { Icon, type IconName } from "./Icons";

const items: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "cap",
    title: "Education-First",
    description: "We've built our own exam, reading and career-guidance products, so we know how learners behave.",
  },
  {
    icon: "user",
    title: "Led by an AI Trainer",
    description: "Our founder teaches AI to students and professionals. Teaching shapes how we design every tool.",
  },
  {
    icon: "plug",
    title: "Fits Your Stack",
    description: "Works with your website, LMS (Moodle, Teachable, Kajabi, Thinkific) and WhatsApp.",
  },
  {
    icon: "bolt",
    title: "Working Demo First",
    description: "Our first conversation ends with an AI tutor on your content you can try, not a strategy deck.",
  },
];

export function Difference() {
  return (
    <section id="difference" className="xn-section">
      <div className="xn-container">
        <h2 className="xn-h2">The Xentenix Difference</h2>

        <div className="xn-guarantee">
          <div className="xn-guarantee__seal" aria-hidden="true">
            <Icon name="shield" size={48} strokeWidth={1.5} />
          </div>
          <div>
            <h3>The No-Result, No-Pay Guarantee</h3>
            <p>
              Don&apos;t pay us a single penny if you don&apos;t get the desired result. We put our fees on the
              line so you never have to gamble on AI.
            </p>
          </div>
          <a href="#contact" className="xn-btn xn-btn--primary">
            Start Risk-Free <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="xn-diff">
          {items.map((item) => (
            <div key={item.title} className="xn-diff__item">
              <Icon name={item.icon} size={36} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
