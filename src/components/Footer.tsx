import { Facebook, Instagram, Mail, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  const WHATSAPP_NUMBER = "919922331612";
  const PHONE_DISPLAY = "9922331612";
  const FACEBOOK_URL = "https://www.facebook.com/share/1NSDcy9pSL/";
  const INSTAGRAM_URL =
    "https://www.instagram.com/rajkarnawat13?utm_source=qr&igsh=MWNmNnMyY3g1OHVwZQ==";
  const EMAIL_URL = "https://www.facebook.com/share/1NSDcy9pSL/";

  return (
    <footer className="bg-foreground dark:bg-[#0B1426] border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-serif-display text-xl font-bold text-cream">
              Raj Karnawat
            </span>
            <p className="font-body text-xs text-cream/50 mt-1 tracking-wide">
              Numismatics Authority · Est. 2012
            </p>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <a
              href="tel:+919922331612"
              aria-label="Call 9922331612"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-cream/80 hover:text-cream hover:bg-gold/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${PHONE_DISPLAY}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-green-500 hover:bg-green-500/10 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={EMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-cream/80 hover:text-cream hover:bg-gold/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-blue-500 hover:bg-blue-500/10 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-fuchsia-500 hover:bg-fuchsia-500/10 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-gold/10 pt-6">
          <div className="font-body text-xs text-cream/40 text-center md:text-left">
            © {new Date().getFullYear()} Raj Karnawat. All rights reserved.
          </div>
          <div className="font-body text-xs text-cream/30 text-center md:text-right">
            Akurdi, Pune - 411035 · {PHONE_DISPLAY}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
