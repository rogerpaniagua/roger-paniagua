'use client'

import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const ringTarget = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      ringTarget.current = { x: e.clientX, y: e.clientY }
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

  return (
    <>
      <div className="cursor-dot" style={{ transform: `translate(${cursor.x - 4}px, ${cursor.y - 4}px)` }} />
      <div className="cursor-ring" style={{ transform: `translate(${ring.x - 16}px, ${ring.y - 16}px)` }} />
    </>
  )
}
