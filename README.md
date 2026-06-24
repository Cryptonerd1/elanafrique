
# Elan Afrique — Official Website

> **Where African Tourism Meets Technology**

A modern, production-ready single-page website for **Elan Afrique**, a pioneering technology and tourism innovation company headquartered at Unizik, Awka, Nigeria. Built with React + TypeScript + Vite and backed by Supabase for contact-form persistence.

---

## Overview

Elan Afrique bridges African tourism and cutting-edge AI technology. This website showcases the brand, communicates services, and captures leads through an integrated contact form that persists submissions to Supabase.

---

## Features

- **Sticky Navbar** — desktop inline links + mobile hamburger menu
- **Hero Section** — full-viewport African landscape with animated headline and dual CTAs
- **About Section** — two-column layout, stat cards, Vision/Mission cards, Core Values pills
- **Services Section** — 7 service cards in a responsive grid with flat-icon SVGs and hover lift
- **Why Choose Us** — dark-green section with 6 feature blocks (flat-icon, single gold colour)
- **Our Solution** — split layout with problem/solution text and a numbered process list
- **Impact Banner** — full-width gold CTA strip
- **Contact Section** — contact info + Supabase-backed form (name, email, phone, subject, message)
- **Footer** — 4-column grid with quick links, services, contact, and social icons
- **Scroll animations** — Intersection Observer fade-in on every section
- **Fully responsive** — mobile-first, tested at 320 px → 1400 px+
- **Accessible** — semantic HTML, focus rings, `aria-label` on interactive elements

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3.4 + inline styles (design system tokens via CSS custom properties) |
| Routing | React Router DOM 7 |
| Backend | Supabase (PostgreSQL + Row-Level Security) |
| Fonts | Google Fonts — Playfair Display, DM Sans |
| Icons | Custom flat-icon SVG paths (single gold `#F9A825` colour) |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Add environment variables (copy example and fill in real values)
cp .env.example .env.local
# then set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY

# 3. Start the dev server
npm run dev

# 4. Build for production
npm run build
```

---

## Environment Variables

| Key | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky nav with desktop links + mobile hamburger
│   ├── HeroSection.tsx     # Full-viewport hero with animated headline
│   ├── AboutSection.tsx    # Two-column about + stats + vision/mission + values
│   ├── ServicesSection.tsx # 7-card services grid with flat SVG icons
│   ├── WhyUsSection.tsx    # Dark-green 6-feature block section
│   ├── SolutionSection.tsx # Split layout with 5-step process list
│   ├── ImpactBanner.tsx    # Gold full-width CTA banner
│   ├── ContactSection.tsx  # Contact info + Supabase-backed form
│   └── Footer.tsx          # 4-column footer with social icons
├── hooks/
│   ├── useScrollAnimation.ts  # Intersection Observer fade-in hook
│   └── useContactForm.ts      # Supabase form submission + state hook
├── lib/
│   └── supabase.ts         # Shared Supabase client
├── pages/
│   └── HomePage.tsx        # Assembles all sections in order
├── types.ts                # Shared TypeScript interfaces
├── App.tsx                 # React Router route wiring
├── main.tsx                # React root mount (BrowserRouter)
└── index.css               # Tailwind directives + global CSS tokens
```

---

## Database

The `contact_submissions` table in Supabase stores every contact form entry:

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key, auto-generated |
| `name` | `text` | Required |
| `email` | `text` | Required |
| `phone` | `text` | Optional |
| `subject` | `text` | Dropdown selection |
| `message` | `text` | Required |
| `read` | `boolean` | Default `false` |
| `created_at` | `timestamp` | Auto-set |

Row-Level Security is enabled; anonymous inserts are permitted so visitors can submit the form without signing in.

---

## Deployment

The site is a standard Vite SPA — deploy to any static host:

- **Vercel / Netlify** — connect the repo, set env vars, deploy
- **Supabase Storage** — upload the `dist/` folder as a static site
- **Any CDN** — `npm run build` → upload `dist/`

Set the canonical URL to `https://elanafriqe.xyz` and configure your host to redirect all routes to `index.html` for client-side routing.

---

*© 2026 Elan Afrique. Where African Tourism Meets Technology 🌍*
  