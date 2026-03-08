export default function ElaniinLA() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 82.9" height="28" fill="currentColor" aria-label="Roger Paniagua" role="img" style={{ display: 'block' }}>
            <path d="M0,81.7V1.2h44.5c19.8,0,31.1,8.8,31.1,24.2s-7.6,20.9-22.7,22.4v1c7.2,1.9,10,5.8,13,11.4l11.7,21.6h-20.9l-11.1-20.9c-3.2-6.2-6.2-8.3-15.6-8.3h-11.9v29.2H0ZM18,38.9h26.3c8.5,0,12.4-2.4,12.4-10.8s-3.8-10.7-12.4-10.7h-26.3v21.5Z"/>
            <path d="M80.1,41.5C80.1,16.3,96.7,0,123.4,0s43.7,16.3,43.7,41.5-16.5,41.5-43.7,41.5-43.3-16.3-43.3-41.5ZM147.9,41.5c0-17.9-6.8-24.2-24.5-24.2s-24.2,6.2-24.2,24.2,6.5,24.2,24.2,24.2,24.5-6.2,24.5-24.2Z"/>
            <path d="M171.9,41.5c0-25.1,17.1-41.5,44.7-41.5s41.2,11.8,41.2,31.1v1h-20.1v-1c0-9.4-6.1-13.8-21.6-13.8s-25.1,6.2-25.1,24.2,6.6,24.2,24.3,24.2,24.2-2.9,24.6-13.1h-27.3v-13.3h45.3v42.5h-16.7v-17.3h-1c-2.8,10.6-11.2,18.5-28.6,18.5s-39.8-16.3-39.8-41.5Z"/>
            <path d="M265.5,81.7V1.2h68.1v16.2h-50.1v15.7h48.3v16.1h-48.3v16.2h50.1v16.2h-68.1Z"/>
            <path d="M340.6,81.7V1.2h44.5c19.8,0,31.1,8.8,31.1,24.2s-7.6,20.9-22.7,22.4v1c7.2,1.9,10,5.8,13,11.4l11.7,21.6h-20.9l-11.1-20.9c-3.2-6.2-6.2-8.3-15.6-8.3h-11.9v29.2h-18ZM358.7,38.9h26.3c8.5,0,12.4-2.4,12.4-10.8s-3.8-10.7-12.4-10.7h-26.3v21.5Z"/>
          </svg>
        </a>
        <ul className="nav-links">
          <li><a href="/#approach">About</a></li>
          <li><a href="/#work">Case Studies</a></li>
          <li><a href="/#experience">Experience</a></li>
          <li><a href="/#contact" className="nav-cta">Say hello →</a></li>
        </ul>
      </nav>

      {/* HERO IMAGE */}
      <div style={{ backgroundImage: 'url(/elaniin-in-la.png)', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '560px' }} />

      {/* CONTENT */}
      <article className="cs-content">
        <p className="cs-category">Brand Communication · 2026</p>
        <h1 className="cs-title">Elaniin Lands in L.A.</h1>

        <div className="cs-tags">
          {['Creative Direction', 'AI Image Direction', 'Visual Systems', 'Brand Communication', 'Campaign Design', 'Typographic Systems'].map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>

        <p className="cs-body">
          Consolidating operations in Los Angeles isn&apos;t a change of address. It&apos;s a statement. And a statement of that magnitude demands a visual communication that matches it — not just aesthetically, but strategically. Something people feel before they read it.
        </p>
        <p className="cs-body">
          I came into the project with one question: what does this need to communicate without saying a single word? From there, we built outward. I defined the full creative direction — the visual narrative, the typographic system, the information hierarchy — and led AI-generated image direction to craft a photographic universe that didn&apos;t exist yet, but needed to for this moment.
        </p>
        <p className="cs-body">
          The result was a complete visual ecosystem: launch materials, social media assets, campaign pieces. Every element designed to tell the same story from different angles, with the coherence and sophistication an international expansion demands.
        </p>
        <p className="cs-body">
          We didn&apos;t want it to look like a corporate announcement. We wanted it to feel inevitable — like Elaniin was always meant to arrive there.
        </p>
      </article>

      {/* NEXT PROJECT */}
      <div className="cs-footer-nav">
        <div className="cs-footer-nav-inner">
          <div>
            <div className="cs-footer-eyebrow">Next project</div>
            <div className="cs-footer-title">Coming soon</div>
          </div>
          <a href="/#work" className="cs-footer-back">← Back to work</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer-light">
        <img src="/ROGER.svg" alt="" aria-hidden="true" className="footer-watermark-img footer-watermark-light" />
      </footer>
    </>
  )
}
