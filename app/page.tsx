'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import HeroParticles from './HeroParticles'
import HeroTagsMarquee from './HeroTagsMarquee'

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
  { src: '/elaniin.svg',       alt: 'Elaniin',       height: 28, tag: 'Home ♥' },
  { src: '/arka-software.svg', alt: 'Arka Software', height: 26 },
  { src: '/vertikal.svg',      alt: 'Vertikal',      height: 22 },
  { src: '/cavalier.svg',      alt: 'Cavalier',      height: 26 },
  { src: '/smartpyme.svg',     alt: 'SmartPyme',     height: 22 },
  { src: '/marucha.svg',       alt: 'Marucha',       height: 32, tag: 'The first brand of my career' },
  { src: '/diesel-road.svg',   alt: 'Diesel Road',   height: 40 },
  { src: '/pluma-verde.svg',   alt: 'Pluma Verde',   height: 36 },
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
        Math.round(ease * 10),
        Math.round(ease * 7),
        Math.round(ease * 70),
      ])
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
        <HeroParticles />
        <div>
          <h1 className="hero-h">
            Building the <span className="hero-typing">creative systems</span> that move brands forward.
          </h1>
          <HeroTagsMarquee />
        </div>
        <div>
            <div className="profile-card">
              <img src="/roger-profile.jpg" alt="Roger Paniagua" className="profile-img" />
              <div className="profile-info">
                <div className="profile-name">Roger Paniagua</div>
                <div className="profile-role">Head of Creative</div>
              </div>
            </div>
          <p className="sub">
            I&apos;m Roger — a creative leader with <strong>10+ years</strong> designing and directing high-impact solutions. I don&apos;t just make things look good. I build the systems, vision, and AI-powered workflows that make great design scale.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats" ref={statsRef} data-animate>
        <div className="stat">
          <div className="stat-n">{statValues[0]}+</div>
          <div className="stat-l">Years leading creative teams</div>
        </div>
        <div className="stat">
          <div className="stat-n">{statValues[1]}</div>
          <div className="stat-l">Disciplines mastered</div>
        </div>
        <div className="stat">
          <div className="stat-n">{statValues[2]}</div>
          <div className="stat-l">Google certifications</div>
        </div>
        <div className="stat">
          <div className="stat-n">{statValues[3]}+</div>
          <div className="stat-l">Brands shaped</div>
        </div>
      </div>

      {/* TRUSTED BY */}
      <div className="trusted-section" data-animate>
        <div className="eyebrow trusted-eyebrow">Part of my journey</div>
        <div className="trusted-logos-outer">
          <div className="trusted-logos-track">
            {/* Set 1 */}
            {journeyLogos.map((logo) =>
              logo.tag ? (
                <div key={logo.alt} className="trusted-logo-item">
                  <img src={logo.src} alt={logo.alt} className="trusted-logo" height={logo.height} />
                  <span className="trusted-logo-tag">{logo.tag}</span>
                </div>
              ) : (
                <img key={logo.alt} src={logo.src} alt={logo.alt} className="trusted-logo" height={logo.height} />
              )
            )}
            {/* Set 2 — duplicate for seamless loop, hidden from assistive tech */}
            {journeyLogos.map((logo) =>
              logo.tag ? (
                <div key={`${logo.alt}-dup`} className="trusted-logo-item" aria-hidden="true">
                  <img src={logo.src} alt="" className="trusted-logo" height={logo.height} />
                  <span className="trusted-logo-tag">{logo.tag}</span>
                </div>
              ) : (
                <img key={`${logo.alt}-dup`} src={logo.src} alt="" className="trusted-logo" height={logo.height} aria-hidden="true" />
              )
            )}
          </div>
        </div>
      </div>

      {/* SPLIT: ABOUT + PRINCIPLES */}
      <div className="split" id="approach">
        <div className="split-l">
          <div className="eyebrow">About</div>
          <h2 className="heading">Beyond the brief.<br />Beyond <em>the pixels.</em></h2>
          <p className="body-text">
            I started as a graphic designer — and I still am one at heart. Over time I realized that the most powerful thing I could do with that eye wasn&apos;t just design more. It was build the conditions for great creative work to emerge from an entire team.
          </p>
          <p className="body-text">
            Today I operate at the intersection of craft and leadership. Design is my native language — strategy and people management are what I&apos;ve layered on top. At Elaniin I&apos;ve grown from making things to shaping how a whole creative function thinks, decides, and executes.
          </p>
          <p className="body-text">
            That balance is intentional. The best creative leaders never stop seeing like designers — they just learn to lead at a larger scale.
          </p>
        </div>
        <div className="split-r">
          <div className="eyebrow">How I lead</div>
          <div className="p-card">
            <span className="p-num">01</span>
            <div>
              <div className="p-title">Build the team first</div>
              <p className="p-text">Great output is a byproduct of great architecture. I invest in people, process, and shared vision before touching any deliverable. When the foundation is right, excellence becomes repeatable.</p>
            </div>
          </div>
          <div className="p-card">
            <span className="p-num">02</span>
            <div>
              <div className="p-title">Strategy before execution</div>
              <p className="p-text">Communication without strategy is just noise. Before touching a single deliverable, I make sure the brief is sharp, the objective is clear, and the team understands why. Good strategy makes creative work more agile, not just quicker.</p>
            </div>
          </div>
          <div className="p-card">
            <span className="p-num">03</span>
            <div>
              <div className="p-title">Unlock, don&apos;t dictate</div>
              <p className="p-text">I set the vision and create conditions for autonomous, high-trust decision-making. My goal is to unlock every person&apos;s highest potential — the mark of a leader who truly builds.</p>
            </div>
          </div>
        </div>
      </div>

      {/* WORK */}
      <div className="work-section" id="work" data-animate>
        <div className="sec-header">
          <div className="eyebrow">Case Studies</div>
          <h2 className="heading">Work that<br />tells a story.</h2>
        </div>
        <div className="work-list">
          <a className="work-row wc-active" href="/work/elaniin-la">
            <div>
              <div className="wc-cat">Brand Communication</div>
              <div className="w-title">Elaniin Lands in L.A.</div>
              <p className="w-sub">Directing the visual ecosystem behind Elaniin&apos;s expansion into the U.S. market.</p>
            </div>
            <div className="work-row-right">
              <span className="w-year">2026</span>
              <span className="w-cta">View project →</span>
            </div>
          </a>
          <a className="work-row wc-active" href="/work/blue-engine">
            <div>
              <div className="wc-cat">Campaign Design</div>
              <div className="w-title">Blue Engine Launch Campaign</div>
              <p className="w-sub">Launching Elaniin&apos;s execution framework through a campaign built on precision and craft.</p>
            </div>
            <div className="work-row-right">
              <span className="w-year">2026</span>
              <span className="w-cta">View project →</span>
            </div>
          </a>
          <div className="work-row wc-soon">
            <div>
              <div className="wc-cat">Brand Strategy</div>
              <div className="w-title">Elaniin Brand System</div>
              <p className="w-sub">Full brand architecture, creative direction &amp; visual identity at scale.</p>
            </div>
            <div className="work-row-right">
              <span className="w-year">2024</span>
              <span className="w-cta">Coming soon</span>
            </div>
          </div>
          <div className="work-row wc-soon">
            <div>
              <div className="wc-cat">Leadership</div>
              <div className="w-title">Creative Team Scale-up</div>
              <p className="w-sub">Built and unlocked a cross-functional creative unit from the ground up.</p>
            </div>
            <div className="work-row-right">
              <span className="w-year">2023</span>
              <span className="w-cta">Coming soon</span>
            </div>
          </div>
          <div className="work-row wc-soon">
            <div>
              <div className="wc-cat">Art Direction</div>
              <div className="w-title">Visual Identity Systems</div>
              <p className="w-sub">Scalable design systems for digital-first brands across multiple verticals.</p>
            </div>
            <div className="work-row-right">
              <span className="w-year">2022</span>
              <span className="w-cta">Coming soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="exp-section" id="experience" data-animate>
        <div className="sec-header">
          <div className="eyebrow">Experience</div>
          <h2 className="heading">A decade of<br />building things.</h2>
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
          <h2 className="heading">The frameworks<br />I operate with.</h2>
        </div>
        <div className="creds-grid">
          <div className="cred"><div className="cred-by">Universidad Don Bosco · 2011–2016</div><div className="cred-name">Licenciatura en Diseño Gráfico</div><div className="cred-skills">Foundation of visual thinking, design theory, and creative craft</div></div>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/specialization/BSVBM6YR9V2L" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Jan 2024</div><div className="cred-name">Google Project Management Certificate</div><div className="cred-skills">Full program + Capstone: Applying PM in the Real World</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/NRHJW7FSTL44" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Dec 2023</div><div className="cred-name">Agile Project Management</div><div className="cred-skills">Scrum · Coaching · Agile Management · Influencing</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/VDHDW54BLMTM" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Dec 2023</div><div className="cred-name">Project Execution: Running the Project</div><div className="cred-skills">Quality Management · Risk Management · Strategic Thinking</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/BLMJMWG7WCVJ" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Oct 2023</div><div className="cred-name">Project Planning: Putting It All Together</div><div className="cred-skills">Project Planning · Risk Management · Procurement</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/V3YSQRM9HA27" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Sep 2023</div><div className="cred-name">Project Initiation: Starting a Successful Project</div><div className="cred-skills">Stakeholder Management · Business Writing · Project Management · Strategic Thinking · Project Charter</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/D9JFUWTKPPLN" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Jun 2023</div><div className="cred-name">Foundations of Project Management</div><div className="cred-skills">Stakeholder Management · Business Writing · Project Charter</div></a>
          <a className="cred" href="https://www.coursera.org/account/accomplishments/verify/L6LX8UD3KXDX" target="_blank" rel="noopener noreferrer"><div className="cred-by">Google · Jan 2024</div><div className="cred-name">Capstone: Applying PM in the Real World</div><div className="cred-skills">Stakeholder Management · Quality Management · Problem Solving · Effective Communication · Project Management</div></a>
        </div>
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
      <footer>
        <img src="/roger.svg" alt="" aria-hidden="true" className="footer-watermark-img" data-animate width="420" height="83" />
        <p className="footer-copy" data-animate>© 2026 Roger Paniagua. All rights reserved.</p>
      </footer>
    </>
  )
}
