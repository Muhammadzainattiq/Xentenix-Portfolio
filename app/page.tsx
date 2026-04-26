import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
