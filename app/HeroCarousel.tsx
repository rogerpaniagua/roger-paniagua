'use client'

import { useState, useEffect } from 'react'

const PHRASES = [
  'Build a brand system',
  'Scale a creative team',
  'Launch a campaign',
  'Design with intention',
]

// 8 cards using all available images — duplicated inside each row for seamless loop
const CARDS = [
  { src: '/elaniin-in-la.png',        alt: 'Elaniin Lands in L.A.' },
  { src: '/blue-engine-banner-01.png', alt: 'Blue Engine' },
  { src: '/elaniin-in-la-hero.png',   alt: 'Elaniin L.A. Hero' },
  { src: '/elaniin-in-la-banner-01.png', alt: 'Elaniin Banner' },
  { src: '/elaniin-in-la.png',        alt: 'Elaniin Lands in L.A.' },
  { src: '/blue-engine-banner-01.png', alt: 'Blue Engine' },
  { src: '/elaniin-in-la-hero.png',   alt: 'Elaniin L.A. Hero' },
  { src: '/elaniin-in-la-banner-01.png', alt: 'Elaniin Banner' },
]

export default function HeroCarousel() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(id)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const phrase = PHRASES[phraseIdx]

    if (!deleting && text === phrase) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % PHRASES.length)
      return
    }

    const speed = deleting ? 35 : 75
    const t = setTimeout(() => {
      setText(deleting ? text.slice(0, -1) : phrase.slice(0, text.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, phraseIdx])

  // Each row = CARDS + CARDS for seamless -50% loop
  const row = [...CARDS, ...CARDS]

  return (
    <div className="ch-section">
      {/* 3D carousel — three rows at different speeds for depth */}
      <div className="ch-bg" aria-hidden="true">
        <div className="ch-stage">
          <div className="ch-row ch-row-a">
            {row.map((c, i) => (
              <div key={i} className="ch-card">
                <img src={c.src} alt="" />
              </div>
            ))}
          </div>
          <div className="ch-row ch-row-b">
            {row.map((c, i) => (
              <div key={i} className="ch-card">
                <img src={c.src} alt="" />
              </div>
            ))}
          </div>
          <div className="ch-row ch-row-c">
            {row.map((c, i) => (
              <div key={i} className="ch-card">
                <img src={c.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge fade overlay */}
      <div className="ch-overlay" aria-hidden="true" />

      {/* Centered prompt box */}
      <div className="ch-center">
        <div className="ch-prompt">
          <div className="ch-prompt-inner">
            <span className="ch-typed">{text}</span>
            <span className={`ch-cursor${blink ? '' : ' ch-cursor--off'}`}>|</span>
          </div>
        </div>
        <a href="#contact" className="ch-cta">Start a conversation →</a>
      </div>
    </div>
  )
}
