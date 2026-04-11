'use client'

import { useEffect, useRef, useState } from 'react'

const CLUSTERS = [
  { label: 'Brand Strategy',     angle: -90,  dist: 150, spread: 55, subs: ['Visual Identity', 'Brand Architecture'] },
  { label: 'Creative Direction', angle: -30,  dist: 150, spread: 30, subs: ['Art Direction', 'Conceptualization', 'Campaign Direction', 'Visual Narrative'] },
  { label: 'Visual Systems',     angle:  30,  dist: 150, spread: 28, subs: ['Visual Ecosystems', 'Typography', 'Color Systems', 'Graphic Design'] },
  { label: 'UX / UI',            angle:  90,  dist: 150, spread: 38, subs: ['Interface Design', 'User Flows', 'Figma Sites Dev'] },
  { label: 'Team Leadership',    angle: 150,  dist: 150, spread: 28, subs: ['Creative Ops', 'Talent Development', 'Cross-functional', 'Mentorship'] },
  { label: 'AI Direction',       angle: 210,  dist: 150, spread: 38, subs: ['Prompt Engineering', 'Workflow Design', 'Generative Image'] },
]

const ROGER_PATHS = [
  'M0,81.7V1.2h44.5c19.8,0,31.1,8.8,31.1,24.2s-7.6,20.9-22.7,22.4v1c7.2,1.9,10,5.8,13,11.4l11.7,21.6h-20.9l-11.1-20.9c-3.2-6.2-6.2-8.3-15.6-8.3h-11.9v29.2H0ZM18,38.9h26.3c8.5,0,12.4-2.4,12.4-10.8s-3.8-10.7-12.4-10.7h-26.3v21.5Z',
  'M80.1,41.5C80.1,16.3,96.7,0,123.4,0s43.7,16.3,43.7,41.5-16.5,41.5-43.7,41.5-43.3-16.3-43.3-41.5ZM147.9,41.5c0-17.9-6.8-24.2-24.5-24.2s-24.2,6.2-24.2,24.2,6.5,24.2,24.2,24.2,24.5-6.2,24.5-24.2Z',
  'M171.9,41.5c0-25.1,17.1-41.5,44.7-41.5s41.2,11.8,41.2,31.1v1h-20.1v-1c0-9.4-6.1-13.8-21.6-13.8s-25.1,6.2-25.1,24.2,6.6,24.2,24.3,24.2,24.2-2.9,24.6-13.1h-27.3v-13.3h45.3v42.5h-16.7v-17.3h-1c-2.8,10.6-11.2,18.5-28.6,18.5s-39.8-16.3-39.8-41.5Z',
  'M265.5,81.7V1.2h68.1v16.2h-50.1v15.7h48.3v16.1h-48.3v16.2h50.1v16.2h-68.1Z',
  'M340.6,81.7V1.2h44.5c19.8,0,31.1,8.8,31.1,24.2s-7.6,20.9-22.7,22.4v1c7.2,1.9,10,5.8,13,11.4l11.7,21.6h-20.9l-11.1-20.9c-3.2-6.2-6.2-8.3-15.6-8.3h-11.9v29.2h-18ZM358.7,38.9h26.3c8.5,0,12.4-2.4,12.4-10.8s-3.8-10.7-12.4-10.7h-26.3v21.5Z',
]

const LOGO_VB_W = 420
const LOGO_VB_H = 82.9
const toRad = (d: number) => d * Math.PI / 180

