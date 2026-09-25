'use client';
import { useEffect, useRef, useState } from 'react';

// Animated walkthrough of one member request: Request → Match → Review → Intro.
// Requests and people are illustrative examples, not real members.
const REQUESTS = [
  {
    q: 'Looking for a co-investor who knows GCC fintech at Series A.',
    tags: ['Fintech', 'Series A', 'GCC', '$250–500k'],
    hit: [2, 7, 11],
    people: [
      ['FO', 'Family office principal', 'Dubai', 94, 'Led 6 fintech rounds'],
      ['GP', 'Fund partner, early stage', 'London', 91, 'MENA thesis'],
      ['CV', 'Corporate venture lead', 'Riyadh', 86, 'Payments focus'],
    ],
  },
  {
    q: 'Need a lead investor for a climate seed round in Europe.',
    tags: ['Climate', 'Seed', 'EU', 'Lead'],
    hit: [4, 9, 13],
    people: [
      ['GP', 'Climate fund partner', 'Amsterdam', 95, '14 seed deals'],
      ['AN', 'Angel, ex-operator', 'Berlin', 88, 'Energy background'],
      ['LP', 'LP in two climate funds', 'Zurich', 84, 'Co-invest rights'],
    ],
  },
  {
    q: 'Travelling to London — who is worth meeting on AI infrastructure?',
    tags: ['AI infra', 'City intro', 'London'],
    hit: [1, 6, 10],
    people: [
      ['SY', 'Syndicate lead', 'London', 93, 'Deep tech syndicate'],
      ['FO', 'Single family office', 'London', 90, 'AI & data mandate'],
      ['GP', 'Growth fund partner', 'London', 85, 'Infra portfolio'],
    ],
  },
];

// member nodes on two orbits (angle deg, radius)
const NODES = [
  [10, 118], [42, 78], [70, 118], [100, 78], [128, 118], [160, 78], [190, 118],
  [220, 78], [250, 118], [280, 78], [305, 118], [335, 78], [355, 118], [205, 118], [140, 78],
].map(([a, r]) => [160 + r * Math.cos((a * Math.PI) / 180), 160 + r * Math.sin((a * Math.PI) / 180)]);

const STEPS = ['Request', 'Match', 'Review', 'Intro'];
export const ENGINE_STEPS = STEPS;

