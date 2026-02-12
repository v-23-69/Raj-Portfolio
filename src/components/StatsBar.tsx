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
  <section className="relative z-10 -mt-1">
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-foreground/95 dark:bg-[#111C35]/95 backdrop-blur-md rounded-sm py-8 md:py-10 px-6 shadow-2xl border border-gold/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < stats.length - 1 ? "md:border-r md:border-gold/30" : ""
              }`}
            >
              <div className="font-serif-display text-2xl md:text-4xl font-bold text-gold mb-1">
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
