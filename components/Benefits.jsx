
export default function Benefits() {
  return (
    <>
      <section className="sec" id="benefits" style={{paddingTop:"0"}}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">What members get</span>
            <h2 className="h2">Relevant deals, and the right people around them.</h2>
          </div>
          <div className="bento">
            <article className="b b1 rv">
              <div className="rings"><i></i><i></i><i></i></div>
              <span className="kicker">Deal flow · monthly</span>
              {/* TODO: sample deals are placeholders */}
              <div className="deals">
                <div className="deal"><b>Fintech · Series A</b><span>GCC · co-invest open</span></div>
                <div className="deal"><b>Climate · Seed</b><span>EU · lead confirmed</span></div>
                <div className="deal"><b>AI infra · Pre-A</b><span>UK · allocation</span></div>
              </div>
              <h3>Curated by your thesis — not by who paid to pitch.</h3>
              <p>Founders never pay to be seen. Companies reach members through the team and through other members.</p>
            </article>
            <article className="b b2 rv d1">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c.8-3.4 3.2-5 6-5s5.2 1.6 6 5M15 15.2c2.6-.4 4.8.9 5.5 3.8"/></svg></span>
              <h3>Co-investment circles</h3><p>Share allocations, find a lead or join one.</p>
            </article>
            <article className="b b3 rv d2">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h6l2-3 2 6 2-3h4"/></svg></span>
              <h3>Introductions on request</h3><p>Worked by the team until the right person is found.</p>
            </article>
            <article className="b b4 rv">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="15" rx="4"/><path d="M8 3v4M16 3v4M3 10h18"/></svg></span>
              <h3>Private sessions</h3><p>Weekly InvestHacks, closed sessions and small dinners.</p>
            </article>
            <article className="b b5 rv d1">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg></span>
              <h3>City introductions</h3><p>Travelling? We line up the members worth meeting.</p>
            </article>
            <article className="b b6 rv d2">
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l8 4v5c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></span>
              <h3>A clean network</h3><p>Investors only. No vendors, no pitch sellers.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
