import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const coins = [
  { era: "Gupta", date: "~400 AD", frontImg: "/coins/1.png", backImg: "/coins/1.1.png", back: "Classic Gupta gold coinage known for artistic excellence and refined iconography." },
  { era: "Chandragupta", date: "~400 AD", frontImg: "/coins/2.png", backImg: "/coins/2.2.png", back: "A celebrated Gupta-era issue reflecting royal authority and the era's high standards of minting." },
  { era: "Vasudeva II Kushan", date: "~200 AD", frontImg: "/coins/3.png", backImg: "/coins/3.3.png", back: "Kushan coinage blending imperial symbolism with distinct religious and cultural motifs." },
  { era: "Shahjahan Ahmedabad Mughal", date: "~1600 AD", frontImg: "/coins/4.png", backImg: "/coins/4.4.png", back: "Mughal coinage noted for elegant Persian inscriptions and refined calligraphic design." },
  { era: "Mauryan Empire", date: "~300 BC", frontImg: "/coins/5.png", backImg: "/coins/5.5.png", back: "Among India's earliest coinage traditions, featuring symbolic punch marks and early monetary standardization." },
  { era: "Ala ud din Khilji Delhi Sultan", date: "~1300 AD", frontImg: "/coins/6.png", backImg: "/coins/6.6.png", back: "Delhi Sultanate issues renowned for Islamic calligraphy and historically significant monetary reforms." },
  // NOTE: Images of the following two coins are intentionally swapped
  // so that the correct artwork shows under each card title in the collection.
  { era: "One Rupee British Victoria Queen", date: "1862 · British India", frontImg: "/coins/9.png", backImg: "/coins/9.9.png", back: "Iconic British India silver rupee of Queen Victoria, 1862 — a cornerstone type in colonial numismatics." },
  { era: "Shahjahan Gold Mohar", date: "~1600s · Mughal", frontImg: "/coins/8.png", backImg: "/coins/8.8.png", back: "A rare Mughal gold mohar from the reign of Shahjahan, showcasing regal calligraphy and imperial refinement." },
  { era: "Ala ud din Khilji Delhi sultan gold tanka", date: "~1300 AD", frontImg: "/coins/7.png", backImg: "/coins/7.7.png", back: "A significant issue from the Delhi Sultanate, reflecting the economic stability and architectural grandeur of the Khilji dynasty.", mobileOnly: true },
];

const CoinGallery = () => {
  const ref = useScrollFadeIn();
  const isMobile = useIsMobile();
  const [flippedStates, setFlippedStates] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (isMobile) {
      // Mobile specific animation pattern:
      // 1. Cols: [0,3,6], [1,4,7], [2,5,8]
      // 2. Rows: [0,1,2], [3,4,5], [6,7,8]

      // 3x3 grid indices:
      // 0 1 2
      // 3 4 5
      // 6 7 8

      // However, the coins array has 8 items!
      // Row 1: 0, 1, 2
      // Row 2: 3, 4, 5
      // Row 3: 6, 7 (missing 8)

      // Cols:
      // Col 1: 0, 3, 6
      // Col 2: 1, 4, 7
      // Col 3: 2, 5

      const col1 = ["Gupta", "Shahjahan Ahmedabad Mughal", "One Rupee British Victoria Queen"]; // 0, 3, 6
      const col2 = ["Chandragupta", "Mauryan Empire", "Shahjahan Gold Mohar"]; // 1, 4, 7
      const col3 = ["Vasudeva II Kushan", "Ala ud din Khilji Delhi Sultan", "Ala ud din Khilji Delhi sultan gold tanka"]; // 2, 5, 8

      const row1 = ["Gupta", "Chandragupta", "Vasudeva II Kushan"]; // 0, 1, 2
      const row2 = ["Shahjahan Ahmedabad Mughal", "Mauryan Empire", "Ala ud din Khilji Delhi Sultan"]; // 3, 4, 5
      const row3 = ["One Rupee British Victoria Queen", "Shahjahan Gold Mohar", "Ala ud din Khilji Delhi sultan gold tanka"]; // 6, 7, 8

      let step = 0;

      const interval = setInterval(() => {
        // Sequence: Col1 -> Col2 -> Col3 -> Row1 -> Row2 -> Row3
        if (step === 0) { col1.forEach(era => toggleFlip(era)); step = 1; }
        else if (step === 1) { col2.forEach(era => toggleFlip(era)); step = 2; }
        else if (step === 2) { col3.forEach(era => toggleFlip(era)); step = 3; }
        else if (step === 3) { row1.forEach(era => toggleFlip(era)); step = 4; }
        else if (step === 4) { row2.forEach(era => toggleFlip(era)); step = 5; }
        else if (step === 5) { row3.forEach(era => toggleFlip(era)); step = 0; }
      }, 2500);
      return () => clearInterval(interval);
    } else {
      // Desktop Animation: Column Wise (1st, 2nd, 3rd, 4th)
      // Need to identify columns. 
      // Coins array has 8 items. Grid usually responsive.
      // Assuming 4 columns on desktop? 
      // CoinGallery usually has `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`.
      // Let's assume lg (4 cols).
      // 0 1 2 3
      // 4 5 6 7

      // Col 1: 0, 4
      // Col 2: 1, 5
      // Col 3: 2, 6
      // Col 4: 3, 7

      const c1 = [coins[0].era, coins[4]?.era].filter(Boolean);
      const c2 = [coins[1].era, coins[5]?.era].filter(Boolean);
      const c3 = [coins[2].era, coins[6]?.era].filter(Boolean);
      const c4 = [coins[3].era, coins[7]?.era].filter(Boolean);

      const cols = [c1, c2, c3, c4];
      let step = 0;

      const interval = setInterval(() => {
        cols[step].forEach(era => toggleFlip(era));
        step = (step + 1) % 4;
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

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
        </div>

        <div className={
          isMobile
            ? "grid grid-cols-3 gap-2"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        }>
          {coins.map((coin) => {
            if (!isMobile && coin.mobileOnly) return null; // Skip mobile-only coins on desktop

            const isFlipped = flippedStates[coin.era] || false;

            return (
              <div
                key={coin.era}
                className={`coin-card-perspective ${isMobile ? "cursor-pointer group" : ""}`}
                onClick={() => isMobile && toggleFlip(coin.era)}
              >
                <motion.div
                  className={`coin-card-inner relative w-full ${isMobile ? "aspect-square" : "aspect-square"}`}
                  animate={{
                    rotateY: isFlipped ? 180 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }} // Ensure 3D context
                >
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
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoinGallery;
