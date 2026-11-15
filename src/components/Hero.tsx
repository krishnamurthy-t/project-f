import { useEffect, useRef, useState } from 'react'
import { contact } from '../data/site'
import { useCounter } from '../hooks/useCounter'
import { FlowDiagram } from './FlowDiagram'
import { TalkToSales } from './TalkToSales'

// ── Typewriter ──────────────────────────────────────────────────────────────
const WORDS = ['automation.', 'efficiency.', 'growth.', 'innovation.']

function Typewriter() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIdx]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < word.length) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timer = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % WORDS.length)
    }

    return () => clearTimeout(timer)
  }, [displayed, deleting, wordIdx])

  return (
    <span className="text-brand-600">
      {displayed}
      <span className="cursor ml-0.5 inline-block w-[3px] rounded-sm bg-brand-600 align-middle" style={{ height: '0.9em' }} />
    </span>
  )
}

// ── Stat counter card ────────────────────────────────────────────────────────
function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCounter(target)
  return (
    <div ref={ref} className="flex flex-col">
      <span className="stat-pop text-3xl font-extrabold tracking-tight text-ink">
        {value}{suffix}
      </span>
      <span className="mt-0.5 text-xs font-medium text-zinc-500">{label}</span>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export function Hero() {
  const diagramRef = useRef<HTMLDivElement>(null)

  // Subtle mouse-parallax on the flow diagram
  useEffect(() => {
    const el = diagramRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const { innerWidth: W, innerHeight: H } = window
      const dx = (e.clientX / W - 0.5) * 14
      const dy = (e.clientY / H - 0.5) * 10
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-brand-500/8 blur-3xl" aria-hidden="true" />
      <div className="orb-slow pointer-events-none absolute top-32 -left-20 size-56 rounded-full bg-brand-100/60 blur-2xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 sm:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">

        {/* ── Left copy ── */}
        <div>
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1 text-xs font-semibold tracking-widest text-brand-600 uppercase">
            ✦ AI Automation &amp; Software Studio
          </span>

          {/* Headline with typewriter */}
          <h1 className="mt-6 text-5xl leading-[1.07] font-extrabold tracking-tight sm:mt-8 sm:text-6xl lg:text-[4rem]">
            Turn everyday<br />work into{' '}
            <Typewriter />
          </h1>

          {/* Sub-copy */}
          <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-500">
            We build AI-driven automation, custom software and digital solutions
            that save time, reduce cost and help your business grow.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <TalkToSales size="lg" shimmer />
            <a
              href={contact.phoneHref}
              className="group flex items-center gap-2 text-base font-semibold tracking-tight text-ink transition hover:text-brand-600"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-zinc-100 transition group-hover:bg-brand-50">
                📞
              </span>
              {contact.phone}
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-zinc-100 pt-8">
            <Stat target={50}  suffix="+"  label="Projects delivered" />
            <Stat target={98}  suffix="%"  label="Client satisfaction" />
            <Stat target={3}   suffix="x"  label="Avg. productivity gain" />
          </div>
        </div>

        {/* ── Right: flow diagram with parallax ── */}
        <div ref={diagramRef} className="hidden transition-transform duration-100 ease-out sm:block" style={{ willChange: 'transform' }}>
          <FlowDiagram />
        </div>
      </div>
    </section>
  )
}
