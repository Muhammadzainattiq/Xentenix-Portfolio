"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

// Shown once the hero is scrolled past; hidden while the contact form or footer is on screen.
export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const endZones = [document.getElementById("contact"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => el !== null,
    );
    const inView = new Map<Element, boolean>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => inView.set(entry.target, entry.isIntersecting));
      const heroVisible = hero ? inView.get(hero) ?? true : false;
      const endVisible = endZones.some((el) => inView.get(el));
      setVisible(!heroVisible && !endVisible);
    });

    if (hero) observer.observe(hero);
    endZones.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#contact"
      className={`xn-btn xn-btn--primary xn-btn--sm xn-float-cta${visible ? " xn-float-cta--visible" : ""}`}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
    >
      Book a Free Audit <Icon name="arrow" size={16} />
    </a>
  );
}
