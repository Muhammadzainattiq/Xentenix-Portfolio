import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Xentenix: AI for Education & Training businesses. We deliver outcomes, not just code.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const services = ["Exam Grading", "AI Tutors", "Personalized Learning", "Admissions Agents"];

export default async function OpengraphImage() {
  const [interRegular, interExtraBold] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Inter-400.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Inter-800.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#ffffff",
          fontFamily: "Inter",
          backgroundColor: "#03172C",
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 85% 20%, rgba(24, 95, 165, 0.65), transparent 70%), radial-gradient(circle, rgba(133, 183, 235, 0.16) 1.5px, transparent 1.5px)",
          backgroundSize: "100% 100%, 32px 32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
            <path
              d="M8 8l12.5 12.5M27.5 27.5L40 40M40 8L27.5 20.5M20.5 27.5L8 40"
              stroke="#E6F1FB"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="8" cy="8" r="3" stroke="#378ADD" strokeWidth="1.5" />
            <circle cx="40" cy="8" r="3" stroke="#378ADD" strokeWidth="1.5" />
            <circle cx="8" cy="40" r="3" stroke="#378ADD" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="3" stroke="#378ADD" strokeWidth="1.5" />
            <circle cx="24" cy="8" r="2.5" fill="#E6F1FB" />
            <circle cx="8" cy="24" r="2.5" fill="#E6F1FB" />
            <circle cx="40" cy="24" r="2.5" fill="#E6F1FB" />
            <circle cx="24" cy="40" r="2.5" fill="#E6F1FB" />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em" }}>Xentenix</span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 22,
              color: "#85B7EB",
              border: "1px solid rgba(133, 183, 235, 0.4)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            AI for Education & Training businesses
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            We deliver&nbsp;<span style={{ color: "#85B7EB" }}>outcomes</span>,
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            not just code.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#E6F1FB" }}>
            No result, no pay. Book a free AI audit at xentenix.com
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {services.map((service) => (
            <span
              key={service}
              style={{
                fontSize: 21,
                whiteSpace: "nowrap",
                padding: "10px 18px",
                borderRadius: 12,
                backgroundColor: "rgba(230, 241, 251, 0.08)",
                border: "1px solid rgba(230, 241, 251, 0.16)",
              }}
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interExtraBold, style: "normal", weight: 800 },
      ],
    },
  );
}
