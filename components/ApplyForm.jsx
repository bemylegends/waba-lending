'use client';
import { useState } from 'react';
import Arrow from './Arrow';

// Prototype form: shows the success state. Connect onSubmit to the real backend / CRM.
export default function ApplyForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className="form rv d1" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      {!sent && (
        <div>
          <div className="fgrid">
          <div className="field full"><label>Membership track</label>
          <div className="seg"><input type="radio" name="t" id="t1" defaultChecked /><label htmlFor="t1">Private</label><input type="radio" name="t" id="t2" /><label htmlFor="t2">Fund</label><input type="radio" name="t" id="t3" /><label htmlFor="t3">Corporate</label></div></div>
          <div className="field"><label htmlFor="f1">Full name*</label><input id="f1" required placeholder="Your full name" /></div>
          <div className="field"><label htmlFor="f2">Phone (with country code)*</label><input id="f2" required placeholder="+971 …" /></div>
          <div className="field"><label htmlFor="f3">Organisation</label><input id="f3" placeholder="Fund, family office or company" /></div>
          <div className="field"><label htmlFor="f4">LinkedIn URL*</label><input id="f4" required placeholder="linkedin.com/in/…" /></div>
          <div className="field"><label htmlFor="f5">Investor type*</label><select id="f5"><option>Angel</option><option>Family office</option><option>LP</option><option>Syndicate lead</option><option>GP / fund partner</option><option>Corporate venture</option></select></div>
          <div className="field"><label htmlFor="f6">Typical ticket*</label><select id="f6"><option>Under $100k</option><option>$100k–500k</option><option>$500k–2M</option><option>$2M–10M</option><option>$10M+</option></select></div>
          <div className="field full"><label>Sectors of interest</label>
          <div className="seg"><input type="checkbox" id="s1" /><label htmlFor="s1">Fintech</label><input type="checkbox" id="s2" /><label htmlFor="s2">AI</label><input type="checkbox" id="s3" /><label htmlFor="s3">Climate</label><input type="checkbox" id="s4" /><label htmlFor="s4">Real estate</label><input type="checkbox" id="s5" /><label htmlFor="s5">Health</label><input type="checkbox" id="s6" /><label htmlFor="s6">Consumer</label><input type="checkbox" id="s7" /><label htmlFor="s7">Industrial</label></div></div>
          <div className="field full"><label htmlFor="f7">What would be the most valuable outcome for you right now?*</label><textarea id="f7" placeholder="Deals in a sector, a co-investor, a lead, market access, an expert…"></textarea></div>
          <div className="field full"><label htmlFor="f8">Who referred you?</label><input id="f8" placeholder="Optional" /></div>
          <label className="check full" style={{gridColumn:"1/-1"}}><input type="checkbox" defaultChecked />Legends may contact me about my application, events and related opportunities. I can withdraw this consent at any time.</label>
          </div>
          <button className="btn gold" type="submit">Submit application <Arrow /></button>
        </div>
      )}
      <div className={'done' + (sent ? ' on' : '')}>
        <div className="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg></div>
        <h3 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-.04em' }}>Application received.</h3>
        <p style={{ color: 'var(--ink-2)', marginTop: 10 }}>Prototype state. The live form will route the application to the Legends team.</p>
        <button className="btn ghost" type="button" onClick={() => setSent(false)} style={{ marginTop: 22 }}>Back to form</button>
      </div>
    </form>
  );
}
