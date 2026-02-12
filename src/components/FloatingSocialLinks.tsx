import { Facebook, Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919922331612";
const FACEBOOK_URL = "https://www.facebook.com/share/1NSDcy9pSL/";
const INSTAGRAM_URL =
  "https://www.instagram.com/rajkarnawat13?utm_source=qr&igsh=MWNmNnMyY3g1OHVwZQ==";

const FloatingSocialLinks = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group rk-glow-blink rk-glow-whatsapp inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl ring-2 ring-white/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Facebook"
        className="group rk-glow-blink rk-glow-facebook inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl ring-2 ring-white/30 transition-transform hover:scale-110"
      >
        <Facebook className="h-6 w-6" />
      </a>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Instagram"
        className="group rk-glow-blink rk-glow-instagram inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-xl ring-2 ring-white/30 transition-transform hover:scale-110"
      >
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingSocialLinks;

