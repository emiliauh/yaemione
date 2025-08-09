"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("yae_cookie_ok");
    if (!accepted) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 z-50">
      <div className="container-app">
        <div className="card p-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 md:justify-between bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <p className="text-sm text-slate-700 dark:text-gray-200">We use cookies to personalize content and analyze traffic. By using this site, you agree to our cookie policy.</p>
          <div className="flex gap-3 md:ml-auto">
            <button className="rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10" onClick={() => setShow(false)}>Dismiss</button>
            <button className="rounded-xl bg-brand-500 hover:bg-brand-400 px-3 py-2 text-white"
              onClick={() => { localStorage.setItem("yae_cookie_ok", "1"); setShow(false); }}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}
