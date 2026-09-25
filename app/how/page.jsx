import Link from 'next/link';
import Band from '@/components/Band';
import HowFlow from '@/components/HowFlow';
import HowSteps from '@/components/HowSteps';

export const metadata = { title: "Legends \u2014 How it works" };

export default function Page() {
  return (
    <>
      <section className="phero">
        <img className="sym" src="/brand/symbol.png" alt="" />
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span>/</span><span>How it works</span></div>
          <h1 className="h1 rv" style={{marginTop:"22px"}}>One right introduction beats a hundred weak contacts.</h1>
          <p className="lead rv d1">Legends works on requests. You tell us what you need now; matching finds the members who fit; the team checks and makes the introduction — only when both sides agree.</p>
        </div>
      </section>
      <HowFlow />
      <HowSteps />
      <section className="sec" style={{paddingTop:"0"}}>
        <div className="wrap two">
          <div className="card rv">
            <span className="kicker">Matching</span>
            <h3>Matching finds the person.</h3>
            <p>Your profile holds your thesis, ticket size, sectors, stages and what you can offer. Every request is read against that context and against every other member's.</p>
            <p>You only see people at your level who can actually help — not a feed, not a directory.</p>
          </div>
          <div className="card beige rv d1">
            <span className="kicker">The team</span>
            <h3>People make the introduction.</h3>
            <p>Every match is reviewed by hand. We ask the other side first and explain why the introduction makes sense.</p>
            <p>Requests the network cannot answer yet are worked by the team across LinkedIn and email.</p>
          </div>
          <div className="card rv">
            <span className="kicker">Privacy</span>
            <h3>You stay anonymous until you both agree.</h3>
            <ul className="list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>No direct messages between members</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Contact details shared only after double consent</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Identities of deals and members stay inside the club</li>
            </ul>
          </div>
          <div className="card goldc rv d1">
            <span className="kicker">What you can ask for</span>
            <h3>Capital is only one of the answers.</h3>
            <ul className="list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>A co-investor or a lead for a round</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Deals matching your thesis</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>Market access, partners, an expert opinion</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-10"/></svg>People worth meeting in the city you travel to</li>
            </ul>
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}
