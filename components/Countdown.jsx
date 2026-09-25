'use client';
import { useEffect, useState } from 'react';

export default function Countdown({ to }) {
  const [now, setNow] = useState(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = now == null ? 0 : Math.max(0, new Date(to).getTime() - now);
  const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
  const cells = [[d, 'days'], [h, 'hours'], [m, 'min'], [s, 'sec']];
  if (now != null && diff === 0) return <div className="cd live"><span className="dot" />Happening now</div>;
  return (
    <div className="cd" aria-label="Time until the event">
      {cells.map(([v, l]) => (
        <div key={l} className="cd-c"><b key={v}>{now == null ? '–' : String(v).padStart(2, '0')}</b><span>{l}</span></div>
      ))}
    </div>
  );
}
