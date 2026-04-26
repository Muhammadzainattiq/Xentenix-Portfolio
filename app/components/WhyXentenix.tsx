const stats = [
  { value: "10×", label: "Faster deployment", detail: "vs. in-house AI builds" },
  { value: "99.9%", label: "Uptime SLA", detail: "enterprise-grade reliability" },
  { value: "<100ms", label: "Inference latency", detail: "at the edge" },
  { value: "500+", label: "Integrations", detail: "via Xentenix Nexus" },
];

const reasons = [
  {
    title: "Enterprise-grade from day one",
    description:
      "SSO, RBAC, audit logs, data residency controls, and compliance tooling are built into the core — not retrofitted.",
  },
  {
    title: "No black boxes",
    description:
      "Every agent decision is logged and explainable. Your compliance team will thank you.",
  },
  {
    title: "Designed for your stack",
    description:
      "Xentenix Nexus connects to your existing ERP, CRM, data warehouse, and ticketing systems — no rip-and-replace required.",
  },
  {
    title: "Outcome-led contracts",
    description:
      "We price on results, not seats. If Xentenix does not perform, you do not pay. That is precision.",
  },
];

export function WhyXentenix() {
  return (
    <section style={{ backgroundColor: "#0C447C" }} className="xn-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <p
            style={{
              color: "#85B7EB",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Why Xentenix
          </p>
          <h2
            style={{
              color: "#E6F1FB",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
              maxWidth: "520px",
            }}
          >
            Intelligence. Redefined.
          </h2>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
            gap: "1px",
            backgroundColor: "#185FA5",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "64px",
          }}
        >
          {stats.map(({ value, label, detail }) => (
            <div
              key={label}
              style={{
                backgroundColor: "#042C53",
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  color: "#378ADD",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  marginBottom: "8px",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  color: "#E6F1FB",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  marginBottom: "4px",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: "#85B7EB",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.03em",
                }}
              >
                {detail}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "32px",
          }}
        >
          {reasons.map(({ title, description }) => (
            <div key={title}>
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  backgroundColor: "#378ADD",
                  marginBottom: "20px",
                }}
              />
              <h3
                style={{
                  color: "#E6F1FB",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: 1.3,
                  marginBottom: "12px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "#85B7EB",
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
