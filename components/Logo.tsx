"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo({ className = "", force }: { className?: string; force?: "light" | "dark" }) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // While not mounted, render a safe fallback (assume dark background => light logo)
  if (!mounted) {
    const fallback = (force ?? "dark") === "light" ? "/logo-dark.svg" : "/logo-light.svg";
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Image src={fallback} alt="Yaemione" width={140} height={32} priority />
      </div>
    );
  }

  const active = (theme === "system" ? systemTheme : theme) || "dark";
  const mode = force ?? (active as "light" | "dark");
  // Light theme => dark logo; Dark theme => light logo
  const src = mode === "light" ? "/logo-dark.svg" : "/logo-light.svg";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image src={src} alt="Yaemione" width={140} height={32} priority />
    </div>
  );
}
