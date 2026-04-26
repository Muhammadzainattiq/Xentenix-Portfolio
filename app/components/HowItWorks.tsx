const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We audit your current workflows, data flows, and manual processes. In two weeks, you have a precise roadmap showing exactly where Xentenix delivers the highest ROI.",
  },
  {
    number: "02",
    title: "Integrate",
    description:
      "Xentenix Nexus connects to your existing stack. No rip-and-replace. No months of migration. Most enterprise integrations are live within 30 days.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Agents are deployed, automations are activated, and FTE augmentation goes live. Full audit logging and observability from the first transaction.",
  },
  {
    number: "04",
    title: "Optimise",
    description:
      "Xentenix continuously monitors performance and surfaces optimisation opportunities. Your team sees exactly what is working — and what to improve next.",
  },
];

export function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#F1EFE8" }} className="xn-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <p
            style={{
              color: "#378ADD",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Process
          </p>
          <h2
            style={{
              color: "#042C53",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
              maxWidth: "480px",
            }}
          >
            Execute at the edge.
          </h2>
        </div>

        {/* Steps — stack on mobile, row on lg+ via CSS grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          }}
        >
          {steps.map(({ number, title, description }) => (
            <div key={number} className="xn-step-item">
              {/* Top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "24px",
                  width: "32px",
                  height: "3px",
                  backgroundColor: "#378ADD",
                }}
              />

              <div
                style={{
                  color: "#D3D1C7",
                  fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  marginBottom: "20px",
                  marginTop: "16px",
                }}
              >
                {number}
              </div>

              <h3
                style={{
                  color: "#042C53",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: 1.3,
                  marginBottom: "14px",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#444441",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.7,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
