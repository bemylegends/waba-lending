'use client';
import { useEffect, useState } from 'react';

export default function ReadProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => { const h = document.documentElement; setP(Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))); };
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return <div className="readbar"><i style={{ transform: `scaleX(${p})` }} /></div>;
}
