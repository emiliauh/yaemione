import { ReactNode } from "react";

export default function SectionHeader({ eyebrow, title, description }: { eyebrow?: ReactNode; title: ReactNode; description?: ReactNode }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-brand-400">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold">{title}</h2>
      {description && <p className="mt-4 text-gray-300">{description}</p>}
    </div>
  );
}
