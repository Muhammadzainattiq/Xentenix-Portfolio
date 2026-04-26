"use client";

import { GridNodeMark } from "./GridNodeMark";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#042C53",
        minHeight: "100vh",
        paddingTop: "64px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle dot grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #0C447C 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      {/* Accent gradient top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse at top right, rgba(55, 138, 221, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px 80px",
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        {/* Two-column grid — 1 col on mobile, 2 col on desktop.
            No inline gridTemplateColumns so the lg:grid-cols-2 Tailwind class can take effect. */}
        <div
          style={{ display: "grid", gap: "48px", alignItems: "center" }}
          className="lg:grid-cols-2"
        >
          {/* Text side */}
          <div>
            <p
              style={{
                color: "#378ADD",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              Enterprise AI Platform &nbsp;·&nbsp; 2026
            </p>

            <h1
              style={{
                color: "#E6F1FB",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(36px, 6vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "0.02em",
                marginBottom: "24px",
              }}
            >
              Think beyond<br />the next.
            </h1>

            <p
              style={{
                color: "#85B7EB",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "clamp(15px, 2vw, 18px)",
                fontWeight: 400,
                lineHeight: 1.7,
                marginBottom: "40px",
                maxWidth: "500px",
              }}
            >
              We build AI Agents, Business Automations, and Digital AI FTEs
              for the enterprises of tomorrow.
            </p>

            <a
              href="#contact"
              style={{
                backgroundColor: "#378ADD",
                color: "#ffffff",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                padding: "13px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.02em",
                display: "inline-block",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "#185FA5")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "#378ADD")}
            >
              Get in Touch
            </a>

            {/* Pillar tags */}
            <div
              style={{
                marginTop: "56px",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "center",
              }}
            >
              {["Agents", "Automations", "FTEs"].map((item, i) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  {i > 0 && (
                    <div
                      aria-hidden="true"
                      style={{ width: "1px", height: "18px", backgroundColor: "#185FA5" }}
                    />
                  )}
                  <span
                    style={{
                      color: "#85B7EB",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 400,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Grid Node mark — hidden on mobile, visible on lg+ */}
          <div className="hidden lg:flex lg:justify-end lg:items-center">
            <div style={{ opacity: 0.9 }}>
              <GridNodeMark size={320} variant="dark" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.45,
          }}
          className="hidden sm:flex"
        >
          <span
            style={{
              color: "#85B7EB",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="#85B7EB" strokeWidth="1.5" />
            <circle cx="8" cy="7" r="2" fill="#85B7EB" />
          </svg>
        </div>
      </div>
    </section>
  );
}
