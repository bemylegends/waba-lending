import Link from 'next/link';
import ApplyFaq from '@/components/ApplyFaq';
import Stance from '@/components/Stance';
import Tracks from '@/components/Tracks';

export const metadata = { title: "Legends \u2014 Membership" };

export default function Page() {
  return (
    <>
      <section className="phero">
        <img className="sym" src="/brand/symbol.png" alt="" />
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span>/</span><span>Membership</span></div>
          <h1 className="h1 rv" style={{marginTop:"22px"}}>A club with only investors in it.</h1>
          <p className="lead rv d1">Legends is a private network for people who deploy capital. Three membership tracks, one rule: every member is on the investing side of the table.</p>
        </div>
      </section>
      <Tracks />
      <section className="sec" style={{paddingTop:"0"}}>
        <div className="wrap">
          <div className="sec-head rv"><span className="kicker">Compare</span><h2 className="h2">What each track includes.</h2></div>
          <div className="cmp rv"><div className="cmp-wrap"><table>
            <thead><tr><th>Included</th><th>Private</th><th>Fund</th><th>Corporate</th></tr></thead>
            <tbody>
              <tr><td>Live requests worked by the team</td><td className="y">3</td><td className="y">3</td><td className="y">3</td></tr>
              <tr><td>Double-consent introductions</td><td className="y">✓</td><td className="y">✓</td><td className="y">✓</td></tr>
              <tr><td>Monthly curated deal flow</td><td className="y">✓</td><td className="y">✓</td><td className="y">✓</td></tr>
              <tr><td>Co-investment circle with peers</td><td className="y">✓</td><td className="y">✓</td><td className="y">✓</td></tr>
              <tr><td>Online sessions, priority at private dinners</td><td className="y">✓</td><td className="y">✓</td><td className="y">✓</td></tr>
              <tr><td>City introductions when you travel</td><td className="y">✓</td><td className="y">✓</td><td className="y">✓</td></tr>
              <tr><td>Requests for companies matching your thesis</td><td className="n">—</td><td className="y">✓</td><td className="y">✓</td></tr>
              <tr><td>Shortlisted first when a request fits your strategy</td><td className="n">—</td><td className="y">✓</td><td className="n">—</td></tr>
              <tr><td>Closed circle of fund peers</td><td className="n">—</td><td className="y">✓</td><td className="n">—</td></tr>
              <tr><td>Speaker slots, host a thematic session</td><td className="n">—</td><td className="y">✓</td><td className="n">—</td></tr>
              <tr><td>Closed demos with vetted companies</td><td className="n">—</td><td className="n">—</td><td className="y">✓</td></tr>
              <tr><td>Thematic sessions on your industry</td><td className="n">—</td><td className="n">—</td><td className="y">✓</td></tr>
              <tr><td>Seats</td><td>1</td><td>Partners of the fund</td><td>Up to 3</td></tr>
              <tr><td>Entry</td><td>Approval</td><td>Approval + track record</td><td>Company-level approval</td></tr>
            </tbody>
          </table></div></div>
        </div>
      </section>
      <Stance />
      <ApplyFaq />
    </>
  );
}
