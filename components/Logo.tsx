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
    const fallback = (force ?? "dark") === "light" ? "/logo-light.svg" : "/logo-dark.svg";
    return (
      <div className={`flex items-center gap-2 ${className}`sName={wrapperClass}>
        <Image src={fallback} alt="Yaemione" width={140} height={32} priority />
      </div>
    );
  }

  const active = (theme === "system" ? systemTheme : theme) || "dark";
  const mode = force ?? (active as "light" | "dark");
  // Light theme => dark logo; Dark theme => light logo
  const src = mode === "light" ? "/logo-light.svg" : "/logo-dark.svg";
  const onDark = (force ?? mode) === "dark";
  const wrapperClass = `flex items-center gap-2 ${className} ${onDark ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" : ""}`;


  return (
    <div className={wrapperClass}>
      <Image src={src} alt="Yaemione" width={140} height={32} priority />
    </div>
  );
}
