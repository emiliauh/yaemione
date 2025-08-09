"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pt-28 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06111d] via-[#0b1220] to-[#000000]" />
        <div className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full bg-brand-500/25 blur-[140px]" />
        <div className="absolute -bottom-48 -right-24 w-[36rem] h-[36rem] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="container-app relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[2rem] border backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.20)] bg-white/80 border-gray-200 dark:bg-white/5 dark:border-white/10"
        >
          {/* Soft top gradient sheen */}
          <div className="h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30" />

          <div className="px-6 py-12 md:px-12 md:py-16 lg:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="block">High-performance</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand-300 drop-shadow-[0_0_18px_rgba(72,187,255,0.55)]">network</span>{" "}
                </span>
                <span>&nbsp;infrastructure.</span>
              </h1>

              <p className="mt-5 text-lg text-gray-300">
                Yaemione delivers IP Transit, Dedicated Servers, and VPS hosting built for scale, reliability, and speed.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="#plans"
                  className="group relative inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-white
                             transition-all focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-blue-500 opacity-90 group-hover:opacity-100 transition" />
                  <span className="absolute -inset-px rounded-full blur-2xl bg-brand-500/40 group-hover:bg-brand-400/50" />
                  <span className="relative">View Plans</span>
                </Link>

                <Link
                  href="#contact"
                  className="relative inline-flex items-center justify-center px-7 py-3 rounded-full font-medium
                             border border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <span>Talk to Sales</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom rim light */}
          <div className="h-2 bg-gradient-to-r from-transparent via-brand-400/30 to-transparent opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
