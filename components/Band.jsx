import Link from 'next/link';

export default function Band() {
  return (
    <>
      <section className="sec" style={{paddingTop:"0"}}>
        <div className="wrap">
          <div className="band rv">
            <div className="rings"><i></i><i></i><i></i></div>
            <h2>Tell us what you invest in. We will tell you who you should meet.</h2>
            <Link className="btn" href="/apply">Apply for membership <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
          </div>
        </div>
      </section>
    </>
  );
}
