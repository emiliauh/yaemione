import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="container-app grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">Yaemione</div>
          <p className="mt-2 text-gray-400">Reliable infrastructure. Real performance.</p>
        </div>
        <div>
          <div className="font-semibold">Links</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="#services" className="hover:underline">Services</Link></li>
            <li><Link href="#plans" className="hover:underline">Plans</Link></li>
            <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Follow</div>
          <ul className="mt-2 space-y-2">
            <li><a href="https://x.com/yaemione" target="_blank" rel="noreferrer" className="hover:underline">X / Twitter</a></li>
            <li><a href="https://yaemi.one" target="_blank" rel="noreferrer" className="hover:underline">yaemi.one</a></li>
          </ul>
        </div>
      </div>
      <div className="container-app mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} Yaemione. All rights reserved.
      </div>
    </footer>
  );
}
