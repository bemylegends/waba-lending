"use client";

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {

      try{
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // real InvestHack / Legends event speakers — each photo is the hero-block image from that
        // person's own event page on belegends.club (not a quotes/testimonial image)
        var people = [
          {name:"Janneke Niessen", role:"Founding Partner, CapitalT", g:["#E0A83D","#BE8C2B"], img:"https://belegends.club/api/files/pbc_2443081517/nkx8sv2d9mrxvkq/janneke_niessen_l_1n3fn26cd9.png"},
          {name:"Walied Albasheer", role:"Founder & Managing Partner", g:["#C99A3C","#A8791F"], img:"https://belegends.club/api/files/pbc_2443081517/limyhdr7l2k2qzo/walied_baner_4uq2nlyted.webp"},
          {name:"Vijay Sivaram", role:"Co-Founder, RVAI Global", g:["#D4AD5A","#9C6E22"], img:"https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=800,height=999.6434937611408/uploads/q9/40ef6482-4c43-4ebf-a978-70176a10d925.jpg"},
          {name:"Varun Malik", role:"Founder, Konsälidön", g:["#E7C066","#B87F1E"], img:"https://belegends.club/api/files/pbc_2443081517/m0nw01p7ifx5xus/varun_baner_8miqz1fy27.webp"},
          {name:"Julius Bachmann", role:"Founder, Bachmann Catalyst", g:["#DDA83F","#8F6420"], img:"https://belegends.club/api/files/pbc_2443081517/78tivioujgl9c02/speaker_julius_9em8jxjz6r.webp"},
          {name:"Alex Felman", role:"General Partner, Felman Family Office", g:["#EFCB74","#C2902A"], img:"https://belegends.club/api/files/pbc_2443081517/kfzgg99w8mivqcf/alex_f_lend_tk1a658sfq.png"}
        ];
        function initials(n){ return n.split(" ").map(function(w){return w[0]}).join("").slice(0,2).toUpperCase(); }
        // every speaker photo in the grid sits on this neutral gray radial "halo" now — matches the
        // naturally-vignetted studio shots (e.g. Vijay's) instead of a per-speaker gold tile.
        function grayHaloBg(){ return 'radial-gradient(ellipse 78% 82% at 50% 38%,#9a9a9a 0%,#6b6b6b 45%,#3c3c3c 100%)'; }
        function faceEl(p, size){
          // real photo with graceful fallback to a monogram tile if the host can't load it
          var img = document.createElement('img');
          img.src = p.img;
          img.alt = p.name;
          img.loading = 'lazy';
          img.onerror = function(){
            var parent = img.parentElement;
            img.remove();
            parent.style.background = 'linear-gradient(135deg,'+p.g[0]+','+p.g[1]+')';
            parent.textContent = initials(p.name);
          };
          return img;
        }

        // avatar stack in hero proof — role icons, not photos (photos already live in the mosaic on the right)
        var roleIcons = [
          {label:"Founder", g:["#E0A83D","#BE8C2B"], path:'<path d="M4 20v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2"/><circle cx="12" cy="7" r="4"/>'},
          {label:"Investor", g:["#D4AD5A","#9C6E22"], path:'<path d="M3 17l5-5 4 4 8-8"/><path d="M14 8h6v6"/>'},
          {label:"Operator", g:["#E7C066","#B87F1E"], path:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'},
          {label:"Fund Partner", g:["#DDA83F","#8F6420"], path:'<path d="M12 2l9 4.5-9 4.5-9-4.5L12 2z"/><path d="M3 6.5V17l9 4.5 9-4.5V6.5"/>'},
          {label:"Angel", g:["#EFCB74","#C2902A"], path:'<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>'}
        ];
        var stack = document.getElementById('avatarStack');
        roleIcons.forEach(function(r){
          var d = document.createElement('div');
          d.className = 'chip';
          d.style.background = 'linear-gradient(135deg,'+r.g[0]+','+r.g[1]+')';
          d.title = r.label;
          d.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2b2008" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+r.path+'</svg>';
          stack.appendChild(d);
        });

        // mosaic cards
        document.querySelectorAll('.mcard').forEach(function(el){
          var i = +el.getAttribute('data-people');
          var p = people[i];
          if(!p) return;
          var face = document.createElement('div');
          face.className = 'face';
          face.style.background = 'linear-gradient(135deg,'+p.g[0]+','+p.g[1]+')';
          face.appendChild(faceEl(p));
          var nm = document.createElement('div'); nm.className='mname'; nm.textContent = p.name;
          var rl = document.createElement('div'); rl.className='mrole'; rl.textContent = p.role;
          el.appendChild(face); el.appendChild(nm); el.appendChild(rl);
        });

        // speaker grid
        var grid = document.getElementById('speakerGrid');
        people.forEach(function(p){
          var card = document.createElement('div');
          card.className = 'speaker';
          var av = document.createElement('div');
          av.className = 'avatar';
          av.style.background = grayHaloBg();
          av.appendChild(faceEl(p));
          var nm = document.createElement('div'); nm.className='name'; nm.textContent = p.name;
          var rl = document.createElement('div'); rl.className='role'; rl.textContent = p.role;
          card.appendChild(av); card.appendChild(nm); card.appendChild(rl);
          grid.appendChild(card);
        });

        // pinned parallax feature: sticky card, atmosphere shots + brand facts sweeping past — fast, roomy, varied.
        // atmosphere = venue / group imagery (not the named speakers, who already have their own section) —
        // each entry points at a real photo in /public/atmosphere; falls back to a themed icon tile if `img` is empty.
        var atmosphere = [
          {icon:'venue', caption:"Inside a session", g:["#E0A83D","#BE8C2B"], img:"/atmosphere/spotlight.jpg"},
          {icon:'group', caption:"The network, together", g:["#D4AD5A","#9C6E22"], img:"/atmosphere/group.jpg"},
          {icon:'mingle', caption:"Before it starts", g:["#E7C066","#B87F1E"], img:"/atmosphere/card.jpg"},
          {icon:'space', caption:"Where it happens", g:["#DDA83F","#8F6420"], img:"/atmosphere/venue-empty.jpg"}
        ];
        var atmosphereIcons = {
          venue:'<path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-6h6v6"/>',
          group:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20v-1.3A4.4 4.4 0 0 1 7.4 14.3h3.2A4.4 4.4 0 0 1 15 18.7V20"/><circle cx="17.2" cy="8.4" r="2.4"/><path d="M15.6 14.4A3.9 3.9 0 0 1 21 18v2"/>',
          mingle:'<path d="M4 5h16v10H8l-4 4V5z"/><path d="M8 9h8M8 12h5"/>',
          space:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16"/><path d="M10 10v10"/>'
        };
        var facts = [
          {text:"AI-powered network", bg:"#241A07", cls:"on-dark"},
          {text:"Founders & investors", bg:"linear-gradient(135deg,#E0A83D,#BE8C2B)", cls:""},
          {text:"3 membership tracks", bg:"var(--surface-2)", cls:"bordered"},
          {text:"Session, then the network", bg:"var(--surface)", cls:"bordered"},
          {text:"Person first.", bg:"#241A07", cls:"on-dark"}
        ];
        // spread across the full width — left, center (free to sit over the card), right — mixing atmosphere
        // tiles and facts. on narrow screens only the un-hidden entries survive, so those are kept balanced
        // left/right on their own (see keep-mobile logic below) — the 4 atmosphere chips carry that job,
        // facts are decorative extras on wide screens.
        var pinLayout = [
          {top:"0%",  left:"7%",  w:220, h:230, from:30,  to:-25, type:"atmosphere", a:0},
          {top:"3%",  left:"40%", w:220, h:160, from:-32, to:34,  type:"fact",  f:0, mobileHide:true},
          {top:"6%",  left:"80%", w:210, h:190, from:-26, to:30,  type:"atmosphere", a:1},
          {top:"46%", left:"11%", w:210, h:160, from:32,  to:-30, type:"fact",  f:3, mobileHide:true},
          {top:"48%", left:"68%", w:210, h:160, from:-28, to:32,  type:"fact",  f:1, mobileHide:true},
          {top:"80%", left:"5%",  w:220, h:180, from:26,  to:-30, type:"atmosphere", a:2},
          {top:"82%", left:"43%", w:220, h:150, from:28,  to:-34, type:"fact",  f:2, mobileHide:true},
          {top:"76%", left:"77%", w:210, h:210, from:-30, to:28,  type:"atmosphere", a:3}
        ];
        var pinPhotos = document.getElementById('pinPhotos');
        var pinChips = pinLayout.map(function(spot){
          var chip = document.createElement('div');
          chip.className = 'pin-chip' + (spot.mobileHide ? '' : ' keep-mobile');
          chip.style.top = spot.top;
          chip.style.left = spot.left;
          chip.style.width = spot.w + 'px';
          chip.style.height = spot.h + 'px';
          if(spot.type === 'atmosphere'){
            var a = atmosphere[spot.a % atmosphere.length];
            var fill = document.createElement('div');
            fill.className = 'photo-fill';
            fill.style.background = 'linear-gradient(135deg,'+a.g[0]+','+a.g[1]+')';
            if(a.img){
              // once a real photo URL is set on this entry, it replaces the icon automatically
              var img = document.createElement('img');
              img.src = a.img; img.alt = a.caption; img.loading = 'lazy';
              img.onerror = function(){ img.remove(); };
              fill.appendChild(img);
            } else {
              var ic = document.createElement('div');
              ic.className = 'atmo-icon';
              ic.innerHTML = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2b2008" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+atmosphereIcons[a.icon]+'</svg>';
              fill.appendChild(ic);
            }
            chip.appendChild(fill);
            var cap = document.createElement('div');
            cap.className = 'cap';
            cap.textContent = a.caption;
            chip.appendChild(cap);
          } else {
            var fa = facts[spot.f % facts.length];
            chip.classList.add('fact');
            if(fa.cls) chip.classList.add(fa.cls);
            chip.style.background = fa.bg;
            var txt = document.createElement('span'); txt.className = 'txt'; txt.textContent = fa.text;
            chip.appendChild(txt);
          }
          pinPhotos.appendChild(chip);
          return {el:chip, from:spot.from, to:spot.to};
        });

        // chip parallax only — visibility (fade in/out) is handled by the shared
        // reveal/IntersectionObserver system below, so the block never sits invisible
        // while it's plainly on screen (was the "looks glitchy" bug)
        var pinSection = document.getElementById('pinFeature');
        if(!reduced){
          var ticking = false;
          function updatePin(){
            ticking = false;
            var rect = pinSection.getBoundingClientRect();
            var scrollable = rect.height - window.innerHeight;
            var progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
            pinChips.forEach(function(c){
              var vh = c.from + (c.to - c.from) * progress;
              c.el.style.transform = 'translate3d(0,' + vh + 'vh,0)';
            });
          }
          window.addEventListener('scroll', function(){
            if(!ticking){ requestAnimationFrame(updatePin); ticking = true; }
          }, {passive:true});
          updatePin();
        }

        // reveal on scroll — fades back out when a block leaves the viewport, back in when it returns
        var els = document.querySelectorAll('.reveal');
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if(!('IntersectionObserver' in window) || reduced){
          els.forEach(function(el){ el.classList.add('in'); });
        } else {
          els.forEach(function(el, i){
            el.style.transitionDelay = (Math.min(i%6,5) * 55) + 'ms';
          });
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
              entry.target.classList.toggle('in', entry.isIntersecting);
            });
          }, {threshold:0.14, rootMargin:'0px 0px -6% 0px'});
          els.forEach(function(el){ io.observe(el); });
        }

        // mosaic parallax on pointer move
        if(!reduced && window.matchMedia('(hover:hover)').matches){
          var mosaic = document.getElementById('mosaic');
          mosaic.addEventListener('mousemove', function(e){
            var r = mosaic.getBoundingClientRect();
            var x = (e.clientX - r.left) / r.width - 0.5;
            var y = (e.clientY - r.top) / r.height - 0.5;
            document.querySelectorAll('.mcard').forEach(function(card, idx){
              var depth = (idx % 3 + 1) * 6;
              card.style.transform = 'translate(' + (x*depth) + 'px,' + (y*depth) + 'px)';
            });
          });
          mosaic.addEventListener('mouseleave', function(){
            document.querySelectorAll('.mcard').forEach(function(card){ card.style.transform = ''; });
          });
        }
      }catch(e){}
  }, []);

  return (
    <div className="js" id="page">


      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <img src="/legends-logo.png" alt="Legends" />
            <span className="brand-text"><span className="divider">/</span><span className="tag">InvestHack</span></span>
          </a>
          <nav className="links">
            <a href="#what">What it is</a>
            <a href="#format">Format</a>
            <a href="#hacks">The hacks</a>
            <a href="#speakers">Speakers</a>
          </nav>
        </div>
      </header>

      <main id="top">

        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-lead reveal">
              <p className="eyebrow">Legends Event Format &middot; InvestHack</p>
              <h1>The <span className="accent">real numbers</span> behind a raise, told by the person who did it.</h1>
              <p className="sub">InvestHack is not a pitch night. It's operating knowledge behind a specific result &mdash; the decisions, the systems, the mistakes &mdash; pulled out of one founder or investor in public, then finished in private with the network.</p>
              <div className="hero-cta">
                <a className="btn gold" href="#what">See how it works</a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" id="avatarStack"></div>
                <span><strong>Founders, investors, operators</strong> &mdash; this is who makes up the Legends network.</span>
              </div>
            </div>
            <div className="mosaic reveal" id="mosaic">
              <div className="mcard m1" data-people="0"></div>
              <div className="mcard m2" data-people="1"></div>
              <div className="mcard m3" data-people="2"></div>
              <div className="mcard m4" data-people="3"></div>
              <div className="mcard m5" data-people="4"></div>
            </div>
          </div>
        </section>

        <section className="pin-feature" id="pinFeature">
          <div className="pin-sticky">
            <div className="pin-photos reveal no-slide" id="pinPhotos"></div>
            <div className="pin-card reveal no-slide">
              <p className="eyebrow">Who takes the stage</p>
              <h2>Not a stage full of strangers &mdash; operators who've actually done it.</h2>
              <p>Every InvestHack guest is invited for one reason: a real, verifiable track record &mdash; rounds raised, companies built, and hard calls made under pressure.</p>
            </div>
          </div>
        </section>

        <section className="define" id="what">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">01</span><span className="eyebrow">What it is</span></div>
            <div className="define-grid">
              <div className="define-copy">
                <h2 className="reveal">How InvestHack actually works</h2>
                <p className="lead reveal">One founder or investor takes apart a single real decision, live, in front of the Legends network &mdash; then stays on, off the record, with the members who don't leave.</p>
                <div className="tag-row reveal">
                  <span className="deftag">Built for investors &amp; founders</span>
                  <span className="deftag">One real decision, not a highlight reel</span>
                  <span className="deftag">Continues with the network, unscripted</span>
                </div>
              </div>
              <div className="stats-row reveal">
                <div className="stat-card"><div className="n">60<span>min</span></div><div className="l">Public session, on the record</div></div>
                <div className="stat-card"><div className="n">30<span>min</span></div><div className="l">Continues with the network, off the record</div></div>
                <div className="stat-card"><div className="n"><span>1</span></div><div className="l">Guest per session &mdash; never a panel</div></div>
                <div className="stat-card"><div className="n">100<span>%</span></div><div className="l">Investors, founders &amp; operators only</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="tight" id="format">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">02</span><span className="eyebrow">Format</span></div>
            <div className="format-grid reveal">
              <div className="phase">
                <span className="step">Phase one &middot; Open</span>
                <h3>The public session</h3>
                <p>A conversation, not an interview. One guest, one host, one real result &mdash; taken apart in front of everyone who registered.</p>
                <ul>
                  <li>Streamed live, 60 minutes</li>
                  <li>Built around one decision, not a career recap</li>
                  <li>Audience questions taken on the record</li>
                </ul>
              </div>
              <div className="phase">
                <span className="step">Phase two &middot; Closed</span>
                <h3>The network continues</h3>
                <p>The public session ends and the conversation doesn't. Members stay on for a smaller, unrecorded continuation with the same guest.</p>
                <ul>
                  <li>Legends members only, camera-on</li>
                  <li>The specifics that don't go on the record</li>
                  <li>Direct follow-up with the guest, not a moderator</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="topics" id="hacks">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">03</span><span className="eyebrow">The hacks</span></div>
            <h2 className="reveal" style={{fontSize: 'clamp(28px,3.2vw,39px)', lineHeight: '1.17', maxWidth: '760px', marginBottom: '40px'}}>Every session is built around one working problem, not a theme.</h2>
            <div className="topic-grid reveal">
              <div className="topic"><div className="ic">01</div><h4>Raising with no revenue</h4><p>What actually stands in for traction when there isn't any yet &mdash; and what investors quietly check instead.</p></div>
              <div className="topic"><div className="ic">02</div><h4>The cap table decision you can't undo</h4><p>Which early terms come back to bite a founder at Series B, and how to spot them before signing.</p></div>
              <div className="topic"><div className="ic">03</div><h4>Walking away from a term sheet</h4><p>The moment a founder or fund decided a deal wasn't worth taking, and what they did next.</p></div>
              <div className="topic"><div className="ic">04</div><h4>Pricing a round in a cold market</h4><p>How a lead investor actually sets a number when comps have disappeared and everyone is nervous.</p></div>
              <div className="topic"><div className="ic">05</div><h4>The founder&ndash;investor fight nobody discloses</h4><p>A real disagreement between a board and a founder, and how it got resolved &mdash; or didn't.</p></div>
              <div className="topic"><div className="ic">06</div><h4>Rebuilding after a failed raise</h4><p>What changes operationally in the ninety days after a round falls through.</p></div>
            </div>
          </div>
        </section>

        <section id="speakers">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">04</span><span className="eyebrow">Who's on stage</span></div>
            <div className="speakers-head reveal">
              <h2 style={{fontSize: 'clamp(28px,3.2vw,39px)', lineHeight: '1.17', maxWidth: '620px'}}>One guest per session &mdash; an investor or founder with a track record worth taking apart.</h2>
              <p>InvestHack guests are invited specialists &mdash; founders, operators and investors with a real track record: raising capital, scaling companies, and solving the exact problem being discussed.</p>
            </div>
            <div className="speaker-grid reveal" id="speakerGrid"></div>
          </div>
        </section>

        <section className="fornot tight">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">05</span><span className="eyebrow">Who it's for</span></div>
            <div className="fornot-grid reveal">
              <div className="fornot-col yes">
                <h3>Come if you are</h3>
                <ul>
                  <li>A founder raising, or about to</li>
                  <li>An angel or fund partner writing checks</li>
                  <li>An operator who wants the mechanics, not the highlight reel</li>
                </ul>
              </div>
              <div className="fornot-col no">
                <h3>Not for</h3>
                <ul>
                  <li>Service providers pitching founders in the network</li>
                  <li>Anyone looking for a generic networking mixer</li>
                  <li>Passive audiences who won't ask a real question</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="more tight">
          <div className="wrap">
            <div className="kicker reveal"><span className="eyebrow">Beyond this one session</span></div>
            <h2 className="reveal" style={{fontSize: 'clamp(28px,3.2vw,39px)', lineHeight: '1.17', maxWidth: '760px', marginBottom: '40px'}}>Legends is bigger than this one event.</h2>
            <div className="more-grid reveal">
              <a className="more-card" href="https://belegends.club/events" target="_blank" rel="noopener">
                <span className="mc-label">Upcoming events</span>
                <h4>See what's next on the calendar</h4>
                <p>InvestHack is one date among several &mdash; Meet the Legends sessions and closed member continuations run alongside it.</p>
                <span className="mc-link">See the calendar <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </a>
              <a className="more-card dark" href="https://belegends.club/blog" target="_blank" rel="noopener">
                <span className="mc-label">The Legends blog</span>
                <h4>What doesn't always get said out loud</h4>
                <p>Founder and investor thinking, written up after the network stops talking on the record.</p>
                <span className="mc-link">Read the blog <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </a>
              <a className="more-card gold" href="https://belegends.club/" target="_blank" rel="noopener">
                <span className="mc-label">About Legends</span>
                <h4>The network InvestHack lives inside</h4>
                <p>Who's actually in the network, how membership works, and why it stays this small.</p>
                <span className="mc-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </a>
              <div className="more-card soon">
                <span className="mc-label">Coming soon</span>
                <h4>Demo Day</h4>
                <p>In-person conferences and meetups that take the network off the screen &mdash; the next format Legends is building.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="wrap">
            <div className="closing-card reveal">
              <div className="closing-inner">
                <p className="eyebrow" style={{color: 'var(--gold-soft)'}}>Next InvestHack</p>
                <h2>The network is kept intentionally small. Apply, and we'll tell you if it's a fit.</h2>
                <p>Seats for the public session are limited and the member continuation afterward is members-only. Applications are reviewed individually &mdash; no open registration link, no waitlist spam.</p>
                <div className="hero-cta">
                  <a className="btn gold" href="https://belegends.club/" target="_blank" rel="noopener">Apply to attend</a>
                  <a className="btn ghost" href="#top">Back to top</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap foot-inner">
          <div className="foot-brand">
            <img src="/legends-logo.png" alt="Legends" />
            <span>InvestHack is part of the Legends event system</span>
          </div>
          <div className="foot-links">
            <a href="https://belegends.club/" target="_blank" rel="noopener">belegends.club</a>
            <a href="#what">What it is</a>
            <a href="#speakers">Speakers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
