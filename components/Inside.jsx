
export default function Inside() {
  return (
    <>
      <section className="sec" id="inside" style={{paddingTop:"0"}}>
        <div className="wrap">
          <div className="row-head">
            <div className="sec-head rv">
              <span className="kicker">Inside Legends</span>
              <h2 className="h2">Where the network meets in person.</h2>
            </div>
            <p className="lead rv" style={{maxWidth:"420px",fontSize:"16px"}}>Private gatherings, focused sessions and the conversations around them.</p>
          </div>
          <div className="inside rv">
            <div className="vid">
              <video autoPlay muted loop playsInline poster="https://belegends.club/assets/site-loop-poster.jpg">
                <source src="https://belegends.club/assets/site-loop.webm" type="video/webm" />
              </video>
              <span className="cap"><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg></i>Legends in Dubai</span>
            </div>
            <div style={{backgroundImage:"url(https://belegends.club/assets/block-6-1.jpg)"}}></div>
            <div style={{backgroundImage:"url(https://belegends.club/assets/block-6-2.jpg)"}}></div>
            <div style={{backgroundImage:"url(https://belegends.club/assets/block-6-3.jpg)"}}></div>
            <div style={{backgroundImage:"url(https://belegends.club/assets/block-6-4.jpg)"}}></div>
          </div>
          <div className="quotes">
            <figure className="quote rv"><p>“I do recommend — it's very specific. It's not everybody, they are selected. I believe they are here for the reasons.”</p><figcaption className="who"><img src="https://belegends.club/assets/salwa.jpg" alt="" /><span><b>Dr. Salwa Arfaoui</b><small>CEO · Women of Vision</small></span></figcaption></figure>
            <figure className="quote rv d1"><p>“You meet two or three good people, you've got one month of your commissions or your deals already here.”</p><figcaption className="who"><img src="https://belegends.club/assets/amit.png" alt="" /><span><b>Amit Puri</b><small>CEO · BCD Global</small></span></figcaption></figure>
            <figure className="quote rv d2"><p>“So many interesting people as personalities, a lot of professionals. Everyone loosened up and started interacting with everybody.”</p><figcaption className="who"><img src="https://belegends.club/assets/hasan.jpg" alt="" /><span><b>Mohamed Hasan</b><small>Director, Energy &amp; Utilities · Etisalat</small></span></figcaption></figure>
            <figure className="quote rv d3"><p>“We're all in Dubai to find the right people and grow our connection. A solid platform for cooperation.”</p><figcaption className="who"><img src="https://belegends.club/assets/dory.jpg" alt="" /><span><b>Dory Sakr</b><small>Director, Middle East Development · Barnes International Realty</small></span></figcaption></figure>
          </div>
        </div>
      </section>
    </>
  );
}
