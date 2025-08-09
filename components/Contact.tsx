"use client";

import { useRef, useState } from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "4e229758-c557-431f-ac22-a64ab0eec251";

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
      setStatus("ok"); // pretend success
      formRef.current.reset();
      return;
    }

    const name = (fd.get("name") as string || "").trim();
    const email = (fd.get("email") as string || "").trim();
    const message = (fd.get("message") as string || "").trim();
    if (!name || !email || !message) { setStatus("err"); return; }

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name,
          email,
          message,
          subject: "New Support Request — yaemi.one",
          from_name: "Yaemione Website",
          // Optional metadata to route/label in your inbox
          // redirect is omitted to keep SPA UX
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.success === false) throw new Error("failed");

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
            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Tell us about your requirements. We’ll get back within one business day.
            </p>
            <ul className="mt-6 text-sm text-gray-500 dark:text-gray-300 space-y-1">
              <li><strong>Sales:</strong> sales@yaemi.one</li>
              <li><strong>NOC:</strong> noc@yaemi.one</li>
              <li>
                <strong>Twitter/X:</strong>{' '}
                <a href="https://x.com/yaemione" target="_blank" rel="noreferrer" className="underline-link">@yaemione</a>
              </li>
            </ul>
          </div>

          <form ref={formRef} onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-6">
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
              disabled={status === 'loading'}
              className="mt-6 w-full rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 px-4 py-2 font-medium shadow inline-flex items-center justify-center gap-2"
            >
              {status === 'loading' && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                </svg>
              )}
              {status === 'loading' ? 'Sending…' : 'Send'}
            </button>

            {status === 'ok' && (
              <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 backdrop-blur px-4 py-3 text-sm">
                Thanks! Your message was sent. We’ll be in touch shortly.
              </div>
            )}
            {status === 'err' && (
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
