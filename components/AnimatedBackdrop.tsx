"use client";

export default function AnimatedBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2640] via-[#0b1220] to-black opacity-70 dark:opacity-100" />
      {/* Animated radial glow */}
      <div className="absolute -top-40 -left-40 w-[46rem] h-[46rem] rounded-full bg-cyan-400/25 blur-[140px] animate-pulse" />
      <div className="absolute -bottom-48 -right-24 w-[42rem] h-[42rem] rounded-full bg-indigo-500/25 blur-[140px] animate-[pulse_6s_ease-in-out_infinite]" />

      {/* Wavy SVG */}
      <svg className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[140%] h-[300px] opacity-35" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#49b8ff"/>
            <stop offset="100%" stopColor="#0b79db"/>
          </linearGradient>
        </defs>
        <path fill="url(#waveGradient)">
          <animate attributeName="d" dur="12s" repeatCount="indefinite"
            values="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,144C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                    M0,224L80,197.3C160,171,320,117,480,106.7C640,96,800,128,960,149.3C1120,171,1280,181,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                    M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,144C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </path>
      </svg>
    </div>
  );
}
