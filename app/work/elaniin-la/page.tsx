import Navbar from '../../Navbar'

export default function ElaniinLA() {
  return (
    <>
      {/* NAV */}
      <Navbar logoHref="/" anchorPrefix="/" />

      {/* HERO IMAGE */}
      <div className="cs-hero-img" style={{ backgroundImage: 'url(/elaniin-in-la-hero.png)' }} />

      {/* CONTENT */}
      <article className="cs-content">
        <p className="cs-category">Brand Communication · 2026</p>
        <h1 className="cs-title">Elaniin Lands in L.A.</h1>

        <div className="cs-tags">
          {['Creative Direction', 'AI Image Direction', 'Visual Systems', 'Brand Communication', 'Campaign Design', 'Typographic Systems'].map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>

        <img
          src="/elaniin-in-la-banner-02.png"
          alt="Elaniin CEO Manifesto 2026"
          className="cs-banner-img"
        />

        <p className="cs-body">
          Consolidating operations in Los Angeles isn&apos;t a change of address. It&apos;s a statement. And a statement of that magnitude demands a visual communication that matches it — not just aesthetically, but strategically. Something people feel before they read it.
        </p>
        <p className="cs-body">
          I came into the project with one question: what does this need to communicate without saying a single word? From there, we built outward. I defined the full creative direction — the visual narrative, the typographic system, the information hierarchy — and led AI-generated image direction to craft a photographic universe that didn&apos;t exist yet, but needed to for this moment.
        </p>

        {/* INLINE BANNER 01 */}
        <img
          src="/elaniin-in-la-banner-01.png"
          alt="Elaniin in L.A. campaign banner"
          className="cs-banner-img"
        />

        <img
          src="/elaniin-in-la-banner-03.png"
          alt="Hello Los Angeles — Elaniin expansion"
          className="cs-banner-img"
        />

        <p className="cs-body">
          The result was a complete visual ecosystem: launch materials, social media assets, campaign pieces. Every element designed to tell the same story from different angles, with the coherence and sophistication an international expansion demands.
        </p>
        <p className="cs-body">
          We didn&apos;t want it to look like a corporate announcement. We wanted it to feel inevitable — like Elaniin was always meant to arrive there.
        </p>
        <img
          src="/elaniin-in-la-banner-04.png"
          alt="ELANIIN — Engineering Impact from LA"
          className="cs-banner-img"
        />
      </article>


      {/* NEXT PROJECT */}
      <div className="cs-footer-nav">
        <div className="cs-footer-nav-inner">
          <a href="/work/blue-engine" style={{ textDecoration: 'none' }}>
            <div className="cs-footer-eyebrow">Next project</div>
            <div className="cs-footer-title">Blue Engine Launch Campaign</div>
          </a>
          <a href="/#work" className="cs-footer-back">← Back to work</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer-light">
        <img src="/roger.svg" alt="" aria-hidden="true" className="footer-watermark-img footer-watermark-light" />
        <p className="footer-copy footer-copy--light">© 2026 Roger Paniagua. All rights reserved.</p>
      </footer>
    </>
  )
}
