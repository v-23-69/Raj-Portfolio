"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type HeroCoin = {
  id: string;
  front: string;
  back: string;
  alt: string;
};

// 16-slot hero grid (front/back pairs).
// Current naming convention in /public/coins (based on uploaded files):
// - 1–9 backs:  1.1.png, 2.2.png, ... 9.9.png
// - 10–16 backs: 10.1.png, 11.1.png, ... 16.1.png
const heroCoins: HeroCoin[] = Array.from({ length: 16 }, (_, index) => {
  const numericId = index + 1;
  const id = String(numericId);

  const front = `/coins/${id}.png`;
  const back =
    numericId <= 9
      ? `/coins/${id}.${id}.png`
      : `/coins/${id}.1.png`;

  return {
    id,
    front,
    back,
    alt: `Collection coin ${id} – front`,
  };
});

const heroCoinsMap: Record<string, HeroCoin> = heroCoins.reduce((acc, coin) => {
  acc[coin.id] = coin;
  return acc;
}, {} as Record<string, HeroCoin>);

// Desktop: full 4x4 grid using all 16 coins (unique).
const desktopOrder: string[] = Array.from({ length: 16 }, (_, index) =>
  String(index + 1),
);

// Mobile: 3x3 grid using the first 9 coins.
const mobileOrder: string[] = Array.from({ length: 9 }, (_, index) =>
  String(index + 1),
);


