"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedBackdrop from "./AnimatedBackdrop";

export default function Hero() {
  return (
    <section className="section pt-28 relative break-words text-balance hyphens-auto">
      <AnimatedBackdrop />

      <div className="container-app relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[2rem] border backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.20)] bg-slate-100/80 dark:bg-white/5 border-slate-200 dark:border-white/10"
        >
          {/* Sheen */}
          <div className="h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-30" />

          <div className="px-6 py-12 md:px-12 md:py-16 lg:px-16 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-600/90 dark:text-brand-300">Built for uptime</p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              High‑performance <span className="text-brand-500 drop-shadow-[0_0_18px_rgba(72,187,255,0.45)]">network</span><br className="block sm:hidden" /> infrastructure.
            </h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-gray-300 max-w-3xl mx-auto">
              Speed, reliability, and capacity — delivered through premium IP transit, dedicated servers, and NVMe‑powered VPS.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#plans"
                className="group relative inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-blue-500 opacity-95 group-hover:opacity-100 transition" />
                <span className="absolute -inset-px rounded-full blur-2xl bg-brand-500/40 group-hover:bg-brand-400/50" />
                <span className="relative">View Plans</span>
              </Link>

              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center px-7 py-3 rounded-full font-medium border transition-all
                           border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10
                           text-slate-700 dark:text-white"
              >
                <span className="relative">Talk to Sales</span>
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-600/80 dark:text-gray-400">Yaemione — <span className="italic">Where latency goes to die.</span></p>
          </div>

          <div className="h-2 bg-gradient-to-r from-transparent via-brand-400/30 to-transparent opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
