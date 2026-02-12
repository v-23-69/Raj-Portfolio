import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ProfessionalBackgroundSection from "@/components/ProfessionalBackgroundSection";
import EntrepreneurialVisionSection from "@/components/EntrepreneurialVisionSection";
import CoinGallery from "@/components/CoinGallery";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingSocialLinks from "@/components/FloatingSocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocialLinks />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ProfessionalBackgroundSection />
        <EntrepreneurialVisionSection />
        <CoinGallery />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
