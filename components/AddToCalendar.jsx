'use client';

export default function AddToCalendar({ title, start, durationMin = 60, url }) {
  const onClick = () => {
    const s = new Date(start), e = new Date(s.getTime() + durationMin * 6e4);
    const f = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Legends//Events//EN', 'BEGIN:VEVENT',
      `UID:${f(s)}@belegends.club`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(s)}`, `DTEND:${f(e)}`,
      `SUMMARY:${title.replace(/,/g, '\\,')}`, `URL:${url || ''}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'legends-event.ics'; a.click();
  };
  return (
    <button type="button" className="btn ghost" onClick={onClick}>
      <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="4" /><path d="M8 3v4M16 3v4M3 10h18M12 13v5M9.5 15.5h5" /></svg>
      Add to calendar
    </button>
  );
}
