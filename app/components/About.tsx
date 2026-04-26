const pillars = [
  {
    title: "Trustworthy",
    description:
      "Every agent decision is auditable. Every automation is traceable. Enterprise trust is not a feature — it is the foundation Xentenix is built on.",
  },
  {
    title: "Precise",
    description:
      "We use exact language, exact metrics, and exact outcomes. No vague AI promises — only measurable results your operations team can rely on.",
  },
  {
    title: "Forward Momentum",
    description:
      "Built for what comes next. Xentenix is engineered to evolve with your business, not lock you into yesterday's architecture.",
  },
];

export function About() {
  return (
    <section id="about" style={{ backgroundColor: "#ffffff" }} className="xn-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gap: "64px",
            alignItems: "start",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left — text */}
          <div>
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
              Who We Are
            </p>
            <h2
              style={{
                color: "#042C53",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                marginBottom: "28px",
              }}
            >
              Precision. Power.<br />Xentenix.
            </h2>
            <p
              style={{
                color: "#444441",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "16px",
                lineHeight: 1.75,
                marginBottom: "20px",
              }}
            >
              Xentenix is a next-generation AI platform built for enterprise — specialising in intelligent
              agents, workflow automations, and FTE augmentation. We serve CTOs, IT directors, and
              operations leaders who need AI that performs, not just promises.
            </p>
            <p
              style={{
                color: "#444441",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "16px",
                lineHeight: 1.75,
                marginBottom: "40px",
              }}
            >
              Our platform handles the complexity of enterprise AI infrastructure so your team can focus
              on outcomes. From real-time inference to multi-agent orchestration, Xentenix executes at
              the edge of what&apos;s possible.
            </p>

            {/* Sector tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Software / SaaS", "Artificial Intelligence", "Enterprise B2B"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: "#E6F1FB",
                    color: "#0C447C",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    border: "1px solid #85B7EB",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                style={{
                  padding: "32px 0",
                  borderBottom: i < pillars.length - 1 ? "1px solid #D3D1C7" : "none",
                }}
              >
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#378ADD",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        color: "#042C53",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: 1.3,
                        marginBottom: "10px",
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        color: "#444441",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "15px",
                        lineHeight: 1.7,
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
