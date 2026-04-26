"use client";

import { GridNodeMark } from "./GridNodeMark";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "Xentenix Core", href: "#products" },
      { label: "Xentenix Edge", href: "#products" },
      { label: "Xentenix Nexus", href: "#products" },
      { label: "Xentenix Agents", href: "#products" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/xentenix",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/xentenix",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/xentenix",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C2C2A" }}>
      {/* Main footer */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <GridNodeMark size={32} variant="dark" />
              <span
                style={{
                  color: "#E6F1FB",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  letterSpacing: "0.3em",
                }}
              >
                XENTENIX
              </span>
            </div>
            <p
              style={{
                color: "#888780",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "14px",
                lineHeight: 1.7,
                marginBottom: "24px",
                maxWidth: "240px",
              }}
            >
              Next-generation enterprise AI — agents, automations, and FTE augmentation.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#888780",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "#444441",
                    transition: "color 0.2s, background-color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#E6F1FB";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#185FA5";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#888780";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#444441";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <p
                style={{
                  color: "#E6F1FB",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: "#888780",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "14px",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E6F1FB")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888780")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Domain row */}
        <div
          style={{
            borderTop: "1px solid #444441",
            paddingTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["xentenix.io", "xentenix.ai", "getxentenix.com"].map((domain) => (
              <span
                key={domain}
                style={{
                  color: "#888780",
                  fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace",
                  fontSize: "12px",
                  letterSpacing: "0.05em",
                }}
              >
                {domain}
              </span>
            ))}
          </div>

          <p
            style={{
              color: "#888780",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "13px",
            }}
          >
            © 2026 Xentenix. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "#888780",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E6F1FB")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888780")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
