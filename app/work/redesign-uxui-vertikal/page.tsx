import type { Metadata } from 'next'
import Navbar from '../../Navbar'

export const metadata: Metadata = {
  title: 'Vertikal, a System Built to Grow · Roger Paniagua',
}

export default function RedesignUxUiVertikal() {
  return (
    <>
      {/* NAV */}
      <Navbar logoHref="/" anchorPrefix="/" />

      {/* HERO IMAGE */}
      <div className="cs-hero-img" style={{ backgroundImage: 'url(/vertikal-website/01-vetikal-website.jpg)' }} />

      {/* CONTENT */}
      <article className="cs-content">
        <p className="cs-category">UX/UI Design · 2023</p>
        <h1 className="cs-title">Vertikal, a System Built to Grow</h1>

        <div className="cs-tags">
          {['Brand Identity', 'Visual Identity', 'UX/UI', 'Design Systems', 'Web Design'].map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>

        <h2 className="cs-section-h">The real problem</h2>
        <p className="cs-body">
          I started working with Vertikal when the whole operation fit in the living room of their founders&apos; house. Years later they came back to me, now with a presence in El Salvador, the United States, and the Netherlands. Their website still spoke like the earlier version of the company, it didn&apos;t reflect the scale they had already reached.
        </p>
        <p className="cs-body">
          They trusted me to rebuild the project from the ground up, not just the site, the entire visual identity.
        </p>

        <h2 className="cs-section-h">The strategic decision</h2>
        <p className="cs-body">
          I didn&apos;t use AI on this project, in 2023 it wasn&apos;t the tool it is today. The direction came from researching companies with similar characteristics and looking at global tech references, not just local competitors. From there I defined the criteria: simple, powerful, and built to project the kind of trust that helps close leads.
        </p>
        <p className="cs-body">
          I carried that same criteria into the new logo, the full brand ecosystem, and part of the portal where Vertikal manages their clients&apos; projects.
        </p>

        <img
          src="/vertikal-website/03-vetikal-website.jpg"
          alt="Vertikal solutions menu and product ecosystem pages"
          className="cs-banner-img"
        />

        <img
          src="/vertikal-website/04-vetikal-website.jpg"
          alt="Vertikal Portal sign in screen"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">The system</h2>
        <p className="cs-body">
          I delivered a Figma file with the complete design system: visual identity, full website (home, solutions, case studies), and the screens the Vertikal team needed to build it with full autonomy. It wasn&apos;t an isolated piece, it was the foundation the company could keep building its digital presence on.
        </p>

        <img
          src="/vertikal-website/06-vetikal-website.jpg"
          alt="Vertikal design system delivered in Figma"
          className="cs-banner-img"
        />

        <img
          src="/vertikal-website/05-vetikal-website.jpg"
          alt="Vertikal work and our company pages"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">The result</h2>
        <p className="cs-body">
          There are no metrics for this project, but the feedback was direct: CEO Pablo Donan confirmed the brand and the site finally reflected the scale the company had already reached.
        </p>

        <img
          src="/vertikal-website/02-vetikal-website.jpg"
          alt="Vertikal homepage redesign with CEO Pablo Donan testimonial"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">Closing note</h2>
        <p className="cs-body">
          Watching a company grow from a living room to three countries, and being trusted to finally make its brand look that big, doesn&apos;t happen often.
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

      {/* CONTACT */}
      <div className="contact-wrap" id="contact">
        <h2 className="contact-h">
          Problem. Research.<br />
          Architect. Loop.
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

      {/* FOOTER */}
      <footer>
        <img src="/roger.svg" alt="" aria-hidden="true" className="footer-watermark-img" width="420" height="83" />
        <p className="footer-copy">© 2026 Roger Paniagua. All rights reserved.</p>
      </footer>
    </>
  )
}
