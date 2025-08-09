'use client';

import React, { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState<{ name: string; email: string; message: string; company: string }>({
    name: '',
    email: '',
    message: '',
    company: '', // honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    // Honeypot trip: silently succeed to not tip off bots
    if (formData.company.trim().length > 0) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '' });
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '4e229758-c557-431f-ac22-a64ab0eec251',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await res.json();
      if (result?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', company: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
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

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-6">
            {/* Honeypot */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" value={formData.company} onChange={handleChange} />

            <div className="mt-2">
              <label className="block text-sm">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl bg-white/80 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl bg-white/80 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" aria-hidden="true" />
              )}
              {status === 'loading' ? 'Sending…' : 'Send'}
            </button>

            {/* Glass banners */}
            {status === 'success' && (
              <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 backdrop-blur px-4 py-3 text-sm">
                Thanks! Your message was sent. We’ll be in touch shortly.
              </div>
            )}
            {status === 'error' && (
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