export default function MatchEngine({ big = false, onStep }) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState('type'); // type | scan | hit | review | intro
  const [typed, setTyped] = useState('');
  const [tags, setTags] = useState(0);
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState(0);
  const [consent, setConsent] = useState(0); // 0,1,2,3(done)
  const r = REQUESTS[i % REQUESTS.length];
  const raf = useRef();

  const step = { type: 0, scan: 1, hit: 1, review: 2, intro: 3 }[phase];
  useEffect(() => { onStep && onStep(step); }, [step, onStep]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers = [];
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    setPhase('type'); setTyped(''); setTags(0); setCount(0); setRows(0); setConsent(0);

    if (reduce) {
      setTyped(r.q); setTags(r.tags.length); setPhase('review'); setRows(3); setCount(1300);
      return () => timers.forEach(clearTimeout);
    }
    let c = 0;
    const iv = setInterval(() => { c++; setTyped(r.q.slice(0, c)); if (c >= r.q.length) clearInterval(iv); }, 26);
    const T = r.q.length * 26;
    r.tags.forEach((_, k) => at(T + 150 + k * 120, () => setTags(k + 1)));
    const S = T + 900;
    at(S, () => {
      setPhase('scan');
      const t0 = performance.now();
      const tick = (t) => { const p = Math.min(1, (t - t0) / 1400); setCount(Math.round(1300 * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf.current = requestAnimationFrame(tick); };
      raf.current = requestAnimationFrame(tick);
      window.dispatchEvent(new Event('legends:match'));
    });
    at(S + 1600, () => setPhase('hit'));
    at(S + 3200, () => setPhase('review'));
    [0, 1, 2].forEach((k) => at(S + 3350 + k * 260, () => setRows(k + 1)));
    const I = S + 6200;
    at(I, () => setPhase('intro'));
    at(I + 700, () => setConsent(1));
    at(I + 1400, () => setConsent(2));
    at(I + 2100, () => setConsent(3));
    at(I + 4600, () => setI((x) => x + 1));
    return () => { clearInterval(iv); timers.forEach(clearTimeout); cancelAnimationFrame(raf.current); };
  }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  const scanning = phase === 'scan' || phase === 'hit';
  const top = r.people[0];

  return (
    <div className={'me' + (big ? ' big' : '')} aria-label="Example of how a member request is matched">
      {/* stepper */}
      <div className="me-steps">
        {STEPS.map((s, k) => (
          <div key={s} className={'me-st' + (k < step ? ' past' : '') + (k === step ? ' on' : '')}>
            <i>{k < step ? '✓' : k + 1}</i><span>{s}</span>
          </div>
        ))}
        <div className="me-bar"><b style={{ width: `${(step / 3) * 100}%` }} /></div>
      </div>

      {/* request composer (always visible, collapses after sending) */}
      <div className={'me-req' + (phase === 'type' ? ' live' : ' sent')}>
        <div className="me-av you">You</div>
        <div className="me-q">
          <p>{typed}{phase === 'type' && <span className="caret" />}</p>
          <div className="me-tags">
            {r.tags.map((t, k) => <span key={t} className={k < tags ? 'in' : ''}>{t}</span>)}
          </div>
        </div>
      </div>

      <div className="me-stage">
        {/* MATCH: radar */}
        <div className={'me-layer me-radar' + (scanning ? ' on' : '') + (phase === 'type' ? ' idle' : '') + (phase === 'hit' ? ' hit' : '')}>
          <div className="radar">
            <div className="sweep" />
            <svg viewBox="0 0 320 320">
              <circle cx="160" cy="160" r="78" className="orb" />
              <circle cx="160" cy="160" r="118" className="orb" />
              <circle cx="160" cy="160" r="150" className="orb faint" />
              <g className="spin">
                {r.hit.map((h) => (
                  <line key={'l' + h} x1="160" y1="160" x2={NODES[h][0]} y2={NODES[h][1]} className="ln" pathLength="1" />
                ))}
                {NODES.map(([x, y], k) => {
                  const isHit = r.hit.includes(k);
                  return (
                    <g key={k} className={'nd' + (isHit ? ' h' : '')}>
                      {isHit && <circle cx={x} cy={y} r="13" className="halo" />}
                      <circle cx={x} cy={y} r={isHit ? 6 : 4} />
                    </g>
                  );
                })}
              </g>
              <circle cx="160" cy="160" r="22" className="core" />
              <text x="160" y="164.5" textAnchor="middle" className="core-t">You</text>
            </svg>
          </div>
          <div className="me-count">
            {phase === 'type' ? <>Your network · <b>1,300+</b> member contexts</>
              : phase === 'hit' ? <><b>3</b> strong fits found</>
              : <>Reading <b>{count.toLocaleString('en-US')}+</b> member contexts</>}
          </div>
        </div>

        {/* REVIEW: results */}
        <div className={'me-layer me-res' + (phase === 'review' ? ' on' : '')}>
          <div className="me-res-h"><span className="kicker">Checked by the Legends team</span><span className="me-chip">3 of 1,300+</span></div>
          {r.people.map((p, k) => (
            <div key={i + '-' + k} className={'me-row' + (k < rows ? ' in' : '')}>
              <div className="me-av">{p[0]}</div>
              <div className="me-row-t">
                <b>{p[1]}</b>
                <small>{p[2]} · {p[4]}</small>
                <div className="fitbar"><i style={{ width: k < rows ? p[3] + '%' : 0 }} /></div>
              </div>
              <span className="pct">{p[3]}%</span>
            </div>
          ))}
        </div>

        {/* INTRO: double consent */}
        <div className={'me-layer me-intro' + (phase === 'intro' ? ' on' : '') + (consent >= 3 ? ' fin' : '')}>
          <div className="pair">
            <div className={'side' + (consent >= 1 ? ' ok' : '')}>
              <div className="me-av you lg">You</div>
              <span className="cons">{consent >= 1 ? '✓ Agreed' : 'Waiting…'}</span>
            </div>
            <div className="bridge"><i /><em /></div>
            <div className={'side' + (consent >= 2 ? ' ok' : '')}>
              <div className="me-av lg">{top[0]}</div>
              <span className="cons">{consent >= 2 ? '✓ Agreed' : 'Asked first…'}</span>
            </div>
          </div>
          <div className="intro-badge">
            <i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg></i>
            <div><b>Introduction made</b><small>{top[1]} · contacts shared after double consent</small></div>
          </div>
        </div>
      </div>
    </div>
  );
}
