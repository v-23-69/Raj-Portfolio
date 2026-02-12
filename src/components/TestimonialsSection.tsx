import { useEffect, useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "In over eight years of dealing with Raj, I have never once questioned his integrity. His evaluations are precise, his knowledge exceptionally deep, and his approach transparent. He understands both historical context and market realities.",
    name: "Anand Mehra",
    context: "Antique Investor · Delhi",
  },
  {
    quote: "Raj's understanding of Brahmi inscriptions helped identify a coin in my inherited collection that others misclassified. His expertise saved me from undervaluing a historically important piece.",
    name: "Sneha Kulkarni",
    context: "Private Collector · Pune",
  },
  {
    quote: "His transaction volume speaks for itself. What truly sets him apart is consistency. Every deal is handled with clarity and professionalism.",
    name: "Imran Sheikh",
    context: "Numismatic Trader · Hyderabad",
  },
  {
    quote: "I appreciate his structured evaluation process. He explains rarity, grading, and demand dynamics clearly — making informed investment decisions possible.",
    name: "Rakesh Agarwal",
    context: "Gold & Silver Investor · Mumbai",
  },
  {
    quote: "Raj combines scholarship with market awareness. His guidance helped me curate a focused Mughal silver collection with long-term appreciation potential.",
    name: "Neha Bhandari",
    context: "Heritage Collector · Jaipur",
  },
  {
    quote: "I was impressed by Raj's depth of knowledge regarding Mughal and British India coinage. His authentication process was detailed and highly professional.",
    name: "David Thompson",
    context: "Independent Coin Collector · London, UK",
  },
  {
    quote: "Raj demonstrates rare expertise in reading Persian inscriptions accurately. His consultation was precise, honest, and extremely valuable for my acquisition decisions.",
    name: "Michael Chen",
    context: "Asian Antique Investor · Singapore",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollFadeIn();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-cream-dark dark:bg-background overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-85 dark:opacity-75"
        style={{ backgroundImage: "url('/bg7.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/35 to-background/75 dark:from-background/80 dark:via-background/75 dark:to-background/90"
      />
      <div ref={ref} className="relative section-fade-in max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Client Voices
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="gold-text-gradient">Thousands</span>
          </h2>
          <p className="font-body text-sm md:text-base text-charcoal-light italic max-w-2xl mx-auto">
            Collectors, investors, and heritage enthusiasts across India and abroad share
            their experience of working with Raj.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-black/70 dark:bg-black/80 shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60 dark:opacity-45"
            style={{ backgroundImage: "url('/bg.jpg')" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/96 via-background/88 to-background/70 dark:from-background/98 dark:via-background/92 dark:to-background/75"
          />

          <div className="relative px-6 py-10 md:px-10 md:py-14">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-md">
                <Quote className="w-12 h-12 text-gold/70 mb-6" />
                <p className="font-body text-sm md:text-base text-charcoal-light/90 dark:text-muted-foreground leading-relaxed">
                  Over a decade of trust, scholarship, and transparent guidance in rare
                  coins and historical assets. These are not generic reviews — they are
                  voices from serious collectors and long-term investors.
                </p>
                <div className="mt-6 space-y-2 text-left">
                  <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
                    Testimonials
                  </p>
                  <p className="font-body text-sm md:text-base text-charcoal-light dark:text-muted-foreground">
                    Rotating real client experiences, curated to reflect the depth,
                    precision, and integrity Raj brings to every evaluation.
                  </p>
                </div>
              </div>

              <div className="relative flex w-full items-center justify-center md:justify-end">
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    className={`max-w-xl rounded-xl border border-gold/30 bg-background/92 dark:bg-black/85 backdrop-blur-md px-6 py-7 md:px-8 md:py-9 text-left shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-all duration-700 ${
                      i === index
                        ? "relative opacity-100 translate-y-0"
                        : "absolute opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                  >
                    <p className="font-body text-sm md:text-base text-charcoal-light dark:text-muted-foreground leading-relaxed italic mb-4">
                      "{t.quote}"
                    </p>
                    <div className="h-px w-10 bg-gold mb-3" />
                    <div>
                      <h4 className="font-serif-display text-base md:text-lg font-semibold text-foreground">
                        {t.name}
                      </h4>
                      <span className="font-body text-xs md:text-sm text-charcoal-light dark:text-muted-foreground/80">
                        {t.context}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-5 rounded-full transition-all ${
                    i === index
                      ? "bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.35)] w-7"
                      : "bg-gold/30 hover:bg-gold/60"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
