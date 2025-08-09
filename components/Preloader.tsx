"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-gray-950">
      <div className="animate-pulse text-xl font-semibold tracking-wide">Launching Yaemione…</div>
    </div>
  );
}
