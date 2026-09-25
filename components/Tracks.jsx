import Link from 'next/link';

export default function Tracks() {
  return (
    <>
      <section className="sec" id="membership" style={{paddingTop:"0"}}>
        <div className="wrap">
          <div className="row-head">
            <div className="sec-head rv">
              <span className="kicker">Membership</span>
              <h2 className="h2">Three tracks. One rule: everyone is on the investing side.</h2>
            </div>
            <Link className="tlink rv" href="/membership">Compare in detail <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
          </div>
          <div className="tracks">
            <article className="track rv">
              <span className="tag">Own capital</span>
              <h3>Private</h3>
              <p className="who">Angels, LPs, syndicate leads and family offices investing their own capital.</p>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Three live requests</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Monthly curated deal flow</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Co-investment circle</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Priority at private dinners</li>
              </ul>
              <p className="note">Entry: application and approval.</p>
              <Link className="btn ghost" href="/apply">Apply for Private</Link>
            </article>
            <article className="track mid rv d1">
              <span className="tag">Raise or lead</span>
              <h3>Fund</h3>
              <p className="who">GPs, fund partners and family offices that raise or bring co-investors in.</p>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Everything in Private</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Requests matched to your thesis</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Closed circle of fund peers</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Speaker slots, host a session</li>
              </ul>
              <p className="note">Entry: approval and a verified track record.</p>
              <Link className="btn gold" href="/apply">Apply for Fund</Link>
            </article>
            <article className="track rv d2">
              <span className="tag">Strategic</span>
              <h3>Corporate</h3>
              <p className="who">Corporate venture arms, corporate development and strategic investors.</p>
              <ul>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Everything in Private</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Closed demos with vetted companies</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Thematic sessions on your industry</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Up to three seats</li>
              </ul>
              <p className="note">Entry: approval at the company level.</p>
              <Link className="btn ghost" href="/apply">Apply for Corporate</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
