import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { MessageCircle, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground">
      <div ref={ref} className="section-fade-in max-w-4xl mx-auto px-6 text-center">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
          Get In Touch
        </span>
        <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-cream mb-4">
          Get Expert{" "}
          <span className="gold-text-gradient">Guidance</span>
        </h2>
        <p className="font-body text-cream/60 mb-10 max-w-lg mx-auto">
          Whether you need authentication, evaluation, or want to buy and sell rare coins — reach out directly for personalized, expert service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 gold-gradient text-foreground font-body font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity shadow-lg w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
          <a
            href="mailto:raj@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold text-cream font-body font-semibold tracking-wide rounded-sm hover:bg-gold/10 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-cream/40">
          <Phone className="w-4 h-4" />
          <span className="font-body text-sm">Available Mon – Sat, 10 AM – 7 PM IST</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
