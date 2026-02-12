import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Collection", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (currentY > lastScrollY && currentY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => handleClick("#hero")}
          className="flex items-center"
          aria-label="Scroll to top"
        />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleClick(l.href)}
                  className="font-body text-sm tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors duration-200"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="tel:+919922331612"
            aria-label="Call 9922331612"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 transition-colors"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/98 dark:bg-[#111C35]/95 backdrop-blur-md border-t border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleClick(l.href)}
                  className="font-body text-sm tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+919922331612"
                className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
