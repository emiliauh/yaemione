"use client";

import { useState } from "react";
import SuccessBanner from "./SuccessBanner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !message) {
      setStatus("err"); return;
    }
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("err");
    }
  };


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
            action="https://formspree.io/f/manbaerp"
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const fd = new FormData(form);
              try {
                const res = await fetch(form.action, {
                  method: "POST",
                  body: fd,
                  headers: { "Accept": "application/json" },
                });
                if (!res.ok) throw new Error("Bad response");
                setStatus("ok");
                form.reset();
              } catch (err) {
                setStatus("err");
              }
            }}
            className="rounded-2xl border border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-6"
          >
            {/* honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            {/* metadata */}
            <input type="hidden" name="_subject" value="New Support Request — yaemi.one" />
            <input type="hidden" name="_cc" value="requests@yaemi.one" />

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
              className="mt-6 w-full rounded-xl bg-brand-500 hover:bg-brand-600 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 px-4 py-2 font-medium shadow"
            >
              Send
            </button>
          </form>
          {status === "ok" && (
            <SuccessBanner kind="success" message="Thanks! Your request was received. We’ll be in touch shortly." onClose={() => setStatus(null)} />
          )}
          {status === "err" && (
            <SuccessBanner kind="error" message="Something went wrong sending your request. Please try again." onClose={() => setStatus(null)} />
          )}

        </div>
      </div>
    </section>
  );
}
