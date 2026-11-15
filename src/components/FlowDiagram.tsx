import { Database, FileText, Layers, Mail, Settings, Zap, type LucideIcon } from 'lucide-react'
import { useState } from 'react'

// ── Layout constants (600 × 240 viewBox) ───────────────────────────────────
const W = 600
const H = 240
const ROWS = [40, 120, 200]
const HUB  = { x: 224, y: 64, size: 112 }
const HUB_MID = HUB.y + HUB.size / 2
const SRC  = { x: 0,  w: 64,  h: 56 }
const TGT  = { x: 380, w: 216, h: 50 }

const pct = (v: number, of: number) => `${(v / of) * 100}%`

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinejoin="round" />
      <path d="M14 2v6h6" strokeLinejoin="round" />
      <text x="12" y="17.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="currentColor" stroke="none">PDF</text>
    </svg>
  )
}

const sources: { label: string; Icon: LucideIcon | (() => JSX.Element) }[] = [
  { label: 'Documents', Icon: FileText },
  { label: 'Email',     Icon: Mail     },
  { label: 'PDF files', Icon: PdfIcon  },
]

const outcomes: { label: string; Icon: LucideIcon }[] = [
  { label: 'Automate Workflows',     Icon: Settings },
  { label: 'Process Documents',      Icon: Layers   },
  { label: 'Use Your Business Data', Icon: Database },
]

export function FlowDiagram() {
  const [hovered, setHovered] = useState<number | null>(null)

  const inEdge = (y: number) => {
    const x0 = SRC.x + SRC.w + 2
    const x1 = HUB.x
    return `M${x0} ${y} C ${x0 + 40} ${y}, ${x1 - 40} ${HUB_MID}, ${x1} ${HUB_MID}`
  }
  const outEdge = (y: number) => {
    const x0 = HUB.x + HUB.size
    const x1 = TGT.x - 4
    return `M${x0} ${HUB_MID} C ${x0 + 30} ${HUB_MID}, ${x1 - 30} ${y}, ${x1} ${y}`
  }

  // Card highlight style when that row is hovered
  const cardStyle = (i: number) =>
    `absolute flex items-center rounded-xl border bg-white transition-all duration-200 ${
      hovered === i
        ? 'border-brand-500 shadow-[0_0_0_1.5px_#ea5a0c,0_6px_20px_rgba(234,90,12,0.18)]'
        : 'border-zinc-100 shadow-[0_4px_16px_rgba(0,0,0,0.07)]'
    }`

  return (
    <div
      className="relative mx-auto aspect-[600/240] w-full max-w-[600px] text-ink"
      role="img"
      aria-label="Documents, email and PDFs flow into AutomateStudio and become automated workflows, processed documents and business data"
    >
      {/* SVG connecting lines */}
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" fill="none" aria-hidden="true">
        {ROWS.map((y, i) => (
          <path
            key={`in-${y}`}
            d={inEdge(y)}
            strokeWidth={hovered === i ? 2 : 1.4}
            className={`animate-dash transition-all duration-200 ${hovered === i ? 'stroke-brand-600' : 'stroke-brand-500/60'}`}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
        {ROWS.map((y, i) => (
          <g key={`out-${y}`}>
            <path
              d={outEdge(y)}
              strokeWidth={hovered === i ? 2 : 1.4}
              className={`animate-dash transition-all duration-200 ${hovered === i ? 'stroke-brand-600' : 'stroke-zinc-300'}`}
              style={{ animationDelay: `${i * 0.4 + 0.2}s` }}
            />
            <circle
              cx={TGT.x - 4} cy={y} r={hovered === i ? 3.5 : 2.5}
              className={`transition-all duration-200 ${hovered === i ? 'fill-brand-600' : 'fill-zinc-400'}`}
            />
          </g>
        ))}
      </svg>

      {/* Source cards */}
      {sources.map(({ label, Icon }, i) => (
        <div
          key={label}
          title={label}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className={`${cardStyle(i)} cursor-pointer justify-center`}
          style={{ left: pct(SRC.x, W), top: pct(ROWS[i] - SRC.h / 2, H), width: pct(SRC.w, W), height: pct(SRC.h, H) }}
        >
          <Icon
            className={`size-6 transition-colors duration-200 ${hovered === i ? 'text-brand-600' : 'text-zinc-500'}`}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
      ))}

      {/* Central hub with pulse ring */}
      <div
        className="hub-pulse absolute flex items-center justify-center rounded-2xl bg-brand-50 shadow-[0_10px_32px_rgba(234,90,12,0.22)]"
        style={{ left: pct(HUB.x, W), top: pct(HUB.y, H), width: pct(HUB.size, W), height: pct(HUB.size, H) }}
      >
        <Zap className="size-1/2 fill-brand-600 text-brand-600" strokeWidth={1} />
      </div>

      {/* Outcome cards */}
      {outcomes.map(({ label, Icon }, i) => (
        <div
          key={label}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className={`${cardStyle(i)} cursor-pointer gap-2.5 px-3 lg:px-4`}
          style={{ left: pct(TGT.x, W), top: pct(ROWS[i] - TGT.h / 2, H), width: pct(TGT.w, W), height: pct(TGT.h, H) }}
        >
          <Icon
            className={`size-5 shrink-0 transition-colors duration-200 ${hovered === i ? 'text-brand-600' : 'text-zinc-400'}`}
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span className={`text-xs font-semibold leading-tight tracking-tight sm:text-sm transition-colors duration-200 ${hovered === i ? 'text-brand-600' : 'text-ink'}`}>
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