export default function SkillsGraph() {
  const rightRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [pinned, setPinned] = useState('Brand Strategy')
  const [canvasHov, setCanvasHov] = useState<string | null>(null)
  const activeLabel = canvasHov || pinned

  const nodesRef = useRef<any[]>([])
  const tRef = useRef(0)
  const rafRef = useRef<number>()
  const pinnedRef = useRef(pinned)
  const canvasHovRef = useRef<string | null>(null)

  useEffect(() => { pinnedRef.current = pinned }, [pinned])
  useEffect(() => { canvasHovRef.current = canvasHov }, [canvasHov])

  useEffect(() => {
    const right = rightRef.current
    const canvas = canvasRef.current
    if (!right || !canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, CX = 0, CY = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      if (!right) return
      W = right.offsetWidth || 400
      H = right.offsetHeight || 620
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      CX = W / 2; CY = H / 2
      initNodes()
    }

    function initNodes() {
      const sc = Math.min(W, H) / 680
      nodesRef.current = CLUSTERS.map(c => {
        const r = toRad(c.angle)
        const cx = CX + Math.cos(r) * c.dist * sc
        const cy = CY + Math.sin(r) * c.dist * sc
        const subDist = 96 * sc
        const spread = c.spread
        const subNodes = c.subs.map((label, i) => {
          const ba = c.angle + (i - (c.subs.length - 1) / 2) * spread
          const sr = toRad(ba)
          return { label, bx: cx + Math.cos(sr) * subDist, by: cy + Math.sin(sr) * subDist, x: 0, y: 0 }
        })
        subNodes.forEach(s => { s.x = s.bx; s.y = s.by })
        return { ...c, x: cx, y: cy, bx: cx, by: cy, subNodes }
      })
    }

    function drawLogo() {
      const logoW = Math.min(96, W * 0.20)
      const s = logoW / LOGO_VB_W
      const logoH = LOGO_VB_H * s
      ctx.save()
      ctx.translate(CX - logoW / 2, CY - logoH / 2)
      ctx.scale(s, s)
      ctx.fillStyle = '#F2EFE8'
      ROGER_PATHS.forEach(d => ctx.fill(new Path2D(d)))
      ctx.restore()
    }

    function draw() {
      tRef.current += 0.005
      const t = tRef.current
      ctx.clearRect(0, 0, W, H)
      const sc = Math.min(W, H) / 520
      const active = canvasHovRef.current || pinnedRef.current

      nodesRef.current.forEach((n, i) => {
        const phase = (i / nodesRef.current.length) * Math.PI * 2
        n.x = n.bx + Math.cos(t + phase) * 9 * sc
        n.y = n.by + Math.sin(t * 0.7 + phase) * 7 * sc
        const spread = n.spread
        n.subNodes.forEach((s: any, j: number) => {
          const ba = n.angle + (j - (n.subs.length - 1) / 2) * spread
          const r = toRad(ba)
          const sp = phase + j * 0.9
          s.x = n.x + Math.cos(r) * 96 * sc + Math.sin(t + sp) * 5 * sc
          s.y = n.y + Math.sin(r) * 96 * sc + Math.cos(t * 0.75 + sp) * 4 * sc
        })
      })

      nodesRef.current.forEach(n => {
        const isActive = n.label === active
        ctx.lineWidth = 0.8
        ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(n.x, n.y)
        ctx.strokeStyle = isActive ? 'rgba(242,239,232,0.22)' : 'rgba(242,239,232,0.05)'
        ctx.stroke()
        n.subNodes.forEach((s: any) => {
          ctx.lineWidth = 0.5
          ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(s.x, s.y)
          ctx.strokeStyle = isActive ? 'rgba(242,239,232,0.14)' : 'rgba(242,239,232,0.03)'
          ctx.stroke()
        })
      })

      nodesRef.current.forEach(n => {
        const isActive = n.label === active
        const fSize = Math.max(9, Math.round(10 * sc))
        ctx.font = `400 ${fSize}px "Instrument Sans", sans-serif`
        ctx.textAlign = 'center'
        n.subNodes.forEach((s: any) => {
          ctx.fillStyle = isActive ? 'rgba(242,239,232,0.55)' : 'rgba(242,239,232,0.12)'
          ctx.fillText(s.label, s.x, s.y)
        })
      })

      nodesRef.current.forEach(n => {
        const isActive = n.label === active
        const fSize = Math.max(11, Math.round(12.5 * sc))
        ctx.font = `${isActive ? 700 : 400} ${fSize}px "Instrument Sans", sans-serif`
        ctx.fillStyle = isActive ? '#F2EFE8' : 'rgba(242,239,232,0.32)'
        ctx.textAlign = 'center'
        ctx.fillText(n.label, n.x, n.y)
      })

      drawLogo()
      rafRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const sc = Math.min(W, H) / 520
      let found: string | null = null
      nodesRef.current.forEach(n => {
        const dx = mx - n.x, dy = my - n.y
        if (Math.sqrt(dx * dx + dy * dy) < 44 * sc) found = n.label
      })
      setCanvasHov(found)
    }
    const onMouseLeave = () => setCanvasHov(null)
    const onClick = () => { if (canvasHovRef.current) setPinned(canvasHovRef.current) }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    canvas.addEventListener('click', onClick)

    const ro = new ResizeObserver(resize)
    ro.observe(right)
    resize()
    draw()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      canvas.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div className="skills-section" id="disciplines">
      <div className="skills-left">
        <div className="eyebrow">Disciplines</div>
        <h2 className="heading">The full<br />creative <em>spectrum.</em></h2>
        <p className="body-text">Ten years building at the intersection of craft, strategy, and leadership. These are the disciplines I operate with — and the systems I&apos;ve built around them.</p>
        <div className="skills-list">
          {CLUSTERS.map(c => (
            <button
              key={c.label}
              className={`skills-item${activeLabel === c.label ? ' skills-item--active' : ''}`}
              onClick={() => setPinned(c.label)}
              onMouseEnter={() => setPinned(c.label)}
              onMouseLeave={() => {}}
            >
              <span className="skills-item-dot" />
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <div className="skills-right" ref={rightRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}
