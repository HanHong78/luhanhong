"use client";
import "./luhanhong.css";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#e8e0d0]">

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 nav-blur">
        <span className="font-display text-lg" style={{color:"#c9a84c"}}>吕汉鸿</span>
        <div className="flex gap-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#ventures" className="nav-link">Ventures</a>
          <a href="#connect" className="nav-link">Connect</a>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-32 pb-24 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 calligraphy pr-8 md:pr-16" aria-hidden="true">吕汉鸿</div>
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="relative max-w-3xl">
          <p className="nav-link mb-6 fade-up">Singapore · Hong Kong · Shenzhen · Taipei</p>
          <h1 className="font-display hero-title fade-up delay-1">
            Bridging China<br />
            <span style={{color:"#c9a84c"}}>&amp; the World</span>
          </h1>
          <p className="mt-8 text-lg hero-sub fade-up delay-2">
            25 years building technology across five countries. I help entrepreneurs,
            travelers, and professionals unlock the China advantage most of the world is sleeping on.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 fade-up delay-3">
            <a href="#ventures" className="btn-primary">My Ventures</a>
            <a href="#connect" className="btn-secondary">Connect</a>
          </div>
        </div>
        <div className="absolute bottom-10 left-8 md:left-20 flex items-center gap-3 fade-up delay-4" style={{color:"#3a3530"}}>
          <div style={{width:40,height:1,background:"#c9a84c44"}} />
          <span style={{fontSize:"0.7rem",letterSpacing:"0.15em",textTransform:"uppercase"}}>Scroll</span>
        </div>
      </section>

      <hr className="section-rule" />

      <section id="about" className="px-8 md:px-20 py-28 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="nav-link mb-5">About</p>
            <h2 className="font-display section-title mb-8">
              The bridge has been<br />
              <span style={{color:"#c9a84c"}}>my whole career</span>
            </h2>
            <div style={{width:40,height:1,background:"#c9a84c"}} />
          </div>
          <div className="body-text">
            <p className="mb-6">I am Han-Hong Lu — 吕汉鸿 — a Singapore Chinese educated in Germany with a semester at UMKC, shaped by a decade in the American Midwest, and building at the intersection of China and the world.</p>
            <p className="mb-6">Over 25 years I have led 280-engineer teams for global banks including Citibank and Nomura, taught graduate computer science in Iowa, and architected AI systems since 2017 — before LLMs became mainstream.</p>
            <p className="mb-6">My most rewarding moment as a professor was a chemical engineering student walking into my office to say: <em style={{color:"#e8e0d0"}}>"You totally changed my way of looking at software design."</em></p>
            <p>That is what I am building toward again — at scale, on the internet, for people who need a new map.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 stats-grid">
          {[
            {n:"25+", label:"Years in industry"},
            {n:"5",   label:"Countries worked in"},
            {n:"280", label:"Engineers led"},
            {n:"2017",label:"AI transition year"},
          ].map(({n,label}) => (
            <div key={label} className="stat-cell">
              <p className="font-display stat-number">{n}</p>
              <p className="stat-label">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      <section id="ventures" className="px-8 md:px-20 py-28 max-w-6xl mx-auto">
        <p className="nav-link mb-5">Ventures</p>
        <h2 className="font-display section-title mb-16">
          The China arbitrage,<br />
          <span style={{color:"#c9a84c"}}>expressed five ways</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {name:"ErrandsChina", url:"https://errandschina.com", tag:"Live", tagClass:"tag-live", desc:"Making everyday life in China accessible for foreigners. From bureaucracy to local services — navigated for you."},
            {name:"ChinaRailPlanner", url:"https://chinarailplanner.online", tag:"Live", tagClass:"tag-live", desc:"The world's most extensive rail network, finally navigable for international travelers."},
            {name:"HK Insurance Guide", url:"https://hkinsuranceguide.com", tag:"Live", tagClass:"tag-info", desc:"Independent education on Hong Kong insurance for cross-border professionals, expats, and international families."},
            {name:"HutLiving", url:"#", tag:"Coming Soon", tagClass:"tag-soon", desc:"Rethinking affordable, meaningful living for a generation the traditional economy has left behind."},
          ].map(({name,url,tag,tagClass,desc}) => (
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

      <section className="px-8 md:px-20 py-28 max-w-4xl mx-auto text-center">
        <p className="font-display quote-text">
          "Most people outside China see a wall.<br />
          <span style={{color:"#e8e0d0"}}>I see a bridge I have been crossing</span><br />
          my entire career."
        </p>
        <div className="mt-8 flex justify-center">
          <div style={{width:40,height:1,background:"#c9a84c"}} />
        </div>
        <p className="mt-4 nav-link">Han-Hong Lu · 吕汉鸿</p>
      </section>

      <hr className="section-rule" />

      <section id="connect" className="px-8 md:px-20 py-28 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="nav-link mb-5">Connect</p>
            <h2 className="font-display section-title mb-6">
              Let us talk if you are<br />
              <span style={{color:"#c9a84c"}}>building the bridge too</span>
            </h2>
            <p className="body-text" style={{maxWidth:"44ch"}}>
              Reach out if you are building at the China-West intersection, navigating cross-cultural complexity, or rethinking what a meaningful life looks like in the AI era.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {label:"LinkedIn", href:"https://www.linkedin.com/in/han-hong-lu-989586b/"},
              {label:"Email", href:"mailto:info@luhanhong.com"},
              {label:"Newsletter — Coming Soon", href:"#"},
            ].map(({label,href}) => (
              <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="connect-link flex items-center justify-between px-6 py-5">
                <span>{label}</span>
                {href!=="#" && <span style={{color:"#c9a84c"}}>↗</span>}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-8 md:px-20 py-10 flex flex-wrap items-center justify-between gap-4 footer-border">
        <span className="font-display" style={{color:"#3a3530",fontSize:"1.1rem"}}>吕汉鸿 · luhanhong.com</span>
        <span style={{color:"#3a3530",fontSize:"0.75rem",letterSpacing:"0.08em"}}>© {new Date().getFullYear()} Han-Hong Lu. Singapore · Hong Kong · Shenzhen</span>
      </footer>

    </main>
  );
}