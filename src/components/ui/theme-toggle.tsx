import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border",
        "bg-background/70 backdrop-blur-md shadow-sm",
        "transition-colors transition-transform duration-300 ease-in-out",
        "border-gold/50 dark:border-gold",
      )}
      aria-label="Toggle theme"
    >
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          "transition-all duration-300 ease-in-out",
          mounted && isDark ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0",
        )}
      >
        <Sun className="h-5 w-5 text-gold" />
      </span>
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          "transition-all duration-300 ease-in-out",
          mounted && isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90",
        )}
      >
        <Moon className="h-5 w-5 text-charcoal-light dark:text-gold-light" />
      </span>
    </button>
  );
};

