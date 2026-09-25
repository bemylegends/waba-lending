'use client';
import { useCallback, useState } from 'react';
import MatchEngine from './MatchEngine';

const STAGES = [
  ['Your request', 'Say what you need right now — a co-investor, a lead, deals in a sector, people to meet in a city. Tags come from your investor context.'],
  ['Matching across the network', 'Your request is read against the context of every member: thesis, ticket, sectors, stages and what they can offer.'],
  ['Reviewed by the team', 'The strongest fits are checked by hand. We explain why each introduction makes sense before anyone is contacted.'],
  ['Double-consent introduction', 'The other side is asked first. Contacts are shared only when both of you agree.'],
];

export default function HowFlow() {
  const [step, setStep] = useState(0);
  const onStep = useCallback((s) => setStep(s), []);
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap flow2">
        <div>
          <div className="sec-head rv" style={{ marginBottom: 28 }}>
            <span className="kicker">One request, end to end</span>
            <h2 className="h2" style={{ fontSize: 'clamp(32px,3.6vw,48px)' }}>Watch a request become an introduction.</h2>
          </div>
          <div className="fsteps">
            {STAGES.map(([t, d], k) => (
              <div key={t} className={'fstep' + (k === step ? ' on' : '') + (k < step ? ' past' : '')}>
                <span className="n">{k < step ? '✓' : '0' + (k + 1)}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="rv d1" style={{ display: 'grid' }}><MatchEngine big onStep={onStep} /></div>
      </div>
    </section>
  );
}
