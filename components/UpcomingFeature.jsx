import Link from 'next/link';
import Arrow from './Arrow';
import { eventHref } from '@/data/events';

// Large card for an upcoming event (used on Events page and home).
export default function UpcomingFeature({ e }) {
  return (
    <Link className="upf rv" href={eventHref(e)}>
      <div className="rings"><i /><i /><i /></div>
      <div className="upf-txt">
        <div className="top"><span className="kicker">{e.format} · Upcoming</span><span className="date-pill">{e.date}</span></div>
        <h3>{e.title}</h3>
        <p>{e.speaker} · {e.role}</p>
        <span className="btn gold">Reserve a seat <Arrow /></span>
      </div>
      <div className="upf-cover"><img src={e.img} alt="" /></div>
    </Link>
  );
}
