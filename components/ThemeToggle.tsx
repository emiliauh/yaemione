"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all"
    >
      <span className={`absolute inset-0 grid place-items-center transition-transform duration-300 ${isDark ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
        <Moon className="h-5 w-5" />
      </span>
      <span className={`absolute inset-0 grid place-items-center transition-transform duration-300 ${isDark ? "scale-50 opacity-0" : "scale-100 opacity-100"}`}>
        <Sun className="h-5 w-5" />
      </span>
    </button>
  );
}
