"use client";

import { useRef, useState } from "react";

const FABFORM_ENDPOINT = "https://fabform.io/f/aS8J1zs";

function Banner({ kind, message, onClose }: { kind: "success" | "error"; message: string; onClose: () => void }) {
  return (
    <div
      className={`mt-4 rounded-2xl border backdrop-blur px-4 py-3 text-sm flex items-start justify-between gap-3 ${
        kind === "success"
          ? "bg-emerald-400/10 border-emerald-400/20 text-emerald-200"
          : "bg-red-400/10 border-red-400/20 text-red-200"
      }`}
    >
      <p className="leading-relaxed">{message}</p>
      <button
        onClick={onClose}
        className="shrink-0 rounded-lg px-2 py-1 border border-white/10 hover:bg-white/10 transition"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<null | "ok" | "err" | "loading">(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    const fd = new FormData(formRef.current);

    // Honeypot
    if ((fd.get("company") as string)?.trim()) {
      setStatus("ok");
      formRef.current.reset();
      return;
    }

    try {
      const res = await fetch(FABFORM_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      formRef.current.reset();
    } catch (err) {
      setStatus("err");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Let’s build something resilient</h2>
            <p className="mt-3 text-gray-300">Tell us about your requirements. We’ll get back within one business day.</p>
            <ul className="mt-6 text-sm text-gray-300 space-y-1">
              <li><strong>Sales:</strong> sales@yaemi.one</li>
              <li><strong>NOC:</strong> noc@yaemi.one</li>
              <li><strong>Twitter/X:</strong> <a href="https://x.com/yaemione" className="underline-link" target="_blank" rel="noreferrer">@yaemione</a></li>
            </ul>
          </div>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-6"
          >
            {/* Honeypot */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="mt-2">
              <label className="block text-sm">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl bg-white/80 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl bg-white/80 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm">Message</label>
              <textarea
                name="message"
                required
                className="mt-1 w-full rounded-xl bg-white/80 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 px-4 py-2 font-medium shadow"
            >
              {status === "loading" ? "Sending..." : "Send"}
            </button>

            {status === "ok" && (
              <Banner
                kind="success"
                message="Thanks! Your message was sent. We’ll be in touch shortly."
                onClose={() => setStatus(null)}
              />
            )}
            {status === "err" && (
              <Banner
                kind="error"
                message="Something went wrong. Please try again in a moment."
                onClose={() => setStatus(null)}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
