"use client";

import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Where are your POPs and servers located?", a: "We operate in multiple Tier III+ facilities across the Eastern United States, with expansion plans underway." },
  { q: "Can I bring my own IP space and use BGP?", a: "Yes, we support customer BGP sessions for both dedicated servers and IP transit clients." },
  { q: "Do you offer DDoS protection?", a: "Yes. We provide always‑on mitigation and access to tuning through BGP communities." },
  { q: "What SLAs do you provide?", a: "We offer competitive SLAs with credits for network and power, tailored per service." },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl">
      <button className="w-full flex items-center justify-between px-4 py-3 text-left" onClick={() => setOpen(!open)}>
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-slate-600 dark:text-gray-300">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-app">
        <SectionHeader eyebrow="FAQ" title="Answers to common questions" />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((f) => <Item key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}
