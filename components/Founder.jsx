import Link from 'next/link';

export default function Founder() {
  return (
    <>
      <section className="founder" id="founder">
        <div className="wrap">
          <div className="f-card rv">
            <div className="f-copy">
              <span className="kicker">From the founder</span>
              <blockquote>“You are not here by accident. You found this because something inside you was already looking for it.”</blockquote>
              <div className="f-sign"><b>Yanis Chkhatval</b><span>Founder of Legends</span></div>
              {/* TODO: 2–3 sentences from Yanis for investors */}
              <p className="lead">Every application is reviewed by the team. Every introduction is made with a clear reason. You always know who is behind the club.</p>
              <div className="ctas">
                <Link className="btn" href="/apply">Book a call with Yanis
                  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
                <Link className="btn ghost" href="/about">Our principles</Link>
              </div>
            </div>
            <div className="f-photo">
              <img src="/brand/yanis.webp" alt="Yanis Chkhatval, founder of Legends" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
