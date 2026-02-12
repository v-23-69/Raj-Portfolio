import { useEffect, useState } from "react";
import { MessageCircle, Star } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-cream" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A55A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Photo placeholder */}
        <div className="mx-auto mb-8 w-40 h-40 md:w-52 md:h-52 rounded-full gold-border p-1.5 bg-cream">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gold-light/30 to-gold/10 flex items-center justify-center">
            <span className="font-serif-display text-4xl md:text-5xl font-bold text-gold-dark">RK</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
          Raj Pradeep{" "}
          <span className="gold-text-gradient">Karnawat</span>
        </h1>

        {/* Tagline */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 text-charcoal-light">
          <span className="flex items-center gap-1.5 text-sm md:text-base font-body tracking-wide">
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            Numismatics Authority
          </span>
          <span className="hidden md:inline text-gold">•</span>
          <span className="text-sm md:text-base font-body tracking-wide">12+ Years</span>
          <span className="hidden md:inline text-gold">•</span>
          <span className="text-sm md:text-base font-body tracking-wide">50,000+ Deals</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-foreground font-body font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            Request Coin Evaluation
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gold text-foreground font-body font-semibold tracking-wide rounded-sm hover:bg-gold/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light">Scroll</span>
        <div className="w-px h-8 bg-gold/50" />
      </div>
    </section>
  );
};

export default HeroSection;
