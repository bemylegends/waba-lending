import Link from 'next/link';
import Arrow from './Arrow';
import UpcomingFeature from './UpcomingFeature';
import EventCard from './EventCard';
import { UPCOMING, PAST } from '@/data/events';

export default function HomeEvents() {
  return (
    <section className="sec" id="events" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="row-head">
          <div className="sec-head rv">
            <span className="kicker">Events · weekly InvestHacks</span>
            <h2 className="h2">Where members meet and learn from each other.</h2>
          </div>
          <Link className="tlink rv" href="/events">All events <Arrow className="" /></Link>
        </div>
        {UPCOMING[0] && <UpcomingFeature e={UPCOMING[0]} />}
        <div className="evgrid" style={{ marginTop: 14 }}>
          {[...UPCOMING.slice(1), ...PAST].slice(0, 3).map((e) => <EventCard key={e.title + e.date} e={e} />)}
        </div>
      </div>
    </section>
  );
}
