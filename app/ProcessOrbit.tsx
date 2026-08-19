'use client'

const IC = '#F2EFE8'

const PHASES = [
  {
    id: 'define',
    label: 'Define',
    angle: -90,
    icon: (
      <g strokeLinecap="round" strokeWidth="2" fill="none">
        <circle cx="0" cy="-1.5" r="5.5" stroke={IC} />
        <line x1="3.8" y1="2.8" x2="7.5" y2="6.5" stroke={IC} />
      </g>
    ),
  },
  {
    id: 'design',
    label: 'Design',
    angle: 0,
    icon: (
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none">
        <path d="M0,-9 L7,0 L0,8 L-7,0 Z" stroke={IC} />
        <line x1="0" y1="8" x2="0" y2="12" stroke={IC} />
      </g>
    ),
  },
  {
    id: 'build',
    label: 'Build',
    angle: 90,
    icon: (
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none">
        <g className="orbit-bracket-l">
          <polyline points="-3,-8 -10,0 -3,8" stroke={IC} />
        </g>
        <g className="orbit-bracket-r">
          <polyline points="3,-8 10,0 3,8" stroke={IC} />
        </g>
      </g>
    ),
  },
  {
    id: 'live',
    label: 'Live',
    angle: 180,
    icon: (
      <polygon points="3,-10 -4.5,1 3.5,1 -3,10" fill={IC} />
    ),
  },
] as const

export default function ProcessOrbit() {
  const W = 520, H = 480
  const CX = 260, CY = 240
  const R_OUTER = 150
  const R_INNER = 62
  const NR = 36

  function nodePos(angle: number) {
    const rad = (angle * Math.PI) / 180
    return { x: CX + R_OUTER * Math.cos(rad), y: CY + R_OUTER * Math.sin(rad) }
  }

  function labelPos(angle: number) {
    const dist = R_OUTER + NR + 20
    const rad = (angle * Math.PI) / 180
    return { x: CX + dist * Math.cos(rad), y: CY + dist * Math.sin(rad) }
  }

  function anchor(angle: number) {
    if (angle === 0) return 'start'
    if (angle === 180) return 'end'
    return 'middle'
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="process-orbit-svg"
      aria-label="Proceso iterativo: Define, Design, Build, Live"
    >
      {/* Outer dashed ring — slow clockwise spin */}
      <circle
        cx={CX} cy={CY} r={R_OUTER}
        fill="none"
        stroke="rgba(242,239,232,0.2)"
        strokeWidth="1"
        strokeDasharray="5 10"
        className="orbit-ring-cw"
      />

      {/* Inner ring — counter-clockwise */}
      <circle
        cx={CX} cy={CY} r={R_INNER}
        fill="none"
        stroke="rgba(242,239,232,0.1)"
        strokeWidth="1"
        className="orbit-ring-ccw"
      />

      {/* Spoke lines */}
      {PHASES.map(phase => {
        const p = nodePos(phase.angle)
        return (
          <line key={phase.id + '-s'}
            x1={CX} y1={CY} x2={p.x} y2={p.y}
            stroke="rgba(242,239,232,0.07)" strokeWidth="1"
          />
        )
      })}

      {/* Center dot */}
      <circle cx={CX} cy={CY} r={7} fill="rgba(242,239,232,0.08)" stroke="rgba(242,239,232,0.18)" strokeWidth="1" />
      <circle cx={CX} cy={CY} r={2.5} fill="rgba(242,239,232,0.55)" />

      {/* Phase nodes */}
      {PHASES.map(phase => {
        const p = nodePos(phase.angle)
        const lp = labelPos(phase.angle)

        return (
          <g key={phase.id}>
            {/* Outer glow halo */}
            <circle cx={p.x} cy={p.y} r={NR + 12}
              fill="rgba(242,239,232,0.025)"
              stroke="rgba(242,239,232,0.06)"
              strokeWidth="1"
            />
            {/* Node circle */}
            <circle cx={p.x} cy={p.y} r={NR}
              fill="#1a1915"
              stroke="rgba(242,239,232,0.28)"
              strokeWidth="1.3"
            />
            {/* SVG translate (positioning) + inner g for CSS animation */}
            <g transform={`translate(${p.x},${p.y})`}>
              <g className={`orbit-icon-${phase.id}`}>
                {phase.icon}
              </g>
            </g>
            {/* Label */}
            <text
              x={lp.x}
              y={lp.y + 5}
              textAnchor={anchor(phase.angle)}
              className="orbit-label"
            >
              {phase.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
