import Link from 'next/link';
import Band from '@/components/Band';
import Stance from '@/components/Stance';

export const metadata = { title: "Legends \u2014 Deal flow" };

export default function Page() {
  return (
    <>
      <section className="phero">
        <img className="sym" src="/brand/symbol.png" alt="" />
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span>/</span><span>Deal flow</span></div>
          <h1 className="h1 rv" style={{marginTop:"22px"}}>Deals filtered by your thesis, not by who paid to pitch.</h1>
          <p className="lead rv d1">A monthly, curated selection for members. Founders never pay to be included, and Legends takes no percentage of any deal.</p>
          <div className="ctas rv d2"><Link className="btn gold" href="/apply">Apply for membership <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link><Link className="btn ghost" href="/membership">Membership tracks</Link></div>
        </div>
      </section>
      <section className="sec" style={{paddingTop:"0"}}>
        <div className="wrap">
          <div className="sec-head rv"><span className="kicker">Where deals come from</span><h2 className="h2">Three sources. One filter.</h2></div>
          <div className="steps">
            <div className="step rv"><span className="n">01</span><h3>From members</h3><p>Fund and Private members share allocations and co-investment opportunities.</p></div>
            <div className="step rv d1"><span className="n">02</span><h3>Through members</h3><p>Founders introduced by people already inside the club.</p></div>
            <div className="step rv d2"><span className="n">03</span><h3>Team sourcing</h3><p>Companies found by the team for members' open requests.</p></div>
            <div className="step rv d3"><span className="n">04</span><h3>Your filter</h3><p>You see what fits your thesis, ticket and stage — nothing else.</p></div>
          </div>
        </div>
      </section>
      <section className="sec" style={{paddingTop:"0"}}>
        <div className="wrap two">
          <div className="card rv">
            <span className="kicker">What a deal looks like inside</span>
            <h3>One page. The facts you need to decide whether to talk.</h3>
            {/* TODO: sample memo is a placeholder */}
            <div className="memo">
              <div className="row"><span>Sector · stage</span><b>Fintech · Series A</b></div>
              <div className="row"><span>Market</span><b>GCC</b></div>
              <div className="row"><span>Round</span><b className="blur">$6.5M · $2.1M left</b></div>
              <div className="row"><span>Lead</span><b className="blur">Regional VC</b></div>
              <div className="row"><span>Shared by</span><b className="blur">Fund member</b></div>
              <span className="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="10" width="16" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>Members only</span>
            </div>
          </div>
          <div className="card goldc rv d1">
            <div className="rings"><i></i><i></i><i></i></div>
            <span className="kicker">Co-investment circles</span>
            <h3>Find a lead, or bring others into yours.</h3>
            <p>Members discuss allocations with peers in closed circles. Fund members also have their own circle for deal exchange.</p>
            <ul className="list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Share an allocation with relevant members</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Ask for a second opinion before you commit</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Closed demos with vetted companies for Corporate</li>
            </ul>
          </div>
        </div>
      </section>
      <Stance />
      <Band />
    </>
  );
}
