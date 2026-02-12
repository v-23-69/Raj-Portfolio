import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { ShieldCheck, CircleDollarSign, ArrowLeftRight, BookMarked } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Authentication & Grading",
    desc: "Expert coin authentication using script analysis, metallurgical assessment, and comparative study across thousands of references.",
  },
  {
    icon: CircleDollarSign,
    title: "Price Evaluation",
    desc: "Accurate market-rate appraisals based on rarity, condition, provenance, and current demand in the numismatic market.",
  },
  {
    icon: ArrowLeftRight,
    title: "Buy & Sell Advisory",
    desc: "Trusted guidance on purchasing rare coins or liquidating collections at optimal value with complete transparency.",
  },
  {
    icon: BookMarked,
    title: "Collection Guidance",
    desc: "Strategic advice on building, curating, and preserving a meaningful numismatic collection aligned with your goals.",
  },
];

const ServicesSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div ref={ref} className="section-fade-in max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            What I Offer
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground">
            Expert <span className="gold-text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-sm p-8 border border-border hover:border-gold/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-charcoal-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
