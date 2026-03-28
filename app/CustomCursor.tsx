'use client'

import { useState, useEffect, useRef } from 'react'

function getComputedBg(el: Element | null): string {
  while (el && el !== document.documentElement) {
    const bg = window.getComputedStyle(el).backgroundColor
    // skip transparent/unset values
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg
    el = el.parentElement
  }
  return 'rgb(237, 234, 227)' // fallback: site --bg
}

function isDark(color: string): boolean {
  const m = color.match(/\d+/g)
  if (!m) return false
  const [r, g, b] = m.map(Number)
  // perceived luminance (ITU-R BT.601)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5
}

export default function CustomCursor() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [inverted, setInverted] = useState(false)
  const ringTarget = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      ringTarget.current = { x: e.clientX, y: e.clientY }

      const el = document.elementFromPoint(e.clientX, e.clientY)
      setInverted(isDark(getComputedBg(el)))
    }
    window.addEventListener('mousemove', onMove)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    let pos = { x: -100, y: -100 }
    const animate = () => {
      pos = { x: lerp(pos.x, ringTarget.current.x, 0.1), y: lerp(pos.y, ringTarget.current.y, 0.1) }
      setRing({ ...pos })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const color = inverted ? '#EDEAE3' : '#1a1915'

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${cursor.x - 4}px, ${cursor.y - 4}px)`,
          background: color,
          transition: 'background 0.2s ease',
        }}
      />
      <div
        className="cursor-ring"
        style={{
          transform: `translate(${ring.x - 16}px, ${ring.y - 16}px)`,
          borderColor: color,
          transition: 'border-color 0.2s ease',
        }}
      />
    </>
  )
}
