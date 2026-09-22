# InvestHack landing page — Next.js export

Same page you approved in the Claude artifact, packaged as a Next.js app.

## Stack

- Next.js (App Router) + React — no Tailwind, no UI kit.
- One plain CSS file (`app/globals.css`) with hand-written classes (design
  tokens as CSS custom properties, BEM-ish class names). If you ever move
  this off Next.js, you can lift `app/globals.css` and the markup in
  `app/page.jsx` into any other framework — the CSS has zero Next-specific
  or Tailwind-specific syntax.
- All the interactive bits (scroll reveal, the pinned parallax chips, the
  mosaic hover parallax, populating the speaker grid) are the same vanilla
  JS as the artifact, just run once from a `useEffect` in `app/page.jsx`
  instead of an inline `<script>` tag.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` produces a production
build (already verified to compile cleanly).

## Files

- `app/layout.jsx` — page `<head>` (title, the Outfit Google Font).
- `app/page.jsx` — the whole page markup + the client-side interaction script.
- `app/globals.css` — every style rule, extracted as-is.
- `public/legends-logo.png` — the new logo you sent, cropped to its visible
  bounds. Used in the header and footer.

## About the speaker photos — please read

You asked for every speaker photo to be the real hero-block photo pulled
from that person's own event page on belegends.club (not a quote-block
photo). I went and checked every event actually listed on
belegends.club/events.

Two of your original six speakers do have their own InvestHack-style event
page there, and I kept them with their real hero photo:

- **Janneke Niessen** — Founding Partner, CapitalT
- **Walied Albasheer** — Founder & Managing Partner

The other four names from before (Mohamed Hasan, Dr. Salwa Arfaoui, Dory
Sakr, Amit Puri) don't have a matching event page on belegends.club, so I
had no real photo URL to point at for them — I never fabricate a link.
Rather than leave four broken/fallback avatars, I swapped them for four
other real people who do have a genuine event page with a real hero photo:

- **Vijay Sivaram** — Co-Founder, RVAI Global (from "Legends InvestHack #1")
- **Varun Malik** — Founder, Konsälidön
- **Julius Bachmann** — Founder, Bachmann Catalyst
- **Alex Felman** — General Partner, Felman Family Office

All six `img` URLs in the `people` array (top of the script in
`app/page.jsx`) are the actual hero-image `src` from each person's own page
— not the quotes-section image. If you'd rather keep any of the four
original names, just get me a hero-block photo URL for them (or a page for
me to pull it from) and I'll swap the array entry.

Two of the six images live on `belegends.club`, one on `images.lumacdn.com`
— `next.config.js` already allow-lists both hosts for `next/image` in case
you switch the plain `<img>` tags over to it later.
