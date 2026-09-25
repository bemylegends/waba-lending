import Link from 'next/link';
import { eventHref, isExternal } from '@/data/events';

export default function EventCard({ e }) {
  const inner = (
    <>
      <div className="cv"><img loading="lazy" src={e.img} alt="" /></div>
      <div className="bd">
        <div className="meta"><span className="kicker">{e.format}</span><span>{e.upcoming ? 'Upcoming · ' + e.date.split(' · ')[0] : e.date}</span></div>
        <h3>{e.title}</h3>
        {e.speaker && <span className="sp">{e.speaker}{e.role ? ' · ' + e.role : ''}</span>}
      </div>
    </>
  );
  return isExternal(e)
    ? <a className="ev rv" href={eventHref(e)} target="_blank" rel="noopener noreferrer">{inner}</a>
    : <Link className="ev rv" href={eventHref(e)}>{inner}</Link>;
}
