import Navbar from '../../Navbar'

export default function Bitlab() {
  return (
    <>
      <Navbar logoHref="/" anchorPrefix="/" />

      <div className="cs-hero-img" style={{ backgroundImage: 'url(/bitlab/01-bitlab.png)' }} />

      <article className="cs-content">
        <p className="cs-category">Brand Strategy · 2023</p>
        <h1 className="cs-title">bit/ab — Redefining a Tech Academy from the Inside Out</h1>

        <div className="cs-tags">
          {['Creative Direction', 'Brand Strategy', 'Visual Identity', 'Brandbook', 'Campaign Design', 'Visual Systems'].map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>

        <video
          src="/bitlab/launch-bitlab.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="cs-banner-img"
          style={{ borderRadius: '4px' }}
        />

        <p className="cs-body">
          Bitlab wasn&apos;t a new brand. It was a brand that needed to become what it always should have been. The existing identity didn&apos;t reflect the ambition, the rigor, or the real impact of what this tech skills academy was building. It looked like a placeholder. The work was to build what it was actually meant to be.
        </p>

        <p className="cs-body">
          My role was creative direction. I led the team through the full rebranding — from strategic positioning to the final visual ecosystem — and authored the brandbook that unified every decision into a single, coherent system.
        </p>

        <img src="/bitlab/02-bitlab.png" alt="Bitlab brand applications" className="cs-banner-img" />

        <p className="cs-body">
          The new identity was built around one idea: a tech academy that doesn&apos;t just teach skills, it transforms trajectories. The logotype became the expression of that duality — &quot;bit&quot; and &quot;lab&quot; in deliberate tension, the slash as a symbol of forward motion and code culture simultaneously. Deep violet as the foundation. Purple as the energy.
        </p>

        <img src="/bitlab/03-bitlab.png" alt="Bitlab visual system" className="cs-banner-img" />

        <img src="/bitlab/04-bitlab.png" alt="Bitlab campaign materials" className="cs-banner-img" />

        <p className="cs-body">
          The new Bitlab identity launched at DevWeek 2023 — one of El Salvador&apos;s most significant tech gatherings, bringing together government officials, private companies, investment funds, and universities under one roof. That&apos;s not a soft launch. That&apos;s a statement of intent in front of the exact audience that needed to see it.
        </p>

        <img src="/bitlab/lanzamiento-devweek23.png" alt="Bitlab launch at DevWeek 2023" className="cs-banner-img" />
      </article>

      <div className="cs-footer-nav">
        <div className="cs-footer-nav-inner">
          <a href="/work/blue-engine" style={{ textDecoration: 'none' }}>
            <div className="cs-footer-eyebrow">Next project</div>
            <div className="cs-footer-title">Blue Engine Launch Campaign</div>
          </a>
          <a href="/work" className="cs-footer-back">
            <div className="cs-footer-back-eyebrow-right">Case studies</div>
            <div className="cs-footer-back-title">All projects →</div>
          </a>
        </div>
      </div>

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
