import Link from 'next/link';

export const metadata = { title: "Legends \u2014 Log in" };

export default function Page() {
  return (
    <>
      <section className="phero" style={{minHeight:"80vh"}}>
        <div className="wrap">
          <div className="login-card rv">
            <span className="kicker">Member area</span>
            <h2 style={{fontSize:"36px",fontWeight:"700",letterSpacing:"-.045em",lineHeight:"1.05",margin:"14px 0 22px"}}>Welcome back.</h2>
            <div className="field"><label htmlFor="l1">Email</label><input id="l1" placeholder="you@company.com" /></div>
            <button className="btn" type="button" style={{marginTop:"16px",width:"100%",justifyContent:"center"}}>Send me a login link <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
            <p style={{marginTop:"20px",fontSize:"14px",color:"var(--ink-3)"}}>Not a member yet? <Link className="tlink" href="/apply" style={{fontSize:"14px"}}>Apply to join</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
