import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <Link className="brand" href="/"><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b><small>PRIVATE INVESTOR NETWORK</small></span></Link>
              <p style={{marginTop:"18px",fontSize:"14px",color:"var(--ink-3)",maxWidth:"300px"}}>The right person. At the right moment.</p>
            </div>
            <div><h4>Club</h4><ul><li><Link href="/how">How it works</Link></li><li><Link href="/membership">Membership</Link></li></ul></div>
            <div><h4>Legends</h4><ul><li><Link href="/about">About</Link></li><li><Link href="/events">Events</Link></li><li><Link href="/knowledge">Knowledge</Link></li></ul></div>
            <div><h4>Members</h4><ul><li><Link href="/login">Log in</Link></li><li><Link href="/apply">Apply</Link></li><li><Link href="/about">Contact</Link></li></ul></div>
            <div className="legal"><span>© 2026 Legends</span><span><Link href="#terms">Terms</Link> · <Link href="#privacy">Privacy</Link></span></div>
          </div>
        </div>
      </footer>
    </>
  );
}
