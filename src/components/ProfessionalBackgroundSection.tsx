import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Code, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProfessionalBackgroundSection = () => {
  const ref = useScrollFadeIn();
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="professional-background"
      className="relative py-24 md:py-32 bg-cream-dark dark:bg-background overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90 dark:opacity-80"
        style={{ backgroundImage: "url('/bg10.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/92 via-background/86 to-background/92 dark:from-background/96 dark:via-background/88 dark:to-background/96"
      />
      <div ref={ref} className="relative section-fade-in max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Professional Background
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Engineering Precision Meets{" "}
            <span className="gold-text-gradient">Historical Authority</span>
          </h2>
        </div>

        <div className="space-y-8 font-body text-charcoal-light leading-relaxed mb-12">
          <p className="text-lg">
            Raj Pradeep Karnawat brings together two worlds — the precision of engineering and the depth of historical scholarship.
          </p>
          {(!isMobile || expanded) && (
            <>
              <p>
                With a B.E. in Mechanical Engineering, he developed analytical discipline and structured problem-solving skills that later enhanced both his technology and numismatics careers.
              </p>
              <p>
                Alongside his 12+ year legacy in coin trading, he has built strong experience in software development:
              </p>
            </>
          )}
          {isMobile && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-gold font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              {expanded ? "Read Less" : "Read More"}
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>

        {(!isMobile || expanded) && (
          <>
            <div className="bg-card rounded-sm p-8 md:p-10 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="mt-1 p-3 rounded-sm bg-gold/10">
                  <Code className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif-display text-2xl font-semibold text-foreground mb-4">
                    Technology Career
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-gold font-semibold">4.5 Years</span>
                      <span>as Java Developer</span>
                    </div>
                    <div className="pl-6 space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-gold">•</span>
                        <span><strong>1.5 Years</strong> at Bluemingotech Pvt Ltd</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gold">•</span>
                        <span><strong>3 Years</strong> at Canopus Solutions Pvt Ltd</span>
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      Expertise in enterprise application development. Strong foundation in system design and structured architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="font-body text-lg text-foreground italic">
                This rare combination of technical precision and historical expertise makes him uniquely positioned in the numismatic industry.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProfessionalBackgroundSection;
