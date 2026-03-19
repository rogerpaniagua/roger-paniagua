'use client'

import { useRef, useEffect } from 'react'

const TAGS = [
  'Creative Direction', 'Brand Strategy', 'Team Leadership', 'Visual Systems', 'Graphic Design',
  'Visual Strategy', 'AI Direction', 'Pitch Design', 'UX / UI', 'Photography',
]

export default function HeroTagsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const isTouching = useRef(false)
  const posRef = useRef(0)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el || window.matchMedia('(min-width: 768px)').matches) return

    function tick() {
      if (!isTouching.current && el) {
        posRef.current += 0.4
        const half = el.scrollWidth / 2
        if (posRef.current >= half) posRef.current = 0
        el.scrollLeft = posRef.current
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  function onTouchStart() {
    isTouching.current = true
  }

  function onTouchEnd() {
    const el = marqueeRef.current
    if (el) {
      const half = el.scrollWidth / 2
      posRef.current = el.scrollLeft % half
    }
    isTouching.current = false
  }

  return (
    <div className="hero-tags" style={{ marginTop: '32px' }}>
      {/* Desktop: two-row wrapped layout */}
      <div className="hero-tags-rows">
        {TAGS.slice(0, 5).map(tag => (
          <span key={tag} className="hero-tag">{tag}</span>
        ))}
        <div className="hero-tags-break" />
        {TAGS.slice(5).map(tag => (
          <span key={tag} className="hero-tag">{tag}</span>
        ))}
      </div>

      {/* Mobile: auto-scrolling marquee with touch-scroll support */}
      <div
        className="hero-tags-marquee"
        ref={marqueeRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {[...TAGS, ...TAGS].map((tag, i) => (
          <span key={i} className="hero-tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}
