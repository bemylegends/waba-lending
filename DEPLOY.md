# How to update the repo (website-structure)

1. Delete from the repo: `app/`, `components/`, `data/`, `public/`, `Legends-Website-Prototype.html`.
2. Copy everything from this archive into the repo root (next to `package.json`).
3. Commit and push to `main`. Railway rebuilds from GitHub.

## Check before committing — these files MUST exist

- app/events/[slug]/page.jsx
- app/knowledge/[slug]/page.jsx
- components/Countdown.jsx
- components/RegisterCard.jsx
- components/AddToCalendar.jsx
- components/ReadProgress.jsx
- data/eventDetails.js
- VERSION.txt

## These MUST NOT exist (old version)

- app/rooms/
- app/insights/
- app/deals/ (Deal flow is kept in app/_hidden/deals)
- app/events/after-20-investments-what-makes-me-say-yes/
- components/RequestCard.jsx, components/EventsGrid.jsx, components/HomeRoomsSection.jsx
- public/prototype.js
