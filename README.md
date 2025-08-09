# Yaemione Website (Next.js App Router)

A sleek, production‑ready marketing site for Yaemione — a network infrastructure provider specializing in IP transit, dedicated servers, and VPS hosting.

## Features
- **Next.js 14 (App Router)** + **TypeScript**
- **Tailwind CSS** with dark/light theme via `next-themes` (persists in localStorage)
- Animated hero and section reveals (Framer Motion)
- Mobile‑first responsive layout
- Services, Plans (pricing), FAQ (accordion), Contact form (client validation)
- Cookie consent banner (localStorage)
- Minimal preloader
- Accessibility‑minded components

## Getting Started
```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
```
Then open http://localhost:3000

## Deploy
- Push to GitHub and connect the repo in Vercel.
- Set framework to **Next.js**; defaults work out of the box.

## Customization
- Edit pricing/features in `components/Plans.tsx`
- Update FAQ in `components/FAQ.tsx`
- Update contact addresses in `components/Contact.tsx`
- Replace `public/logo.svg` with your final brand assets
