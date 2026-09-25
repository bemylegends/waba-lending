# How to update the repo (website-structure)

1. Delete from the repo: `app/`, `components/`, `data/`, `public/`, `Legends-Website-Prototype.html`.
2. Copy everything from this archive into the repo root (next to `package.json`).
3. Commit and push to `main`. Railway rebuilds from GitHub.

## Check before committing — these files MUST exist

- app/events/after-20-investments-what-makes-me-say-yes/page.jsx (imports EventPage)
- app/knowledge/slop-is-not-bad-work/page.jsx (+ 4 other article folders)
- components/EventPage.jsx, components/ArticlePage.jsx
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
- components/RequestCard.jsx, components/EventsGrid.jsx, components/HomeRoomsSection.jsx
- public/prototype.js
