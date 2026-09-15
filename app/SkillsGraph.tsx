'use client'

import { useEffect, useRef, useState } from 'react'

type NodeSpec = { label: string; subs?: string[] }
type BranchSpec = { label: string; nodes: NodeSpec[] }

const BRANCHES: BranchSpec[] = [
  {
    label: 'Brand Strategy',
    nodes: [
      { label: 'Brand Architecture' },
      { label: 'Visual Identity' },
      { label: 'Brand Deployment' },
      { label: 'Creative Direction', subs: ['Art Direction', 'Campaign Direction', 'Visual Narrative'] },
      { label: 'Research', subs: ['Market Context', 'Cultural Signals', 'Audience Insight'] },
    ],
  },
  {
    label: 'AI-Driven Development',
    nodes: [
      { label: 'Generative Image' },
      { label: 'Workflow Design' },
      { label: 'Prompt Engineering' },
      { label: 'Creative Systems' },
      { label: 'Product Development with AI' },
      { label: 'Creative Infrastructure' },
      { label: 'AI Direction' },
    ],
  },
  {
    label: 'UX/UI & Design Systems',
    nodes: [
      { label: 'Design Tokens' },
      { label: 'Product Design' },
      { label: 'Visual Systems', subs: ['Design Systems', 'Visual Ecosystems'] },
      { label: 'Component Libraries' },
      { label: 'Interaction Design' },
      { label: 'User Flows' },
      { label: 'Design Governance' },
    ],
  },
]

const SWITCH_OPTIONS = ['Brand Strategy', 'AI-Driven Development', 'UX/UI & Design Systems', 'The Full Loop']
const BRANCH_ANGLES = [-90, 30, 150]

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
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
function lerpAngle(a: number, b: number, t: number) {
  const twoPi = Math.PI * 2
  let diff = ((b - a + Math.PI) % twoPi + twoPi) % twoPi - Math.PI
  return a + diff * t
}

type Satellite = { label: string; angleFull: number; angleFocused: number; dist: number; x: number; y: number; alpha: number }
type Discipline = {
  label: string
  branchLabel: string
  phase: number
  bxFull: number; byFull: number
  bxFocused: number; byFocused: number
  bx: number; by: number
  x: number; y: number
  focusT: number
  opacityMult: number
  subs: Satellite[]
  alpha: number
}
type Branch = {
  label: string
  bx: number; by: number
  x: number; y: number
  opacityMult: number
  alpha: number
}

