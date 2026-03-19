import Navbar from '../Navbar'

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

        <div className="work-page-grid">
          {cases.map((c) => (
            <a key={c.slug} href={`/work/${c.slug}`} className="work-page-card" style={{ backgroundImage: `url(${c.image})` }}>
              <div className="work-page-card-overlay" />
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
      </main>

      <footer className="footer-light">
        <img src="/roger.svg" alt="" aria-hidden="true" className="footer-watermark-img footer-watermark-light" />
        <p className="footer-copy footer-copy--light">© 2026 Roger Paniagua. All rights reserved.</p>
      </footer>
    </>
  )
}
