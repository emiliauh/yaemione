"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo({ className = "", force }: { className?: string; force?: "light" | "dark" }) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Determine theme mode
  const active = (theme === "system" ? systemTheme : theme) || "dark";
  const mode = (force ?? (active as "light" | "dark"));

  // Light backgrounds -> logo-light.svg (dark text)
  // Dark backgrounds  -> logo-dark.svg (light text)
  const src = mode === "light" ? "/logo-light.svg" : "/logo-dark.svg";

  // On dark backgrounds, add a subtle drop shadow for legibility
  const wrapClass =
    "flex items-center gap-2 " + className + (mode === "dark" ? " drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" : "");

  if (!mounted) {
    // Fallback render prior to hydration; assume dark background unless forced
    const fallbackMode = force ?? "dark";
    const fallbackSrc = fallbackMode === "light" ? "/logo-light.svg" : "/logo-dark.svg";
    return (
      <div className={wrapClass}>
        <Image src={fallbackSrc} alt="Yaemione" width={140} height={32} priority />
      </div>
    );
  }

  return (
    <div className={wrapClass}>
      <Image src={src} alt="Yaemione" width={140} height={32} priority />
    </div>
  );
}
