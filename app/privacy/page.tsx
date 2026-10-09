import type { Metadata } from "next";
import Link from "next/link";
import { GridNodeMark } from "../components/GridNodeMark";
import { Footer } from "../components/Footer";
import { Icon } from "../components/Icons";
import { CONTACT_EMAIL } from "../site";

export const metadata: Metadata = {
  title: "Privacy Policy — Xentenix",
  description: "How Xentenix collects, uses and protects information when you visit xentenix.com or book a call with us.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "8 October 2026";

export default function PrivacyPage() {
  return (
    <>
      <header className="xn-legal__header">
        <div className="xn-container xn-legal__bar">
          <Link href="/" className="xn-nav__logo">
            <GridNodeMark size={30} variant="light" />
            Xentenix
          </Link>
          <Link href="/" className="xn-legal__back">
            Back to home <Icon name="arrow" size={16} />
          </Link>
        </div>
      </header>

      <main className="xn-section">
        <article className="xn-container xn-legal">
          <h1 className="xn-h2">Privacy Policy</h1>
          <p className="xn-legal__meta">Last updated: {LAST_UPDATED}</p>

          <p>
            Xentenix (&quot;we&quot;, &quot;us&quot;) builds AI products for education and training businesses. This
            policy explains what information we collect when you visit xentenix.com, book a call or email us,
            and how we use it. We keep it short because we collect very little.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Booking details.</strong> When you book a free AI audit, our scheduling provider, Cal.com,
              collects your name, email address, the time you choose and anything you write in the booking
              notes.
            </li>
            <li>
              <strong>Emails you send us.</strong> If you write to {CONTACT_EMAIL}, we receive your email address
              and whatever you include in the message.
            </li>
            <li>
              <strong>Anonymous usage data.</strong> We use Vercel Web Analytics to count page views and see
              which pages are useful. It does not use cookies and does not identify you personally. It records
              things like the page visited, the referring site, country, browser and device type.
            </li>
            <li>
              <strong>Technical logs.</strong> Our hosting provider, Vercel, keeps standard server logs, which
              can include your IP address, to run the site securely and reliably.
            </li>
          </ul>
          <p>This website has no user accounts and no marketing or advertising cookies.</p>

          <h2>How we use it</h2>
          <ul>
            <li>To hold the call you booked and prepare for it.</li>
            <li>To reply to your messages and follow up on a conversation you started.</li>
            <li>To understand, in aggregate, how the site is used so we can improve it.</li>
            <li>To keep the website secure and working.</li>
          </ul>
          <p>We do not sell your personal information or share it with advertisers.</p>

          <h2>Services we rely on</h2>
          <p>
            We use a small number of trusted providers to run the site and our communication. Each processes
            data under its own privacy policy:
          </p>
          <ul>
            <li>
              <strong>Vercel</strong>: website hosting and privacy-friendly analytics.
            </li>
            <li>
              <strong>Cal.com</strong>: call scheduling.
            </li>
            <li>
              <strong>Google Workspace</strong>: business email.
            </li>
          </ul>

          <h2>Client project data</h2>
          <p>
            When we build for a client, any course material, student data or other content they share with us
            is handled under the written agreement for that project, not under this website policy.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep booking details and email correspondence for as long as needed to talk with you and, if we
            work together, to run the project and meet our legal and accounting obligations. You can ask us to
            delete it at any time.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us what information we hold about you, ask us to correct it, or ask us to delete it.
            Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will respond within 30 days.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change how we handle information, we will update this page and the date at the top.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about privacy? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
