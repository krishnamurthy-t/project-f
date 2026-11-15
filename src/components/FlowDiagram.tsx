import { Database, FileText, Layers, Mail, Settings, Zap, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

// Everything is laid out in one coordinate space (the SVG viewBox) and positioned
// in percentages, so the lines and the cards scale together.
const W = 600
const H = 240
const ROWS = [40, 120, 200]
const HUB = { x: 224, y: 64, size: 112 }
const HUB_MID = HUB.y + HUB.size / 2
const SOURCE = { x: 0, w: 64, h: 58 }
const TARGET = { x: 380, w: 220, h: 52 }

const pct = (v: number, of: number) => `${(v / of) * 100}%`

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinejoin="round" />
      <path d="M14 2v6h6" strokeLinejoin="round" />
      <text x="12" y="17.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="currentColor" stroke="none">
        PDF
      </text>
    </svg>
  )
}

const sources: { label: string; icon: ReactNode }[] = [
  { label: 'Documents', icon: <FileText className="size-6" strokeWidth={1.75} /> },
  { label: 'Email', icon: <Mail className="size-6" strokeWidth={1.75} /> },
  { label: 'PDF files', icon: <PdfIcon /> },
]

const outcomes: { label: string; icon: LucideIcon }[] = [
  { label: 'Automate Workflows', icon: Settings },
  { label: 'Process Documents', icon: Layers },
  { label: 'Use Your Business Data', icon: Database },
]

const card = 'absolute flex items-center rounded-xl border border-zinc-100 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)]'

export function FlowDiagram() {
  const inEdge = (y: number) => {
    const x0 = SOURCE.x + SOURCE.w + 2
    const x1 = HUB.x
    return `M${x0} ${y} C ${x0 + 40} ${y}, ${x1 - 40} ${HUB_MID}, ${x1} ${HUB_MID}`
  }
  const outEdge = (y: number) => {
    const x0 = HUB.x + HUB.size
    const x1 = TARGET.x - 4
    return `M${x0} ${HUB_MID} C ${x0 + 30} ${HUB_MID}, ${x1 - 30} ${y}, ${x1} ${y}`
  }

  return (
    <div className="relative mx-auto aspect-[600/240] w-full max-w-[600px] text-ink" role="img" aria-label="Documents, email and PDFs flow into AutomateStudio and come out as automated workflows, processed documents and usable business data">
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" fill="none" aria-hidden="true">
        {ROWS.map((y) => (
          <path key={`in-${y}`} d={inEdge(y)} className="stroke-zinc-400" strokeWidth={1.2} />
        ))}
        {ROWS.map((y) => (
          <g key={`out-${y}`}>
            <path d={outEdge(y)} className="stroke-zinc-400" strokeWidth={1.2} />
            <circle cx={TARGET.x - 4} cy={y} r={2.5} className="fill-zinc-500" />
          </g>
        ))}
      </svg>

      {sources.map((s, i) => (
        <div
          key={s.label}
          title={s.label}
          className={`${card} justify-center`}
          style={{
            left: pct(SOURCE.x, W),
            top: pct(ROWS[i] - SOURCE.h / 2, H),
            width: pct(SOURCE.w, W),
            height: pct(SOURCE.h, H),
          }}
        >
          {s.icon}
        </div>
      ))}

      <div
        className="absolute flex items-center justify-center rounded-2xl bg-brand-50 shadow-[0_10px_30px_rgba(234,90,12,0.18)]"
        style={{ left: pct(HUB.x, W), top: pct(HUB.y, H), width: pct(HUB.size, W), height: pct(HUB.size, H) }}
      >
        <Zap className="size-1/2 fill-brand-600 text-brand-600" strokeWidth={1} />
      </div>

      {outcomes.map(({ label, icon: Icon }, i) => (
        <div
          key={label}
          className={`${card} gap-2.5 px-3 lg:px-4`}
          style={{
            left: pct(TARGET.x, W),
            top: pct(ROWS[i] - TARGET.h / 2, H),
            width: pct(TARGET.w, W),
            height: pct(TARGET.h, H),
          }}
        >
          <Icon className="size-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="text-xs leading-tight font-medium tracking-tight sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  )
}
