"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type HeroCoin = {
  id: string;
  front: string;
  back: string;
  alt: string;
};

const heroCoins: HeroCoin[] = [
  { id: "1", front: "/coins/1.png", back: "/coins/1.1.png", alt: "Gupta gold coin – front" },
  { id: "2", front: "/coins/2.png", back: "/coins/2.2.png", alt: "Chandragupta coin – front" },
  { id: "3", front: "/coins/3.png", back: "/coins/3.3.png", alt: "Vasudeva II Kushan coin – front" },
  { id: "4", front: "/coins/4.png", back: "/coins/4.4.png", alt: "Shahjahan Ahmedabad Mughal coin – front" },
  { id: "5", front: "/coins/5.png", back: "/coins/5.5.png", alt: "Mauryan punch-marked coin – front" },
  { id: "6", front: "/coins/6.png", back: "/coins/6.6.png", alt: "Ala ud din Khilji Delhi Sultan coin – front" },
  { id: "7", front: "/coins/7.png", back: "/coins/7.7.png", alt: "Ancient Indian coin – front" },
  { id: "8", front: "/coins/8.png", back: "/coins/8.8.png", alt: "One Rupee British Victoria Queen – front" },
  { id: "9", front: "/coins/9.png", back: "/coins/9.9.png", alt: "Shahjahan Shahjahanabad Gold Mohar – front" },
  { id: "10", front: "/10.png", back: "/10.1.png", alt: "Featured numismatic rarity – front" },
  { id: "11", front: "/11.png", back: "/11.1.png", alt: "Featured numismatic rarity – front" },
  { id: "12", front: "/12.png", back: "/12.1.png", alt: "Featured numismatic rarity – front" },
];

const heroCoinsMap: Record<string, HeroCoin> = heroCoins.reduce(
  (acc, coin) => { acc[coin.id] = coin; return acc; },
  {} as Record<string, HeroCoin>,
);

const desktopOrder: string[] = [
  "1", "4", "3", "6", "5", "8", "10", "7",
  "8", "11", "12", "2", "1", "4", "3", "6",
];

const mobileOrder: string[] = [
  "1", "4", "3", "6", "5", "8", "10", "7", "9",
];

const ShuffleGrid = () => {
  const isMobile = useIsMobile();
  const order = isMobile ? mobileOrder : desktopOrder;
  const gridCoins = order.map((id) => heroCoinsMap[id] ?? heroCoins[0]);

  return (
    <div className={cn(
      "grid gap-px sm:gap-[2px] md:gap-[3px]",
      isMobile ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
    )}>
      {gridCoins.map((coin, index) => (
        <motion.div
          key={`${coin.id}-${index}`}
          className="hero-coin-perspective aspect-square overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index, duration: 0.5 }}
        >
          <div className="hero-coin-inner relative w-full h-full rounded-sm">
            <div className="hero-coin-face hero-coin-front absolute inset-0 rounded-sm bg-cream flex items-center justify-center p-[2px] sm:p-[3px] md:p-1">
              <div className="w-full h-full rounded-sm bg-gradient-to-br from-gold/10 to-gold-light/20 flex items-center justify-center shadow-inner overflow-hidden">
                <img src={coin.front} alt={coin.alt} className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
            <div className="hero-coin-face hero-coin-back absolute inset-0 rounded-sm bg-transparent flex items-center justify-center p-[2px] sm:p-[3px] md:p-1">
              <div className="w-full h-full rounded-sm bg-transparent flex items-center justify-center overflow-hidden">
                <img src={coin.back} alt={`${coin.alt} – back`} className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const ShuffleHero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => { setMounted(true); }, []);

  const isDark = mounted && theme === "dark";
  const logoSrc = isDark ? "/RK.png" : "/logo1.png";

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={cn("w-full px-6 md:px-8", isMobile ? "py-8" : "py-16 md:py-20")}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 md:gap-10 max-w-6xl mx-auto">
        {/* Left content */}
        <div className={cn("flex flex-col justify-center text-left h-full", isMobile ? "space-y-5 order-2" : "space-y-8")}>
          <div className="flex justify-center md:justify-start">
            <img
              src={logoSrc}
              alt="RK Monogram"
              className={cn(
                "object-contain",
                isMobile ? "w-20 h-20" : "w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              )}
            />
          </div>

          <div className={cn(isMobile ? "space-y-3" : "space-y-4")}>
            <div className="space-y-1.5 md:space-y-2">
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

            <div className={cn(
              "flex flex-wrap items-center gap-x-3 gap-y-1 text-charcoal-light font-body",
              isMobile ? "text-xs" : "text-sm md:text-base gap-x-4 gap-y-2"
            )}>
              <span>12+ Years in Numismatics</span>
              <span className="text-gold hidden sm:inline">•</span>
              <span>50,000+ Deals</span>
              <span className="text-gold hidden sm:inline">•</span>
              <span>10,000+ Clients</span>
              <span className="text-gold hidden sm:inline">•</span>
              <span>4.5 Years in Software Development</span>
            </div>

            <div className="space-y-1.5">
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

            <div className={cn(
              "flex items-start gap-3 pt-1",
              isMobile ? "flex-col sm:flex-row" : "flex-col sm:flex-row sm:items-center gap-4 pt-2"
            )}>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className={cn(
                  "inline-flex items-center gap-2 gold-gradient text-foreground font-body font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity shadow-lg",
                  isMobile ? "px-6 py-3 text-sm" : "px-8 py-3.5"
                )}
              >
                Request Coin Evaluation
              </a>
              <a
                href="https://wa.me/919922331612"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 border-2 border-gold text-foreground font-body font-semibold tracking-wide rounded-sm hover:bg-gold/10 transition-colors",
                  isMobile ? "px-6 py-3 text-sm" : "px-8 py-3.5"
                )}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right coin grid */}
        <div className={cn("relative", isMobile ? "order-1" : "md:mt-6 lg:mt-10")}>
          <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-gradient-to-tr from-gold/15 via-transparent to-gold/10 dark:from-gold/25 dark:via-transparent dark:to-gold/20 blur-3xl" />
          <div className={cn(
            "relative rounded-xl border border-gold/30 bg-cream-dark/60 dark:bg-card/90 shadow-2xl backdrop-blur-sm",
            isMobile ? "p-1.5" : "p-2 sm:p-2.5 md:p-3"
          )}>
            <ShuffleGrid />
          </div>
        </div>
      </div>
    </section>
  );
};
