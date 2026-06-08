"use client";
import "./luhanhong.css";
import { siteContent as c } from "./content";
import { useEffect } from "react";

export default function HomeClient() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    
    <main className="min-h-screen text-[#1a0a0a]" style={{background:"linear-gradient(135deg, #f5e6d0 0%, #f0dfc0 40%, #ede0c8 100%)"}}>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...c.ticker, ...c.ticker, ...c.ticker].map((item, i) => (
            <span key={i} className="ticker-item">{item} <span className="ticker-dot">·</span></span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="fixed top-7 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 nav-blur">
        <span className="font-display text-lg" style={{color:"#c9a84c"}}>{c.chineseName}</span>
        <div className="flex gap-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#stories" className="nav-link">Stories</a>
          <a href="#ventures" className="nav-link">Ventures</a>
          <a href="#timeline" className="nav-link">Journey</a>
          <a href="#connect" className="nav-link">Connect</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-48 pb-24 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 calligraphy pr-8 md:pr-16" aria-hidden="true">{c.chineseName}</div>
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-16">

          {/* Photo */}
          <div className="photo-placeholder flex-shrink-0">
            {c.hero.photo ? (
              <img src={c.hero.photo} alt={c.hero.photoAlt} className="photo-img" />
            ) : (
              <div className="photo-empty">
                <span className="font-display" style={{color:"#c9a84c44", fontSize:"3rem"}}>{c.chineseName}</span>
                <p style={{color:"#3a1515", fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", marginTop:"1rem"}}>Photo coming soon</p>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="max-w-2xl">
            <p className="nav-link mb-2 fade-up">{c.location}</p>
            <p className="fade-up delay-1" style={{color:"#c9a84c66", fontSize:"0.75rem", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1.5rem"}}>{c.handle}</p>
            <h1 className="font-display hero-title fade-up delay-1">
              {c.hero.line1}<br />
              <span style={{color:"#c9a84c"}}>{c.hero.line2}</span>
            </h1>
            <p className="mt-8 text-lg hero-sub fade-up delay-2">{c.hero.sub}</p>
            <div className="mt-12 flex flex-wrap gap-4 fade-up delay-3">
              <a href="#ventures" className="btn-primary">My Ventures</a>
              <a href="#timeline" className="btn-secondary">My Journey</a>
              <a href="#connect" className="btn-secondary">Connect</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-8 md:left-20 flex items-center gap-3 fade-up delay-4" style={{color:"#3a1515"}}>
          <div style={{width:40, height:1, background:"#c9a84c44"}} />
          <span style={{fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase"}}>Scroll</span>
        </div>
      </section>

      <hr className="section-rule" />

      {/* About */}
      <section id="about" className="reveal px-8 md:px-20 py-28 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="nav-link mb-5">About</p>
            <h2 className="font-display section-title mb-8">
              {c.about.heading1}<br />
              <span style={{color:"#c9a84c"}}>{c.about.heading2}</span>
            </h2>
            <div style={{width:40, height:1, background:"#c9a84c"}} />
          </div>
          <div className="body-text">
            {c.about.paragraphs.map((p, i) => (
              <p key={i} className="mb-6">{p}</p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 stats-grid">
          {c.stats.map(({n, label}) => (
            <div key={label} className="stat-cell">
              <p className="font-display stat-number">{n}</p>
              <p className="stat-label">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center font-display" style={{fontSize:"clamp(1.2rem, 3vw, 1.8rem)", color:"#5a2a2a", fontStyle:"italic"}}>
          "{c.about.quote}"
        </p>
      </section>

      <hr className="section-rule" />

      {/* Vignettes */}
      <section id="stories" className="reveal px-8 md:px-20 py-28 max-w-6xl mx-auto">
        <p className="nav-link mb-5">Stories</p>
        <h2 className="font-display section-title mb-16">
          Three moments that<br />
          <span style={{color:"#c9a84c"}}>shaped everything</span>
        </h2>
        <div className="flex flex-col gap-0">
          {c.vignettes.map(({code, title, location, body, insight}) => (
            <div key={code} className="vignette-item grid md:grid-cols-[80px_1fr] gap-8 items-start">
              <div className="vignette-code">{code}</div>
              <div>
                <div className="flex flex-wrap items-baseline gap-4 mb-3">
                  <h3 className="vignette-title">{title}</h3>
                  <span className="vignette-location">{location}</span>
                </div>
                <p className="body-text mb-4">{body}</p>
                <p className="vignette-insight">"{insight}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      {/* Ventures */}
      <section id="ventures" className="reveal px-8 md:px-20 py-28 max-w-6xl mx-auto">
        <p className="nav-link mb-5">Ventures</p>
        <h2 className="font-display section-title mb-16">
          The China arbitrage,<br />
          <span style={{color:"#c9a84c"}}>expressed five ways</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {c.ventures.map(({name, url, tag, tagClass, desc}) => (
            <a key={name} href={url} target={url!=="#"?"_blank":undefined} rel="noopener noreferrer" className="venture-card p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display venture-title">{name}</h3>
                <div className="flex items-center gap-3">
                  <span className={"tag "+tagClass}>{tag}</span>
                  {url!=="#" && <span style={{color:"#c9a84c"}}>↗</span>}
                </div>
              </div>
              <p className="venture-desc">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      {/* Timeline */}
      <section id="timeline" className="reveal px-8 md:px-20 py-28 max-w-4xl mx-auto">
        <p className="nav-link mb-5">Journey</p>
        <h2 className="font-display section-title mb-16">
          The making of<br />
          <span style={{color:"#c9a84c"}}>@revivedbeast</span>
        </h2>
        <div className="timeline">
          {c.timeline.map(({year, event}, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-year font-display">{year}</div>
              <div className="timeline-dot" />
              <div className="timeline-event">{event}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      {/* Big Quote */}
      <section className="reveal px-8 md:px-20 py-28 max-w-4xl mx-auto text-center">
        <p className="font-display quote-text">
          "{c.bigQuote.line1}<br />
          <span style={{color:"#f0e6d6"}}>{c.bigQuote.line2}</span><br />
          {c.bigQuote.line3}"
        </p>
        <div className="mt-8 flex justify-center">
          <div style={{width:40, height:1, background:"#c9a84c"}} />
        </div>
        <p className="mt-4 nav-link">{c.name} · {c.chineseName}</p>
      </section>

      <hr className="section-rule" />

      {/* Connect */}
      <section id="connect" className="reveal px-8 md:px-20 py-28 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="nav-link mb-5">Connect</p>
            <h2 className="font-display section-title mb-6">
              {c.connect.heading1}<br />
              <span style={{color:"#c9a84c"}}>{c.connect.heading2}</span>
            </h2>
            <p className="body-text" style={{maxWidth:"44ch"}}>{c.connect.sub}</p>
          </div>
          <div className="flex flex-col gap-4">
            {c.connect.links.map(({label, href}) => (
              <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="connect-link flex items-center justify-between px-6 py-5">
                <span>{label}</span>
                {href!=="#" && <span style={{color:"#c9a84c"}}>↗</span>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-20 py-10 flex flex-wrap items-center justify-between gap-4 footer-border">
        <span className="font-display" style={{color:"#3a1515", fontSize:"1.1rem"}}>{c.chineseName} · {c.domain}</span>
        <span style={{color:"#3a1515", fontSize:"0.75rem", letterSpacing:"0.08em"}}>© {new Date().getFullYear()} {c.footer.copy}</span>
      </footer>

    </main>
  );
}