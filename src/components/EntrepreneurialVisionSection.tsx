import { useEffect, useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Target, Eye, Shield, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const missions = [
  { icon: Shield, title: "Bring transparency to the coin market" },
  { icon: Eye, title: "Promote historical awareness" },
  { icon: Target, title: "Provide accurate and fair valuations" },
  { icon: Heart, title: "Help collectors build meaningful legacy collections" },
];

const EntrepreneurialVisionSection = () => {
  const ref = useScrollFadeIn();
  const isMobile = useIsMobile();
  const [pairIndex, setPairIndex] = useState(0);
  const totalPairs = Math.ceil(missions.length / 2);

  useEffect(() => {
    if (!isMobile) return;
    const id = setInterval(() => {
      setPairIndex((i) => (i + 1) % totalPairs);
    }, 3500);
    return () => clearInterval(id);
  }, [isMobile, totalPairs]);

  const currentPair = missions.slice(pairIndex * 2, pairIndex * 2 + 2);

  return (
    <section
      id="entrepreneurial-vision"
      className="relative py-24 md:py-32 bg-cream-dark dark:bg-background overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90 dark:opacity-80"
        style={{ backgroundImage: "url('/bg9.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/80 dark:from-background/80 dark:via-background/75 dark:to-background/90"
      />
      <div ref={ref} className="relative section-fade-in max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Entrepreneurial Vision
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            More Than Trade —{" "}
            <span className="gold-text-gradient">Heritage Preservation</span>
          </h2>
        </div>

        <div className="space-y-6 font-body text-charcoal-light leading-relaxed mb-12 text-center max-w-4xl mx-auto">
          <p className="text-lg">
            Raj is not only a numismatics expert but also an entrepreneur committed to elevating the standards of antique coin trading in India.
          </p>
          <p>His mission is to:</p>
        </div>

        {/* Desktop: 2x2 grid */}
        {!isMobile && (
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className="flex items-start gap-4 bg-card rounded-sm p-6 border border-border hover:border-gold/50 transition-colors"
              >
                <div className="mt-1 p-2 rounded-sm bg-gold/10">
                  <mission.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="font-body text-foreground">{mission.title}</p>
              </div>
            ))}
          </div>
        )}

        {/* Mobile: auto-scrolling 2-card carousel */}
        {isMobile && (
          <div className="mb-12">
            <div className="grid grid-cols-2 gap-3 min-h-[120px]">
              {currentPair.map((mission) => (
                <div
                  key={mission.title}
                  className="flex flex-col items-center gap-3 bg-card rounded-lg p-4 border border-gold/30 text-center transition-all duration-500"
                >
                  <div className="p-2.5 rounded-full bg-gold/10">
                    <mission.icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="font-body text-sm text-foreground leading-snug">{mission.title}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalPairs }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPairIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === pairIndex ? "bg-gold w-6" : "bg-gold/30 w-4"
                  }`}
                  aria-label={`Pair ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto">
          <p className="font-body text-lg text-charcoal-light leading-relaxed">
            With a foundation in engineering and years of market exposure, he approaches numismatics not merely as trade — but as heritage preservation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurialVisionSection;
