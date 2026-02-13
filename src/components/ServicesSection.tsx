import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { ShieldCheck, CircleDollarSign, ArrowLeftRight, BookMarked, History } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: ShieldCheck,
    title: "Authentication & Grading",
    desc: "Scientific authentication through script analysis, historical cross-referencing, and comparative archival study.",
  },
  {
    icon: CircleDollarSign,
    title: "Price Evaluation",
    desc: "Accurate market valuation based on rarity index, metal composition, condition grading, and live market trends.",
  },
  {
    icon: ArrowLeftRight,
    title: "Buy & Sell Advisory",
    desc: "Transparent advisory for acquisition or liquidation of rare coins at optimal value.",
  },
  {
    icon: BookMarked,
    title: "Collection Strategy",
    desc: "Guidance for building high-value, historically meaningful coin portfolios.",
  },
  {
    icon: History,
    title: "Heritage Consultation",
    desc: "Specialized advisory for inherited collections requiring historical identification and valuation.",
  },
];

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesSection = () => {
  const ref = useScrollFadeIn();
  const isMobile = useIsMobile();

  // Conditionally render structure

  return (
    <section
      id="services"
      className="relative py-16 md:py-32 bg-cream-dark dark:bg-background overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90 dark:opacity-80"
        style={{ backgroundImage: "url('/bg7.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/80 dark:from-background/80 dark:via-background/75 dark:to-background/90"
      />
      <div ref={ref} className="relative section-fade-in max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 md:mb-4 block">
            What I Offer
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground">
            Expert <span className="gold-text-gradient">Services</span>
          </h2>
        </div>

        {/* Desktop View: Marquee */}
        <div className="hidden md:block relative mt-6 left-1/2 right-1/2 -ml-[50vw] w-screen">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream dark:from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream dark:from-background to-transparent z-10" />

          <div className="group overflow-hidden px-10">
            <div className="flex w-max items-stretch gap-8 animate-services-marquee group-hover:[animation-play-state:paused]">
              {[...services, ...services].map((s, idx) => (
                <Card
                  key={`desktop-${s.title}-${idx}`}
                  className="flex h-full w-80 lg:w-88 min-h-[260px] flex-shrink-0 flex-col rounded-sm border-gold/30 bg-cream dark:bg-card shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <CardHeader className="flex flex-1 flex-col p-7 border-t-4 border-gold/80">
                    <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <s.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <CardTitle className="font-serif-display text-xl md:text-2xl text-foreground mb-3">
                      {s.title}
                    </CardTitle>
                    <CardDescription className="font-body text-sm text-charcoal-light leading-relaxed">
                      {s.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Carousel */}
        {isMobile && (
          <div className="flex justify-center h-[340px]">
            <Carousel
              orientation="vertical"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2500,
                }),
              ]}
              className="w-full max-w-sm"
            >
              <CarouselContent className="h-[340px] -mt-1 p-1">
                {services.map((s, idx) => (
                  <CarouselItem key={`mobile-carousel-${idx}`} className="pt-1 md:basis-1/2 basis-1/2">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col rounded-sm border-gold/30 bg-cream dark:bg-card shadow-sm h-full">
                        <CardHeader className="flex flex-1 flex-col p-4 border-t-2 border-gold/80 justify-center">
                          <div className="w-8 h-8 rounded-sm gold-gradient flex items-center justify-center mb-3">
                            <s.icon className="w-4 h-4 text-foreground" />
                          </div>
                          <CardTitle className="font-serif-display text-sm font-bold text-foreground mb-2 leading-tight">
                            {s.title}
                          </CardTitle>
                          <CardDescription className="font-body text-[11px] text-charcoal-light leading-snug">
                            {s.desc}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};


export default ServicesSection;
