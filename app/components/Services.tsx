"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "AI Agents",
    description:
      "Intelligent agents that reason, decide, and act on your behalf — handling complex multi-step workflows end-to-end, without human intervention.",
    accent: "#378ADD",
  },
  {
    number: "02",
    title: "Business Automations",
    description:
      "Connect every system, eliminate every manual handoff. We automate the processes that slow your business down so your team focuses on what moves it forward.",
    accent: "#185FA5",
  },
  {
    number: "03",
    title: "Digital AI FTEs",
    description:
      "AI-powered digital workers that operate like full-time employees — available around the clock, infinitely scalable, and built for your exact workflows.",
    accent: "#0C447C",
  },
];

export function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="services"
      style={{ backgroundColor: "#042C53", position: "relative", overflow: "hidden" }}
      className="xn-section"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #0C447C 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: "72px" }}>
          <p
            style={{
              color: "#378ADD",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Our Focus
          </p>
          <h2
            style={{
              color: "#E6F1FB",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(42px, 7vw, 88px)",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            We Build
          </h2>
        </div>

        {/* Service rows */}
        <div>
          {services.map(({ number, title, description }, i) => (
            <div key={number}>
              {/* Top divider */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: hovered === number ? "#378ADD" : "#185FA5",
                  transition: "background-color 0.3s",
                }}
              />

              <div
                onMouseEnter={() => setHovered(number)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "0 48px",
                  padding: "48px 0",
                  cursor: "default",
                  alignItems: "center",
                }}
                className="sm:grid-cols-[120px_1fr_auto]"
              >
                {/* Number */}
                <span
                  style={{
                    color: hovered === number ? "#378ADD" : "#1a4a7a",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "clamp(48px, 6vw, 72px)",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    transition: "color 0.3s",
                  }}
                >
                  {number}
                </span>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      color: hovered === number ? "#E6F1FB" : "#85B7EB",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(26px, 3.5vw, 44px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                      marginBottom: "12px",
                      transition: "color 0.3s",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      color: "#85B7EB",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "16px",
                      lineHeight: 1.7,
                      maxWidth: "520px",
                      opacity: hovered === number ? 1 : 0.65,
                      transition: "opacity 0.3s",
                    }}
                  >
                    {description}
                  </p>
                </div>

                {/* Arrow — visible on hover */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    opacity: hovered === number ? 1 : 0,
                    transform: hovered === number ? "translateX(0)" : "translateX(-8px)",
                    transition: "opacity 0.3s, transform 0.3s",
                  }}
                  className="hidden sm:flex"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="18" cy="18" r="17" stroke="#378ADD" strokeWidth="1.5" />
                    <path
                      d="M13 18h10M19 14l4 4-4 4"
                      stroke="#378ADD"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom divider on last item */}
              {i === services.length - 1 && (
                <div
                  style={{
                    height: "1px",
                    backgroundColor: hovered === number ? "#378ADD" : "#185FA5",
                    transition: "background-color 0.3s",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
