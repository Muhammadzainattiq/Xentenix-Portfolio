"use client";

import { useEffect, useState } from "react";
import { GridNodeMark } from "./GridNodeMark";
import { Icon } from "./Icons";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "How We Work" },
  { href: "#difference", label: "Our Guarantee" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`xn-nav${scrolled ? " xn-nav--scrolled" : ""}`}>
      <nav className="xn-nav__bar" aria-label="Main">
        <a href="#hero" className="xn-nav__logo">
          <GridNodeMark size={30} variant="light" />
          Xentenix
        </a>

        <ul className="xn-nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="xn-btn xn-btn--primary xn-btn--sm xn-nav__cta">
          Book Free Audit <Icon name="arrow" size={16} />
        </a>

        <button
          type="button"
          className="xn-nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="xn-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </nav>

      {open && (
        <div id="xn-mobile-menu" className="xn-nav__mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="xn-btn xn-btn--primary" onClick={() => setOpen(false)}>
            Book Free Audit <Icon name="arrow" size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
