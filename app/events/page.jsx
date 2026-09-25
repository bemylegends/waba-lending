import Link from 'next/link';
import EventCard from '@/components/EventCard';
import UpcomingFeature from '@/components/UpcomingFeature';
import Inside from '@/components/Inside';
import { UPCOMING, PAST } from '@/data/events';

export const metadata = { title: 'Legends — Events' };

export default function Page() {
  return (
    <>
      <section className="phero">
        <img className="sym" src="/brand/symbol.png" alt="" />
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span>/</span><span>Events</span></div>
          <h1 className="h1 rv" style={{ marginTop: 22 }}>Weekly InvestHacks with people who made the decision.</h1>
          <p className="lead rv d1">Online sessions every week, closed conversations for members and small dinners in the cities where capital actually meets.</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv"><span className="kicker">Upcoming</span><h2 className="h2">Next on the calendar.</h2></div>
          {UPCOMING.length ? (
            <>
              {/* the nearest event is featured, the rest follow as regular cards */}
              <UpcomingFeature e={UPCOMING[0]} />
              {UPCOMING.length > 1 && (
                <div className="evgrid" style={{ marginTop: 14 }}>
                  {UPCOMING.slice(1).map((e) => <EventCard key={e.title + e.date} e={e} />)}
                </div>
              )}
            </>
          ) : <div className="card beige">The next InvestHack will be announced soon.</div>}
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="row-head">
            <div className="sec-head rv"><span className="kicker">Past events</span><h2 className="h2">Recordings and notes stay with members.</h2></div>
            <span className="count-pill rv">{PAST.length} events</span>
          </div>
          <div className="evgrid">
            {PAST.map((e) => <EventCard key={e.title + e.date} e={e} />)}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv"><span className="kicker">Formats</span><h2 className="h2">Four formats, one standard: everyone is vetted.</h2></div>
          <div className="formats">
            <div className="fmt rv"><b>InvestHack</b><h4>The operating knowledge behind a result</h4><p>Decisions, systems, mistakes and lessons — from the person who made them. Every week, online.</p></div>
            <div className="fmt rv d1"><b>Meet the Legends</b><h4>The journey behind the name</h4><p>A person-first conversation about how the guest got to what they know today.</p></div>
            <div className="fmt rv d2"><b>Closed session</b><h4>After the audience leaves</h4><p>A smaller members-only conversation right after the open session.</p></div>
            <div className="fmt rv d3"><b>Private dinners</b><h4>Eight seats, one table</h4><p>People at the same level, in Dubai and the cities members travel to.</p></div>
          </div>
        </div>
      </section>
      <Inside />
    </>
  );
}
