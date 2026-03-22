# Roger Paniagua — Portfolio Site

## Project
Personal portfolio for Roger Paniagua, Creative & Communication Leader.
Live: https://rogerpaniagua.com
Stack: Next.js 16 (App Router, Turbopack), React, single globals.css

## Key rules
- All /public assets must be kebab-case (lowercase, hyphens, no spaces)
- macOS is case-insensitive but Vercel/Linux is case-sensitive — always lowercase
- Single globals.css file — all styles go here
- Git push triggers Vercel auto-deploy from main branch
- DNS is managed through Vercel, not Hostinger

## CSS variables
--bg: #EDEAE3 | --card: #E3E0D8 | --black: #1a1915
--text: #1a1915 | --muted: #6b6860 | --border: rgba(26,25,21,0.12)
Fonts: Instrument Sans (body), Source Serif 4 (italic accents)

## File structure
app/layout.tsx       — Root layout, metadata, JSON-LD
app/page.tsx         — Homepage (all sections)
app/globals.css      — All styles
app/Navbar.tsx       — Responsive navbar
app/HeroParticles.tsx — Canvas constellation animation
app/CustomCursor.tsx — Custom cursor
app/sitemap.ts       — Auto sitemap
app/robots.ts        — Robots config
app/work/elaniin-la/page.tsx   — Case study
app/work/blue-engine/page.tsx  — Case study

## Workflow
- Copy/strategy/config: Claude chat
- Code/CSS/components: Claude Code (here)
- Deploy: git add -A && git commit -m "description" && git push

## Adding a logo to journey section
1. kebab-case filename in /public
2. Add to journeyLogos array in page.tsx: { src: '/file.svg', alt: 'Name', height: 26 }
3. Both marquee sets render automatically

## Adding a case study — full checklist
1. Create app/work/[slug]/page.tsx
2. Add images/video to /public/[slug]/ (kebab-case filenames)
3. Add URL to app/sitemap.ts
4. Add card to app/work/page.tsx cases array
5. Decide if it goes as featured (wc-active) in app/page.tsx homepage work-list
6. Update cs-footer-nav in ALL existing case studies to maintain correct cyclic order
7. Footer rule: always end with cs-footer-nav → contact-wrap (dark) → dark footer. Never footer-light.
8. Back to work link always points to /work, never /#work

### Current cyclic order
bitlab → Elaniin Lands in L.A. → Blue Engine → bitlab

## Pending
- Mobile accessibility 96/100 (contrast in case study cards + experience badges)
- 3 case studies coming soon: Elaniin Brand System, Creative Team Scale-up, Visual Identity Systems
