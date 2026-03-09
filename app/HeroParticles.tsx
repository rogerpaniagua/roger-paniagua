'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const DESKTOP = {
  count: 80,
  connectDist: 200,
  dotRadius: () => 2 + Math.random() * 1,
  speed: () => 0.1 + Math.random() * 0.2,
  dotOpacity: 0.4,
  lineMaxOpacity: 0.2,
}


const MAX_SPEED = 0.75
const DAMPING = 0.992
const MOUSE_REPEL_DIST = 110
const MOUSE_REPEL_FORCE = 0.28
const PARTICLE_COLOR = '52, 49, 44'

function makeParticle(w: number, h: number, cfg: typeof DESKTOP): Particle {
  const speed = cfg.speed()
  const angle = Math.random() * Math.PI * 2
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: cfg.dotRadius(),
  }
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (isMobile) return

    const cfg = DESKTOP

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0
    let h = 0

    function setSize() {
      if (!canvas) return
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w
      canvas.height = h
    }

    let particles: Particle[] = []
    const connectDistSq = cfg.connectDist * cfg.connectDist

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      const mouse = mouseRef.current

      // Update positions
      for (const p of particles) {
        // Mouse repulsion
        if (mouse) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const distSq = dx * dx + dy * dy
          if (distSq < MOUSE_REPEL_DIST * MOUSE_REPEL_DIST && distSq > 0) {
            const dist = Math.sqrt(distSq)
            const force = (1 - dist / MOUSE_REPEL_DIST) * MOUSE_REPEL_FORCE
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        p.vx *= DAMPING
        p.vy *= DAMPING

        const speedSq = p.vx * p.vx + p.vy * p.vy
        if (speedSq > MAX_SPEED * MAX_SPEED) {
          const inv = MAX_SPEED / Math.sqrt(speedSq)
          p.vx *= inv
          p.vy *= inv
        }

        if (speedSq < 0.006) {
          const angle = Math.random() * Math.PI * 2
          p.vx += Math.cos(angle) * 0.04
          p.vy += Math.sin(angle) * 0.04
        }

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx) }
        if (p.x > w) { p.x = w; p.vx = -Math.abs(p.vx) }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy) }
        if (p.y > h) { p.y = h; p.vy = -Math.abs(p.vy) }
      }

      // Draw connections
      ctx.lineWidth = 0.6
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distSq = dx * dx + dy * dy
          if (distSq < connectDistSq) {
            const alpha = (1 - Math.sqrt(distSq) / cfg.connectDist) * cfg.lineMaxOpacity
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${alpha.toFixed(3)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Draw dots
      ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${cfg.dotOpacity})`
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    // Defer first frame so the browser finishes layout before we read dimensions.
    // Without this, offsetWidth/offsetHeight can be 0 on mobile (auto-height hero),
    // causing all particles to spawn at (0,0) and cluster in one spot.
    let initId = requestAnimationFrame(() => {
      setSize()
      particles = Array.from({ length: cfg.count }, () => makeParticle(w, h, cfg))
      draw()
    })

    // Mouse interaction
    const hero = canvas.parentElement
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMouseLeave = () => { mouseRef.current = null }
    hero?.addEventListener('mousemove', onMouseMove)
    hero?.addEventListener('mouseleave', onMouseLeave)

    const ro = new ResizeObserver(setSize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(initId)
      cancelAnimationFrame(animId)
      ro.disconnect()
      hero?.removeEventListener('mousemove', onMouseMove)
      hero?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
      className="hero-particles"
    />
  )
}
