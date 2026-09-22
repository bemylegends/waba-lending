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
          {icon:'venue', caption:"Where it starts", g:["#E0A83D","#BE8C2B"], img:"/atmosphere/spotlight.jpg"},
          {icon:'group', caption:"The network, together", g:["#D4AD5A","#9C6E22"], img:"/atmosphere/group.jpg"},
          {icon:'mingle', caption:"Where deals happen", g:["#E7C066","#B87F1E"], img:"/atmosphere/card.jpg"},
          {icon:'space', caption:"Set for the room", g:["#DDA83F","#8F6420"], img:"/atmosphere/venue-empty.jpg"}
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
        // desktop only: on mobile the section is a static stacked layout (see CSS), no scroll-driven transform
        var pinSection = document.getElementById('pinFeature');
        if(!reduced && !window.matchMedia('(max-width:980px)').matches){
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

        // hero visual: a small generative "network" — gold nodes linked by fine lines, with
        // occasional signal pulses traveling an edge (an "introduction" being made). No media
        // assets, just canvas — replaces the old video mark with something that visualizes the
        // actual idea (AI-matched introductions inside a private network) instead of a stock clip.
        (function(){
          if(window.matchMedia('(max-width:980px)').matches) return; // hidden on mobile — don't bother animating it
          var canvas = document.getElementById('networkCanvas');
          if(!canvas || !canvas.getContext) return;
          var ctx = canvas.getContext('2d');
          var dpr = Math.min(window.devicePixelRatio || 1, 2);
          var W = 0, H = 0;
          function resize(){
            var rect = canvas.getBoundingClientRect();
            W = rect.width; H = rect.height;
            if(!W || !H) return;
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          }
          resize();
          window.addEventListener('resize', resize);

          var N = 17;
          var nodes = [];
          for(var i=0; i<N; i++){
            var ang = Math.random() * Math.PI * 2;
            var f = 0.16 + Math.sqrt(Math.random()) * 0.80;
            nodes.push({
              ax: Math.cos(ang) * f,
              ay: Math.sin(ang) * f,
              phase: Math.random() * Math.PI * 2,
              speed: 0.35 + Math.random() * 0.45,
              drift: 0.018 + Math.random() * 0.03,
              size: 2 + Math.random() * 2.4,
              flashUntil: 0
            });
          }
          var edges = [];
          (function buildEdges(){
            var used = {};
            for(var a=0; a<nodes.length; a++){
              var dists = [];
              for(var b=0; b<nodes.length; b++){
                if(a===b) continue;
                var dx = nodes[a].ax - nodes[b].ax, dy = nodes[a].ay - nodes[b].ay;
                dists.push({j:b, d: dx*dx + dy*dy});
              }
              dists.sort(function(p,q){ return p.d - q.d; });
              var k = 2 + (Math.random() < 0.35 ? 1 : 0);
              for(var n=0; n<k && n<dists.length; n++){
                var j = dists[n].j;
                var key = a < j ? (a+'_'+j) : (j+'_'+a);
                if(!used[key]){ used[key] = true; edges.push([a, j]); }
              }
            }
          })();

          var pulses = [];
          var lastSpawn = 0, spawnGap = 1000;

          function frame(now){
            if(!W){ if(!reduced) requestAnimationFrame(frame); return; }
            var t = now * 0.001;
            ctx.clearRect(0, 0, W, H);
            var cx = W/2, cy = H/2, R = Math.min(W, H) / 2;

            var pos = nodes.map(function(nd){
              var dx = Math.cos(t*nd.speed + nd.phase) * nd.drift;
              var dy = Math.sin(t*nd.speed*1.3 + nd.phase) * nd.drift * 0.8;
              return { x: cx + (nd.ax+dx)*R, y: cy + (nd.ay+dy)*R };
            });

            ctx.lineWidth = 1;
            for(var e=0; e<edges.length; e++){
              var a = pos[edges[e][0]], b = pos[edges[e][1]];
              var shimmer = 0.5 + 0.5 * Math.sin(t*0.55 + e*1.7);
              ctx.strokeStyle = 'rgba(120,92,46,' + (0.07 + 0.10*shimmer) + ')';
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }

            if(!reduced && now - lastSpawn > spawnGap && pulses.length < 3 && edges.length){
              lastSpawn = now;
              spawnGap = 900 + Math.random()*900;
              var edge = edges[(Math.random()*edges.length)|0];
              var flip = Math.random() < 0.5;
              pulses.push({ a: flip?edge[1]:edge[0], b: flip?edge[0]:edge[1], born: now, dur: 900 + Math.random()*700 });
            }
            for(var p=pulses.length-1; p>=0; p--){
              var pu = pulses[p];
              var pt = (now - pu.born) / pu.dur;
              if(pt >= 1){ nodes[pu.b].flashUntil = now + 380; pulses.splice(p,1); continue; }
              var A = pos[pu.a], B = pos[pu.b];
              var ease = pt < 0.5 ? 2*pt*pt : -1 + (4-2*pt)*pt;
              var x = A.x + (B.x-A.x)*ease, y = A.y + (B.y-A.y)*ease;
              var grd = ctx.createRadialGradient(x, y, 0, x, y, 7);
              grd.addColorStop(0, 'rgba(243,217,152,.95)');
              grd.addColorStop(1, 'rgba(224,168,61,0)');
              ctx.fillStyle = grd;
              ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = '#F3D998';
              ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI*2); ctx.fill();
            }

            for(var i2=0; i2<pos.length; i2++){
              var nd2 = nodes[i2], p2 = pos[i2];
              var flashT = nd2.flashUntil > now ? (nd2.flashUntil - now) / 380 : 0;
              var s = nd2.size * (1 + flashT*1.4);
              var glowR = s * (flashT > 0 ? 4 : 2.3);
              var grd2 = ctx.createRadialGradient(p2.x, p2.y, 0, p2.x, p2.y, glowR);
              grd2.addColorStop(0, 'rgba(224,168,61,' + (0.5 + flashT*0.4) + ')');
              grd2.addColorStop(1, 'rgba(224,168,61,0)');
              ctx.fillStyle = grd2;
              ctx.beginPath(); ctx.arc(p2.x, p2.y, glowR, 0, Math.PI*2); ctx.fill();
              ctx.fillStyle = flashT > 0 ? '#F3D998' : '#BE8C2B';
              ctx.beginPath(); ctx.arc(p2.x, p2.y, s, 0, Math.PI*2); ctx.fill();
            }

            if(!reduced) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
        })();
      }catch(e){}
  }, []);

  return (
    <div className="js" id="page">


      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <img src="/legends-logo.png" alt="Legends" />
          </a>
          <nav className="links">
            <a href="#what">What it is</a>
            <a href="#product">The product</a>
            <a href="#speakers">InvestHack</a>
          </nav>
        </div>
      </header>

      <main id="top">

        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-lead reveal">
              <p className="eyebrow">Legends Platform &middot; Private Investor Network</p>
              <h1>The private platform for investors who <span className="accent">move markets</span></h1>
              <p className="sub">Legends is a private network and platform for investors, founders and operators &mdash; introductions matched by AI, vetted by the network. InvestHack is one of the ways we surface real operating knowledge &mdash; the decisions, the systems, the mistakes &mdash; pulled out of one founder or investor in public, then finished in private with the network.</p>
              <div className="hero-proof">
                <div className="avatar-stack" id="avatarStack"></div>
                <span><strong>Founders, investors, operators</strong> &mdash; this is who makes up the Legends network.</span>
              </div>
            </div>
            <div className="mosaic reveal" id="mosaic">
              <div className="hero-visual-inner">
                <canvas className="network-canvas" id="networkCanvas" aria-hidden="true"></canvas>
                <img className="network-mark" src="/legends-symbol.png" alt="Legends" />
              </div>
            </div>
          </div>
        </section>

        <section className="pin-feature" id="pinFeature">
          <div className="pin-sticky">
            <div className="pin-photos reveal no-slide" id="pinPhotos"></div>
            <div className="pin-card reveal no-slide">
              <p className="eyebrow">How Legends works</p>
              <h2>A working network, not a directory.</h2>
              <p>AI-matched introductions, vetted events, and a trusted circle &mdash; built for operators who move markets, not people collecting connections.</p>
            </div>
          </div>
        </section>

        <section className="define" id="what">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">01</span><span className="eyebrow">What it is</span></div>
            <div className="define-grid">
              <div className="define-copy">
                <h2 className="reveal">The AI-powered private network for decision-makers who move markets.</h2>
                <p className="lead reveal">Legends matches you with the right people, then puts you in the room &mdash; introductions filtered to your level, private events, and a trusted circle. AI does the networking. You make the moves.</p>
                <div className="tag-row reveal">
                  <span className="deftag">AI-matched introductions</span>
                  <span className="deftag">Private events, not noise</span>
                  <span className="deftag">Founders, investors &amp; C-level only</span>
                </div>
              </div>
              <div className="stats-row reveal">
                <div className="stat-card"><div className="n" style={{fontSize: '20px'}}>Matching</div><div className="l">AI-filtered introductions at your level</div></div>
                <div className="stat-card"><div className="n" style={{fontSize: '20px'}}>Opportunities</div><div className="l">Private posts for capital, partners and deals</div></div>
                <div className="stat-card"><div className="n" style={{fontSize: '20px'}}>Introductions</div><div className="l">Reviewed and vetted before you connect</div></div>
                <div className="stat-card"><div className="n" style={{fontSize: '20px'}}>Events</div><div className="l">Private online rooms and closed offline gatherings</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="topics" id="product">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">02</span><span className="eyebrow">The product</span></div>
            <h2 className="reveal" style={{fontSize: 'clamp(28px,3.2vw,39px)', lineHeight: '1.17', maxWidth: '760px', marginBottom: '40px'}}>Three ways to be inside the network. One rule &mdash; you deploy capital.</h2>
            <div className="topic-grid reveal" style={{gridTemplateColumns: 'repeat(3,1fr)'}}>
              <div className="topic"><div className="ic">01</div><h4>Private</h4><p>Angels, LPs, syndicate leads and family offices who deploy only their own capital and don't raise.</p></div>
              <div className="topic"><div className="ic">02</div><h4>Fund</h4><p>GPs, fund partners and family offices who raise outside capital or bring co-investors into their own deals.</p></div>
              <div className="topic"><div className="ic">03</div><h4>Corporate</h4><p>Corporate venture arms, corporate development and strategic investors.</p></div>
            </div>
          </div>
        </section>

        <section id="speakers">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">03</span><span className="eyebrow">InvestHack</span></div>
            <div className="speakers-head reveal">
              <h2 style={{fontSize: 'clamp(28px,3.2vw,39px)', lineHeight: '1.17', maxWidth: '620px'}}>The people behind our InvestHack sessions.</h2>
              <p>Investors, founders and operators with a real track record &mdash; raising capital, scaling companies, and solving problems other builders are still facing. These are the people who take part in Legends InvestHack, in front of the network.</p>
            </div>
            <div className="speaker-grid reveal" id="speakerGrid"></div>
          </div>
        </section>

        <section className="fornot tight">
          <div className="wrap">
            <div className="kicker reveal"><span className="num">04</span><span className="eyebrow">Who it's for</span></div>
            <div className="fornot-grid reveal">
              <div className="fornot-col yes">
                <h3>Come if you are</h3>
                <ul>
                  <li>An angel, LP or syndicate lead deploying your own capital</li>
                  <li>A GP or fund partner raising outside capital</li>
                  <li>A corporate venture, development or strategic investor</li>
                </ul>
              </div>
              <div className="fornot-col no">
                <h3>Not for</h3>
                <ul>
                  <li>Anyone who isn't on the investing side of the table</li>
                  <li>Service providers pitching products to the network</li>
                  <li>Anyone looking for a generic networking mixer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="more tight">
          <div className="wrap">
            <div className="kicker reveal"><span className="eyebrow">Explore more</span></div>
            <h2 className="reveal" style={{fontSize: 'clamp(28px,3.2vw,39px)', lineHeight: '1.17', maxWidth: '760px', marginBottom: '40px'}}>More from the Legends platform.</h2>
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
                <p className="eyebrow" style={{color: 'var(--gold-soft)'}}>Legends Platform</p>
                <h2>A private network for people who move markets &mdash; kept intentionally small.</h2>
                <p>Every introduction, event and session is filtered to keep the circle sharp: investors, founders and operators who deploy capital and build with it &mdash; not open registration, not noise.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap">
          <div className="foot-inner">
            <div className="foot-brand">
              <img src="/legends-logo.png" alt="Legends" />
              <span>InvestHack is one of the Legends platform's event formats</span>
            </div>
            <div className="foot-links">
              <a href="#what">What it is</a>
              <a href="#speakers">InvestHack</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
            </div>
          </div>
          <div className="foot-legal">
            <p>AVELYTH PLATFORM LTD &middot; Arch. Makariou III, 115, 3021, Limassol, Cyprus &middot; Phone: <em>pending &mdash; to be added</em></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
