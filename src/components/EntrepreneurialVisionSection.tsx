import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Target, Eye, Shield, Heart } from "lucide-react";

const missions = [
  {
    icon: Shield,
    title: "Bring transparency to the coin market",
  },
  {
    icon: Eye,
    title: "Promote historical awareness",
  },
  {
    icon: Target,
    title: "Provide accurate and fair valuations",
  },
  {
    icon: Heart,
    title: "Help collectors build meaningful legacy collections",
  },
];

const EntrepreneurialVisionSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="entrepreneurial-vision" className="py-24 md:py-32 bg-cream dark:bg-background">
      <div ref={ref} className="section-fade-in max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Entrepreneurial Vision
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            More Than Trade —{" "}
            <span className="gold-text-gradient">Heritage Preservation</span>
          </h2>
        </div>

        <div className="space-y-6 font-body text-charcoal-light leading-relaxed mb-12 text-center max-w-4xl mx-auto">
          <p className="text-lg">
            Raj is not only a numismatics expert but also an entrepreneur committed to elevating the standards of antique coin trading in India.
          </p>
          <p>
            His mission is to:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {missions.map((mission) => (
            <div
              key={mission.title}
              className="flex items-start gap-4 bg-card rounded-sm p-6 border border-border hover:border-gold/50 transition-colors"
            >
              <div className="mt-1 p-2 rounded-sm bg-gold/10">
                <mission.icon className="w-5 h-5 text-gold" />
              </div>
              <p className="font-body text-foreground">{mission.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="font-body text-lg text-charcoal-light leading-relaxed">
            With a foundation in engineering and years of market exposure, he approaches numismatics not merely as trade — but as heritage preservation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurialVisionSection;
