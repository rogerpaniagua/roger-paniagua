import Navbar from '../Navbar'
import Footer from '../Footer'

const cases = [
  {
    slug: 'elaniin-la',
    category: 'Brand Communication',
    title: 'Elaniin Lands in L.A.',
    sub: 'Directing the visual ecosystem behind Elaniin\'s expansion into the U.S. market.',
    year: '2026',
    image: '/elaniin-in-la-hero.png',
  },
  {
    slug: 'blue-engine',
    category: 'Campaign Design',
    title: 'Blue Engine Launch Campaign',
    sub: 'Launching Elaniin\'s execution framework through a campaign built on precision and craft.',
    year: '2026',
    image: '/blue-engine-banner-01.png',
  },
]

export default function Work() {
  return (
    <>
      <Navbar logoHref="/" anchorPrefix="/" />

      <main>
        <div className="work-page-header">
          <p className="eyebrow">Case Studies</p>
          <h1 className="heading">Made to <em>inspire.</em></h1>
          <p className="work-page-intro">A curated selection of projects where strategy and craft came together. Maybe something here sparks your next idea.</p>
        </div>

        <div className="work-page-grid-wrap">
          <div className="work-page-grid">
            {cases.map((c) => (
              <a key={c.slug} href={`/work/${c.slug}`} className="work-page-card">
                <div className="work-page-card-image" style={{ backgroundImage: `url(${c.image})` }} />
                <div className="work-page-card-content">
                  <div className="work-page-card-meta">
                    <span className="work-page-card-cat">{c.category}</span>
                    <span className="work-page-card-year">{c.year}</span>
                  </div>
                  <h2 className="work-page-card-title">{c.title}</h2>
                  <p className="work-page-card-sub">{c.sub}</p>
                  <span className="work-page-card-cta">View case study →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="work-more">
          <div className="work-more-inner">
            <span className="work-more-line" />
            <span className="work-more-dot">✦</span>
            <p className="work-more-text">More case studies on the way</p>
            <span className="work-more-dot">✦</span>
            <span className="work-more-line" />
          </div>
        </div>
      </main>

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
