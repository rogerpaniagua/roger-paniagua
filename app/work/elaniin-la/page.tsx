import Navbar from '../../Navbar'
import Footer from '../../Footer'

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
          {['Creative Direction', 'AI Direction', 'Brand Communication', 'Campaign Design'].map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>

        <img
          src="/elaniin-in-la-banner-02.png"
          alt="Elaniin CEO Manifesto 2026"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">The real problem</h2>
        <p className="cs-body">
          Elaniin had spent twelve years building its reputation in LATAM. The U.S. expansion was not a change of address. It was a statement that the company was ready to compete in a different weight class. Los Angeles was chosen by the sales team as the strategic entry point. The moment demanded communication that could land before a single sales conversation happened.
        </p>

        <h2 className="cs-section-h">The strategic decision</h2>
        <p className="cs-body">
          We wanted visuals that felt like Elaniin had been part of LA&apos;s tech scene for years. The problem: no production team on the ground, no location access, no way to shoot in LA.
        </p>
        <p className="cs-body">
          A few months before the project, I had spent time in LA personally. That trip became the creative foundation. I had real references for the light, the architecture, the cultural codes of that city. What I didn&apos;t have was a camera crew.
        </p>
        <p className="cs-body">
          This became the first time we used AI as a primary production tool at Elaniin, not for exploration but for final execution. I directed the image generation with one criterion: nothing could look generated. Every space, every environment had to feel photographed. The editorial decisions were all mine. The AI produced the raw material. I decided what stayed.
        </p>

        {/* INLINE BANNER 01 */}
        <img
          src="/elaniin-in-la-banner-01.png"
          alt="Elaniin in L.A. campaign banner"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">The system</h2>
        <p className="cs-body">
          The campaign covered three channels: LinkedIn, Instagram, and the CEO manifesto on the company blog. Each piece told the same story from a different angle. The CEO&apos;s statement led with authority and twelve years of context. The social pieces were LA-coded, built to feel native to each platform. The campaign visuals were aspirational, aimed at a market that didn&apos;t know Elaniin yet.
        </p>
        <p className="cs-body">
          Every environment in those visuals was AI-generated. None of those spaces exist. Most people who saw the campaign didn&apos;t know that.
        </p>

        <img
          src="/elaniin-in-la-banner-03.png"
          alt="Hello Los Angeles — Elaniin expansion"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">The result</h2>
        <p className="cs-body">
          The CMO noted strong reception. Internally, what stood out was the visual coherence: pieces that felt like they belonged to the same world, shot in the same city, by the same team. They weren&apos;t. That was the point.
        </p>

        <img
          src="/elaniin-in-la-banner-04.png"
          alt="ELANIIN — Engineering Impact from LA"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">Closing note</h2>
        <p className="cs-body">
          The constraint that felt like a limitation became the decision that changed how the team works with AI.
        </p>
      </article>


      {/* NEXT PROJECT */}
      <div className="cs-footer-nav">
        <div className="cs-footer-nav-inner">
          <a href="/work/elaniin-ai" style={{ textDecoration: 'none' }}>
            <div className="cs-footer-eyebrow">Next project</div>
            <div className="cs-footer-title">Elaniin AI Brand System</div>
          </a>
          <a href="/work" className="cs-footer-back">
            <div className="cs-footer-back-eyebrow-right">Case studies</div>
            <div className="cs-footer-back-title">All projects →</div>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      {/* CONTACT */}
      <div className="contact-wrap" id="contact">
        <h2 className="contact-h">
          define. design.<br />
          build. live.
        </h2>
        <div>
          <p className="contact-sub">
            I&apos;m always interested in conversations with people who believe that great creative
            leadership transforms organizations.
          </p>
          <a href="mailto:rogerpaniagua.p@gmail.com" className="contact-btn">Start a conversation →</a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/roger-paniagua/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <a href="https://www.instagram.com/rogerpaniagua_/" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
          </div>
        </div>
      </div>

      <footer>
        <img src="/roger.svg" alt="" aria-hidden="true" className="footer-watermark-img" width="420" height="83" />
        <p className="footer-copy">© 2026 Roger Paniagua. All rights reserved.</p>
      </footer>
    </>
  )
}
