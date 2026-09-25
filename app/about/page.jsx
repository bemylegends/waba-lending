import Link from 'next/link';
import Band from '@/components/Band';
import Founder from '@/components/Founder';
import Inside from '@/components/Inside';
import Proof from '@/components/Proof';

export const metadata = { title: "Legends \u2014 About" };

export default function Page() {
  return (
    <>
      <section className="phero">
        <img className="sym" src="/brand/symbol.png" alt="" />
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span>/</span><span>About</span></div>
          <h1 className="h1 rv" style={{marginTop:"22px"}}>The right person at the right moment can change what becomes possible.</h1>
          <p className="lead rv d1">Legends started in Dubai as a series of private gatherings. It is now becoming an international network for investors — enabled by matching, completed by people.</p>
        </div>
      </section>
      <Founder />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv"><span className="kicker">Principles</span><h2 className="h2">How we run the club.</h2></div>
          <div className="principles">
            <div className="pr rv"><span className="n">01</span><h4>Person first</h4><p>The person is the story. Technology supports the connection.</p></div>
            <div className="pr rv d1"><span className="n">02</span><h4>Relevance over reach</h4><p>One right introduction is worth more than hundreds of weak contacts.</p></div>
            <div className="pr rv d2"><span className="n">03</span><h4>Proof over hype</h4><p>Decisions, experience and results — not generic praise.</p></div>
            <div className="pr rv d3"><span className="n">04</span><h4>Private, not secretive</h4><p>The network is selective because context and trust matter.</p></div>
            <div className="pr rv"><span className="n">05</span><h4>Technology disappears</h4><p>We explain the outcome before the mechanism.</p></div>
          </div>
        </div>
      </section>
      <Proof />
      <Inside />
      <Band />
    </>
  );
}
