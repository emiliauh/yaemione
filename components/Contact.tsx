"use client";

import { useRef, useState } from "react";

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
      const res = await fetch("/api/support", {
        method: "POST",
        body: fd,
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      formRef.current.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Let’s build something resilient</h2>
            <p className="mt-3 text-gray-500 dark:text-gray-300">Tell us about your requirements. We’ll get back within one business day.</p>
            <ul className="mt-6 text-sm text-gray-500 dark:text-gray-300 space-y-1">
              <li><strong>Sales:</strong> sales@yaemi.one</li>
              <li><strong>NOC:</strong> noc@yaemi.one</li>
              <li><strong>Twitter/X:</strong> <a href="https://x.com/yaemione" target="_blank" rel="noreferrer" className="underline-link">@yaemione</a></li>
            </ul>
          </div>
          <form ref={formRef} onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-6">
            {/* Honeypot */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="mt-2">
              <label className="block text-sm">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl bg-white/80 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>

            <div className="mt-4">
              <label className="block text-sm">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-white/80 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>

            <div className="mt-4">
              <label className="block text-sm">Message</label>
              <textarea name="message" required className="mt-1 w-full rounded-xl bg-white/80 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>

            <button type="submit" disabled={status === "loading"} className="mt-6 w-full rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 px-4 py-2 font-medium shadow">
              {status === "loading" ? "Sending..." : "Send"}
            </button>

            {status === "ok" && (
              <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 backdrop-blur px-4 py-3 text-sm">
                Thanks! Your message was sent. We’ll be in touch shortly.
              </div>
            )}
            {status === "err" && (
              <div className="mt-4 rounded-2xl border border-red-400/20 bg-red-400/10 text-red-200 backdrop-blur px-4 py-3 text-sm">
                Something went wrong. Please try again in a moment.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