export default function SkillsGraph() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [pinned, setPinned] = useState('The Full Loop')
  const pinnedRef = useRef(pinned)
  useEffect(() => { pinnedRef.current = pinned }, [pinned])

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, CX = 0, CY = 0
    let branches: Branch[] = []
    let disciplines: Discipline[] = []
    let hoverLabel: string | null = null

    function resize() {
      const dpr = window.devicePixelRatio || 1
      W = wrap!.offsetWidth || 1000
      H = wrap!.offsetHeight || 700
      canvas!.width = W * dpr
      canvas!.height = H * dpr
      canvas!.style.width = W + 'px'
      canvas!.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      CX = W / 2
      CY = H * (W < 700 ? 0.62 : 0.56)
      initNodes()
    }

    function initNodes() {
      const scX = W / 980
      const scY = H / 780
      const scB = Math.min(scX, scY)
      const branchDist = W < 700 ? 232 : 128
      const discDist = 145
      const focusedDist = 205
      const satDist = 82

      branches = []
      disciplines = []
      let flatIndex = 0
      const totalDisciplines = BRANCHES.reduce((sum, b) => sum + b.nodes.length, 0)

      BRANCHES.forEach((b, bi) => {
        const angle = BRANCH_ANGLES[bi]
        const bx = CX + Math.cos(toRad(angle)) * branchDist * scB
        const by = CY + Math.sin(toRad(angle)) * branchDist * scB
        branches.push({ label: b.label, bx, by, x: bx, y: by, opacityMult: 1, alpha: 1 })

        const n = b.nodes.length
        const discSpread = Math.min(86, 50 + n * 6)
        const innerIdx = b.nodes.map((_, k) => k).filter(k => k % 2 === 0)
        const outerIdx = b.nodes.map((_, k) => k).filter(k => k % 2 === 1)
        const innerStep = innerIdx.length > 1 ? discSpread / (innerIdx.length - 1) : 0
        const outerSpread = Math.max(0, discSpread - innerStep)

        b.nodes.forEach((node, i) => {
          const isOuter = i % 2 === 1
          const group = isOuter ? outerIdx : innerIdx
          const rank = group.indexOf(i)
          const m = group.length
          const groupSpread = isOuter ? outerSpread : discSpread
          const fa = angle + (m > 1 ? (rank - (m - 1) / 2) * (groupSpread / (m - 1)) : 0)
          const faRad = toRad(fa)
          const rJitter = discDist + (isOuter ? 72 : 0)
          const bxFull = bx + Math.cos(faRad) * rJitter * scX
          const byFull = by + Math.sin(faRad) * rJitter * scY

          const focAngleDeg = -90 + i * (360 / n)
          const focRad = toRad(focAngleDeg)
          const bxFocused = CX + Math.cos(focRad) * focusedDist * scX
          const byFocused = CY + Math.sin(focRad) * focusedDist * scY

          const subs: Satellite[] = (node.subs || []).map((label, j) => {
            const sn = node.subs!.length
            const subSpread = sn <= 1 ? 0 : sn === 2 ? 96 : sn === 3 ? 80 : 104
            const saFull = fa + (sn > 1 ? (j - (sn - 1) / 2) * (subSpread / (sn - 1)) : 0)
            const saFoc = focAngleDeg + (sn > 1 ? (j - (sn - 1) / 2) * (subSpread / (sn - 1)) : 0)
            const jDist = satDist + (j % 2 === 0 ? -18 : 28)
            return { label, angleFull: toRad(saFull), angleFocused: toRad(saFoc), dist: jDist, x: 0, y: 0, alpha: 1 }
          })

          disciplines.push({
            label: node.label,
            branchLabel: b.label,
            phase: (flatIndex / totalDisciplines) * Math.PI * 2,
            bxFull, byFull, bxFocused, byFocused,
            bx: bxFull, by: byFull, x: bxFull, y: byFull,
            focusT: 0, opacityMult: 1, alpha: 1,
            subs,
          })
          flatIndex++
        })
      })
    }

    function drawLogo() {
      const logoW = Math.min(88, W * 0.14)
      const s = logoW / LOGO_VB_W
      const logoH = LOGO_VB_H * s
      ctx.save()
      ctx.translate(CX - logoW / 2, CY - logoH / 2)
      ctx.scale(s, s)
      ctx.fillStyle = '#F2EFE8'
      ROGER_PATHS.forEach(d => ctx.fill(new Path2D(d)))
      ctx.restore()
    }

    let tRef = 0
    let rafId: number

    function draw() {
      tRef += 0.005
      const t = tRef
      ctx.clearRect(0, 0, W, H)
      const scX = W / 980
      const scY = H / 780
      const scF = Math.min(scX, scY)
      const isFocused = pinnedRef.current !== 'The Full Loop'
      const hov = hoverLabel

      // ease branches
      branches.forEach((br, i) => {
        const target = isFocused ? 0 : 1
        br.opacityMult += (target - br.opacityMult) * 0.07
        const phase = (i / branches.length) * Math.PI * 2
        br.x = br.bx + Math.cos(t + phase) * 8 * scF
        br.y = br.by + Math.sin(t * 0.7 + phase) * 6 * scF
        br.alpha = br.opacityMult
      })

      // ease disciplines + satellites
      disciplines.forEach(d => {
        const isMine = pinnedRef.current === d.branchLabel
        const targetFocus = isMine ? 1 : 0
        d.focusT += (targetFocus - d.focusT) * 0.065
        const targetOpacity = (!isFocused || isMine) ? 1 : 0
        d.opacityMult += (targetOpacity - d.opacityMult) * 0.07

        d.bx = lerp(d.bxFull, d.bxFocused, d.focusT)
        d.by = lerp(d.byFull, d.byFocused, d.focusT)
        d.x = d.bx + Math.cos(t + d.phase) * 7 * scF
        d.y = d.by + Math.sin(t * 0.7 + d.phase) * 5 * scF
        d.alpha = d.opacityMult

        d.subs.forEach((s, j) => {
          const sp = d.phase + j * 0.9
          const ang = lerpAngle(s.angleFull, s.angleFocused, d.focusT)
          s.x = d.x + Math.cos(ang) * s.dist * scF + Math.sin(t + sp) * 4 * scF
          s.y = d.y + Math.sin(ang) * s.dist * scF + Math.cos(t * 0.75 + sp) * 3 * scF
          s.alpha = d.alpha
        })
      })

      // connecting lines: ROGER -> branch (fades with branch)
      branches.forEach(br => {
        ctx.lineWidth = 0.8
        ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(br.x, br.y)
        const on = hov === br.label
        ctx.strokeStyle = `rgba(242,239,232,${(on ? 0.30 : 0.14) * br.alpha})`
        ctx.stroke()
      })

      // connecting lines: parent(branch|ROGER) -> discipline, lerped
      disciplines.forEach(d => {
        const branch = branches.find(b => b.label === d.branchLabel)!
        const parentX = lerp(branch.x, CX, d.focusT)
        const parentY = lerp(branch.y, CY, d.focusT)
        ctx.lineWidth = 0.8
        ctx.beginPath(); ctx.moveTo(parentX, parentY); ctx.lineTo(d.x, d.y)
        const on = hov === d.label
        ctx.strokeStyle = `rgba(242,239,232,${(on ? 0.32 : 0.16) * d.alpha})`
        ctx.stroke()

        d.subs.forEach(s => {
          ctx.lineWidth = 0.5
          ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(s.x, s.y)
          const subOn = hov === s.label
          ctx.strokeStyle = `rgba(242,239,232,${(subOn ? 0.22 : 0.09) * s.alpha})`
          ctx.stroke()
        })
      })

      // satellite labels
      disciplines.forEach(d => {
        d.subs.forEach(s => {
          if (s.alpha < 0.02) return
          const on = hov === s.label
          const baseA = lerp(0.14, 0.42, d.focusT)
          const fSize = Math.max(8, Math.round((on ? 10.5 : 8.5) * scF))
          ctx.font = `${on ? 600 : 400} ${fSize}px "Instrument Sans", sans-serif`
          ctx.textAlign = 'center'
          ctx.fillStyle = `rgba(242,239,232,${(on ? 0.85 : baseA) * s.alpha})`
          ctx.fillText(s.label, s.x, s.y)
        })
      })

      // discipline labels
      disciplines.forEach(d => {
        if (d.alpha < 0.02) return
        const on = hov === d.label
        const baseA = lerp(0.42, 0.68, d.focusT)
        const fSize = Math.max(8.5, Math.round(lerp(9, 14, d.focusT) * scF))
        ctx.font = `${on ? 700 : 600} ${fSize}px "Instrument Sans", sans-serif`
        ctx.textAlign = 'center'
        ctx.fillStyle = on ? `rgba(242,239,232,${d.alpha})` : `rgba(242,239,232,${baseA * d.alpha})`
        ctx.fillText(d.label, d.x, d.y)
      })

      // branch labels
      branches.forEach(br => {
        if (br.alpha < 0.02) return
        const on = hov === br.label
        const fSize = Math.max(W < 700 ? 10 : 12, Math.round(13.5 * scF))
        ctx.font = `700 ${fSize}px "Instrument Sans", sans-serif`
        ctx.textAlign = 'center'
        ctx.fillStyle = on ? `rgba(242,239,232,${br.alpha})` : `rgba(242,239,232,${0.7 * br.alpha})`
        ctx.fillText(br.label, br.x, br.y)
      })

      drawLogo()
      rafId = requestAnimationFrame(draw)
    }

    function hitTest(mx: number, my: number): string | null {
      const scX = W / 980
      const scY = H / 780
      const scF = Math.min(scX, scY)
      const hitR = 42 * scF
      let found: string | null = null
      let bestD = Infinity
      branches.forEach(br => {
        if (br.alpha < 0.4) return
        const dx = mx - br.x, dy = my - br.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < hitR && dist < bestD) { found = br.label; bestD = dist }
      })
      disciplines.forEach(d => {
        if (d.alpha < 0.4) return
        const dx = mx - d.x, dy = my - d.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < hitR && dist < bestD) { found = d.label; bestD = dist }
        d.subs.forEach(s => {
          if (s.alpha < 0.4) return
          const sdx = mx - s.x, sdy = my - s.y
          const sdist = Math.sqrt(sdx * sdx + sdy * sdy)
          if (sdist < hitR * 0.85 && sdist < bestD) { found = s.label; bestD = sdist }
        })
      })
      return found
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      hoverLabel = hitTest(e.clientX - rect.left, e.clientY - rect.top)
      canvas.style.cursor = hoverLabel ? 'pointer' : 'default'
    }
    const onMouseLeave = () => { hoverLabel = null }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <div className="skills-section" id="disciplines">
      <div className="skills-intro">
        <div className="eyebrow">Disciplines</div>
        <h2 className="heading">The full <em>loop.</em></h2>
        <p className="body-text">A decade at the intersection of brand and technology. These are the disciplines I direct, grouped by how they connect.</p>
        <div className="skills-switch">
          {SWITCH_OPTIONS.map(opt => (
            <button
              key={opt}
              className={`skills-switch-item${pinned === opt ? ' skills-switch-item--active' : ''}`}
              onClick={() => setPinned(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div className="skills-canvas-wrap" ref={wrapRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}