const ShuffleGrid = () => {
  const isMobile = useIsMobile();
  const order = isMobile ? mobileOrder : desktopOrder;
  const gridCoins = order.map((id) => heroCoinsMap[id] ?? heroCoins[0]);

  // Flipping Logic: Track by Index (number), not Coin ID, to handle duplicates independently
  const [flippedIndices, setFlippedIndices] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedIndices((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    // Mobile specific animation pattern
    if (isMobile) {
      // Mobile Indices (3x3 = 9 coins)
      // 0 1 2
      // 3 4 5
      // 6 7 8
      const diag1 = [0, 4, 8];
      const diag2 = [2, 4, 6];
      const cross = [1, 4, 7, 3, 5];

      let step = 0;
      const interval = setInterval(() => {
        if (step === 0) { diag1.forEach(i => toggleFlip(i)); step = 1; }
        else if (step === 1) { diag2.forEach(i => toggleFlip(i)); step = 2; }
        else if (step === 2) {
          const uniqueCross = Array.from(new Set(cross));
          uniqueCross.forEach(i => toggleFlip(i));
          step = 0;
        }
      }, 2500);
      return () => clearInterval(interval);
    } else {
      // Desktop Animation: Diagonal Sweep
      // 4x4 Grid Indices:
      // 0  1  2  3
      // 4  5  6  7
      // 8  9  10 11
      // 12 13 14 15

      // TL-BR Diagonals (Top-Left to Bottom-Right)
      const tlbr = [
        [0],
        [1, 4],
        [2, 5, 8],
        [3, 6, 9, 12],
        [7, 10, 13],
        [11, 14],
        [15]
      ];

      // TR-BL Diagonals (Top-Right to Bottom-Left)
      const trbl = [
        [3],
        [2, 7],
        [1, 6, 11],
        [0, 5, 10, 15],
        [4, 9, 14],
        [8, 13],
        [12]
      ];

      let step = 0;
      let phase = "TLBR"; // TLBR or TRBL

      const interval = setInterval(() => {
        // Current set based on phase
        const currentSet = phase === "TLBR" ? tlbr : trbl;

        // Flip coins in current diagonal step
        if (currentSet[step]) {
          currentSet[step].forEach(index => {
            toggleFlip(index);
          });
        }

        step++;

        // Check if pattern complete (both have 7 steps: 0..6)
        if (step >= 7) {
          step = 0;
          // Switch phase
          phase = phase === "TLBR" ? "TRBL" : "TLBR";
        }
      }, 1200);

      return () => clearInterval(interval);
    }
  }, [isMobile]); // dependency on order removed as we use indices

  return (
    <div className={cn(
      "grid gap-px sm:gap-[2px] md:gap-[3px]",
      isMobile ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
    )}>
      {gridCoins.map((coin, index) => {
        const isFlipped = flippedIndices[index] || false;

        return (
          <div
            key={`${coin.id}-${index}`}
            className={`hero-coin-perspective aspect-square overflow-hidden ${isMobile ? "cursor-pointer" : ""}`}
            onClick={() => isMobile && toggleFlip(index)}
          >
            <motion.div
              className="hero-coin-inner relative w-full h-full rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: isFlipped ? 180 : 0
              }}
              transition={{
                opacity: { delay: 0.05 * index, duration: 0.5 },
                y: { delay: 0.05 * index, duration: 0.5 },
                rotateY: { duration: 0.8, ease: "easeInOut" }
              }}
            >
              <div className="hero-coin-face hero-coin-front absolute inset-0 rounded-sm bg-cream flex items-center justify-center p-[2px] sm:p-[3px] md:p-1">
                <div className="w-full h-full rounded-sm bg-gradient-to-br from-gold/10 to-gold-light/20 flex items-center justify-center shadow-inner overflow-hidden">
                  <img src={coin.front} alt={coin.alt} className="w-full h-full object-contain" loading="lazy" />
                </div>
              </div>
              {/* Back: no background, just the reverse image floating */}
              <div className="hero-coin-face hero-coin-back absolute inset-0 rounded-sm flex items-center justify-center p-[2px] sm:p-[3px] md:p-1">
                <div className="w-full h-full rounded-sm flex items-center justify-center overflow-hidden">
                  <img src={coin.back} alt={`${coin.alt} – back`} className="w-full h-full object-contain" loading="lazy" />
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export const ShuffleHero = () => {
  const isMobile = useIsMobile();
  // Use a single unified logo for both themes so /public/logo1.png can be removed.
  const logoSrc = "/RK.png";

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "12+", label: "Years in Numismatics" },
    { value: "50,000+", label: "Successful Deals" },
    { value: "10,000+", label: "Satisfied Clients" },
    { value: "4.5", label: "Years in Software Development" },
  ];

  return (
    <section className={cn("w-full px-6 md:px-8", isMobile ? "py-8" : "py-16 md:py-20")}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 md:gap-10 max-w-6xl mx-auto">
        {/* Left content */}
        <div className={cn("flex flex-col justify-center text-left h-full", isMobile ? "space-y-6 order-2" : "space-y-8")}>
          <div className="flex justify-center md:justify-start">
            <img
              src={logoSrc}
              alt="RK Monogram"
              className={cn(
                "object-contain",
                isMobile ? "w-24 h-24" : "w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56"
              )}
            />
          </div>

          <div className={cn(isMobile ? "space-y-4" : "space-y-4")}>
            <div className="space-y-1.5 md:space-y-2 text-center md:text-left"> {/* Added text-center for mobile */}
              <h1 className={cn(
                "font-serif-display font-bold text-foreground leading-tight",
                isMobile ? "text-3xl" : "text-4xl md:text-5xl lg:text-6xl"
              )}>
                Raj Karnawat
              </h1>
              <p className={cn("font-body text-foreground font-semibold", isMobile ? "text-base" : "text-lg md:text-xl")}>
                Numismatics Authority · Entrepreneur
              </p>
              <p className="text-sm md:text-base font-body text-charcoal-light">
                Co-Founder, <span className="font-semibold text-foreground">Numismatics Scholar Hub</span>
              </p>
            </div>

            {/* Desktop Stats - Moved Here */}
            {!isMobile && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-charcoal-light font-body text-sm md:text-base py-1">
                <span>12+ Years in Numismatics</span>
                <span className="text-gold">•</span>
                <span>50,000+ Deals</span>
                <span className="text-gold">•</span>
                <span>10,000+ Clients</span>
                <span className="text-gold">•</span>
                <span>4.5 Years in Software Development</span>
              </div>
            )}

            {/* Slogans - Centered on Mobile */}
            <div className="space-y-1.5 pt-2 text-center md:text-left">
              <p className={cn(
                "font-serif-display font-semibold gold-text-gradient",
                isMobile ? "text-base" : "text-lg md:text-2xl"
              )}>
                Heritage in Every Coin. Integrity in Every Deal.
              </p>
              <p className={cn(
                "font-body tracking-[0.25em] uppercase text-gold",
                isMobile ? "text-[10px]" : "text-xs md:text-sm"
              )}>
                Parampara. Precision. Progress.
              </p>
            </div>

            {/* Buttons - Mobile: Equal size, Rounded, Stacked or Grid? "two buttons should be of same size" */}
            <div className={cn(
              "flex items-start gap-3 pt-1",
              isMobile ? "flex-col w-full gap-3" : "flex-col sm:flex-row sm:items-center gap-4 pt-2"
            )}>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className={cn(
                  "inline-flex items-center justify-center gap-2 gold-gradient text-foreground font-body font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg",
                  isMobile ? "w-full py-3 text-sm rounded-full" : "px-8 py-3.5 rounded-sm"
                )}
              >
                Request Coin Evaluation
              </a>
              <a
                href="https://wa.me/919922331612"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 border-2 border-gold text-foreground font-body font-semibold tracking-wide hover:bg-gold/10 transition-colors",
                  isMobile ? "w-full py-3 text-sm rounded-full" : "px-8 py-3.5 rounded-sm"
                )}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Stats: Mobile (2x2 Grid) Only */}
            {isMobile && (
              <div className="grid grid-cols-2 gap-4 py-4 rounded-xl border border-gold/20 bg-cream/50 dark:bg-card/30 backdrop-blur-sm shadow-sm mt-2">
                {stats.map((s) => (
                  <div key={s.label} className="text-center flex flex-col justify-center items-center p-2">
                    <span className="font-serif-display text-2xl font-bold gold-text-gradient block">{s.value}</span>
                    <span className="font-body text-[10px] text-charcoal-light uppercase tracking-wider block leading-tight max-w-[100px] mt-1">{s.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Mobile Coin Grid Placement: Below Stats */}
            {isMobile && (
              <div className="relative w-full mt-4 mb-2">
                <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-gradient-to-tr from-gold/15 via-transparent to-gold/10 dark:from-gold/25 dark:via-transparent dark:to-gold/20 blur-xl" />
                <div className="relative rounded-lg border border-gold/30 bg-cream-dark/60 dark:bg-card/90 shadow-lg backdrop-blur-sm p-1.5">
                  <ShuffleGrid />
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Right coin grid - Desktop Only now (since mobile is inside text col) */}
        {!isMobile && (
          <div className="md:mt-6 lg:mt-10 relative">
            <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-gradient-to-tr from-gold/15 via-transparent to-gold/10 dark:from-gold/25 dark:via-transparent dark:to-gold/20 blur-3xl" />
            <div className="relative rounded-xl border border-gold/30 bg-cream-dark/60 dark:bg-card/90 shadow-2xl backdrop-blur-sm p-2 sm:p-2.5 md:p-3">
              <ShuffleGrid />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
