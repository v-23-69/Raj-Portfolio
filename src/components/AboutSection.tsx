import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { BookOpen, Languages, TrendingUp } from "lucide-react";

const highlights = [
  { icon: BookOpen, text: "Deep knowledge of Brahmi & Persian scripts on ancient coins" },
  { icon: Languages, text: "Expert in reading inscriptions across multiple historical eras" },
  { icon: TrendingUp, text: "Seasoned market operator with unmatched transaction volume" },
];

const AboutSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div ref={ref} className="section-fade-in max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image side */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gold-light/20 to-gold/10 rounded-sm gold-border flex items-center justify-center">
                <span className="font-serif-display text-6xl text-gold/30">Photo</span>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">The Story</span>
            <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              A Legacy Built on{" "}
              <span className="gold-text-gradient">Expertise</span>
            </h2>
            <div className="space-y-4 font-body text-charcoal-light leading-relaxed">
              <p>
                With over 12 years immersed in the world of numismatics, Raj Pradeep Karnawat has
                established himself as one of the most trusted authorities in Indian coin trading.
                Specializing in coins from 100 BC to 1947, his expertise spans the full spectrum
                of India's rich monetary history.
              </p>
              <p>
                His rare ability to read Brahmi and Persian scripts on ancient coins sets him apart,
                enabling precise authentication and historical attribution that few in the industry
                can match. Over 50,000 successful deals and 10,000+ satisfied clients stand as
                testament to his credibility and market command.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-sm bg-gold/10">
                    <h.icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-body text-sm text-foreground/80">{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
