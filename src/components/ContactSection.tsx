import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useMemo, useState } from "react";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactSection = () => {
  const ref = useScrollFadeIn();
  const isMobile = useIsMobile();

  const WHATSAPP_NUMBER = "919922331612";
  const PHONE_DISPLAY = "9922331612";
  const FACEBOOK_URL = "https://www.facebook.com/share/1NSDcy9pSL/";
  const INSTAGRAM_URL = "https://www.instagram.com/rajkarnawat13?utm_source=qr&igsh=MWNmNnMyY3g1OHVwZQ==";
  const EMAIL_URL = "https://www.facebook.com/share/1NSDcy9pSL/";

  const ADDRESS_LINES = [
    "Raj Pradeep Karnawat, Flat No. 404, Malhar Residency,",
    "Near Trinity High School, Behind Akurdi Petrol Pump,",
    "Akurdi, Pune - 411035",
  ];

  const addressLines = useMemo(() => ADDRESS_LINES, []);
  const addressQuery = useMemo(() => ADDRESS_LINES.join(", "), []);
  const mapSrc = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(addressQuery)}&output=embed`,
    [addressQuery]
  );

  const [form, setForm] = useState({
    name: "", phone: "", whatsapp: "", facebook: "", favoriteCategory: "", message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Message from website: ${form.message || "-"}`, "",
      `Name: ${form.name || "-"}`, `Phone: ${form.phone || "-"}`,
      `WhatsApp: ${form.whatsapp || "-"}`, `Facebook: ${form.facebook || "-"}`,
      `Favorite category: ${form.favoriteCategory || "-"}`,
    ].join("\n");
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-cream-dark dark:bg-background ${isMobile ? "py-12" : "py-16 md:py-20"}`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90 dark:opacity-80" style={{ backgroundImage: "url('/bg11.jpg')" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/80 dark:from-background/80 dark:via-background/75 dark:to-background/90" />

      <div ref={ref} className={`relative section-fade-in max-w-6xl mx-auto ${isMobile ? "px-4" : "px-6"}`}>
        <div className={`text-center max-w-2xl mx-auto ${isMobile ? "mb-6" : "mb-8"}`}>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 block">Get In Touch</span>
          <h2 className={`font-serif-display font-bold text-cream mb-2 md:mb-3 ${isMobile ? "text-2xl" : "text-3xl md:text-5xl"}`}>
            Get Expert <span className="gold-text-gradient">Guidance</span>
          </h2>
          <p className={`font-body text-cream/70 ${isMobile ? "text-sm" : ""}`}>
            Whether you need authentication, evaluation, or want to buy and sell rare coins — reach out directly.
          </p>
        </div>

        <div className={`grid items-start ${isMobile ? "grid-cols-1 gap-5" : "grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8"}`}>
          {/* Visiting card + contact details - on mobile show first */}
          <div className={`space-y-5 ${isMobile ? "order-1" : "order-2"}`}>
            {/* Visiting card */}
            <div className="flex justify-center">
              <div className="group relative w-full max-w-md rounded-md overflow-hidden border border-gold/30 bg-cream shadow-lg">
                <img src="/card1.png" alt="Visiting card front" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" loading="lazy" />
                <img src="/card back.png" alt="Visiting card back" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" loading="lazy" />
              </div>
            </div>

            {/* Contact details */}
            <div className={`rounded-lg border border-gold/20 dark:border-gold/40 bg-foreground/60 dark:bg-card/95 w-full max-w-md mx-auto ${isMobile ? "p-4" : "p-5 md:p-6"}`}>
              <h3 className={`font-serif-display font-bold text-cream mb-3 ${isMobile ? "text-lg" : "text-xl"}`}>Contact details</h3>

              {/* Mobile: compact horizontal icons row */}
              {isMobile ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-4">
                    <a href="tel:+919922331612" className="flex flex-col items-center gap-1 text-cream/80 hover:text-cream">
                      <div className="p-2.5 rounded-full bg-gold/10"><Phone className="h-4 w-4 text-gold" /></div>
                      <span className="text-[10px]">Call</span>
                    </a>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-cream/80 hover:text-cream">
                      <div className="p-2.5 rounded-full bg-green-500/10"><MessageCircle className="h-4 w-4 text-green-500" /></div>
                      <span className="text-[10px]">WhatsApp</span>
                    </a>
                    <a href={EMAIL_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-cream/80 hover:text-cream">
                      <div className="p-2.5 rounded-full bg-gold/10"><Mail className="h-4 w-4 text-gold" /></div>
                      <span className="text-[10px]">Email</span>
                    </a>
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-cream/80 hover:text-cream">
                      <div className="p-2.5 rounded-full bg-blue-500/10"><Facebook className="h-4 w-4 text-blue-500" /></div>
                      <span className="text-[10px]">Facebook</span>
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-cream/80 hover:text-cream">
                      <div className="p-2.5 rounded-full bg-fuchsia-500/10"><Instagram className="h-4 w-4 text-fuchsia-500" /></div>
                      <span className="text-[10px]">Instagram</span>
                    </a>
                  </div>
                  <div className="pt-2.5 border-t border-gold/10">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 text-gold mt-0.5 shrink-0" />
                      <div className="text-cream/70 text-xs leading-relaxed">
                        {addressLines.map((l) => <div key={l}>{l}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Desktop: standard list */
                <>
                  <div className="space-y-2.5 font-body text-sm text-cream/80">
                    <a href="tel:+919922331612" className="flex items-center gap-3 hover:text-cream transition-colors">
                      <Phone className="h-4 w-4 text-gold" /><span>{PHONE_DISPLAY}</span>
                    </a>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cream transition-colors">
                      <MessageCircle className="h-4 w-4 text-green-500" /><span>WhatsApp: {PHONE_DISPLAY}</span>
                    </a>
                    <a href={EMAIL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cream transition-colors">
                      <Mail className="h-4 w-4 text-gold" /><span>Email</span>
                    </a>
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cream transition-colors">
                      <Facebook className="h-4 w-4 text-blue-500" /><span>Facebook</span>
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cream transition-colors">
                      <Instagram className="h-4 w-4 text-fuchsia-500" /><span>Instagram</span>
                    </a>
                    <div className="pt-2.5 border-t border-gold/10">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-gold mt-0.5" />
                        <div className="text-cream/70">{addressLines.map((l) => <div key={l}>{l}</div>)}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-cream/60">
                    <Phone className="w-4 h-4" /><span className="font-body text-sm">Available 24/7</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Form + map */}
          <div className={`space-y-5 ${isMobile ? "order-2" : "order-1"}`}>
            <form
              onSubmit={onSubmit}
              className={`rounded-lg border border-gold/20 dark:border-gold/40 bg-foreground/40 dark:bg-card/90 max-w-2xl mx-auto w-full ${isMobile ? "p-4" : "p-5 md:p-6"}`}
            >
              <div className="flex items-center gap-2 text-cream mb-4 md:mb-5">
                <MessageCircle className="h-5 w-5 text-gold" />
                <h3 className={`font-serif-display font-bold ${isMobile ? "text-lg" : "text-xl"}`}>Send a message</h3>
              </div>

              <div className={`grid gap-3 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 gap-3.5"}`}>
                <label className="block">
                  <span className="font-body text-xs tracking-widest uppercase text-cream/60">Name</span>
                  <input value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className={`mt-1 w-full rounded-md bg-cream/5 border border-gold/20 font-body text-cream placeholder:text-cream/30 outline-none focus:border-gold/60 ${isMobile ? "px-3 py-2 text-sm" : "px-3.5 py-2.5"}`}
                    placeholder="Your name" required />
                </label>
                <label className="block">
                  <span className="font-body text-xs tracking-widest uppercase text-cream/60">Phone no.</span>
                  <input value={form.phone} onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    className={`mt-1 w-full rounded-md bg-cream/5 border border-gold/20 font-body text-cream placeholder:text-cream/30 outline-none focus:border-gold/60 ${isMobile ? "px-3 py-2 text-sm" : "px-3.5 py-2.5"}`}
                    placeholder="Your phone number" />
                </label>
                <label className="block">
                  <span className="font-body text-xs tracking-widest uppercase text-cream/60">WhatsApp</span>
                  <input value={form.whatsapp} onChange={(e) => setForm((s) => ({ ...s, whatsapp: e.target.value }))}
                    className={`mt-1 w-full rounded-md bg-cream/5 border border-gold/20 font-body text-cream placeholder:text-cream/30 outline-none focus:border-gold/60 ${isMobile ? "px-3 py-2 text-sm" : "px-3.5 py-2.5"}`}
                    placeholder="Your WhatsApp number" />
                </label>
                <label className="block">
                  <span className="font-body text-xs tracking-widest uppercase text-cream/60">Facebook</span>
                  <input value={form.facebook} onChange={(e) => setForm((s) => ({ ...s, facebook: e.target.value }))}
                    className={`mt-1 w-full rounded-md bg-cream/5 border border-gold/20 font-body text-cream placeholder:text-cream/30 outline-none focus:border-gold/60 ${isMobile ? "px-3 py-2 text-sm" : "px-3.5 py-2.5"}`}
                    placeholder="Facebook profile link" />
                </label>
              </div>

              <label className="block mt-3">
                <span className="font-body text-xs tracking-widest uppercase text-cream/60">Favorite category</span>
                <input value={form.favoriteCategory} onChange={(e) => setForm((s) => ({ ...s, favoriteCategory: e.target.value }))}
                  className={`mt-1 w-full rounded-md bg-cream/5 border border-gold/20 font-body text-cream placeholder:text-cream/30 outline-none focus:border-gold/60 ${isMobile ? "px-3 py-2 text-sm" : "px-3.5 py-2.5"}`}
                  placeholder="e.g. Ancient coins, British India, Notes, etc." />
              </label>

              <label className="block mt-3">
                <span className="font-body text-xs tracking-widest uppercase text-cream/60">Message</span>
                <textarea value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  className={`mt-1 w-full rounded-md bg-cream/5 border border-gold/20 font-body text-cream placeholder:text-cream/30 outline-none focus:border-gold/60 ${isMobile ? "min-h-[80px] px-3 py-2 text-sm" : "min-h-[110px] px-3.5 py-2.5"}`}
                  placeholder="Write your message..." required />
              </label>

              <button type="submit"
                className={`mt-5 inline-flex w-full items-center justify-center gap-2 gold-gradient text-foreground font-body font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity shadow-lg ${isMobile ? "px-6 py-3 text-sm" : "px-8 py-4"}`}>
                <MessageCircle className="h-5 w-5" /> Send on WhatsApp
              </button>

              <p className="mt-2 font-body text-xs text-cream/40">
                Your message will open in WhatsApp as: <span className="text-cream/60">Message from website: "message"</span>
              </p>
            </form>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-gold/20 dark:border-gold/40 bg-foreground/40 dark:bg-card/90 max-w-2xl mx-auto w-full">
              <div className="px-4 md:px-5 py-2.5 md:py-3 border-b border-gold/10">
                <h4 className={`font-serif-display font-bold text-cream ${isMobile ? "text-base" : "text-lg"}`}>Location</h4>
                <p className="font-body text-xs text-cream/40 mt-0.5">Akurdi, Pune - 411035</p>
              </div>
              <div className={`w-full ${isMobile ? "aspect-[16/8]" : "aspect-[16/6]"}`}>
                <iframe title="Raj Karnawat address map" src={mapSrc} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
