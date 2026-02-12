import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const coins = [
  {
    era: "Maurya Empire",
    date: "~300 BC",
    front: "Punch-marked Silver",
    back: "One of India's earliest silver coins featuring symbolic punches from the Mauryan dynasty.",
  },
  {
    era: "Kushan Dynasty",
    date: "~150 AD",
    front: "Gold Dinar",
    back: "Kanishka-era gold dinar showing Hellenistic and Indian cultural fusion in coinage.",
  },
  {
    era: "Gupta Empire",
    date: "~400 AD",
    front: "Archer Type Gold",
    back: "Classic Gupta gold coin depicting the king as an archer — peak of Indian numismatic art.",
  },
  {
    era: "Delhi Sultanate",
    date: "~1300 AD",
    front: "Tanka Silver",
    back: "Arabic inscriptions with Islamic calligraphy, marking the Sultanate's monetary reforms.",
  },
  {
    era: "Mughal Empire",
    date: "~1600 AD",
    front: "Rupee Silver",
    back: "Akbar-era silver rupee with Persian inscriptions — the coin that shaped modern Indian currency.",
  },
  {
    era: "British India",
    date: "~1900 AD",
    front: "One Rupee Silver",
    back: "King Edward VII silver rupee — a bridge between colonial rule and Indian independence.",
  },
];

const CoinGallery = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream-dark">
      <div ref={ref} className="section-fade-in max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            The Collection
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Centuries of <span className="gold-text-gradient">Heritage</span>
          </h2>
          <p className="font-body text-charcoal-light max-w-xl mx-auto">
            Hover over each coin to discover its historical significance — spanning 2,000 years of Indian monetary history.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coins.map((coin) => (
            <div key={coin.era} className="coin-card-perspective cursor-pointer group">
              <div className="coin-card-inner relative w-full aspect-square">
                {/* Front */}
                <div className="coin-card-front absolute inset-0 rounded-sm gold-border bg-cream flex flex-col items-center justify-center p-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/30 flex items-center justify-center mb-4 shadow-inner">
                    <span className="font-serif-display text-lg text-gold-dark text-center leading-tight px-2">
                      {coin.front}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-lg font-semibold text-foreground">{coin.era}</h3>
                  <span className="font-body text-sm text-gold">{coin.date}</span>
                </div>

                {/* Back */}
                <div className="coin-card-back absolute inset-0 rounded-sm bg-foreground flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <span className="font-serif-display text-xl text-gold">↻</span>
                  </div>
                  <h3 className="font-serif-display text-lg font-semibold text-cream mb-3">{coin.era}</h3>
                  <p className="font-body text-sm text-cream/70 leading-relaxed">{coin.back}</p>
                  <span className="mt-4 font-body text-xs tracking-widest uppercase text-gold/70">{coin.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoinGallery;
