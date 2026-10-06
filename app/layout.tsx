import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Xentenix — AI for Education & Training Businesses",
  description:
    "Xentenix builds AI tutors, AI assessment and grading, content-to-course tools and student-support agents for academies, course creators and training companies — backed by a no-result, no-pay guarantee.",
  keywords: [
    "AI for education",
    "AI tutor",
    "AI grading",
    "AI assessment",
    "EdTech AI agency",
    "AI for training companies",
    "Xentenix",
  ],
  openGraph: {
    title: "Xentenix — AI for Education & Training Businesses",
    description:
      "AI tutors, auto-grading and student-support agents for learning businesses. Don't pay if you don't get the result.",
    url: "https://xentenix.com",
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
      <body>
        {children}
      </body>
    </html>
  );
}
