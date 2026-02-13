import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Years in Numismatics" },
  { value: 50000, suffix: "+", label: "Successful Deals" },
  { value: 10000, suffix: "+", label: "Satisfied Clients" },
  { value: 4.5, suffix: "", label: "Years in Software Development", display: "4.5" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const StatsBar = () => (
  <section className="hidden md:block relative z-20 pb-16 overflow-visible">
    {/* Half hero background (top) + half story background (bottom) */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-90"
      style={{
        backgroundImage: "url('/bg3.jpg'), url('/bg12.jpg')",
        backgroundPosition: "top center, bottom center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 55%, 100% 55%",
      }}
    />
    {/* Unifying dark overlay */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(5,9,19,0.96)] via-[rgba(5,9,19,0.98)] to-[rgba(5,9,19,0.96)]"
    />

    {/* Soft gold halo behind the stats card */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
    >
      <div className="h-40 w-[60%] rounded-full bg-[radial-gradient(circle_at_50%_0,rgba(198,167,94,0.45),transparent_60%)] blur-2xl opacity-90" />
    </div>

    <div className="relative max-w-6xl mx-auto px-6">
      <div className="stats-glass rounded-xl py-8 md:py-10 px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i < stats.length - 1 ? "md:border-r md:border-gold/30" : ""
                }`}
            >
              <div className="font-serif-display text-2xl md:text-4xl font-bold gold-glow-text mb-1">
                {stat.display ? (
                  stat.display
                ) : (
                  <AnimatedCounter target={stat.value!} suffix={stat.suffix} />
                )}
              </div>
              <div className="font-body text-xs md:text-sm tracking-widest uppercase text-cream/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;
