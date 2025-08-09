"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo({ className = "" }: { className?: string }) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSrc = currentTheme === "light" ? "/logo-light.svg" : "/logo-dark.svg";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image src={logoSrc} alt="Yaemione" width={140} height={32} priority />
    </div>
  );
}
