import Navbar from '../Navbar'

const WORDMARK = 'M0,81.71V1.2h44.46c19.83,0,31.12,8.77,31.12,24.15,0,13.1-7.57,20.91-22.71,22.35v.96c7.21,1.92,9.97,5.77,12.98,11.42l11.66,21.63h-20.91l-11.06-20.91c-3.24-6.25-6.25-8.29-15.62-8.29h-11.9v29.2H0ZM18.02,38.93h26.32c8.53,0,12.38-2.4,12.38-10.81,0-7.93-3.85-10.69-12.38-10.69h-26.32v21.51Z M80.14,41.46C80.14,16.34,96.72,0,123.4,0s43.74,16.34,43.74,41.46-16.46,41.46-43.74,41.46-43.26-16.34-43.26-41.46ZM147.91,41.46c0-17.9-6.85-24.15-24.51-24.15s-24.15,6.25-24.15,24.15,6.49,24.15,24.15,24.15,24.51-6.25,24.51-24.15Z M171.94,41.46c0-25.11,17.06-41.46,44.7-41.46,25.23,0,41.22,11.78,41.22,31.12v.96h-20.07v-.96c0-9.37-6.13-13.82-21.63-13.82-18.26,0-25.11,6.25-25.11,24.15s6.61,24.15,24.27,24.15,24.15-2.88,24.63-13.1h-27.28v-13.34h45.3v42.54h-16.7v-17.3h-.96c-2.76,10.57-11.18,18.51-28.6,18.51-24.63,0-39.77-16.34-39.77-41.46Z M265.54,81.71V1.2h68.13v16.22h-50.11v15.74h48.31v16.1h-48.31v16.22h50.11v16.22h-68.13Z M340.64,81.71V1.2h44.46c19.83,0,31.12,8.77,31.12,24.15,0,13.1-7.57,20.91-22.71,22.35v.96c7.21,1.92,9.97,5.77,12.98,11.42l11.66,21.63h-20.91l-11.05-20.91c-3.24-6.25-6.25-8.29-15.62-8.29h-11.9v29.2h-18.02ZM358.66,38.93h26.32c8.53,0,12.38-2.4,12.38-10.81,0-7.93-3.85-10.69-12.38-10.69h-26.32v21.51Z'

const MONOGRAM = 'M0,81.71V1.2h44.46c19.83,0,31.12,8.77,31.12,24.15,0,13.1-7.57,20.91-22.71,22.35v.96c7.21,1.92,9.97,5.77,12.98,11.42l11.66,21.63h-20.91l-11.06-20.91c-3.24-6.25-6.25-8.29-15.62-8.29h-11.9v29.2H0ZM18.02,38.93h26.32c8.53,0,12.38-2.4,12.38-10.82,0-7.93-3.85-10.69-12.38-10.69h-26.32v21.51Z M80.14,41.46C80.14,16.34,97.21,0,124.84,0c25.23,0,41.22,11.78,41.22,31.12v.96h-20.07v-.96c0-9.37-6.13-13.82-21.63-13.82-18.26,0-25.11,6.25-25.11,24.15s6.61,24.15,24.27,24.15,24.15-2.88,24.63-13.1h-27.28v-13.34h45.3v42.54h-16.7v-17.3h-.96c-2.76,10.58-11.18,18.5-28.6,18.5-24.63,0-39.77-16.34-39.77-41.46Z'

