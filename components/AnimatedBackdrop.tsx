"use client";

export default function AnimatedBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(13,61,99,0.35),transparent_60%),linear-gradient(180deg,#0a1a2a_0%,#060c14_100%)] dark:bg-[radial-gradient(80%_60%_at_50%_0%,rgba(13,61,99,0.5),transparent_60%),linear-gradient(180deg,#06111d_0%,#000_100%)]" />

      {/* Soft diagonal color wash */}
      <div className="absolute inset-x-[-10%] top-[-20%] h-[60%] rotate-[-6deg] bg-gradient-to-r from-[#4db0ff33] via-[#2a67ff22] to-transparent blur-[80px]" />

      {/* Layered wave bands (SVG) */}
      <svg className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[140%] h-[260px] opacity-70" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="band1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3aa9ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1b4bbf" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="band2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e7bf2" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0b79db" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path fill="url(#band1)">
          <animate attributeName="d" dur="16s" repeatCount="indefinite"
            values="M0,192L96,186.7C192,181,384,171,576,170.7C768,171,960,181,1152,186.7C1344,192,1536,192,1728,186.7L1728,320L0,320Z;
                    M0,192L96,181.3C192,171,384,149,576,149.3C768,149,960,171,1152,181.3C1344,192,1536,192,1728,181.3L1728,320L0,320Z;
                    M0,192L96,186.7C192,181,384,171,576,170.7C768,171,960,181,1152,186.7C1344,192,1536,192,1728,186.7L1728,320L0,320Z" />
        </path>
        <path fill="url(#band2)" opacity="0.8">
          <animate attributeName="d" dur="18s" repeatCount="indefinite"
            values="M0,224L120,213.3C240,203,480,181,720,176C960,171,1200,181,1440,186.7L1440,320L0,320Z;
                    M0,234L120,218.3C240,203,480,171,720,165C960,160,1200,181,1440,197L1440,320L0,320Z;
                    M0,224L120,213.3C240,203,480,181,720,176C960,171,1200,181,1440,186.7L1440,320L0,320Z" />
        </path>
      </svg>
    </div>
  );
}
