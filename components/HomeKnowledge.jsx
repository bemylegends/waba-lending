import Link from 'next/link';
import Arrow from './Arrow';
import { ARTICLES } from '@/data/knowledge';

export default function HomeKnowledge() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="row-head">
          <div className="sec-head rv">
            <span className="kicker">Knowledge</span>
            <h2 className="h2">What Legends talk about when the door is closed.</h2>
          </div>
          <Link className="tlink rv" href="/knowledge">All essays <Arrow className="" /></Link>
        </div>
        <div className="kn-grid">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Link key={a.slug} className={'kn rv d' + i} href={a.href}>
              <div className="kn-img"><img loading="lazy" src={a.img} alt="" /></div>
              <div className="kn-txt">
                <span className="kicker">{a.tag}</span>
                <h3>{a.title}</h3>
                <span className="by">{a.author} · {a.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
