import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Xentenix — Agents · Automations · FTEs",
  description:
    "Xentenix is a next-generation enterprise AI platform specialising in intelligent agents, workflow automations, and FTE augmentation. Trustworthy, precise, forward-thinking.",
  keywords: ["enterprise AI", "AI agents", "workflow automation", "FTE augmentation", "Xentenix"],
  openGraph: {
    title: "Xentenix — Agents · Automations · FTEs",
    description:
      "Next-generation enterprise AI platform — intelligent agents, workflow automations, and FTE augmentation.",
    url: "https://xentenix.io",
    siteName: "Xentenix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), Inter, -apple-system, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
