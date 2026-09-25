import Link from 'next/link';

export default function ApplyFaq() {
  return (
    <>
      <section className="sec" id="apply" style={{paddingTop:"0"}}>
        <div className="wrap apply-grid">
          <div className="apply-card rv">
            <div className="rings"><i></i><i></i><i></i></div>
            <span className="kicker">Apply</span>
            <h2>Tell us what you invest in.</h2>
            <p>Five minutes. Reviewed by people, never automatically.</p>
            <ol className="flow">
              <li><b>1</b>Short investor application</li>
              <li><b>2</b>Personal review within 72 hours</li>
              <li><b>3</b>KYC and identity check</li>
              <li><b>4</b>Set your context, open a first request</li>
            </ol>
            <Link className="btn" href="/apply" style={{position:"relative"}}>Start application
              <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
          </div>
          <div className="faq rv d1" id="faq">
            <span className="kicker" style={{display:"block",padding:"8px 20px 14px"}}>Before you apply</span>
            <details open><summary>Does Legends take a fee on deals?<i></i></summary><p>No. No carry, no success fee, no percentage of any deal made through the club. Membership is the only revenue.</p></details>
            <details><summary>Where does the deal flow come from?<i></i></summary><p>From members, from founders introduced by members, and from the team's own sourcing. Founders never pay to be included.</p></details>
            <details><summary>Can other members contact me directly?<i></i></summary><p>No. Introductions move through the team. Contact details are revealed only after both sides agree.</p></details>
            <details><summary>Who is eligible?<i></i></summary><p>Only people on the investing side: angels, LPs, family offices, fund partners and corporate investors. Fund membership also requires a verified track record.</p></details>
            <details><summary>How does matching work?<i></i></summary><p>Your context — thesis, ticket, sectors, stages — is matched against other members and companies. The team reviews every match before anyone is contacted.</p></details>
            <details><summary>Is Legends only for Dubai?<i></i></summary><p>Legends started in Dubai. Members now operate across countries, and introductions are not limited by geography.</p></details>
          </div>
        </div>
      </section>
    </>
  );
}
