"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pt-28">
      <div className="container-app relative overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand-700/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            High‑performance<span className="text-brand-400"> network</span> infrastructure.
          </h1>
          <p className="mt-5 text-lg text-gray-300">
            Yaemione delivers IP Transit, Dedicated Servers, and VPS hosting built for scale, reliability, and speed.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="#plans" className="px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-medium shadow-soft">
              View Plans
            </Link>
            <Link href="#contact" className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/10 font-medium">
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
