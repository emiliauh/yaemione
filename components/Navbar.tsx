"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { href: "#services", label: "Services" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Ensure initial state matches the actual scroll position to avoid a "fixes on scroll" bug
  useEffect(() => {
    setMounted(true);
    const handle = () => setScrolled(window.scrollY > 8);
    handle(); // set initial on mount
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const activeTheme = useMemo(() => {
    if (!mounted) return "system";
    return (theme === "system" ? systemTheme : theme) ?? "dark";
  }, [theme, systemTheme, mounted]);

  // On theme changes, recompute class state by forcing a tiny state tick
  useEffect(() => {
    // This ensures classes depending on activeTheme update even without a scroll
    setScrolled((s) => (typeof window !== "undefined" ? window.scrollY > 8 : s));
  }, [activeTheme]);

  // When at top in dark mode, we want white nav text over the hero.
  const invertTop = mounted && activeTheme === "dark" && !scrolled;

  const headerBase =
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300";
  const headerStyle = scrolled
    ? "backdrop-blur bg-white/80 dark:bg-gray-900/60 border-b border-white/20 dark:border-white/10"
    : "bg-transparent border-b border-transparent";

  return (
    <header className={`${headerBase} ${headerStyle} ${invertTop ? "text-white" : ""}`}>
      <nav className="container-app flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Logo force={invertTop ? "dark" : undefined} />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition ${
                invertTop
                  ? "text-white/90 hover:text-white"
                  : "text-slate-900 dark:text-gray-200 hover:text-black dark:hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile trigger */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 dark:border-white/10"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="container-app pb-4">
            <div className="mt-2 rounded-2xl border border-white/10 dark:border-white/10 bg-white/80 dark:bg-gray-900/60 backdrop-blur p-3 space-y-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl px-3 py-2 text-base text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2"><ThemeToggle /></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
