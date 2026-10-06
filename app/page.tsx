import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Outcomes } from "./components/Outcomes";
import { WorkMarquee } from "./components/WorkMarquee";
import { Services } from "./components/Services";
import { Audience } from "./components/Audience";
import { ProductAudit } from "./components/ProductAudit";
import { Process } from "./components/Process";
import { Difference } from "./components/Difference";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkMarquee />
        <Outcomes />
        <Services />
        <Audience />
        <ProductAudit />
        <Process />
        <Difference />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
