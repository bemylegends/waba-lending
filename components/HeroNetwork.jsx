'use client';
import { useEffect, useRef } from 'react';

// Subtle background network. Listens for a `legends:match` window event to draw gold "match" lines.
export default function HeroNetwork() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    const cx = cv.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, nodes = [], pulse = [], raf, timers = [];

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const seed = () => {
      const n = Math.round(Math.min(38, Math.max(18, (W * H) / 32000)));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 0.9 + 0.8, hot: 0,
      }));
    };
    const draw = () => {
      cx.clearRect(0, 0, W, H);
      const max = 190;
      for (const a of nodes) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < -20) a.x = W + 20; if (a.x > W + 20) a.x = -20;
        if (a.y < -20) a.y = H + 20; if (a.y > H + 20) a.y = -20;
        a.hot *= 0.99;
      }
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < max) {
          cx.strokeStyle = `rgba(160,122,46,${0.075 * (1 - d / max)})`; cx.lineWidth = 1;
          cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke();
        }
      }
      for (let i = pulse.length - 1; i >= 0; i--) {
        const p = pulse[i]; p.t += 0.009;
        const t = Math.min(p.t, 1), { a, b } = p;
        cx.strokeStyle = `rgba(197,153,58,${0.32 * (1 - Math.max(0, p.t - 1))})`; cx.lineWidth = 1.2;
        cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t); cx.stroke();
        if (p.t >= 1) b.hot = Math.max(b.hot, 0.6);
        if (p.t > 2) pulse.splice(i, 1);
      }
      for (const a of nodes) {
        if (a.hot > 0.05) {
          cx.fillStyle = `rgba(212,173,90,${0.12 * a.hot})`;
          cx.beginPath(); cx.arc(a.x, a.y, a.r + 9 * a.hot, 0, 7); cx.fill();
        }
        cx.fillStyle = `rgba(160,122,46,${0.22 + 0.3 * a.hot})`;
        cx.beginPath(); cx.arc(a.x, a.y, a.r, 0, 7); cx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    const onMatch = () => {
      if (!nodes.length) return;
      const src = nodes[Math.floor(Math.random() * nodes.length)];
      const near = nodes.filter((n) => n !== src)
        .sort((p, q) => Math.hypot(p.x - src.x, p.y - src.y) - Math.hypot(q.x - src.x, q.y - src.y)).slice(0, 6);
      src.hot = 0.8;
      [0, 1, 2].forEach((k) => timers.push(setTimeout(() => pulse.push({ a: src, b: near[k * 2], t: 0 }), k * 320)));
    };
    const onResize = () => { size(); seed(); };

    size(); seed(); draw();
    window.addEventListener('resize', onResize);
    window.addEventListener('legends:match', onMatch);
    return () => {
      cancelAnimationFrame(raf); timers.forEach(clearTimeout);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('legends:match', onMatch);
    };
  }, []);
  return <canvas id="net" ref={ref} aria-hidden="true" />;
}
