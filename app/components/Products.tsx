function CoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#378ADD" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" stroke="#378ADD" strokeWidth="1.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EdgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 3L4 14h8l-1 7 9-11h-8l1-7z" stroke="#378ADD" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function NexusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5" cy="12" r="2" stroke="#378ADD" strokeWidth="1.5" />
      <circle cx="19" cy="5" r="2" stroke="#378ADD" strokeWidth="1.5" />
      <circle cx="19" cy="19" r="2" stroke="#378ADD" strokeWidth="1.5" />
      <path d="M7 12h4M13 7.2L17 5.8M13 16.8l4 1.4" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.5" stroke="#378ADD" strokeWidth="1.5" />
    </svg>
  );
}

function AgentsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="18" height="13" rx="2.5" stroke="#378ADD" strokeWidth="1.5" />
      <path d="M8 8V6.5a4 4 0 018 0V8" stroke="#378ADD" strokeWidth="1.5" />
      <circle cx="12" cy="14.5" r="2.5" stroke="#378ADD" strokeWidth="1.5" />
      <circle cx="12" cy="14.5" r="1" fill="#378ADD" />
    </svg>
  );
}

const products = [
  {
    Icon: CoreIcon,
    name: "Xentenix Core",
    tagline: "The foundational platform",
    description:
      "The core API layer and platform engine that powers every Xentenix product. Handles authentication, orchestration, observability, and enterprise security at its foundation.",
    features: ["REST & GraphQL APIs", "Enterprise SSO", "Audit logging", "SLA-backed uptime"],
    badge: "Platform",
  },
  {
    Icon: EdgeIcon,
    name: "Xentenix Edge",
    tagline: "Real-time inference",
    description:
      "Low-latency AI inference deployed at the edge. Xentenix Edge runs models closer to your data — sub-100ms response times for the most demanding enterprise workloads.",
    features: ["Sub-100ms inference", "On-premises deployment", "Custom model hosting", "Auto-scaling"],
    badge: "Performance",
  },
  {
    Icon: NexusIcon,
    name: "Xentenix Nexus",
    tagline: "Integration hub",
    description:
      "The connective tissue of your AI stack. Nexus provides connectors, webhooks, and visual workflow builders that tie your existing tools to Xentenix intelligence.",
    features: ["500+ connectors", "Visual workflow builder", "Bi-directional sync", "Event-driven triggers"],
    badge: "Integrations",
  },
  {
    Icon: AgentsIcon,
    name: "Xentenix Agents",
    tagline: "Autonomous agent runtime",
    description:
      "A fully managed runtime environment for deploying, monitoring, and scaling autonomous AI agents. Multi-agent orchestration out of the box, with full observability.",
    features: ["Multi-agent orchestration", "Tool use framework", "Memory & context", "Compliance controls"],
    badge: "Automation",
  },
];

export function Products() {
  return (
    <section id="products" style={{ backgroundColor: "#E6F1FB" }} className="xn-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
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
              Platform
            </p>
            <h2
              style={{
                color: "#042C53",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
              }}
            >
              Built for what comes next.
            </h2>
          </div>
          <p
            style={{
              color: "#444441",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "15px",
              lineHeight: 1.7,
              maxWidth: "400px",
            }}
          >
            Four integrated products. One intelligent platform.
            Each layer is designed to work independently or as part of the full Xentenix stack.
          </p>
        </div>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "20px",
          }}
        >
          {products.map(({ Icon, name, tagline, description, features, badge }) => (
            <div
              key={name}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #D3D1C7",
                borderRadius: "12px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top row: icon + badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#E6F1FB",
                    borderRadius: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon />
                </div>
                <span
                  style={{
                    backgroundColor: "#042C53",
                    color: "#85B7EB",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {badge}
                </span>
              </div>

              <p
                style={{
                  color: "#888780",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {tagline}
              </p>

              <h3
                style={{
                  color: "#042C53",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.3,
                  marginBottom: "14px",
                }}
              >
                {name}
              </h3>

              <p
                style={{
                  color: "#444441",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  flexGrow: 1,
                }}
              >
                {description}
              </p>

              <div
                style={{
                  borderTop: "1px solid #E6F1FB",
                  paddingTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#444441",
                      fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace",
                      fontSize: "12px",
                    }}
                  >
                    <span style={{ color: "#378ADD", fontSize: "10px" }}>›</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
