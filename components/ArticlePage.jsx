import Link from 'next/link';
import Arrow from './Arrow';
import Band from './Band';
import ReadProgress from './ReadProgress';
import { ARTICLES } from '@/data/knowledge';


function Body({ blocks }) {
  return blocks.map((b, k) =>
    b.h ? <h2 key={k}>{b.h}</h2> : b.quote ? <blockquote key={k}>{b.quote}</blockquote> : <p key={k}>{b.p}</p>);
}

export default function ArticlePage({ slug }) {
  const i = ARTICLES.findIndex((x) => x.slug === slug);
  if (i < 0) return null;
  const a = ARTICLES[i];
  const more = ARTICLES.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <ReadProgress />
      <section className="art-hero">
        <div className="wrap">
          <div className="crumbs rv"><Link href="/">Home</Link><span>/</span><Link href="/knowledge">Knowledge</Link><span>/</span><span>{a.tag}</span></div>
          <div className="art-head">
            <span className="kicker rv d1">{a.tag} · {a.date}</span>
            <h1 className="h1 rv d1">{a.title}</h1>
            <p className="lead rv d2">{a.excerpt}</p>
            <div className="art-author rv d3">
              <div className="me-av">{a.author.split(' ').map((w) => w[0]).join('')}</div>
              <div><b>{a.author}</b><small>{a.authorRole}</small></div>
            </div>
          </div>
          <div className="art-cover rv d2"><img src={a.img} alt="" /></div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 'clamp(40px,5vw,72px)' }}>
        <div className="wrap art-grid">
          <aside className="art-side">
            <div className="art-from rv">
              <span className="kicker">From the InvestHack</span>
              <p>{a.eventTitle}</p>
              <small>{a.eventDate}</small>
              <a className="tlink" href={a.eventUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14 }}>About the event <Arrow className="" /></a>
            </div>
          </aside>
          <article className="prose rv">
            {a.body ? <Body blocks={a.body} /> : (
              <>
                <p className={/^[A-Za-z]/.test(a.excerpt) ? "dropcap" : ""}>{a.excerpt}</p>
                <div className="prose-note">
                  <span className="kicker">Full essay</span>
                  <p>The full text of this essay is published on the Legends blog.</p>
                  <a className="btn" href={a.original} target="_blank" rel="noopener noreferrer">Read the essay <Arrow /></a>
                </div>
              </>
            )}
          </article>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="row-head">
            <div className="sec-head rv"><span className="kicker">Keep reading</span><h2 className="h2">More from Knowledge.</h2></div>
            <Link className="tlink rv" href="/knowledge">All essays <Arrow className="" /></Link>
          </div>
          <div className="kn-grid">
            {more.map((m, k) => (
              <Link key={m.slug} className={'kn rv d' + k} href={m.href}>
                <div className="kn-img"><img loading="lazy" src={m.img} alt="" /></div>
                <div className="kn-txt"><span className="kicker">{m.tag}</span><h3>{m.title}</h3><span className="by">{m.author} · {m.date}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}
