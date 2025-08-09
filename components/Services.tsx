import SectionHeader from "./SectionHeader";
import { ShieldCheck, Server, Network, Cpu } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "IP Transit",
    desc: "Low‑latency global routes with premium carriers and smart traffic engineering.",
  },
  {
    icon: Server,
    title: "Dedicated Servers",
    desc: "Bare‑metal performance with redundant power and enterprise‑grade hardware.",
  },
  {
    icon: Cpu,
    title: "VPS Hosting",
    desc: "KVM‑based virtual machines with NVMe storage and instant scaling.",
  },
  {
    icon: Network,
    title: "Network Consulting",
    desc: "Architecture reviews, DDoS strategy, and peering optimization.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-app">
        <SectionHeader eyebrow="What we do" title="Services engineered for uptime" description="Built to be fast, secure, and reliable from day one." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6 hover:translate-y-[-2px] hover:shadow-soft transition">
              <Icon className="h-6 w-6 text-brand-400" />
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
