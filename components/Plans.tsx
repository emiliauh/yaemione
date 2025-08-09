import SectionHeader from "./SectionHeader";

const planData = [
  {
    name: "VPS",
    price: 8,
    features: ["1 vCPU", "2 GB RAM", "40 GB NVMe", "2 TB transfer", "Anycast DNS"],
    cta: "#contact",
  },
  {
    name: "Dedicated",
    price: 129,
    features: ["Ryzen / Xeon", "32+ GB RAM", "2x NVMe", "10 Gbps uplink", "Remote KVM/IPMI"],
    cta: "#contact",
  },
  {
    name: "IP Transit",
    price: 0.7,
    suffix: "/Mbps",
    features: ["Multiple upstreams", "Route optimization", "24/7 NOC", "BGP communities", "DDoS filtering"],
    cta: "#contact",
  },
];

export default function Plans() {
  return (
    <section id="plans" className="section">
      <div className="container-app">
        <SectionHeader eyebrow="Pricing" title="Plans that scale with you" description="Transparent pricing with no surprises." />
        <div className="grid md:grid-cols-3 gap-6">
          {planData.map((p) => (
            <div key={p.name} className="card p-6 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">
                    {p.name === "IP Transit" ? "$" + p.price : "$" + p.price}
                  </span>
                  <span className="ml-1 text-gray-400 text-sm">{p.suffix or "/mo"}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-300 list-disc pl-5">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <a href={p.cta} className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-500 hover:bg-brand-400 px-4 py-2 font-medium">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
