'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import HeroParticles from './HeroParticles'
import SkillsGraph from './SkillsGraph'
import CredentialsAccordion from './CredentialsAccordion'

// ─────────────────────────────────────────────────────────────
// ASSET NAMING CONVENTION — /public/
// All files must use kebab-case: lowercase, hyphens, no spaces,
// no special characters, no uppercase.
//
// Pattern:  [brand]-[descriptor]-[variant]-[index].[ext]
// Examples: elaniin-in-la-banner-01.png
//           blue-engine-launch.mp4
//           diesel-road.svg
//
// Rules:
//   ✓  lowercase only
//   ✓  hyphens as word separators
//   ✓  numbers padded with leading zero (01, 02 …)
//   ✗  no spaces          ("Blue Engine.png"   → "blue-engine.png")
//   ✗  no camelCase       ("BlueEngine.mp4"    → "blue-engine.mp4")
//   ✗  no underscores     ("blue_engine.svg"   → "blue-engine.svg")
//   ✗  no special chars   ("elaniin (LA).png"  → "elaniin-la.png")
//
// ─────────────────────────────────────────────────────────────
// NEW LOGO CHECKLIST:
// 1. Name the file in kebab-case and place it in /public/
// 2. Check the SVG viewBox to get the aspect ratio (w ÷ h)
// 3. Pick a `height` so the rendered width lands in the ~115–185px
//    range — squarer logos (ratio < 4:1) need more height than
//    wide wordmarks to feel visually balanced in the marquee
// 4. Add the entry to journeyLogos below (both sets are rendered
//    automatically from this single array — no manual duplication)
// 5. If the logo deserves a tag label (e.g. "Home ♥"), add `tag`
// ─────────────────────────────────────────────────────────────

// Aspect ratios & target rendered widths at current heights:
//   elaniin       6.64:1  28px → ~186px
//   arka-software 6.14:1  26px → ~160px
//   vertikal      5.32:1  22px → ~117px
//   cavalier      4.73:1  26px → ~123px
//   smartpyme     5.94:1  22px → ~131px
//   marucha       4.0:1   32px → ~128px
//   diesel-road   2.96:1  40px → ~119px
//   pluma-verde   3.42:1  36px → ~123px
const journeyLogos = [
  { src: '/part-of-my-journey/elaniin.svg', alt: 'Elaniin', height: 28 },
  { src: '/part-of-my-journey/elaniin-ai.svg', alt: 'Elaniin AI', height: 26 },
  { src: '/part-of-my-journey/senseflow.svg', alt: 'SenseFlow', height: 16 },
  { src: '/part-of-my-journey/datasphere.svg', alt: 'DataSphere', height: 24 },
  { src: '/part-of-my-journey/arka-software.svg', alt: 'Arka Software', height: 26 },
  { src: '/part-of-my-journey/vertikal.svg', alt: 'Vertikal', height: 22 },
  { src: '/part-of-my-journey/cavalier.svg', alt: 'Cavalier', height: 26 },
  { src: '/part-of-my-journey/smartpyme.svg', alt: 'SmartPyme', height: 22 },
  { src: '/part-of-my-journey/marucha.svg', alt: 'Marucha', height: 26 },
  { src: '/part-of-my-journey/diesel-road.svg', alt: 'Diesel Road', height: 40 },
  { src: '/part-of-my-journey/pluma-verde.svg', alt: 'Pluma Verde', height: 36 },
]

const roles = [
  {
    id: 0,
    period: 'Apr 2022 – Present',
    duration: '4+ years · Full-time',
    role: 'Lead Graphic Designer',
    company: 'Elaniin · El Salvador · Hybrid',
    current: true,
    desc: "Leading creative direction for one of El Salvador's most dynamic tech brands. Managing creative teams, overseeing all visual communication, and building the systems that allow great work to scale without losing quality.",
    skills: ['Creative Direction', 'Brand Strategy', 'Team Leadership', 'Visual Systems', 'AI Image Direction'],
  },
  {
    id: 1,
    period: 'Oct 2017 – Apr 2022',
    duration: '4 yrs 7 mos',
    role: 'Senior Graphic Designer & Photographer',
    company: 'Elaniin · El Salvador',
    current: false,
    desc: 'Evolved from senior execution into creative leadership. Built the visual language of the brand and developed key systems that scaled across digital campaigns, editorial photography, and brand touchpoints.',
    skills: ['Visual Identity', 'Photography', 'Campaign Design', 'Brand Development'],
  },
  {
    id: 2,
    period: 'Jun – Oct 2017',
    duration: '',
    role: 'Graphic Designer',
    company: 'Vertikal Marketing · El Salvador',
    current: false,
    desc: 'Visual assets for multi-brand campaigns across digital and print channels.',
    skills: ['Graphic Design', 'Digital Campaigns', 'Print Design'],
  },
  {
    id: 3,
    period: 'Aug 2016 – May 2017',
    duration: '',
    role: 'Graphic Designer',
    company: 'Próxima El Salvador',
    current: false,
    desc: 'Creative execution for a diverse portfolio of clients across the Salvadoran market.',
    skills: ['Graphic Design', 'Client Work', 'Creative Execution'],
  },
  {
    id: 4,
    period: 'Dec 2015 – Aug 2016',
    duration: '',
    role: 'Jr. Graphic Designer',
    company: 'LIKE Agencia Digital · El Salvador',
    current: false,
    desc: 'First professional role. Where the foundation of craft, work ethic, and creative discipline was built.',
    skills: ['Graphic Design', 'Digital Design', 'Creative Foundations'],
  },
]

