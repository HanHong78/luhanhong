"use client";
import "./luhanhong.css";
import { siteContent as c } from "./content";
import { useEffect } from "react";
import { Mail, Newspaper, ExternalLink } from "lucide-react";

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
  <img src="/images/lhh_logo.jpg" alt="Han-Hong Lu" style={{height: "45px", width: "auto"}} />
  
  {/* Desktop Nav */}
  <div className="hidden md:flex gap-8 items-center">
    <a href="#about" className="nav-link">About</a>
    <a href="#stories" className="nav-link">Stories</a>
    <a href="#ventures" className="nav-link">Ventures</a>
    <a href="#timeline" className="nav-link">Journey</a>
    <a href="#connect" className="nav-link">Connect</a>
    <a href="/cn" className="nav-link flex items-center gap-1" title="中文版本">
      🌐 中文
    </a>
  </div>
  
  {/* Mobile Menu Button */}
  <button className="md:hidden flex flex-col gap-1 p-2" id="mobile-menu-btn" style={{background: "none", border: "none", cursor: "pointer"}}>
    <div style={{width: "24px", height: "2px", background: "#8a6a5a"}}></div>
    <div style={{width: "24px", height: "2px", background: "#8a6a5a"}}></div>
    <div style={{width: "24px", height: "2px", background: "#8a6a5a"}}></div>
  </button>
</nav>

{/* Mobile Menu */}
<div id="mobile-menu" className="fixed left-0 right-0 top-20 bg-gradient-to-b from-[#f5e6d0] to-[#f0dfc0] z-40 hidden md:hidden flex flex-col gap-4 px-8 py-6 border-b border-[#e0c8a0]">
  <a href="#about" className="nav-link" onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}>About</a>
  <a href="#stories" className="nav-link" onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}>Stories</a>
  <a href="#ventures" className="nav-link" onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}>Ventures</a>
  <a href="#timeline" className="nav-link" onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}>Journey</a>
  <a href="#connect" className="nav-link" onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}>Connect</a>
  <a href="/cn" className="nav-link flex items-center gap-1" title="中文版本" onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}>
    🌐 中文
  </a>
</div>

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

      {/* Building in Action */}
      <section className="reveal px-8 md:px-20 py-28 max-w-6xl mx-auto">
        <p className="nav-link mb-5">Building</p>
        <h2 className="font-display section-title mb-8">
          {c.buildingInAction.title}<br />
          <span style={{color:"#c9a84c"}}>{c.buildingInAction.subtitle}</span>
        </h2>
        
        <div className="grid md:grid-cols-1 gap-8 items-start">
          <div>
            <p className="body-text">{c.buildingInAction.description}</p>
          </div>
          
          <div className="video-container" style={{background:"#1a0a0a", borderRadius:"8px", overflow:"hidden", border:"0.5px solid #e0c8a0"}}>
            <video 
              width="100%" 
              height="auto" 
              controls 
              style={{display:"block"}}
            >
              <source src={c.buildingInAction.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
          <span style={{color:"#2a8a5a"}}>{c.bigQuote.line2}</span><br />
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
            {c.connect.links.map(({label, href, wechatID}) => {
              let iconColor = "#4a9a5a"; // green for email (default)
              
              if (label.includes("LinkedIn")) {
                iconColor = "#0a66c2"; // LinkedIn blue
                return (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="connect-link flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span>{label}</span>
                    </div>
                    <span style={{color:"#0a66c2"}}>↗</span>
                  </a>
                );
              }
              
              if (label.includes("Newsletter")) {
                iconColor = "#c93535"; // red for China Arbitrage
                return (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="connect-link flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-4">
                      <Newspaper size={20} color={iconColor} strokeWidth={1.5} />
                      <span>{label}</span>
                    </div>
                    <span style={{color:"#c9a84c"}}>↗</span>
                  </a>
                );
              }
              
              if (label.includes("WhatsApp")) {
                iconColor = "#25d366"; // WhatsApp green
                return (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="connect-link flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={iconColor}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 0 0-4.781 1.158l-.338-.169C6.472 6.859 5.187 6.54 3.938 6.54 2.226 6.54.575 8.172.575 10.248c0 1.247.333 2.462.935 3.516L.57 23.578l3.898-1.288c1.05.573 2.389.88 3.845.88 5.745 0 10.426-4.637 10.426-10.33S17.72 3.578 11.975 3.578" />
                      </svg>
                      <span>{label}</span>
                    </div>
                    <span style={{color:"#25d366"}}>↗</span>
                  </a>
                );
              }
              
              if (label.includes("WeChat")) {
                iconColor = "#09b83e"; // WeChat green
                return (
                  <div key={label} className="connect-link flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={iconColor}>
                        <path d="M8.688 6.578c-3.289 0-5.968 2.286-5.968 5.109 0 1.544.766 2.975 2.022 3.9.127.096.207.277.18.459l-.348 1.918.914-1.508c.096-.19.285-.318.508-.318.143 0 .285.032.413.095 1.056.508 2.199.798 3.366.798 3.289 0 5.968-2.286 5.968-5.109 0-2.823-2.679-5.109-5.968-5.109z"/>
                        <path d="M21.969 17.325c.381-1.202.587-2.475.587-3.794 0-4.19-3.508-7.62-7.84-7.62-2.142 0-4.095.825-5.524 2.166 1.202-.127 2.357.254 3.366 1.013 1.398 1.086 2.3 2.746 2.3 4.63 0 .635-.063 1.27-.19 1.881 1.37 1.202 2.253 2.937 2.253 4.895 0 .285-.032.587-.095.873 1.85-.381 3.539-1.397 4.794-2.802.349-.413.666-.857.953-1.343z"/>
                      </svg>
                      <div className="flex flex-col">
                        <span>{label}</span>
                        <span style={{fontSize: "0.75rem", color: "#8a6a5a"}}>{wechatID}</span>
                      </div>
                    </div>
                    <span style={{color:"#09b83e"}}>↗</span>
                  </div>
                );
              }
              
              // Email (default green)
              return (
                <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="connect-link flex items-center justify-between px-6 py-5">
                  <div className="flex items-center gap-4">
                    <Mail size={20} color={iconColor} strokeWidth={1.5} />
                    <span>{label}</span>
                  </div>
                  {href!=="#" && <span style={{color:"#c9a84c"}}>↗</span>}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-20 py-10 flex flex-wrap items-center justify-between gap-4 footer-border">
        <span className="font-display" style={{color:"#3a1515", fontSize:"1.1rem"}}>{c.chineseName} · {c.domain}</span>
        <span style={{color:"#3a1515", fontSize:"0.75rem", letterSpacing:"0.08em"}}>© {new Date().getFullYear()} {c.footer.copy}</span>
      </footer>
{/* Mobile Menu Toggle */}
<script dangerouslySetInnerHTML={{__html: `
  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.toggle('hidden');
  });
`}} />
    </main>
  );
}
