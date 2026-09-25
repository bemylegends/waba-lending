
export default function Stance() {
  return (
    <>
      <section className="sec" style={{paddingTop:"0"}}>
        <div className="wrap">
          <div className="stance-card rv">
            <div className="sec-head" style={{margin:"0",alignContent:"start"}}>
              <span className="kicker">What we are not</span>
              <h2 className="h2">Nobody in the network is here to sell you something.</h2>
              <p className="fin">Membership is the only revenue. It keeps the incentives simple.</p>
            </div>
            <ul className="nots">
              <li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg></i>We do not sell services, products or deals of our own.</li>
              <li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg></i>We do not charge founders or sell pitch access.</li>
              <li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg></i>We take no percentage of any deal made through the club.</li>
              <li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg></i>We do not admit anyone who is not an investor.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
