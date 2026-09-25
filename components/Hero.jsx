import Link from 'next/link';
import Arrow from './Arrow';
import HeroNetwork from './HeroNetwork';
import MatchEngine from './MatchEngine';

export default function Hero() {
  return (
    <section className="hero">
      <HeroNetwork />
      <img className="hero-sym" src="/brand/symbol.png" alt="" />
      <div className="wrap">
        <div>
          <h1 className="h1 rv">The right deal.<br />The right <span className="gold">co&#8209;investor.</span></h1>
          <p className="lead rv d1">Legends is a private club for people who deploy capital. Tell us what you are looking for — we find the members who fit and introduce you when both sides agree.</p>
          <div className="ctas rv d2">
            <Link className="btn gold" href="/apply">Apply for membership <Arrow /></Link>
            <Link className="btn ghost" href="/how">See how it works</Link>
          </div>
        </div>
        <div className="me-wrap rv d2"><MatchEngine /></div>
      </div>
    </section>
  );
}