export default function Home() {
  const [activeRole, setActiveRole] = useState(0)
  const [statValues, setStatValues] = useState([0, 0, 0, 0])
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // Scroll animations — disabled on mobile for performance
  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) return
    const els = document.querySelectorAll('[data-animate]')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Stats counter trigger
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStatsStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Stats counter animation
  useEffect(() => {
    if (!statsStarted) return
    const duration = 1200
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setStatValues([
        Math.round(ease * 10),
        Math.round(ease * 70),
        0,
        0,
      ])
      const el = document.querySelector('.stat-n--text')
      if (el) el.classList.add('visible')
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [statsStarted])

  const selected = roles[activeRole]

  return (
    <>
      {/* NAV */}
      <Navbar logoHref="#" />

      {/* HERO */}
      <main>
      <div className="hero">
        <div className="hero-centered">
          <div className="hero-tag">
            <img src="/roger-profile.jpg" alt="Roger Paniagua" className="profile-img" style={{ width: '36px', height: '36px' }} />
            <span className="hero-tag-label">Roger Paniagua — Head of Creative</span>
          </div>
          <h1 className="hero-h">
            <em className="hero-serif">Sharp ideas.</em>
            <span className="hero-bold">Sharper<br className="hero-br" /> execution.</span>
          </h1>
          <p className="hero-sub">Leading teams, shaping brands, and building creative systems that scale.</p>
          <a href="#work" className="hero-cta">Read case studies →</a>
          <div className="hero-logos">
            <div className="hero-logos-outer">
              <div className="hero-logos-track trusted-logos-track">
                {journeyLogos.map((logo) => (
                  <img key={logo.alt} src={logo.src} alt={logo.alt} className="trusted-logo" height={logo.height} />
                ))}
                {journeyLogos.map((logo) => (
                  <img key={`${logo.alt}-dup`} src={logo.src} alt="" className="trusted-logo" height={logo.height} aria-hidden="true" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* STATS */}
      <div className="stats" ref={statsRef}>
        <div className="stats-inner">
        <div className="stat">
          <div className="stat-header">
            <span className="stat-tag">Experience</span>
            <span className="stat-index">01</span>
          </div>
          <div className="stat-n">{statValues[0]}+</div>
          <div className="stat-l">Years leading creative teams across LATAM and the U.S.</div>
        </div>
        <div className="stat">
          <div className="stat-header">
            <span className="stat-tag">Impact</span>
            <span className="stat-index">02</span>
          </div>
          <div className="stat-n">{statValues[1]}+</div>
          <div className="stat-l">Brands shaped through strategy, design, and creative direction.</div>
        </div>
        <div className="stat">
          <div className="stat-header">
            <span className="stat-tag">Reach</span>
            <span className="stat-index">03</span>
          </div>
          <div className="stat-n stat-n--text">SV · US · ES · NL</div>
          <div className="stat-l">Markets where my work has made an impact.</div>
        </div>
        </div>
      </div>

      {/* SKILLS GRAPH */}
      <SkillsGraph />


      {/* WORK */}
      <div className="work-section" id="work" data-animate>
        <div className="sec-header">
          <div className="eyebrow">Case Studies</div>
          <h2 className="heading">Work that tells a <em>story.</em></h2>
        </div>
        <div className="work-featured-grid">
          <a href="/work/elaniin-la" className="work-featured-card work-featured-card--main">
            <div className="work-featured-card-image" style={{ backgroundImage: 'url(/elaniin-in-la-hero.png)' }} />
            <div className="work-featured-card-content">
              <div className="work-featured-meta">
                <span className="work-featured-new">NEW</span>
                <span className="work-featured-cat">Brand Communication</span>
                <span className="work-featured-year">2026</span>
              </div>
              <h3 className="work-featured-title">Elaniin Lands in L.A.</h3>
              <p className="work-featured-sub">Directing the visual ecosystem behind Elaniin&apos;s expansion into the U.S. market.</p>
              <span className="work-featured-cta-primary">View case study →</span>
            </div>
          </a>

          <a href="/work" className="work-featured-card work-featured-card--all">
            <div className="work-featured-all-inner">
              <p className="work-featured-all-eyebrow">Case Studies</p>
              <h3 className="work-featured-all-heading">See all <em>the work.</em></h3>
              <span className="work-featured-all-cta">View all cases →</span>
            </div>
          </a>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="exp-section" id="experience" data-animate>
        <div className="sec-header">
          <div className="eyebrow">Experience</div>
          <h2 className="heading">A <em>decade</em> of building things.</h2>
        </div>
        <div className="exp-interactive">
          {/* Left: role list */}
          <div className="exp-list-col">
            {roles.map((r) => (
              <button
                key={r.id}
                className={`exp-list-item${activeRole === r.id ? ' exp-list-item--active' : ''}`}
                onClick={() => setActiveRole(r.id)}
              >
                <span className="exp-list-role">{r.role}</span>
                <span className="exp-list-co">{r.company.split(' · ')[0]}</span>
              </button>
            ))}
          </div>
          {/* Right: detail panel */}
          <div className="exp-detail-col">
            <div className="exp-detail-header">
              <div>
                <div className="exp-role">{selected.role}</div>
                <div className="exp-co">{selected.company}</div>
              </div>
              {selected.current && <span className="badge">Current</span>}
            </div>
            <div className="exp-period">{selected.period}{selected.duration ? ` · ${selected.duration}` : ''}</div>
            <p className="exp-desc">{selected.desc}</p>
            <div className="exp-skills">
              {selected.skills.map(s => <span key={s} className="exp-skill">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* CREDENTIALS */}
      <div className="creds-section" id="credentials" data-animate>
        <div className="sec-header">
          <div className="eyebrow">Education &amp; Credentials</div>
          <h2 className="heading">The <em>frameworks</em> I operate with.</h2>
        </div>
        <div className="creds-grid">
          <div className="cred cred-hover"><div className="cred-by">Universidad Don Bosco · 2011–2016</div><div className="cred-name">Licenciatura en Diseño Gráfico</div><div className="cred-skills">Foundation of visual thinking, design theory, and creative craft</div></div>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/specialization/BSVBM6YR9V2L" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Jan 2024</div><div className="cred-name">Google Project Management Certificate</div><div className="cred-skills">Full program + Capstone: Applying PM in the Real World</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/NRHJW7FSTL44" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Dec 2023</div><div className="cred-name">Agile Project Management</div><div className="cred-skills">Scrum · Coaching · Agile Management · Influencing</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/VDHDW54BLMTM" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Dec 2023</div><div className="cred-name">Project Execution: Running the Project</div><div className="cred-skills">Quality Management · Risk Management · Strategic Thinking</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/BLMJMWG7WCVJ" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Oct 2023</div><div className="cred-name">Project Planning: Putting It All Together</div><div className="cred-skills">Project Planning · Risk Management · Procurement</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/V3YSQRM9HA27" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Sep 2023</div><div className="cred-name">Project Initiation: Starting a Successful Project</div><div className="cred-skills">Stakeholder Management · Business Writing · Project Management · Strategic Thinking · Project Charter</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/D9JFUWTKPPLN" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Jun 2023</div><div className="cred-name">Foundations of Project Management</div><div className="cred-skills">Stakeholder Management · Business Writing · Project Charter</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/L6LX8UD3KXDX" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Jan 2024</div><div className="cred-name">Capstone: Applying PM in the Real World</div><div className="cred-skills">Stakeholder Management · Quality Management · Problem Solving · Effective Communication · Project Management</div></a>
        </div>
        <CredentialsAccordion />
      </div>

      {/* CONTACT */}
      <div className="contact-wrap" id="contact">
        <h2 className="contact-h" data-animate>
          &ldquo;Timeless design<br />
          is the kind that<br />
          <u>leaves a mark.</u>&rdquo;
        </h2>
        <div data-animate>
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

      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}
