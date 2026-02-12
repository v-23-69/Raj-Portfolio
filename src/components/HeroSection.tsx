import { useEffect, useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { ShuffleHero } from "@/components/ui/shuffle-grid";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0B1426]" />

      <div
        className={`relative z-10 w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <ShuffleHero />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
