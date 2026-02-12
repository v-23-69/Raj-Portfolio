const Footer = () => (
  <footer className="bg-foreground border-t border-gold/20">
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-serif-display text-xl font-bold text-cream">
            Raj Pradeep <span className="text-gold">Karnawat</span>
          </span>
          <p className="font-body text-xs text-cream/40 mt-1 tracking-wide">
            Numismatics Authority · Est. 2012
          </p>
        </div>
        <div className="font-body text-xs text-cream/30">
          © {new Date().getFullYear()} Raj Pradeep Karnawat. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
