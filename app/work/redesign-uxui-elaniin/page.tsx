import type { Metadata } from 'next'
import Navbar from '../../Navbar'

export const metadata: Metadata = {
  title: 'Elaniin, an Identity Built to Last · Roger Paniagua',
}

export default function RedesignUxUiElaniin() {
  return (
    <>
      {/* NAV */}
      <Navbar logoHref="/" anchorPrefix="/" />

      {/* HERO IMAGE */}
      <div className="cs-hero-img" style={{ backgroundImage: 'url(/elaniin-website/01-elaniin-website.jpg)' }} />

      {/* CONTENT */}
      <article className="cs-content">
        <p className="cs-category">UX/UI Design · 2026</p>
        <h1 className="cs-title">Elaniin, an Identity Built to Last</h1>

        <div className="cs-tags">
          {['UX/UI', 'Design Systems', 'AI Direction', 'Visual Identity', 'Web Design'].map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>

        <h2 className="cs-section-h">The real problem</h2>
        <p className="cs-body">
          I inherited this website from Elaniin&apos;s previous Head of UX/UI, and I&apos;ve been evolving it piece by piece ever since. My own vision for the brand has always been the same: it should feel timeless and unmistakably high tech. The challenge here wasn&apos;t fixing something broken, it was pushing that identity to its next visual level without losing what made it Elaniin, while the company&apos;s growth demanded more from the site than it ever had before.
        </p>

        <div className="cs-banner-img" style={{ overflow: 'hidden', borderRadius: '4px' }}>
          <video
            src="/elaniin-website/02-elaniin-uxui.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transform: 'scale(1.06)', transformOrigin: 'top' }}
          />
        </div>

        <h2 className="cs-section-h">The strategic decision</h2>
        <p className="cs-body">
          Elaniin&apos;s brand assets had been evolving for years, and the website needed to finally catch up. Stripe was my biggest reference, not to copy it, but for what it proves possible: dense, technical content that still reads as approachable. I shifted the interface away from a palette dominated by heavy blues, giving lighter tones more visual weight, and rebuilt the interactive components around that shift. The result is a layout built for simplicity and visual function, not decoration.
        </p>

        <img
          src="/elaniin-website/04-elaniin-website.jpg"
          alt="Elaniin solution pages across Shopify, Google Cloud, and Webflow"
          className="cs-banner-img"
        />

        <p className="cs-body">
          Every time AI enters a process like this, it introduces its own bias, and I approached it carefully. It started with the L.A. launch campaign, where we proved AI could meet our graphic standards without compromising them. For the team&apos;s official photography, I directed the process through careful prompt engineering, controlling lens type, depth of field, and lighting until the results matched the concept we had in mind. There was resistance from the team at first. Over time, as the results kept holding up, that hesitation faded.
        </p>

        <img
          src="/elaniin-website/03-elaniin-website.jpg"
          alt="Elaniin leadership team page with AI-directed photography"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">The system</h2>
        <p className="cs-body">
          I delivered a complete Figma file: the full website, from the hero to the service blocks, the engagement models, the four-step journey, the AI solutions section, and the updated component library behind all of it. No single piece carries the redesign on its own. The system works because every section was rebuilt under the same visual logic: a lighter palette, cleaner components, and photography that finally matches the technical caliber of the company itself.
        </p>

        <img
          src="/elaniin-website/06-elaniin-uxui.jpg"
          alt="Elaniin website design system delivered in Figma"
          className="cs-banner-img"
        />

        <img
          src="/elaniin-website/05-elaniin-website.jpg"
          alt="Elaniin four-step delivery journey and AI solutions section"
          className="cs-banner-img"
        />

        <h2 className="cs-section-h">The result</h2>
        <p className="cs-body">
          What I can say is that projects like this build real confidence, both mine and the team&apos;s, in how powerful AI is when someone who actually knows the craft is the one directing it. Our AI Creative Technologist, who brought the globe animation to life, went through that same process. The redesign came out clean because of how gradual and intentional every adjustment along the way was.
        </p>

        <h2 className="cs-section-h">Closing note</h2>
        <p className="cs-body">
          The more AI shapes a project like this, the clearer one thing gets: the tool is only as good as the specialist directing it.
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
