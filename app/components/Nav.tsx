"use client";

import { useState, useEffect } from "react";
import { GridNodeMark } from "./GridNodeMark";

const navLinks: { href: string; label: string }[] = [];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: "#042C53",
        borderBottom: scrolled ? "1px solid #0C447C" : "1px solid transparent",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <GridNodeMark size={34} variant="dark" />
          <span
            style={{
              color: "#E6F1FB",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.3em",
            }}
          >
            XENTENIX
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#85B7EB",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.03em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E6F1FB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#85B7EB")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              backgroundColor: "#378ADD",
              color: "#ffffff",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              padding: "8px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#185FA5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#378ADD")}
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#E6F1FB",
            padding: "4px",
          }}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M17 5L5 17M5 5l12 12" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h16M3 15h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "#0C447C",
            borderTop: "1px solid #185FA5",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: "#E6F1FB",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              backgroundColor: "#378ADD",
              color: "#ffffff",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
