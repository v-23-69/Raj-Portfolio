import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { BookOpen, Languages, TrendingUp } from "lucide-react";

const highlights = [
  { icon: BookOpen, text: "Deep knowledge of Brahmi & Persian scripts on ancient coins" },
  { icon: Languages, text: "Expert in reading inscriptions across multiple historical eras" },
  { icon: TrendingUp, text: "Seasoned market operator with unmatched transaction volume" },
];

const AboutSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-95 contrast-[1.05]"
        style={{ backgroundImage: "url('/bg12.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,20,38,0.82), rgba(11,20,38,0.78) 35%, rgba(11,20,38,0.7) 70%, rgba(11,20,38,0.66))",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, rgba(198,167,94,0.15), transparent 60%)",
        }}
      />

      <div ref={ref} className="relative section-fade-in max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image side */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm premium-frame p-3 md:p-4">
                <div className="h-full w-full rounded-sm overflow-hidden bg-foreground/5">
                  <img
                    src="/profile%20img.png"
                    alt="Raj Karnawat"
                    className="h-full w-full object-contain object-top scale-[0.95]"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold" />
              <div className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-gold/20" />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">The Story</span>
            <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              A Legacy Built on Knowledge,{" "}
              <span className="gold-text-gradient">Precision & Integrity</span>
            </h2>
            <div className="space-y-4 font-body text-charcoal-light leading-relaxed">
              <p>
                For over 12 years, Raj Karnawat has been deeply immersed in the numismatics market, 
                building a reputation rooted in authenticity, scholarship, and transparency.
              </p>
              <p>
                As Co-Founder of <span className="font-semibold text-foreground">Numismatics Scholar Hub</span>, an integrated marketplace
                and knowledge platform for ancient and colonial Indian coins, he helps build systems that combine authentication,
                evaluation, guidance, and community engagement into a single ecosystem.
              </p>
              <p>
                Specializing in coins from 100 BC to 1947, his work spans Mauryan punch-marked coins to 
                British India silver rupees — covering nearly two millennia of monetary history.
              </p>
              <p className="font-semibold text-foreground">
                With over 50,000+ successful deals, 10,000+ satisfied clients, and 12+ years of uninterrupted 
                market presence, he stands today as a respected authority in Indian numismatics.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-sm bg-gold/10">
                    <h.icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-body text-sm text-foreground/80">{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
