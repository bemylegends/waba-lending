import Link from 'next/link';
import ApplyForm from '@/components/ApplyForm';

export const metadata = { title: "Legends \u2014 Apply" };

export default function Page() {
  return (
    <>
      <section className="phero">
        <img className="sym" src="/brand/symbol.png" alt="" />
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span>/</span><span>Apply</span></div>
          <h1 className="h1 rv" style={{marginTop:"22px"}}>Tell us what you invest in.</h1>
          <p className="lead rv d1">We use this to understand your level, your thesis and what would make the club valuable to you. Reviewed personally within 72 hours.</p>
        </div>
      </section>
      <section className="sec" style={{paddingTop:"0"}}>
        <div className="wrap formwrap">
          <div className="apply-card rv">
            <div className="rings"><i></i><i></i><i></i></div>
            <span className="kicker">What happens next</span>
            <ol className="flow">
              <li><b>1</b>Short investor application</li>
              <li><b>2</b>Personal review within 72 hours</li>
              <li><b>3</b>KYC and identity check via Persona</li>
              <li><b>4</b>Set your context, open a first request</li>
            </ol>
            <p style={{position:"relative"}}>Only people on the investing side are admitted. Fund membership also requires a verified track record.</p>
          </div>
          <ApplyForm />
        </div>
      </section>
    </>
  );
}