export default function Brand() {
  return (
    <>
      <Navbar logoHref="/" anchorPrefix="/" />
      <main className="brand-page">

        {/* HERO */}
        <div className="brand-hero">
          <div className="brand-hero-left">
            <p className="brand-eyebrow">Version 1.0 · 2024</p>
            <h1 className="brand-hero-h">
              Built to <em>last.</em><br />
              Not to trend.
            </h1>
          </div>
          <div className="brand-hero-right">
            <p className="brand-hero-statement">
              ROGER wasn&apos;t built around aesthetics. It was built around a <strong>point of view</strong> — that great creative leadership leaves systems behind, not just work. This document is the proof of that thinking applied to itself.
            </p>
            <div className="brand-hero-meta">
              {[
                { label: 'Founded', value: 'El Salvador, 2024' },
                { label: 'Role', value: 'Head of Creative' },
                { label: 'Reach', value: 'LATAM · United States' },
                { label: 'This document', value: 'Living — updated as the brand evolves' },
              ].map(({ label, value }) => (
                <div key={label} className="brand-meta-row">
                  <span className="brand-meta-label">{label}</span>
                  <span className="brand-meta-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRINCIPLES */}
        <div className="brand-principles">
          {[
            { num: '01', title: <>Design is a <em>language,</em> not a style.</>, text: 'Every decision — a typeface, a color, a margin — communicates something before a word is read. ROGER treats design as a precise tool for meaning, not decoration.' },
            { num: '02', title: <>Systems over <em>moments.</em></>, text: 'One great piece is luck. A system that produces great work consistently is leadership. ROGER is built to scale — in teams, in campaigns, in decades.' },
            { num: '03', title: <>Timeless beats <em>current.</em></>, text: 'Trends date everything they touch. ROGER was designed to look as deliberate in 10 years as it does today — through restraint, not avoidance.' },
          ].map(({ num, title, text }) => (
            <div key={num} className="brand-principle">
              <div className="brand-principle-num">{num}</div>
              <div className="brand-principle-title">{title}</div>
              <p className="brand-principle-text">{text}</p>
            </div>
          ))}
        </div>

        {/* THE MARK */}
        <div className="brand-section">
          <div className="brand-section-header">
            <p className="brand-section-eyebrow">01 — The mark</p>
            <h2 className="brand-section-title">The <em>logo.</em></h2>
          </div>
          {[
            { name: 'Wordmark', meta: 'Primary mark · ROGER', viewBox: '0 0 420 82.91', height: 32, path: WORDMARK, note: 'The primary mark. Use on dark backgrounds with the light version, and on light backgrounds with the dark version. Minimum height: 24px. Always maintain clear space equal to the height of the "R" on all sides.' },
            { name: 'Monogram', meta: 'Secondary mark · RG', viewBox: '0 0 165 82.91', height: 48, path: MONOGRAM, note: 'The secondary mark. Used in compact contexts — favicons, app icons, social avatars. Never use alongside the wordmark at the same scale.' },
          ].map(({ name, meta, viewBox, height, path, note }) => (
            <div key={name} className="brand-block">
              <div className="brand-block-header">
                <span className="brand-block-name">{name}</span>
                <span className="brand-block-meta">{meta}</span>
              </div>
              <div className="brand-logo-row">
                <div className="brand-logo-cell brand-logo-cell--dark">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} height={height} fill="#EDEAE3"><path d={path} /></svg>
                </div>
                <div className="brand-logo-cell brand-logo-cell--light">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} height={height} fill="#1a1915"><path d={path} /></svg>
                </div>
              </div>
              <div className="brand-usage-note">
                <div className="brand-usage-dot" />
                <p>{note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* COLOR */}
        <div className="brand-section">
          <div className="brand-section-header">
            <p className="brand-section-eyebrow">02 — Color</p>
            <h2 className="brand-section-title">The <em>palette.</em></h2>
            <p className="brand-section-desc">A warm, restrained palette built around near-black and off-white. Every color earns its place — nothing is decorative.</p>
          </div>

          {/* Obsidian */}
          <div className="brand-block">
            <div className="brand-block-header">
              <span className="brand-block-name">Obsidian <span className="brand-token">black</span></span>
              <span className="brand-block-meta">Hero · Nav · Footer · Dark UI</span>
            </div>
            <div className="brand-swatches">
              {[{ hex: '#1a1915' }, { hex: '#2a2825' }, { hex: '#3a3835' }, { hex: '#4a4845' }].map((s, i) => (
                <div key={i} className="brand-swatch-wrap">
                  <div className="brand-swatch" style={{ background: s.hex }} />
                  <span className="brand-swatch-hex">{s.hex}</span>
                </div>
              ))}
            </div>
            <div className="brand-apps-header">
              <span>Applications</span>
            </div>
            <div className="brand-app-grid">
              <div className="brand-app-cell">
                <div className="brand-app-label">Hero / Nav</div>
                <div className="brand-app-preview brand-app-preview--dark">
                  <div className="bap-nav">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 82.91" height="14" fill="#EDEAE3"><path d={WORDMARK} /></svg>
                    <span className="bap-nav-cta">Say hello →</span>
                  </div>
                  <div className="bap-hero-content">
                    <div className="bap-hero-h">Building the <span className="bap-hero-italic">creative systems</span></div>
                    <div className="bap-hero-sub">A creative leader with 10+ years designing high-impact solutions.</div>
                    <div className="bap-tags">
                      {['Creative Direction', 'Brand Strategy', 'AI Direction'].map(t => (
                        <span key={t} className="bap-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Contact section</div>
                <div className="brand-app-preview brand-app-preview--dark">
                  <div className="bap-contact">
                    <div className="bap-contact-quote">&ldquo;Timeless design is the kind that leaves a mark.&rdquo;</div>
                    <div className="bap-contact-attr">— Roger Paniagua</div>
                    <div className="bap-contact-btn">Start a conversation →</div>
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Work card hover</div>
                <div className="brand-app-preview brand-app-preview--dark-mid">
                  <div className="bap-card-hover">
                    <div className="bap-card-cat">Brand Communication · 2026</div>
                    <div className="bap-card-title">Elaniin Lands in L.A.</div>
                    <div className="bap-card-sub">Directing the visual ecosystem behind Elaniin&apos;s expansion.</div>
                    <div className="bap-card-cta">View case study →</div>
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Footer</div>
                <div className="brand-app-preview brand-app-preview--dark">
                  <div className="bap-footer">
                    <img src="/roger.svg" alt="" style={{ width: '100%', opacity: 0.12, display: 'block' }} />
                    <div className="bap-footer-copy">© 2026 Roger Paniagua. All rights reserved.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-usage-note">
              <div className="brand-usage-dot" />
              <p>The foundational dark — used for the hero, navbar, footer, contact section, and all dark UI states including card hover effects.</p>
            </div>
          </div>

          {/* Parchment */}
          <div className="brand-block">
            <div className="brand-block-header">
              <span className="brand-block-name">Parchment <span className="brand-token">bg</span></span>
              <span className="brand-block-meta">Page background · Buttons · Inverted text</span>
            </div>
            <div className="brand-swatches">
              {[{ hex: '#EDEAE3' }, { hex: '#F2EFE8' }, { hex: '#E3E0D8' }, { hex: '#D8D5CE' }].map((s, i) => (
                <div key={i} className="brand-swatch-wrap">
                  <div className="brand-swatch" style={{ background: s.hex, border: '1px solid rgba(26,25,21,0.08)' }} />
                  <span className="brand-swatch-hex">{s.hex}</span>
                </div>
              ))}
            </div>
            <div className="brand-apps-header">
              <span>Applications</span>
            </div>
            <div className="brand-app-grid">
              <div className="brand-app-cell">
                <div className="brand-app-label">Page layout</div>
                <div className="brand-app-preview brand-app-preview--light">
                  <div className="bap-page">
                    <div className="bap-page-eyebrow">Case Studies</div>
                    <div className="bap-page-h">Work that tells a <span className="bap-page-italic">story.</span></div>
                    <div className="bap-page-cards">
                      {['Elaniin L.A.', 'Blue Engine'].map((title) => (
                        <div key={title} className="bap-page-card">
                          <div className="bap-page-card-img" />
                          <div className="bap-page-card-body">
                            <div className="bap-page-card-cat">Brand Communication</div>
                            <div className="bap-page-card-title">{title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">CTA buttons on dark</div>
                <div className="brand-app-preview brand-app-preview--dark">
                  <div className="bap-btns">
                    <div className="bap-btns-row">
                      <div className="bap-btn">Start a conversation →</div>
                      <div className="bap-btn">View case study →</div>
                    </div>
                    <div className="bap-btn bap-btn--secondary">Download CV →</div>
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Stats section</div>
                <div className="brand-app-preview brand-app-preview--light-card">
                  <div className="bap-stats">
                    {[{ n: '10+', l: 'Years leading' }, { n: '70+', l: 'Brands shaped' }, { n: '10', l: 'Disciplines' }, { n: '7', l: 'Certifications' }].map(({ n, l }, i) => (
                      <div key={i} className="bap-stat">
                        <div className="bap-stat-n">{n}</div>
                        <div className="bap-stat-l">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Nav — inverted</div>
                <div className="brand-app-preview brand-app-preview--dark">
                  <div className="bap-nav-inv">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 82.91" height="14" fill="#EDEAE3"><path d={WORDMARK} /></svg>
                    <span className="bap-nav-cta" style={{ background: '#EDEAE3', color: '#1a1915' }}>Say hello →</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-usage-note">
              <div className="brand-usage-dot" />
              <p>The warm off-white — the primary page background and the inverted color for buttons and text on dark surfaces. Never pure white.</p>
            </div>
          </div>

          {/* Stone */}
          <div className="brand-block">
            <div className="brand-block-header">
              <span className="brand-block-name">Stone <span className="brand-token">muted</span></span>
              <span className="brand-block-meta">Body text · Labels · Metadata · Nav links</span>
            </div>
            <div className="brand-swatches">
              {[{ hex: '#6b6860' }, { hex: 'rgba(237,234,227,0.5)', label: '--bg 50%' }].map((s, i) => (
                <div key={i} className="brand-swatch-wrap">
                  <div className="brand-swatch" style={{ background: s.hex }} />
                  <span className="brand-swatch-hex">{s.label || s.hex}</span>
                </div>
              ))}
            </div>
            <div className="brand-apps-header">
              <span>Applications</span>
            </div>
            <div className="brand-app-grid">
              <div className="brand-app-cell">
                <div className="brand-app-label">Body text</div>
                <div className="brand-app-preview brand-app-preview--light">
                  <div className="bap-body">
                    <div className="bap-body-eyebrow">About</div>
                    <div className="bap-body-h">Beyond the brief.<br />Beyond <span className="bap-body-italic">the pixels.</span></div>
                    <div className="bap-body-text">I started as a graphic designer — and I still am one at heart. Over time I realized the most powerful thing I could do wasn&apos;t just design more.</div>
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Nav links</div>
                <div className="brand-app-preview brand-app-preview--dark">
                  <div className="bap-navlinks">
                    {['About', 'Case Studies', 'Experience'].map(l => (
                      <span key={l} className="bap-navlink">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Eyebrow labels</div>
                <div className="brand-app-preview brand-app-preview--light">
                  <div className="bap-eyebrows">
                    {['Case Studies', 'Experience', 'About', 'Education & Credentials'].map(e => (
                      <div key={e} className="bap-eyebrow-item">{e}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Work row metadata</div>
                <div className="brand-app-preview brand-app-preview--light">
                  <div className="bap-work-rows">
                    {[{ cat: 'Brand Communication', title: 'Elaniin Lands in L.A.', year: '2026' }, { cat: 'Campaign Design', title: 'Blue Engine Launch', year: '2026' }].map(({ cat, title, year }) => (
                      <div key={title} className="bap-work-row">
                        <div>
                          <div className="bap-work-cat">{cat}</div>
                          <div className="bap-work-title">{title}</div>
                        </div>
                        <div className="bap-work-year">{year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-usage-note">
              <div className="brand-usage-dot" />
              <p>The secondary tone — used for all body text, metadata, nav links, eyebrows, and supporting information. Never for primary headings.</p>
            </div>
          </div>

          {/* Ash */}
          <div className="brand-block">
            <div className="brand-block-header">
              <span className="brand-block-name">Ash <span className="brand-token">border</span></span>
              <span className="brand-block-meta">Card borders · Section dividers · Grid lines</span>
            </div>
            <div className="brand-ash-swatches">
              <div className="brand-ash-bar brand-ash-bar--light">
                <div className="brand-ash-bar-fill" style={{ background: 'linear-gradient(to right, rgba(26,25,21,0.04), rgba(26,25,21,0.20))' }} />
                <div className="brand-ash-bar-labels">
                  <span>6%</span><span>12%</span><span>20%</span>
                </div>
              </div>
              <div className="brand-ash-bar brand-ash-bar--dark">
                <div className="brand-ash-bar-fill" style={{ background: 'linear-gradient(to right, rgba(237,234,227,0.04), rgba(237,234,227,0.20))' }} />
                <div className="brand-ash-bar-labels brand-ash-bar-labels--dark">
                  <span>4%</span><span>10%</span><span>20%</span>
                </div>
              </div>
            </div>
            <div className="brand-apps-header">
              <span>Applications</span>
            </div>
            <div className="brand-app-grid">
              <div className="brand-app-cell">
                <div className="brand-app-label">Card border — light</div>
                <div className="brand-app-preview brand-app-preview--light">
                  <div className="bap-borders">
                    <div className="bap-border-row">
                      <div className="bap-border-cat">Brand Communication · 2026</div>
                      <div className="bap-border-title">Elaniin Lands in L.A.</div>
                      <div className="bap-border-sub">Directing the visual ecosystem behind Elaniin&apos;s expansion.</div>
                      <div className="bap-border-cta">View case study →</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brand-app-cell">
                <div className="brand-app-label">Dark UI border</div>
                <div className="brand-app-preview brand-app-preview--dark">
                  <div className="bap-dark-borders">
                    <div className="bap-dark-border-row bap-dark-border-row--strong">Nav border — rgba 10%</div>
                    <div className="bap-dark-border-row bap-dark-border-row--mid">Section divider — rgba 8%</div>
                    <div className="bap-dark-border-row bap-dark-border-row--subtle">Subtle — rgba 6%</div>
                  </div>
                </div>
              </div>
              <div className="brand-app-cell brand-app-cell--full">
                <div className="brand-app-label">Stats grid structure</div>
                <div className="brand-app-preview brand-app-preview--light-card">
                  <div className="bap-stats">
                    {[{ n: '10+', l: 'Years leading' }, { n: '70+', l: 'Brands shaped' }, { n: '10', l: 'Disciplines' }, { n: '7', l: 'Certifications' }].map(({ n, l }, i) => (
                      <div key={i} className="bap-stat">
                        <div className="bap-stat-n">{n}</div>
                        <div className="bap-stat-l">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-usage-note">
              <div className="brand-usage-dot" />
              <p>Transparent borders that create structure without weight. Used at 12% on light backgrounds, 10% on dark backgrounds.</p>
            </div>
          </div>

        </div>

        {/* TYPOGRAPHY */}
        <div className="brand-section">
          <div className="brand-section-header">
            <p className="brand-section-eyebrow">03 — Typography</p>
            <h2 className="brand-section-title">The <em>type.</em></h2>
          </div>
          <div className="brand-block">
            <div className="brand-block-header">
              <span className="brand-block-name">Instrument Sans</span>
              <span className="brand-block-meta">Primary typeface · Google Fonts</span>
            </div>
            <div className="brand-type-body-row">
              <div className="brand-type-label">Regular · Body<span>400 · 15px / 1.75</span></div>
              <p className="brand-type-body-specimen">I&apos;m Roger — a creative leader with 10+ years designing and directing high-impact solutions. I build the systems, vision, and AI-powered workflows that make great design scale. Based in El Salvador, working with brands across LATAM and the U.S.</p>
            </div>
            {[{ label: 'Regular', weight: 400 }, { label: 'Medium', weight: 500 }, { label: 'SemiBold', weight: 600 }, { label: 'Bold', weight: 700 }].map(({ label, weight }) => (
              <div key={label} className="brand-type-row">
                <div className="brand-type-label">{label}<span>{weight}</span></div>
                <div className="brand-type-specimen" style={{ fontWeight: weight }}>Aa</div>
                <div className="brand-type-specimen brand-type-specimen--italic" style={{ fontWeight: weight }}>Aa</div>
              </div>
            ))}
            <div className="brand-usage-note">
              <div className="brand-usage-dot" />
              <p>Used for all UI, navigation, body text, labels, and headings. Body text runs at 15px / 1.75 line-height in Regular (400).</p>
            </div>
          </div>
          <div className="brand-block">
            <div className="brand-block-header">
              <span className="brand-block-name">Source Serif 4</span>
              <span className="brand-block-meta">Accent typeface · Google Fonts</span>
            </div>
            {[{ label: 'Light Italic', weight: 300 }, { label: 'Regular Italic', weight: 400 }, { label: 'Medium Italic', weight: 500 }].map(({ label, weight }) => (
              <div key={label} className="brand-type-row">
                <div className="brand-type-label">{label}<span>{weight}</span></div>
                <div className="brand-type-specimen brand-type-specimen--serif" style={{ fontWeight: weight }}>Aa</div>
                <div className="brand-type-specimen brand-type-specimen--serif brand-type-specimen--italic" style={{ fontWeight: weight, opacity: 0.4 }}></div>
              </div>
            ))}
            <div className="brand-usage-note">
              <div className="brand-usage-dot" />
              <p>Used exclusively in italic as a typographic accent — never for body text or UI. Applied to key words in headings. Always paired with Instrument Sans Bold.</p>
            </div>
          </div>
        </div>

        {/* VOICE */}
        <div className="brand-section">
          <div className="brand-section-header">
            <p className="brand-section-eyebrow">04 — Voice</p>
            <h2 className="brand-section-title">How ROGER <em>speaks.</em></h2>
            <p className="brand-section-desc">The brand has a clear voice — direct, grounded, and confident without being loud. Every word should feel like it was chosen, not filled in.</p>
          </div>
          <div className="brand-tone-grid">
            {[{ attr: 'Direct', not: 'blunt' }, { attr: 'Confident', not: 'arrogant' }, { attr: 'Precise', not: 'cold' }, { attr: 'Timeless', not: 'trendy' }].map(({ attr, not }) => (
              <div key={attr} className="brand-tone-card">
                <div className="brand-tone-attr">{attr}</div>
                <div className="brand-tone-not">not <span>{not}</span></div>
              </div>
            ))}
          </div>
          <div className="brand-block">
            <div className="brand-block-header">
              <span className="brand-block-name">In practice</span>
              <span className="brand-block-meta">Real examples from the brand</span>
            </div>
            <div className="brand-do-dont">
              <div className="brand-do-col">
                <div className="brand-col-header"><div className="brand-dot brand-dot--do" /><span className="brand-col-label">Write this</span></div>
                {[
                  { label: 'Hero headline', text: '"Building the creative systems that move brands forward."' },
                  { label: 'About copy', text: '"Design is my native language — strategy and people management are what I\'ve layered on top."' },
                  { label: 'Case study intro', text: '"Consolidating operations in Los Angeles isn\'t a change of address. It\'s a statement."' },
                  { label: 'CTA', text: '"Start a conversation →"' },
                ].map(({ label, text }) => (
                  <div key={label} className="brand-example-row">
                    <div className="brand-example-label">{label}</div>
                    <p className="brand-example-do">{text}</p>
                  </div>
                ))}
              </div>
              <div className="brand-dont-col">
                <div className="brand-col-header"><div className="brand-dot brand-dot--dont" /><span className="brand-col-label brand-col-label--dont">Not this</span></div>
                {[
                  { label: 'Hero headline', text: '"Passionate about creating innovative brand experiences that leverage cutting-edge design thinking."' },
                  { label: 'About copy', text: '"I\'m a creative professional with a unique blend of skills and a passion for delivering results-driven solutions."' },
                  { label: 'Case study intro', text: '"In this exciting project, we had the amazing opportunity to bring the brand to life in a whole new way."' },
                  { label: 'CTA', text: '"Click here to get in touch with me today!"' },
                ].map(({ label, text }) => (
                  <div key={label} className="brand-example-row">
                    <div className="brand-example-label">{label}</div>
                    <p className="brand-example-dont">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* APPLICATIONS */}
        <div className="brand-section">
          <div className="brand-section-header">
            <p className="brand-section-eyebrow">05 — Applications</p>
            <h2 className="brand-section-title">The brand <em>in the world.</em></h2>
            <p className="brand-section-desc">Restrained, intentional objects. The logo does the work — nothing else needs to.</p>
          </div>
          <div className="brand-merch-grid">
            {[
              { name: 'T-Shirt', category: 'Apparel', spec: 'Black · Wordmark center chest · Parchment print', img: '/merch-tshirt.png' },
              { name: 'Hoodie', category: 'Apparel', spec: 'Black · Wordmark chest left · Parchment print', img: '/merch-hoodie.png' },
              { name: 'Cap', category: 'Accessories', spec: 'Black · Wordmark embroidered · Tonal finish', img: '/merch-cap.png' },
            ].map(({ name, category, spec, img }) => (
              <div key={name} className="brand-merch-item">
                <div className="brand-merch-visual brand-merch-visual--photo" style={{ backgroundImage: `url(${img})` }} />
                <div className="brand-merch-info">
                  <div className="brand-merch-category">{category}</div>
                  <div className="brand-merch-name">{name}</div>
                  <div className="brand-merch-spec">{spec}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <footer>
        <img src="/roger.svg" alt="" aria-hidden="true" className="footer-watermark-img" width="420" height="83" />
        <p className="footer-copy">© 2026 Roger Paniagua. All rights reserved.</p>
      </footer>
    </>
  )
}
