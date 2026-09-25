import Link from 'next/link';
import Band from '@/components/Band';
import { ARTICLES } from '@/data/knowledge';

export const metadata = { title: 'Legends — Knowledge' };

export default function Page() {
  const [lead, ...rest] = ARTICLES;
  return (
    <>
      <section className="phero">
        <img className="sym" src="/brand/symbol.png" alt="" />
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link><span>/</span><span>Knowledge</span></div>
          <h1 className="h1 rv" style={{ marginTop: 22 }}>What Legends talk about when the door is closed.</h1>
          <p className="lead rv d1">Conversations with our speakers, turned into essays — plus member stories from the network.</p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Link className="kn-lead rv" href={lead.href}>
            <div className="kn-img"><img src={lead.img} alt="" /></div>
            <div className="kn-txt">
              <span className="kicker">{lead.tag} · Latest</span>
              <h2>{lead.title}</h2>
              <p>{lead.excerpt}</p>
              <span className="by">{lead.author} · {lead.date}</span>
            </div>
          </Link>
          <div className="kn-grid">
            {rest.map((a, i) => (
              <Link key={a.slug} className={'kn rv d' + (i % 3)} href={a.href}>
                <div className="kn-img"><img loading="lazy" src={a.img} alt="" /></div>
                <div className="kn-txt">
                  <span className="kicker">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="by">{a.author} · {a.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}
