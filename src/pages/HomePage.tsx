
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { WhyUsSection } from "../components/WhyUsSection";
import { SolutionSection } from "../components/SolutionSection";
import { ImpactBanner } from "../components/ImpactBanner";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <SolutionSection />
        <ImpactBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
  