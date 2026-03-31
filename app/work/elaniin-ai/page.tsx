import Navbar from '../../Navbar'

export default function ElaniinAI() {
  return (
    <>
      {/* NAV */}
      <Navbar logoHref="/" anchorPrefix="/" />

      {/* HERO IMAGE */}
      <div className="cs-hero-img" style={{ backgroundImage: 'url(/elaniin-ai/elaniin-ai-hero.png)' }} />

      {/* CONTENT */}
      <article className="cs-content">
        <p className="cs-category">Brand Architecture · 2024</p>
        <h1 className="cs-title">When a Tech Company Becomes an AI Company</h1>

        <div className="cs-tags">
          {['Creative Direction', 'Brand Architecture', 'Identity Systems', 'Visual Systems', 'Campaign Design', 'Applications'].map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>

        <p className="cs-body">
          In 2024, artificial intelligence went from buzzword to business imperative — but mostly in San Francisco, London, and a handful of major markets. In Latin America, the conversation was still early. Most tech companies in the region were watching from the sideline, waiting to see where it landed. Elaniin didn&apos;t wait. They announced a dedicated AI division at a live event — Elaniin AI &apos;24 — and made a public, documented bet that AI wasn&apos;t a trend to monitor. It was a direction to build toward.
        </p>
        <p className="cs-body">
          A move that bold needs a brand that matches it. Not an adjustment to the existing identity — a new visual system, built from scratch, capable of holding something genuinely new. I led the full creative direction for what became a three-level brand architecture: Elaniin AI as the division, Elaniin AI Products as the umbrella for its solutions, and two distinct product identities — SenseFlow and DataSphere — living coherently within that structure.
        </p>

        <img
          src="/elaniin-ai/elaniin-ai-banner-01.png"
          alt="Boundless Potential — Elaniin AI concept"
          className="cs-banner-img"
        />

        <p className="cs-body">
          The conceptual anchor was Boundless Potential — expansion, energy, the sense that something larger is becoming possible. That idea drove every visual decision: a palette built around vitality and conviction, typography that balances clarity with a deliberate nod to the tech world it inhabits, and a graphic system rooted in interconnected nodes — a visual metaphor for data flow, collaboration, and AI intelligence.
        </p>

        <img
          src="/elaniin-ai/elaniin-ai-banner-02.png"
          alt="Elaniin AI identity system"
          className="cs-banner-img"
        />

        <p className="cs-body">
          The hardest challenge wasn&apos;t the main brand. It was designing a product family — Elaniin AI Products — that could hold two distinct SaaS identities, each with enough visual independence to live on their own, yet unmistakably part of the same system. That&apos;s not a design problem. That&apos;s a systems problem. And solving it required defining the rules of the architecture before touching a single logo.
        </p>

        <video
          src="/elaniin-ai/elaniin-ai-products.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="cs-banner-img"
          style={{ borderRadius: '4px' }}
        />

        <img
          src="/elaniin-ai/elaniin-ai-banner-03.png"
          alt="Elaniin AI Products system"
          className="cs-banner-img"
        />

        <img
          src="/elaniin-ai/elaniin-ai-banner-04.png"
          alt="SenseFlow identity"
          className="cs-banner-img"
        />

        <img
          src="/elaniin-ai/elaniin-ai-banner-05.png"
          alt="SenseFlow solutions"
          className="cs-banner-img"
        />

        <img
          src="/elaniin-ai/elaniin-ai-banner-06.png"
          alt="DataSphere identity"
          className="cs-banner-img"
        />

        <p className="cs-body">
          From there, the system extended into every touchpoint: social media templates, out-of-home campaigns, and merchandise. Each application designed to prove that the identity wasn&apos;t just beautiful on a slide — it worked at scale, across formats, across contexts.
        </p>

        <img
          src="/elaniin-ai/elaniin-ai-banner-07.png"
          alt="Elaniin AI OOH campaign"
          className="cs-banner-img"
        />

        <img
          src="/elaniin-ai/elaniin-ai-banner-08.png"
          alt="Elaniin AI OOH posters"
          className="cs-banner-img"
        />

        <img
          src="/elaniin-ai/elaniin-ai-banner-09.png"
          alt="Elaniin AI merch"
          className="cs-banner-img"
        />

        <video
          src="/elaniin-ai/elaniin-ai-spot.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="cs-banner-img"
          style={{ borderRadius: '4px' }}
        />

        <p className="cs-body">
          Elaniin AI launched as one of the first dedicated AI divisions announced publicly by a tech company in El Salvador. The brand didn&apos;t just support that launch — it made the ambition legible. Sometimes the most strategic thing a creative system can do is make people take something seriously before they fully understand it.
        </p>
      </article>

      {/* NEXT PROJECT */}
      <div className="cs-footer-nav">
        <div className="cs-footer-nav-inner">
          <a href="/work/bitlab" style={{ textDecoration: 'none' }}>
            <div className="cs-footer-eyebrow">Next project</div>
            <div className="cs-footer-title">bit/ab — Redefining a Tech Academy</div>
          </a>
          <a href="/work" className="cs-footer-back">
            <div className="cs-footer-back-eyebrow-right">Case studies</div>
            <div className="cs-footer-back-title">All projects →</div>
          </a>
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
