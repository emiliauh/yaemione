"use client";

import { useState } from "react";

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
    // Placeholder: in production, POST to an API route or external service.
    setTimeout(() => setStatus("ok"), 500);
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
          <form onSubmit={submit} className="card p-6">
            <div>
              <label className="block text-sm">Name</label>
              <input className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                     value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                     value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Message</label>
              <textarea className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-brand-500"
                        value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-white text-black dark:bg-white dark:text-black hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 px-4 py-2 font-medium shadow">Send</button>
            {status === "ok" && <p className="mt-3 text-green-400 text-sm">Thanks! We’ll be in touch shortly.</p>}
            {status === "err" && <p className="mt-3 text-red-400 text-sm">Please fill all fields with a valid email.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
