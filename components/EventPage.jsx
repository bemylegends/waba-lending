import Link from 'next/link';
import Arrow from './Arrow';
import Countdown from './Countdown';
import AddToCalendar from './AddToCalendar';
import RegisterCard from './RegisterCard';
import EventCard from './EventCard';
import { EVENTS, PAST } from '@/data/events';
import { EVENT_DETAILS } from '@/data/eventDetails';


const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10" /></svg>;
const Cross = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 6l12 12M18 6L6 18" /></svg>;

export default function EventPage({ slug }) {
  const e = EVENTS.find((x) => x.slug === slug);
  const d = EVENT_DETAILS[slug];
  if (!e || !d) return null;

  return (
    <>
      {/* HERO */}
      <section className="ev-hero">
        <div className="ev-glow" />
        <div className="wrap">
          <div className="crumbs rv"><Link href="/">Home</Link><span>/</span><Link href="/events">Events</Link><span>/</span><span>InvestHack</span></div>
          <div className="ev-hero-grid">
            <div>
              <div className="ev-badges rv d1">
                <span className="pill-live"><i />{e.upcoming ? 'Registration open' : 'Past event'}</span>
                <span className="ev-kind">{d.kicker}</span>
              </div>
              <h1 className="h1 ev-title rv d1">{e.title}</h1>
              <p className="lead rv d2">{d.lead}</p>
              <div className="ev-when rv d2">
                <div className="ev-date"><b>29</b><span>Sept<br />Tue</span></div>
                <div className="ev-tz">{d.times.map(([c, t]) => <span key={c}><b>{t}</b>{c}</span>)}</div>
              </div>
              {e.upcoming && <div className="rv d3"><Countdown to={d.startsAt} /></div>}
              <div className="ctas rv d3">
                <a className="btn gold" href="#register">Request a seat <Arrow /></a>
                <AddToCalendar title={e.title} start={d.startsAt} durationMin={d.durationMin} />
              </div>
            </div>
            <div className="ev-visual rv d2">
              <div className="ev-cover"><img src={e.img} alt="" /></div>
              <div className="ev-float f1"><img src={d.speaker.photo} alt="" /><div><b>{d.speaker.name}</b><small>Speaker</small></div></div>
              <div className="ev-float f2"><span className="dot" />Online · cameras on</div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY + STICKY REGISTER */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap ev-body">
          <div className="ev-main">
            {/* thesis */}
            <div className="ev-thesis rv">
              <span className="kicker">The session</span>
              <h2 className="h2">{d.thesis.title}</h2>
              <p className="lead">{d.thesis.text}</p>
              <div className="ev-facts">
                {d.thesis.facts.map(([v, l], k) => <div key={l} className={'rv d' + k}><b>{v}</b><span>{l}</span></div>)}
              </div>
            </div>

            {/* agenda */}
            <div className="ev-block">
              <div className="sec-head rv" style={{ marginBottom: 28 }}><span className="kicker">What you will take away</span><h2 className="h2" style={{ fontSize: 'clamp(30px,3.2vw,44px)' }}>Three parts, one hour.</h2></div>
              <ol className="timeline">
                {d.agenda.map(([t, p], k) => (
                  <li key={t} className="rv"><span className="tl-n">0{k + 1}</span><div><h3>{t}</h3><p>{p}</p></div></li>
                ))}
              </ol>
            </div>

            {/* speaker */}
            <div className="ev-speaker rv">
              <div className="sp-photo"><img src={d.speaker.photo} alt={d.speaker.name} /></div>
              <div className="sp-txt">
                <span className="kicker">The speaker</span>
                <h3>{d.speaker.name}</h3>
                <p className="sp-role">{d.speaker.role}</p>
                <p>{d.speaker.bio}</p>
                <div className="sp-tags">{d.speaker.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </div>

            {/* for who */}
            <div className="ev-fit">
              <div className="card rv">
                <span className="kicker">Who it’s for</span>
                <ul className="list">{d.forWho.map((x) => <li key={x}><Check />{x}</li>)}</ul>
              </div>
              <div className="card beige rv d1">
                <span className="kicker">Not the place for</span>
                <ul className="list no">{d.notFor.map((x) => <li key={x}><Cross />{x}</li>)}</ul>
              </div>
            </div>

            {/* access */}
            <div className="ev-block">
              <div className="sec-head rv" style={{ marginBottom: 28 }}><span className="kicker">How access works</span><h2 className="h2" style={{ fontSize: 'clamp(30px,3.2vw,44px)' }}>A small group, reviewed by people.</h2></div>
              <div className="access">
                {d.access.map(([t, p], k) => (
                  <div key={t} className={'acc rv d' + k}><span className="n">{k + 1}</span><h4>{t}</h4><p>{p}</p></div>
                ))}
              </div>
              <p className="note-s">{d.note}</p>
            </div>

            {d.gallery && (
              <div className="ev-gal rv">
                {d.gallery.map((g) => <div key={g} style={{ backgroundImage: `url(${g})` }} />)}
              </div>
            )}
          </div>

          <aside className="ev-side">
            <RegisterCard times={d.times} />
          </aside>
        </div>
      </section>

      {/* MORE */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="row-head">
            <div className="sec-head rv"><span className="kicker">Past InvestHacks</span><h2 className="h2">Recordings stay with members.</h2></div>
            <Link className="tlink rv" href="/events">All events <Arrow className="" /></Link>
          </div>
          <div className="evgrid">{PAST.slice(0, 3).map((x) => <EventCard key={x.title + x.date} e={x} />)}</div>
        </div>
      </section>

      {/* mobile sticky CTA */}
      {e.upcoming && <a className="ev-sticky" href="#register">Request a seat <Arrow /></a>}
    </>
  );
}
