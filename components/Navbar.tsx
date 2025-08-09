"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/70 dark:bg-gray-950/70 border-b border-black/10 dark:border-white/10" : ""}` }>
      <nav className="container-app flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-white transition">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 hover:bg-white/10"
          onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-950/90 backdrop-blur">
          <div className="container-app py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-base text-gray-200 hover:text-white" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="pt-2"><ThemeToggle /></div>
          </div>
        </div>
      )}
    </header>
  );
}
