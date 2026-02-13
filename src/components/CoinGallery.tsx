import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useIsMobile } from "@/hooks/use-mobile";

const coins = [
  { era: "Gupta", date: "~400 AD", frontImg: "/coins/1.png", backImg: "/coins/1.1.png", back: "Classic Gupta gold coinage known for artistic excellence and refined iconography." },
  { era: "Chandragupta", date: "~400 AD", frontImg: "/coins/2.png", backImg: "/coins/2.2.png", back: "A celebrated Gupta-era issue reflecting royal authority and the era's high standards of minting." },
  { era: "Vasudeva II Kushan", date: "~200 AD", frontImg: "/coins/3.png", backImg: "/coins/3.3.png", back: "Kushan coinage blending imperial symbolism with distinct religious and cultural motifs." },
  { era: "Shahjahan Ahmedabad Mughal", date: "~1600 AD", frontImg: "/coins/4.png", backImg: "/coins/4.4.png", back: "Mughal coinage noted for elegant Persian inscriptions and refined calligraphic design." },
  { era: "Mauryan Empire", date: "~300 BC", frontImg: "/coins/5.png", backImg: "/coins/5.5.png", back: "Among India's earliest coinage traditions, featuring symbolic punch marks and early monetary standardization." },
  { era: "Ala ud din Khilji Delhi Sultan", date: "~1300 AD", frontImg: "/coins/6.png", backImg: "/coins/6.6.png", back: "Delhi Sultanate issues renowned for Islamic calligraphy and historically significant monetary reforms." },
  { era: "One Rupee British Victoria Queen", date: "1862 · British India", frontImg: "/coins/8.png", backImg: "/coins/8.8.png", back: "Iconic British India silver rupee of Queen Victoria, 1862 — a cornerstone type in colonial numismatics." },
  { era: "Shahjahan Gold Mohar", date: "~1600s · Mughal", frontImg: "/coins/9.png", backImg: "/coins/9.9.png", back: "A rare Mughal gold mohar from the reign of Shahjahan, showcasing regal calligraphy and imperial refinement." },
];

const CoinGallery = () => {
  const ref = useScrollFadeIn();
  const isMobile = useIsMobile();

  return (
    <section id="gallery" className="relative py-16 md:py-32 bg-cream-dark dark:bg-background overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90 dark:opacity-75"
        style={{ backgroundImage: "url('/bg3.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/15 to-background/35 dark:from-background/65 dark:via-background/55 dark:to-background/75"
      />

      <div ref={ref} className="relative section-fade-in max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 md:mb-4 block">
            The Collection
          </span>
          <h2 className="font-serif-display text-2xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Centuries of <span className="gold-text-gradient">Heritage</span>
          </h2>
          {!isMobile && (
            <p className="font-body text-charcoal-light max-w-xl mx-auto">
              Hover over each coin to discover its historical significance — spanning 2,000 years of Indian monetary history.
            </p>
          )}
        </div>

        <div className={
          isMobile
            ? "grid grid-cols-3 gap-2"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        }>
          {coins.map((coin) => (
            <div key={coin.era} className="coin-card-perspective cursor-pointer group">
              <div className={`coin-card-inner relative w-full ${isMobile ? "aspect-square" : "aspect-square"}`}>
                {/* Front */}
                <div className={`coin-card-front absolute inset-0 rounded-sm gold-border bg-cream dark:bg-card flex flex-col items-center justify-center ${isMobile ? "p-1.5" : "p-6"}`}>
                  <div className={`rounded-sm bg-gradient-to-br from-gold/10 to-gold-light/20 flex items-center justify-center shadow-inner overflow-hidden ${isMobile ? "w-full h-[65%] mb-1" : "w-40 h-40 mb-4"}`}>
                    <img src={coin.frontImg} alt={`${coin.era} (front)`} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <h3 className={`font-serif-display font-semibold text-foreground text-center leading-tight ${isMobile ? "text-[9px]" : "text-lg"}`}>{coin.era}</h3>
                  <span className={`font-body text-gold ${isMobile ? "text-[8px]" : "text-sm"}`}>{coin.date}</span>
                </div>

                {/* Back */}
                <div className={`coin-card-back absolute inset-0 rounded-sm bg-foreground dark:bg-[#111C35] flex flex-col items-center justify-center text-center ${isMobile ? "p-2" : "p-8"}`}>
                  <h3 className={`font-serif-display font-semibold text-cream mb-1 md:mb-3 leading-tight ${isMobile ? "text-[9px]" : "text-lg"}`}>
                    {coin.era}
                  </h3>
                  <p className={`font-body text-cream/80 leading-snug ${isMobile ? "text-[7px]" : "text-sm leading-relaxed"}`}>
                    {coin.back}
                  </p>
                  <span className={`mt-1 md:mt-4 font-body tracking-widest uppercase text-gold/70 ${isMobile ? "text-[6px]" : "text-xs"}`}>
                    {coin.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoinGallery;
