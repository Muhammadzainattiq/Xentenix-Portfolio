import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "./site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Xentenix — AI for Education & Training Businesses",
  description:
    "Xentenix builds exam generation and grading agents, personalized learning platforms, AI tutors, content-to-course automations, and student support and admissions agents for academies, colleges, course creators and training companies — backed by a no-result, no-pay guarantee.",
  keywords: [
    "AI for education",
    "AI tutor",
    "AI grading",
    "AI assessment",
    "AI exam generation",
    "personalized learning platform",
    "AI admissions agent",
    "EdTech AI agency",
    "AI for training companies",
    "Xentenix",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xentenix — AI for Education & Training Businesses",
    description:
      "Exam grading, AI tutors, personalized learning and admissions agents for learning businesses. Don't pay if you don't get the result.",
    url: "/",
    siteName: "Xentenix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xentenix — AI for Education & Training Businesses",
    description:
      "Exam grading, AI tutors, personalized learning and admissions agents for learning businesses. Don't pay if you don't get the result.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
