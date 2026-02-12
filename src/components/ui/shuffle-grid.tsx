"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type HeroCoin = {
  id: string;
  front: string;
  back: string;
  alt: string;
};

const heroCoins: HeroCoin[] = [
  {
    id: "1",
    front: "/coins/1.png",
    back: "/coins/1.1.png",
    alt: "Gupta gold coin – front",
  },
  {
    id: "2",
    front: "/coins/2.png",
    back: "/coins/2.2.png",
    alt: "Chandragupta coin – front",
  },
  {
    id: "3",
    front: "/coins/3.png",
    back: "/coins/3.3.png",
    alt: "Vasudeva II Kushan coin – front",
  },
  {
    id: "4",
    front: "/coins/4.png",
    back: "/coins/4.4.png",
    alt: "Shahjahan Ahmedabad Mughal coin – front",
  },
  {
    id: "5",
    front: "/coins/5.png",
    back: "/coins/5.5.png",
    alt: "Mauryan punch-marked coin – front",
  },
  {
    id: "6",
    front: "/coins/6.png",
    back: "/coins/6.6.png",
    alt: "Ala ud din Khilji Delhi Sultan coin – front",
  },
  {
    id: "7",
    front: "/coins/7.png",
    back: "/coins/7.7.png",
    alt: "Ancient Indian coin – front",
  },
  {
    id: "8",
    front: "/coins/8.png",
    back: "/coins/8.8.png",
    alt: "One Rupee British Victoria Queen – front",
  },
  {
    id: "9",
    front: "/coins/9.png",
    back: "/coins/9.9.png",
    alt: "Shahjahan Shahjahanabad Gold Mohar – front",
  },
  {
    id: "10",
    front: "/10.png",
    back: "/10.1.png",
    alt: "Featured numismatic rarity – front",
  },
  {
    id: "11",
    front: "/11.png",
    back: "/11.1.png",
    alt: "Featured numismatic rarity – front",
  },
  {
    id: "12",
    front: "/12.png",
    back: "/12.1.png",
    alt: "Featured numismatic rarity – front",
  },
];

const heroCoinsMap: Record<string, HeroCoin> = heroCoins.reduce(
  (acc, coin) => {
    acc[coin.id] = coin;
    return acc;
  },
  {} as Record<string, HeroCoin>,
);

const ShuffleGrid = () => {
  // Specific order requested by user for 16 tiles
  const order: string[] = [
    "1",  // 1 & 1.1
    "4",  // 4 & 4.4
    "3",  // 3 & 3.3
    "6",  // 6 & 6.6
    "5",  // 5 & 5.5
    "8",  // 8 & 8.8
    "10", // 10
    "7",  // 7
    "8",  // 8 again
    "11", // 11
    "12", // 12
    "2",  // 2
    // last four random-ish but balanced
    "1",
    "4",
    "3",
    "6",
  ];

  const gridCoins = order.map((id) => heroCoinsMap[id] ?? heroCoins[0]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px sm:gap-[2px] md:gap-[3px]">
      {gridCoins.map((coin, index) => (
        <motion.div
          key={`${coin.id}-${index}`}
          className="hero-coin-perspective aspect-square overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index, duration: 0.5 }}
        >
          <div className="hero-coin-inner relative w-full h-full rounded-sm">
            {/* Front */}
            <div className="hero-coin-face hero-coin-front absolute inset-0 rounded-sm bg-cream flex items-center justify-center p-[2px] sm:p-[3px] md:p-1">
              <div className="w-full h-full rounded-sm bg-gradient-to-br from-gold/10 to-gold-light/20 flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={coin.front}
                  alt={coin.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Back */}
            <div className="hero-coin-face hero-coin-back absolute inset-0 rounded-sm bg-transparent flex items-center justify-center p-[2px] sm:p-[3px] md:p-1">
              <div className="w-full h-full rounded-sm bg-transparent flex items-center justify-center overflow-hidden">
                <img
                  src={coin.back}
                  alt={`${coin.alt} – back`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
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

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";
  const logoSrc = isDark ? "/RK.png" : "/logo1.png";

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full px-6 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-10 max-w-6xl mx-auto">
        {/* Left content */}
        <div className="flex flex-col justify-center text-left space-y-8 h-full">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logoSrc}
              alt="RK Monogram"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
            />
          </div>

          {/* Text block */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Raj Karnawat
              </h1>
              <p className="text-lg md:text-xl font-body text-foreground font-semibold">
                Numismatics Authority · Entrepreneur
              </p>
              <p className="text-sm md:text-base font-body text-charcoal-light">
                Co-Founder,{" "}
                <span className="font-semibold text-foreground">
                  Numismatics Scholar Hub
                </span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-charcoal-light font-body text-sm md:text-base">
              <span>12+ Years in Numismatics</span>
              <span className="text-gold hidden sm:inline">•</span>
              <span>50,000+ Deals</span>
              <span className="text-gold hidden sm:inline">•</span>
              <span>10,000+ Clients</span>
              <span className="text-gold hidden sm:inline">•</span>
              <span>4.5 Years in Software Development</span>
            </div>

            {/* Slogans */}
            <div className="space-y-1.5">
              <p className="text-lg md:text-2xl font-serif-display font-semibold gold-text-gradient">
                Heritage in Every Coin. Integrity in Every Deal.
              </p>
              <p className="text-xs md:text-sm font-body tracking-[0.25em] uppercase text-gold">
                Parampara. Precision. Progress.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-foreground",
                  "font-body font-semibold tracking-wide rounded-sm",
                  "hover:opacity-90 transition-opacity shadow-lg"
                )}
              >
                Request Coin Evaluation
              </a>
              <a
                href="https://wa.me/919922331612"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gold text-foreground",
                  "font-body font-semibold tracking-wide rounded-sm",
                  "hover:bg-gold/10 transition-colors"
                )}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right coin grid */}
        <div className="relative md:mt-6 lg:mt-10">
          <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-gradient-to-tr from-gold/15 via-transparent to-gold/10 dark:from-gold/25 dark:via-transparent dark:to-gold/20 blur-3xl" />
          <div className="relative rounded-xl border border-gold/30 bg-cream-dark/60 dark:bg-card/90 p-2 sm:p-2.5 md:p-3 shadow-2xl backdrop-blur-sm">
            <ShuffleGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

