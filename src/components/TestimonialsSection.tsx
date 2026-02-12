import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Raj's expertise in Mughal-era coins is unparalleled. His authentication saved me from a costly mistake, and his market knowledge helped me build a collection I'm truly proud of.",
    name: "Vikram S.",
    context: "Private Collector, Mumbai",
  },
  {
    quote: "In over 8 years of dealing with Raj, I've never once questioned his integrity. His evaluations are precise, his knowledge deep, and his service impeccable.",
    name: "Anand M.",
    context: "Antique Investor, Delhi",
  },
  {
    quote: "Raj helped me understand coins I inherited from my grandfather. What I thought were ordinary old coins turned out to be rare Gupta-era pieces worth significant value.",
    name: "Priya T.",
    context: "Heritage Enthusiast, Jaipur",
  },
  {
    quote: "His ability to read Brahmi script on ancient coins is extraordinary. It adds a dimension of historical accuracy that most dealers simply cannot offer.",
    name: "Dr. Ramesh K.",
    context: "Numismatics Researcher",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollFadeIn();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream-dark">
      <div ref={ref} className="section-fade-in max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Client Voices
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground">
            Trusted by <span className="gold-text-gradient">Thousands</span>
          </h2>
        </div>

        <div className="relative bg-card rounded-sm p-8 md:p-12 border border-border text-center">
          <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />

          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed italic mb-8 min-h-[120px]">
            "{t.quote}"
          </p>

          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <h4 className="font-serif-display text-lg font-semibold text-foreground">{t.name}</h4>
          <span className="font-body text-sm text-charcoal-light">{t.context}</span>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gold/30 hover:bg-gold/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-gold" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-gold" : "bg-gold/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-gold/30 hover:bg-gold/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
