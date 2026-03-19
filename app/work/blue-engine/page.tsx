import Navbar from '../../Navbar'
import Footer from '../../Footer'

export default function BlueEngine() {
  return (
    <>
      {/* NAV */}
      <Navbar logoHref="/" anchorPrefix="/" />

      {/* HERO IMAGE */}
      <div className="cs-hero-img" style={{ backgroundImage: 'url(/blue-engine-banner-01.png)' }} />

      {/* CONTENT */}
      <article className="cs-content">
        <p className="cs-category">Campaign Design · 2026</p>
        <h1 className="cs-title">Blue Engine Launch Campaign</h1>

        <div className="cs-tags">
          {['Creative Direction', 'AI Image Direction', 'Visual Systems', 'Campaign Design', 'Brand Communication', 'Conceptualization'].map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>

        <p className="cs-body">
          Elaniin wasn&apos;t just launching a product — it was redefining how the company operates. Blue Engine is the execution and delivery framework built after more than a decade of scaling software across LATAM and the U.S. Communicating that shift required more than an announcement. It needed a campaign that felt as intentional as the framework itself.
        </p>
        <p className="cs-body">
          I led the creative direction from concept to delivery. The core question was clear: how do you make an internal operational philosophy feel like a movement? I defined the visual narrative, built the campaign system, and directed AI-generated imagery to create a visual language that didn&apos;t exist before — one that could carry the weight of the message across every touchpoint.
        </p>

        {/* VIDEO */}
        <video
          src="/blue-engine-launch.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="cs-banner-img"
          style={{ borderRadius: '4px' }}
        />

        <p className="cs-body">
          The result was a multi-format campaign: social content, internal assets, and launch materials — all designed to communicate one idea with precision. Execution over speed. Strategy over improvisation. Every piece reinforced that Blue Engine isn&apos;t just how Elaniin works — it&apos;s the standard for what comes next.
        </p>
      </article>

      {/* NEXT PROJECT */}
      <div className="cs-footer-nav">
        <div className="cs-footer-nav-inner">
          <a href="/work/elaniin-la" style={{ textDecoration: 'none' }}>
            <div className="cs-footer-eyebrow">Next case</div>
            <div className="cs-footer-title">Elaniin Lands in L.A.</div>
          </a>
          <a href="/work" className="cs-footer-back">← Back to cases</a>
        </div>
      </div>

      {/* FOOTER */}
      {/* CONTACT */}
      <div className="contact-wrap" id="contact">
        <h2 className="contact-h">
          &ldquo;Timeless design<br />
          is the kind that<br />
          <u>leaves a mark.</u>&rdquo;
        </h2>
        <div>
          <p className="contact-attr">— Roger Paniagua</p>
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
