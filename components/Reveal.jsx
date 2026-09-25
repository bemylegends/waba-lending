'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Fades in every .rv element when it scrolls into view. Re-runs on route change.
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    const scan = () => document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);
  return null;
}
