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
    <section id="testimonials" className="py-24 md:py-32 bg-cream-dark">
      <div ref={ref} className="section-fade-in max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Client Voices
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="gold-text-gradient">Thousands</span>
          </h2>
          <p className="font-body text-sm md:text-base text-charcoal-light italic max-w-2xl mx-auto">
            Trusted by collectors, investors, and heritage enthusiasts across India and abroad.
          </p>
        </div>

        <div className="relative bg-card rounded-sm py-10 md:py-14 border border-border overflow-hidden">
          <Quote className="w-10 h-10 text-gold/30 mx-auto mb-8" />

          <div className="relative flex w-full items-center justify-center px-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`max-w-xl rounded-sm border border-gold/25 bg-cream/80 dark:bg-card px-6 py-7 text-left shadow-sm transition-all duration-700 ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none absolute"
                }`}
              >
                <p className="font-body text-sm md:text-base text-charcoal-light leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
                <div className="h-px w-10 bg-gold mb-3" />
                <div>
                  <h4 className="font-serif-display text-base md:text-lg font-semibold text-foreground">
                    {t.name}
                  </h4>
                  <span className="font-body text-xs md:text-sm text-charcoal-light">
                    {t.context}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-5 rounded-full transition-all ${
                  i === index ? "bg-gold" : "bg-gold/30 hover:bg-gold/60"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
