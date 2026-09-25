'use client';
import { useState } from 'react';
import Arrow from './Arrow';

// Prototype registration: shows the success state. Connect onSubmit to the backend.
export default function RegisterCard({ times }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="reg" id="register">
      <div className="rings"><i /><i /><i /></div>
      {!sent ? (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <span className="kicker">Register</span>
          <h3>Request your seat</h3>
          <p className="reg-sub">Registrations are reviewed personally. We’ll send your invite with the joining link.</p>
          <div className="reg-times">{times.map(([c, t]) => <span key={c}><b>{t}</b>{c}</span>)}</div>
          <div className="field"><label htmlFor="r1">Full name</label><input id="r1" required placeholder="Your full name" /></div>
          <div className="field"><label htmlFor="r2">Email</label><input id="r2" type="email" required placeholder="you@company.com" /></div>
          <div className="field"><label htmlFor="r3">LinkedIn</label><input id="r3" required placeholder="linkedin.com/in/…" /></div>
          <div className="field"><label htmlFor="r4">You are</label>
            <select id="r4"><option>Investor</option><option>Family office</option><option>Fund manager</option><option>Founder</option></select></div>
          <button className="btn gold" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Request a seat <Arrow /></button>
          <p className="reg-note">Members join from their account — no registration needed.</p>
        </form>
      ) : (
        <div className="reg-done">
          <div className="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg></div>
          <h3>Request received.</h3>
          <p className="reg-sub">We review every registration personally. Final attendance locks 24 hours before the start.</p>
          <button className="btn ghost" type="button" onClick={() => setSent(false)}>Back</button>
        </div>
      )}
    </div>
  );
}
