
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { theme, systemTheme } = useTheme();

  // Determine active theme value for SSR + hydration
  const activeTheme = (theme === "system" ? systemTheme : theme) || "light";

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When at the very top on light mode, we want white nav text so it blends with the hero
  const forceWhite = atTop && activeTheme === "light";

  // Shared classes
  const baseLink =
    "text-base transition-colors duration-200";
  const linkColors = forceWhite
    ? "text-white hover:text-white/80"
    : "text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-colors duration-300",
        atTop
          ? "bg-transparent border-transparent"
          : "backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30 border-b border-white/10 dark:border-white/10",
      ].join(" ")}
    >
      <div className="container-app flex items-center justify-between py-4">
        {/* Logo switches to the appropriate variant; when forceWhite, lock it to dark-mode logo for contrast */}
        <Logo className="relative z-50" force={forceWhite ? "dark" : undefined as any} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${baseLink} ${linkColors}`}
            >
              {l.label}
            </Link>
          ))}
          <div className={forceWhite ? "text-white" : ""}>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          className={`md:hidden rounded-xl p-2 ${forceWhite ? "text-white" : "text-gray-800 dark:text-gray-200"}`}
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden bg-black/60 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <button
              aria-label="Close menu"
              className="rounded-xl p-2 text-white"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
          <div className="mt-24 px-6">
            <ul className="space-y-4 text-lg">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block py-2 text-white/90 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
