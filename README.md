# Legends website (v2 — investor-first)

Next.js (App Router) + React. No CSS framework; all styles live in `app/globals.css`.

## Run locally

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| Route | File |
|---|---|
| `/` | `app/page.jsx` |
| `/how` | `app/how/page.jsx` |
| `/membership` | `app/membership/page.jsx` |
| `/events` | `app/events/page.jsx` |
| `/events/<slug>` | `app/events/<slug>/page.jsx` → `components/EventPage.jsx`, content in `data/eventDetails.js` |
| `/knowledge` | `app/knowledge/page.jsx` |
| `/knowledge/<slug>` | `app/knowledge/<slug>/page.jsx` → `components/ArticlePage.jsx` |
| `/about` | `app/about/page.jsx` |
| `/apply` | `app/apply/page.jsx` |
| `/login` | `app/login/page.jsx` |

Hidden (not routed, kept for later): `app/_hidden/deals` (Deal flow). To bring it back, move it to `app/deals` and uncomment it in `components/Header.jsx`.

## Structure

- `components/` — shared sections (Founder, HowSteps, Benefits, Tracks, Stance, Proof, Inside, Band, ApplyFaq, Footer)
  and client components (Header, Hero, HeroNetwork, MatchEngine, HowFlow, ApplyForm, Reveal).
- `data/events.js` — events (from belegends.club/events). `upcoming: true` puts an event in the Upcoming block; events with `slug` link to an internal page, others to their live URL.
- `data/eventDetails.js` — full content for event pages (agenda, speaker, access, times, countdown date). To add an event page: add an entry here + `slug` in `events.js`, then copy `app/events/after-20-investments-what-makes-me-say-yes/` to a folder named after the new slug and change `SLUG` inside.
- `data/knowledge.js` — essays (from belegends.club/blog). Put the full text into `body` ({ p }, { h }, { quote } blocks); until then the page shows the summary and a link to the original.
- `public/brand/` — founder photo and symbol.

## TODO

- Official SVG logo for light backgrounds in `Header.jsx` / `Footer.jsx`.
- Investor-facing text from Yanis in `Founder.jsx`.
- Sample deals in `Benefits.jsx` and `app/deals/page.jsx` are placeholders.
- Full essay texts for `data/knowledge.js`.
- `ApplyForm.jsx`, `RegisterCard.jsx` and login only show the prototype state — connect to the backend.
- Event covers, gallery video and testimonial photos are hot-linked from belegends.club / lumacdn; copy them into `public/` for production.
