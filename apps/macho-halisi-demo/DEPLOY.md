# Macho Halisi — Deployment Notes

This is a full Next.js 16 / React 19 / Tailwind v4 site, retargeted from a
hotel-booking template into a concept/demo build for Macho Halisi Ltd, a
real Tanzanian safari and tour operator. It's a real, working codebase —
not a static mockup — and it passed a clean production build (`next build`)
with no errors.

This is an independent portfolio piece, not the official Macho Halisi Ltd
website. All pricing shown is illustrative only.

## Run it locally

```bash
pnpm install   # or: npm install
pnpm dev       # or: npm run dev
```

Then open http://localhost:3009

## Deploy it live (any of these work)

**Vercel (recommended, easiest):**
```bash
npm i -g vercel
vercel login
vercel --prod
```
Run that from this folder and it'll deploy in under a minute — you'll get a
real `.vercel.app` URL you can put in future applications or your portfolio.

**Or push to a new GitHub repo and import it at vercel.com/new** — that
also works and is what most of your other Vercel projects already use.

## What changed from the original template

- Brand: retargeted to Macho Halisi Ltd — a locally owned Tanzanian safari
  and tour operator based in Karatu, Arusha Region, founded by Dawson Minja
  and operating for over fourteen years
- All 6 "rooms" rewritten as tour packages: Northern Parks Safari,
  Kilimanjaro/Meru/Ol Doinyo Lengai Treks, Zanzibar Beach Holiday, Great
  Migration Safari, Cultural Tourism (Maasai/Hadzabe/Datoga), and the Stone
  Town & Swahili Coast Heritage Tour
- Original photos kept as-is — only the text/copy changed
- Every page rewritten: home, about, why-travel-with-us, taste-of-tanzania,
  offers, gallery, contact, tours, tour detail, booking/enquiry flow
- `package.json` renamed to `macho-halisi-demo`
- Illustrative-pricing and demo disclaimers added to the footer and offers
  page for honesty, since this is not Macho Halisi's official site
