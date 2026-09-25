import Link from 'next/link';

export default function HowSteps() {
  return (
    <>
      <section className="sec" id="how">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">How it works</span>
            <h2 className="h2">You say what you need. We find who fits — and ask them first.</h2>
          </div>
          <div className="steps">
            <div className="step rv"><span className="n">01</span><h3>Your context</h3><p>Thesis, ticket size, sectors, stages — and what you can offer other members.</p></div>
            <div className="step rv d1"><span className="n">02</span><h3>A live request</h3><p>A deal to share, a co-investor, a market or an expert. Up to three at a time.</p></div>
            <div className="step rv d2"><span className="n">03</span><h3>Matched and checked</h3><p>Matching surfaces the relevant people. The team checks every match by hand.</p></div>
            <div className="step rv d3"><span className="n">04</span><h3>Double-consent intro</h3><p>Contact details are shared only after both sides agree to meet.</p></div>
          </div>
          <div className="how-note rv">
            <p>Matching finds the person. <span>People make the introduction.</span></p>
            <Link className="tlink" href="/how">How matching works <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
          </div>
        </div>
      </section>
    </>
  );
}
