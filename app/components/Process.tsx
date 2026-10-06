const steps = [
  {
    title: "Free demo on your content",
    description: "Share one course or a sample of your material. Within days you get a working AI tutor to try.",
  },
  {
    title: "Agree on the outcome",
    description: "We fix one measurable target — e.g. halve grading time or answer 60% of student questions.",
  },
  {
    title: "Build & integrate",
    description: "We connect it to your website, LMS or WhatsApp, then measure it against the target.",
  },
  {
    title: "Pay only on success",
    description: "Result delivered? Then you pay. Result missed? You don't pay a single penny.",
  },
];

export function Process() {
  return (
    <section id="process" className="xn-section xn-section--surface">
      <div className="xn-container">
        <h2 className="xn-h2">How We Deliver Outcomes</h2>
        <ol className="xn-steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {steps.map((step, i) => (
            <li key={step.title} className={`xn-step${i === steps.length - 1 ? " xn-step--highlight" : ""}`}>
              <span className="xn-step__num">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
