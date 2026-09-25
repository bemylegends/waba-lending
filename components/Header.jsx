'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Arrow from './Arrow';

const NAV = [
  ['/how', 'How it works'],
  // ['/deals', 'Deal flow'],  — hidden for now, page kept in app/_hidden/deals
  ['/membership', 'Membership'],
  ['/events', 'Events'],
  ['/knowledge', 'Knowledge'],
  ['/about', 'About'],
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const isOn = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header className={'hdr' + (scrolled ? ' scrolled' : '')}>
        <div className="hdr-in">
          <Link className="brand" href="/" aria-label="Legends home">
            {/* TODO: replace with the official SVG lockup for light backgrounds */}
            <img src="/brand/symbol.png" alt="" />
            <span><b>LEGENDS</b><small>PRIVATE INVESTOR NETWORK</small></span>
          </Link>
          <nav className="nav" aria-label="Main">
            {NAV.map(([href, label]) => (
              <Link key={href} href={href} className={isOn(href) ? 'on' : ''}>{label}</Link>
            ))}
          </nav>
          <div className="hdr-act">
            <Link className="login" href="/login">Log in</Link>
            <Link className="btn" href="/apply">Apply to join <Arrow /></Link>
            <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 8h16M4 16h16" /></svg>
            </button>
          </div>
        </div>
      </header>
      <nav className={'mnav' + (open ? ' open' : '')} aria-label="Mobile">
        {NAV.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        <Link href="/login">Log in</Link>
        <Link className="btn gold" href="/apply">Apply to join</Link>
      </nav>
    </>
  );
}
